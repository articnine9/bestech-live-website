"use client";

import { useEffect, useState } from "react";
import { BsSendFill } from "react-icons/bs";

export default function ChatPopup() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! Please provide your name, phone, and email so we can contact you.",
      time: new Date().toISOString().slice(0, 16).replace("T", " "),
    },
  ]);

  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  // Auto-open chat after 5 seconds (only if not already submitted this session)
  useEffect(() => {
    if (!sessionStorage.getItem("chatClosed")) {
      const timer = setTimeout(() => setOpen(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true); // start loading
    const now = new Date().toISOString().slice(0, 16).replace("T", " ");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          time: now,
        }),
      });

      if (res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Thank you! Our team will contact you shortly.",
            time: now,
          },
        ]);
        sessionStorage.setItem("chatClosed", "true");
        setTimeout(() => setOpen(false), 1500);
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (err) {
      alert("Error: Could not reach the server.");
    } finally {
      setLoading(false); // stop loading
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
            <h6 className="m-0 fw-bold">Online Consultation</h6>
            <button
              className="btn-close position-absolute end-0 me-3"
              onClick={() => {
                setOpen(false);
                sessionStorage.setItem("chatClosed", "true");
              }}
            ></button>
          </div>

          {/* Chat body */}
          <div
            className="p-3"
            style={{ maxHeight: "300px", overflowY: "auto" }}
          >
            {messages.map((msg, idx) => (
              <div key={idx} className="mb-3">
                {/* <div className="text-muted small fw-semibold">
                  {msg.from === "bot" ? "Online Customer Service" : "You"}{" "}
                  {msg.time}
                </div> */}
                <div className="bg-light px-3 py-2 rounded-pill d-inline-block mt-1">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Form Inputs */}
          <div className="border-top p-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="tel"
              className="form-control mb-2"
              placeholder="Your Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <button
              className="btn btn-outline-secondary w-100"
              onClick={handleSend}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Sending...
                </>
              ) : (
                <>
                  <BsSendFill /> Submit
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
