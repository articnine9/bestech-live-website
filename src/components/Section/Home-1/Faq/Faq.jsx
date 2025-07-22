"use client";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <section className="faq-one padding" style={{ backgroundColor: "#004b83" }}>
      <div className="big-title">
        <h2>faq</h2>
      </div>
      <div
        className="faq-one__bg"
        style={{ backgroundImage: "url(/img/home/faq/1.jpg)" }}
      ></div>
      <div className="container">
        <div className="row">
          {/* FAQ Section */}
          <div className="col-xl-6 faq-padding-top">
            <div className="faq-one__faq">
              <div className="sec-title">
                <div className="sub-title">
                  <h5>
                    <span className="icon-right-arrow-1"></span> FAQ ?
                  </h5>
                </div>
                <h2>Question & Answer</h2>
              </div>

              <Accordion
                defaultActiveKey="0"
                className="accrodion-grp faq-one__accrodion accordion-one"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h2>
                      <span>01.</span> Can I customize elevator components to
                      fit my requirements?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
                      Yes, Bestech offers customization options for elevator
                      components based on your project specifications and
                      technical needs.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h2>
                      <span>02.</span> Do your products comply with safety and
                      industry standards?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
                      Absolutely. All Bestech components are manufactured under
                      strict quality control and meet global elevator safety and
                      engineering standards.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h2>
                      <span>03.</span> How can I track the status of my order?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
                      After placing an order, you’ll receive a tracking link via
                      email or can contact our sales support team for real-time
                      updates.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h2>
                      <span>04.</span> Do you provide technical support or
                      installation guidance?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
                      Yes, our engineering team offers post-sale technical
                      assistance and guidance for product integration and
                      installation.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-xl-6">
            <div
              className="faq-one__contact-info wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="title-box">
                <p>Let’s Talk</p>
                <h3>
                  Need help with elevator solutions? Get a free consultation
                </h3>
              </div>

              <div className="faq-one__contact-info-number">
                <div className="icon" style={{ backgroundColor: "#0d4250" }}>
                  <span className="icon-call"></span>
                </div>

                <div className="text">
                  <p>Have Any Questions</p>
                  <h3>
                    <Link href="tel:+971 54 309 3833">+971 54 309 3833</Link>
                  </h3>
                </div>
              </div>

              <div className="btn-box">
                <Link className="thm-btn" href="/contact">
                  <span className="txt">Contact Us</span>
                  <i className="icon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
