"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BsChatDotsFill, BsSendFill } from "react-icons/bs";
import { matchFaq } from "~/lib/chatbot/faq";
import { companyInfo, mobileDisplay } from "~/lib/chatbot/companyInfo";
import styles from "./Chatbot.module.css";

// Lead capture runs as a small state machine; `null` means normal conversation.
const LEAD_STEPS = ["name", "phone", "email"];

const GREETING_RE = /^(hi|hello|hey|salam|assalam|good (morning|afternoon|evening)|hai)\b/i;
const QUOTE_RE = /\b(quote|quotation|order|buy|purchase|enquire|enquiry|inquiry|request|callback|call me)\b/i;
const HUMAN_RE = /\b(human|agent|person|someone|representative|sales|whatsapp|talk to|speak to|real person)\b/i;
const BROWSE_RE = /\b(categor|browse|catalogue|catalog|product list|what do you (have|sell)|show me)\b/i;
const THANKS_RE = /^(thanks|thank you|thx|ok|okay|great|nice|good|cool)\b/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

let idCounter = 0;
const nextId = () => `m${++idCounter}`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [leadStep, setLeadStep] = useState(null);
  const [lead, setLead] = useState({ name: "", phone: "", email: "" });
  const [messages, setMessages] = useState([]);

  // Products the user has been shown — attached to a quote so sales sees context.
  const contextRef = useRef([]);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);

  const push = useCallback((msg) => {
    setMessages((prev) => [...prev, { id: nextId(), ...msg }]);
  }, []);

  const pushBot = useCallback((text, extra = {}) => {
    push({ from: "bot", text, ...extra });
  }, [push]);

  // Seed the greeting once, on first open.
  useEffect(() => {
    if (open && messages.length === 0) {
      pushBot(
        "Hi! I'm the Bestech assistant. I can help you find elevator spare parts, check our details, or arrange a quote.\n\nTry a part name or code — for example \"contactor 110V\" or \"BS-CT0013\".",
        {
          chips: [
            { label: "Browse categories", action: "categories" },
            { label: "Request a quote", action: "quote" },
            { label: "Contact details", action: "contact" },
          ],
        }
      );
    }
  }, [open, messages.length, pushBot]);

  // Keep the latest message in view.
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    else launcherRef.current?.focus();
  }, [open, leadStep]);

  // Escape closes the panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const fetchJson = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return res.json();
  };

  const showCategories = useCallback(async () => {
    try {
      const { categories } = await fetchJson("/api/chatSearch?categories=1");
      pushBot("Here are our product categories — pick one, or just type what you need:", {
        chips: categories.map((c) => ({
          label: `${c.name} (${c.count})`,
          action: "category",
          value: c.slug,
        })),
      });
    } catch {
      pushBot(
        `Sorry, I couldn't load the categories just now. You can browse them all on our products page, or call us on ${mobileDisplay}.`,
        { chips: [{ label: "All products", href: "/products" }] }
      );
    }
  }, [pushBot]);

  const showCategoryProducts = useCallback(async (slug, label) => {
    try {
      const { results } = await fetchJson(`/api/chatSearch?category=${encodeURIComponent(slug)}`);
      if (!results.length) {
        pushBot("That category looks empty at the moment. Try another, or tell me the part you need.");
        return;
      }
      contextRef.current = results;
      pushBot(`Here are some parts from ${label || "that category"}:`, {
        products: results,
        chips: [
          { label: "See all", href: `/products/${slug}` },
          { label: "Request a quote", action: "quote" },
        ],
      });
    } catch {
      pushBot(`Sorry, something went wrong loading that category. Please call us on ${mobileDisplay}.`);
    }
  }, [pushBot]);

  const escalate = useCallback(() => {
    pushBot(
      `Of course — our team can help directly.\n\nWhatsApp or call ${mobileDisplay}, or email ${companyInfo.email}. I can also take your details and have someone call you back.`,
      {
        chips: [
          { label: "WhatsApp us", href: companyInfo.whatsapp, external: true, accent: true },
          { label: "Call now", href: `tel:${companyInfo.mobile}`, external: true },
          { label: "Request a callback", action: "quote" },
        ],
      }
    );
  }, [pushBot]);

  const startLead = useCallback(() => {
    setLeadStep("name");
    pushBot("Happy to arrange that. What's your name?");
  }, [pushBot]);

  const submitLead = useCallback(async (finalLead) => {
    setBusy(true);
    const parts = contextRef.current;
    const context = parts.length
      ? `Products discussed:\n${parts.map((p) => `- ${p.name} (${p.code}) https://www.bestechparts.ae${p.url}`).join("\n")}`
      : "No specific product discussed.";

    try {
      const res = await fetch("/api/sendQuote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: finalLead.name,
          company: "",
          phone: finalLead.phone,
          email: finalLead.email,
          message: `Submitted via website chatbot.\n\n${context}`,
        }),
      });

      if (!res.ok) throw new Error("send failed");

      pushBot(
        `Thanks ${finalLead.name}! Our sales team has your request and will contact you shortly. If it's urgent, WhatsApp or call ${mobileDisplay}.`,
        {
          chips: [
            { label: "WhatsApp us", href: companyInfo.whatsapp, external: true, accent: true },
            { label: "Keep browsing", action: "categories" },
          ],
        }
      );
      setLead({ name: "", phone: "", email: "" });
    } catch {
      pushBot(
        `Sorry — I couldn't send that just now. Please WhatsApp or call us on ${mobileDisplay}, or email ${companyInfo.email} and we'll pick it up right away.`,
        {
          chips: [
            { label: "WhatsApp us", href: companyInfo.whatsapp, external: true, accent: true },
            { label: "Try again", action: "quote" },
          ],
        }
      );
    } finally {
      setBusy(false);
      setLeadStep(null);
    }
  }, [pushBot]);

  // Advances the lead state machine; validates each field before moving on.
  const handleLeadInput = useCallback((text) => {
    if (leadStep === "name") {
      if (text.length < 2) {
        pushBot("Could you give me your name so our team knows who to ask for?");
        return;
      }
      setLead((l) => ({ ...l, name: text }));
      setLeadStep("phone");
      pushBot(`Thanks ${text}. What's the best phone number to reach you on?`);
      return;
    }

    if (leadStep === "phone") {
      if (text.replace(/\D/g, "").length < 7) {
        pushBot("That doesn't look like a complete phone number — could you check and send it again?");
        return;
      }
      setLead((l) => ({ ...l, phone: text }));
      setLeadStep("email");
      pushBot("Got it. And your email address?");
      return;
    }

    if (leadStep === "email") {
      if (!EMAIL_RE.test(text)) {
        pushBot("That email doesn't look quite right — could you check it and send it again?");
        return;
      }
      const finalLead = { ...lead, email: text };
      setLead(finalLead);
      submitLead(finalLead);
    }
  }, [leadStep, lead, pushBot, submitLead]);

  const handleIntent = useCallback(async (text) => {
    if (HUMAN_RE.test(text)) return escalate();
    if (QUOTE_RE.test(text) && !/\b(price|cost|how much)\b/i.test(text)) return startLead();
    if (BROWSE_RE.test(text)) return showCategories();

    if (GREETING_RE.test(text) && text.length < 25) {
      pushBot("Hello! What part are you looking for? You can give me a name, a code, or a category.", {
        chips: [
          { label: "Browse categories", action: "categories" },
          { label: "Request a quote", action: "quote" },
        ],
      });
      return;
    }

    if (THANKS_RE.test(text) && text.length < 20) {
      pushBot("You're welcome! Anything else I can help you find?");
      return;
    }

    // Catalogue first: a real part match is the most useful answer we can give.
    let results = [];
    try {
      const data = await fetchJson(`/api/chatSearch?q=${encodeURIComponent(text)}`);
      results = data.results || [];
    } catch {
      // Fall through to FAQ / fallback rather than surfacing a network error.
    }

    const faq = matchFaq(text);

    if (results.length) {
      contextRef.current = results;
      const priced = /\b(price|cost|how much|quote)\b/i.test(text);
      pushBot(
        priced
          ? `Here's what I found. Prices depend on quantity and stock, so our team quotes each request — I can arrange that for you.`
          : `Here's what I found for "${text}":`,
        {
          products: results,
          chips: [
            { label: "Request a quote", action: "quote" },
            { label: "Not what I need", action: "categories" },
          ],
        }
      );
      return;
    }

    if (faq) {
      pushBot(faq.answer, {
        chips: [
          ...(faq.links || []).map((l) => ({ label: l.label, href: l.href, external: l.external })),
          { label: "Find a part", action: "categories" },
        ],
      });
      return;
    }

    pushBot(
      `I couldn't find a part matching "${text}". I search by part name, code (like BS-CT0013) or category — or our team can help directly.`,
      {
        chips: [
          { label: "Browse categories", action: "categories" },
          { label: "WhatsApp us", href: companyInfo.whatsapp, external: true, accent: true },
          { label: "Request a callback", action: "quote" },
        ],
      }
    );
  }, [escalate, startLead, showCategories, pushBot]);

  const send = useCallback(async (raw) => {
    const text = String(raw ?? input).trim();
    if (!text || busy) return;

    push({ from: "user", text });
    setInput("");

    if (leadStep) {
      handleLeadInput(text);
      return;
    }

    setBusy(true);
    try {
      await handleIntent(text);
    } finally {
      setBusy(false);
    }
  }, [input, busy, leadStep, push, handleLeadInput, handleIntent]);

  const onChip = useCallback((chip) => {
    if (chip.href) return;
    push({ from: "user", text: chip.label });

    if (chip.action === "categories") return showCategories();
    if (chip.action === "quote") return startLead();
    if (chip.action === "contact") {
      const faq = matchFaq("contact phone email");
      pushBot(faq.answer, {
        chips: (faq.links || []).map((l) => ({ label: l.label, href: l.href, external: l.external })),
      });
      return;
    }
    if (chip.action === "category") {
      const label = chip.label.replace(/\s*\(\d+\)$/, "");
      return showCategoryProducts(chip.value, label);
    }
  }, [push, showCategories, startLead, showCategoryProducts, pushBot]);

  const placeholder = leadStep
    ? { name: "Type your name…", phone: "Type your phone number…", email: "Type your email…" }[leadStep]
    : "Ask about a part, price or delivery…";

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        className={`${styles.launcher} ${open ? styles.launcherHidden : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Open chat assistant"
        aria-expanded={open}
      >
        <BsChatDotsFill size={24} />
        <span className={styles.badge} aria-hidden="true" />
      </button>

      {open && (
        <div className={styles.panel} role="dialog" aria-modal="false" aria-label="Bestech chat assistant">
          <div className={styles.header}>
            <div>
              <div className={styles.headerTitle}>Bestech Assistant</div>
              <div className={styles.headerStatus}>Find parts · Get a quote</div>
            </div>
            <button
              type="button"
              className={styles.headerClose}
              onClick={() => setOpen(false)}
              aria-label="Close chat assistant"
            >
              ×
            </button>
          </div>

          <div className={styles.body} ref={bodyRef} role="log" aria-live="polite" aria-atomic="false">
            {messages.map((m) => (
              <div key={m.id}>
                <div className={`${styles.row} ${m.from === "bot" ? styles.rowBot : styles.rowUser}`}>
                  <div className={`${styles.bubble} ${m.from === "bot" ? styles.bubbleBot : styles.bubbleUser}`}>
                    {m.text}
                  </div>
                </div>

                {m.products?.length > 0 && (
                  <div className={styles.products}>
                    {m.products.map((p) => (
                      <a key={`${m.id}-${p.code}-${p.url}`} href={p.url} className={styles.product}>
                        <img src={p.image} alt="" className={styles.productImg} loading="lazy" />
                        <div className={styles.productInfo}>
                          <div className={styles.productName}>{p.name}</div>
                          <div className={styles.productMeta}>
                            {p.code} · {p.categoryName}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {m.chips?.length > 0 && (
                  <div className={styles.chips}>
                    {m.chips.map((c, i) =>
                      c.href ? (
                        <a
                          key={`${m.id}-c${i}`}
                          href={c.href}
                          className={`${styles.chip} ${c.accent ? styles.chipAccent : ""}`}
                          {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {c.label}
                        </a>
                      ) : (
                        <button
                          key={`${m.id}-c${i}`}
                          type="button"
                          className={`${styles.chip} ${c.accent ? styles.chipAccent : ""}`}
                          onClick={() => onChip(c)}
                          disabled={busy}
                        >
                          {c.label}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}

            {busy && (
              <div className={`${styles.row} ${styles.rowBot}`}>
                <div className={`${styles.bubble} ${styles.bubbleBot} ${styles.typing}`}>
                  <span /><span /><span />
                  <span className={styles.srOnly}>Assistant is typing</span>
                </div>
              </div>
            )}
          </div>

          <form
            className={styles.footer}
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <label htmlFor="chatbot-input" className={styles.srOnly}>
              Message
            </label>
            <input
              id="chatbot-input"
              ref={inputRef}
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              autoComplete="off"
              maxLength={100}
              disabled={busy}
            />
            <button
              type="submit"
              className={styles.send}
              disabled={busy || !input.trim()}
              aria-label="Send message"
            >
              <BsSendFill size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
