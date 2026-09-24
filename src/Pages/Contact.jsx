import React, { useState } from "react";
import "./CSS/Contact.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-left">

          <h2>
            Got a project in
            <br />
            <span>mind?</span>
          </h2>

          <p>
            Let's create something amazing together.
          </p>

          <div className="contact-illustration">
            <img
              src="/contact.png"
              alt="Contact Illustration"
            />
          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="contact-right">

          <form onSubmit={handleSubmit}>

            <div className="contact-input-row">

              <div className="contact-input-group">

                <label>Your name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="contact-input-group">

                <label>Your email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            <div className="contact-input-group message-group">

              <label>Your Message</label>

              <textarea
                name="message"
                placeholder="Message"
                rows="7"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>


            <button type="submit" className="contact-submit">
              Send Message
              <span>➤</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;