"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import styles from "./HeroSearch.module.css";

const MIN_QUERY_LENGTH = 2;
const DEBOUNCE_MS = 250;

// Part search for the hero banner. Uses the server-side /api/chatSearch index so
// the catalogue is not shipped to the browser.
const HeroSearch = ({ onActiveChange }) => {
  const router = useRouter();
  const listId = useId();
  const wrapRef = useRef(null);
  const requestRef = useRef(0);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const trimmed = query.trim();

  const runSearch = async (text) => {
    const id = ++requestRef.current;
    setStatus("loading");
    try {
      const res = await fetch(`/api/chatSearch?q=${encodeURIComponent(text)}`);
      if (!res.ok) throw new Error(`Search failed: ${res.status}`);
      const data = await res.json();
      // A slower, older request must not overwrite a newer one.
      if (id !== requestRef.current) return null;
      const found = data.results || [];
      setResults(found);
      setStatus("done");
      setActiveIndex(-1);
      return found;
    } catch {
      if (id !== requestRef.current) return null;
      setResults([]);
      setStatus("error");
      return null;
    }
  };

  // Search as the user types.
  useEffect(() => {
    if (trimmed.length < MIN_QUERY_LENGTH) {
      requestRef.current++;
      setResults([]);
      setStatus("idle");
      setActiveIndex(-1);
      return;
    }
    const timer = setTimeout(() => runSearch(trimmed), DEBOUNCE_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trimmed]);

  const close = () => {
    setOpen(false);
    setActiveIndex(-1);
  };

  const goTo = (url) => {
    close();
    router.push(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (trimmed.length < MIN_QUERY_LENGTH) return;

    if (activeIndex >= 0 && results[activeIndex]) {
      goTo(results[activeIndex].url);
      return;
    }

    setOpen(true);
    const found = await runSearch(trimmed);
    // A single match (e.g. an exact part code) needs no list.
    if (found && found.length === 1) goTo(found[0].url);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      close();
      return;
    }
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => (i <= 0 ? results.length - 1 : i - 1));
    }
  };

  const handleBlur = (e) => {
    if (wrapRef.current?.contains(e.relatedTarget)) return;
    close();
    onActiveChange?.(false);
  };

  const showPanel = open && trimmed.length >= MIN_QUERY_LENGTH && status !== "idle";

  return (
    <div
      className={styles.wrap}
      ref={wrapRef}
      onFocus={() => onActiveChange?.(true)}
      onBlur={handleBlur}
    >
      <div className={styles.field}>
        <form className={styles.bar} onSubmit={handleSubmit} role="search">
          <FaSearch className={styles.icon} aria-hidden="true" />
          <input
            type="search"
            className={styles.input}
            placeholder="Search by part name or code"
            aria-label="Search elevator spare parts"
            aria-controls={showPanel && results.length > 0 ? listId : undefined}
            autoComplete="off"
            maxLength={100}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" className={styles.button} aria-label="Search Parts">
            <FaSearch aria-hidden="true" />
            <span>Search Parts</span>
          </button>
        </form>

        {showPanel && (
          <div className={styles.panel}>
            {status === "loading" && !results.length && (
              <p className={styles.status}>Searching…</p>
            )}

            {status === "error" && (
              <p className={styles.status}>
                Search is unavailable right now. Please{" "}
                <Link href="/contact">contact our team</Link>.
              </p>
            )}

            {status === "done" && !results.length && (
              <p className={styles.status}>
                No parts found for “{trimmed}”. Try a part name or code, or{" "}
                <Link href="/contact">contact our team</Link>.
              </p>
            )}

            {results.length > 0 && (
              <ul className={styles.list} id={listId} aria-label="Matching spare parts">
                {results.map((item, index) => (
                  <li
                    key={`${item.code}-${item.url}`}
                  >
                    <Link
                      href={item.url}
                      className={`${styles.result} ${
                        index === activeIndex ? styles.resultActive : ""
                      }`}
                      onClick={close}
                    >
                      <img
                        src={item.image}
                        alt=""
                        className={styles.thumb}
                        loading="lazy"
                      />
                      <span className={styles.resultText}>
                        <span className={styles.name}>{item.name}</span>
                        <span className={styles.meta}>
                          {item.code} · {item.categoryName}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <p className={styles.help}>
        Not sure of the exact code? <Link href="/contact">Contact our team</Link>
      </p>
    </div>
  );
};

export default HeroSearch;
