import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.phone.trim()) newErrors.phone = "Content cannot be empty!";
    if (!formData.email.trim())
      newErrors.email = "Please enter the required content";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form is valid — handle submission logic here
    console.log("Form submitted:", formData);
    alert("Quote submitted successfully!");

    // Reset form
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="mb-3">| Product Message</h5>
      <p className="mb-4">
        Get in touch with our team in a timely manner and be happy You offer
        help
      </p>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Your company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="mb-1">
        <input
          type="text"
          className="form-control"
          placeholder="*Your mobile phone number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="text-danger mt-1">{errors.phone}</div>}
      </div>

      <div className="mb-1">
        <input
          type="email"
          className="form-control"
          placeholder="*Your mailbox"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Questions you need to consult"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-dark w-100">
        Submit
      </button>

      <p className="mt-3 text-muted text-center" style={{ fontSize: "0.8rem" }}>
        * Note: Please be sure to fill in the information accurately and keep
        the communication unblocked. We will get in touch with you as soon as
        possible.
      </p>
    </form>
  );
}
