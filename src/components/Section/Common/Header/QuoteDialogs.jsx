"use client";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import QuoteForm from "@/components/Section/Common/QuoteForm/QuoteForm";

export default function QuoteDialogs({ show, onHide }) {
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = (text) => {
    onHide();
    setMessage(text);
    setShowSuccess(true);
  };

  return (
    <>
      <Modal show={show} onHide={onHide} aria-labelledby="quote-dialog-title" centered>
        <Modal.Header closeButton>
          <Modal.Title id="quote-dialog-title">Get Free Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <QuoteForm onSuccess={handleSuccess} />
        </Modal.Body>
      </Modal>
      <Modal
        show={showSuccess}
        onHide={() => setShowSuccess(false)}
        aria-labelledby="quote-success-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="quote-success-title">Success</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{message}</p></Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success" onClick={() => setShowSuccess(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
