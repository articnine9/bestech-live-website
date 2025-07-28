import { useState } from "react";

const ProjectInfoCard = ({ product, category }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendQuote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          productName: product?.name || "",
          productCode: product?.code || "",
          category: category?.page_name || "",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      alert("Quote submitted successfully! Our team will contact you soon.");
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Failed to send the quote. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="project-details__sidebar">
      <div className="project-details__sidebar-project-info">
        <div className="title">
          <h2>Product Info</h2>
        </div>
        <ul>
          <li>
            <div className="title-box">
              <p>
                Product Name <span>:</span>
              </p>
            </div>
            <div className="text-box">
              <p>{product?.name ? product.name : "-"}</p>
            </div>
          </li>

          <li>
            <div className="title-box">
              <p>
                Description <span>:</span>
              </p>
            </div>
            <div className="text-box">
              <p>{product?.description ? product.description : "-"}</p>
            </div>
          </li>

          <li>
            <div className="title-box">
              <p>
                Product Code <span>:</span>
              </p>
            </div>
            <div className="text-box">
              <p>{product?.code ? product.code : "-"}</p>
            </div>
          </li>

          <li>
            <div className="title-box">
              <p>
                Category <span>:</span>
              </p>
            </div>
            <div className="text-box">
              <p>{category?.page_name ? category.page_name : "-"}</p>
            </div>
          </li>
        </ul>

        <div className="project-details__sidebar-contact mt-5">
          <form onSubmit={handleSubmit}>
            <h5 className="mb-3">| Product Message</h5>
            <p className="mb-4">
              Get in touch with our team in a timely manner and be happy You
              offer help
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

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="*Your mobile phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && (
                <div className="text-danger mt-1">{errors.phone}</div>
              )}
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="*Your mailbox"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <div className="text-danger mt-1">{errors.email}</div>
              )}
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

            <button
              type="submit"
              className="btn btn-dark w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

            <p
              className="mt-3 text-muted text-center"
              style={{ fontSize: "0.8rem" }}
            >
              * Note: Please be sure to fill in the information accurately and
              keep the communication unblocked. We will get in touch with you as
              soon as possible.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoCard;
