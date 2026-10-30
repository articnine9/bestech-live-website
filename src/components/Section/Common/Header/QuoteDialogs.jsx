"use client";

import Modal from "react-bootstrap/Modal";
import QuoteForm from "../QuoteForm/QuoteForm";

// Loaded on the first quote request, then kept mounted so modal exit
// transitions, form reset behavior, and focus restoration remain intact.
export function QuoteDialog({ show, onHide, onSuccess }) {
  return (
    <Modal show={show} aria-labelledby="quote-dialog-title" onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="quote-dialog-title">Get Free Quote</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <QuoteForm onSuccess={onSuccess} />
      </Modal.Body>
    </Modal>
  );
}

export function QuoteSuccessDialog({ show, onHide, message }) {
  return (
    <Modal show={show} aria-labelledby="quote-success-title" onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="quote-success-title">Success</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-success" onClick={onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}
