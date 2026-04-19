import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/contact/", form)
      .then(() => {
        alert("Message Sent Successfully");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Error sending message");
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">

        <div className="contact-info">
          <h2>Let’s Work Together</h2>
          <p>
            Have a project in mind or just want to say hello?  
            I’m always open to discussing new opportunities.
          </p>

          <div className="info-box">
            <p><strong>Email:</strong> zankhnavaghela2@email.com</p>
            <p><strong>Phone:</strong> +91 9737388584</p>
            <p><strong>Location:</strong> Vadodara, Sama, Gujarat</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <h3>Send Message</h3>

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;