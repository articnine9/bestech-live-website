"use client";
import { useState } from "react";
import Link from "next/link";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResponseMsg("");

    try {
      const res = await fetch("/api/sendContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Submission failed");

      setResponseMsg("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        number: "",
        company: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setResponseMsg("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <section className="contact-page padding">
      <div className="shape1 float-bob-y">
        <img src="/img/shape/contact-page-shape1.png" alt="" />
      </div>
      <div className="shape2 float-bob-y">
        <img src="/img/shape/contact-page-shape2.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="contact-page__contact-info">
              <div className="sec-title-style3">
                {/* <div className="sub-title">
                  <div className="icon">
                    <img src="/img/icon/title-marker-4.png" alt="" />
                  </div>
                  <h5>Get In Touch</h5>
                </div> */}
                <h2>Contact Us</h2>
              </div>

              <ul>
                <li>
                  <div className="icon-box">
                    <span className="icon-telephone-call"></span>
                  </div>

                  <div className="text-box">
                    <h2>
                      <Link href="tel:065227299">06 522 7299 (Landline)</Link>
                      <br />
                      <Link href="tel:+971543093833">
                        +971 54 309 3833 (Mobile)
                      </Link>
                    </h2>
                  </div>
                </li>

                <li>
                  <div className="icon-box">
                    <span className="icon-location"></span>
                  </div>

                  <div className="text-box">
                    <h2>
                      Shops 2-3-4, Building 1080, Fire Station Road, Muwaileh,
                      Near to Muwaileh bus station, Sharjah, UAE.
                    </h2>
                  </div>
                </li>

                <li>
                  <div className="icon-box">
                    <span className="icon-email"></span>
                  </div>

                  <div className="text-box">
                    <h2>
                      <Link href="mailto:sales@bestechparts.ae">
                        sales@bestechparts.ae
                      </Link>
                    </h2>
                  </div>
                </li>

                <li>
                  <div className="icon-box">
                    <span className="icon-time"></span>
                  </div>

                  <div className="text-box">
                    <h2>
                      Monday - Saturday <br />
                      08am : 06pm
                    </h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-7">
            <div className="contact-page__form-box">
              <div className="title">
                <h2>Feel free to write Us</h2>
              </div>

              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="contact-page__input-box">
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="contact-page__input-box">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="contact-page__input-box">
                      <input
                        type="text"
                        placeholder="Mobile"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="contact-page__input-box">
                      <input
                        type="text"
                        placeholder="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="contact-page__input-box">
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="contact-page__btn">
                      <button
                        type="submit"
                        className="thm-btn"
                        disabled={isSending}
                      >
                        <span className="txt">
                          {isSending ? "Sending..." : "Send Message"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {responseMsg && (
                <p className="ajax-response mt-3">{responseMsg}</p>
              )}

              {/* <div className="contact-page__form-box-text">
                <p>
                  <span>Nots:</span> Packages and web page editors now use Lorem
                  Ipsum as their default model textlayout.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
