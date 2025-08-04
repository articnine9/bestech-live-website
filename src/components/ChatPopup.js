"use client";

import { useEffect, useState } from "react";
import { BsSendFill } from "react-icons/bs";

export default function ChatPopup() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello, please feel free to contact if you need help!",
      time: new Date().toISOString().slice(0, 16).replace("T", " "),
    },
  ]);
  const [input, setInput] = useState("");
  const [userReplied, setUserReplied] = useState(false);

  // Auto-open chat after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const now = new Date().toISOString().slice(0, 16).replace("T", " ");
    const newUserMessage = {
      from: "bot",
      text: input,
      time: now,
    };

    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setInput("");

    if (!userReplied) {
      // Step 1: Ask for contact
      const reply = {
        from: "bot",
        text: "Hello, please leave your contact information, we will arrange professionals to contact you later.",
        time: new Date().toISOString().slice(0, 16).replace("T", " "),
      };
      setMessages((prev) => [...updatedMessages, reply]);
      setUserReplied(true);
    } else {
      // Step 2: Send to admin
      try {
        const res = await fetch("/api/sendMail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contact: input,
            time: now,
          }),
        });

        if (res.ok) {
          // Step 3: Show thank-you message
          const thankYou = {
            from: "bot",
            text: "Thank you! Our team will contact you shortly.",
            time: new Date().toISOString().slice(0, 16).replace("T", " "),
          };
          setMessages((prev) => [...prev, thankYou]);
        } else {
          const errorMsg = {
            from: "bot",
            text: "Sorry, something went wrong while submitting your contact. Please try again.",
            time: new Date().toISOString().slice(0, 16).replace("T", " "),
          };
          setMessages((prev) => [...prev, errorMsg]);
        }
      } catch (err) {
        const failMsg = {
          from: "bot",
          text: "Error: Could not reach the server.",
          time: new Date().toISOString().slice(0, 16).replace("T", " "),
        };
        setMessages((prev) => [...prev, failMsg]);
      }
    }
  };

  return (
    <div
      className="position-fixed bottom-0 end-0 m-3"
      style={{ zIndex: 1050, width: "370px", maxWidth: "95%" }}
    >
      {open && (
        <div
          className="bg-white rounded-4 shadow p-0 border"
          style={{ overflow: "hidden" }}
        >
          {/* Header */}
          <div className="bg-light d-flex align-items-center p-3 position-relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="avatar"
              className="rounded-circle me-2"
              style={{ width: "40px", height: "40px" }}
            />
            <h6 className="m-0 fw-bold">online consultation</h6>
            <button
              className="btn-close position-absolute end-0 me-3"
              onClick={() => setOpen(false)}
            ></button>
          </div>

          {/* Chat body */}
          <div
            className="p-3"
            style={{ maxHeight: "300px", overflowY: "auto" }}
          >
            {messages.map((msg, idx) => (
              <div key={idx} className="mb-3">
                <div className="text-muted small fw-semibold">
                  Online customer service {msg.time}
                </div>
                <div className="bg-light px-3 py-2 rounded-pill d-inline-block mt-1">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-top p-3 d-flex align-items-center">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Please enter the required content"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="btn btn-outline-secondary" onClick={handleSend}>
              <BsSendFill />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
