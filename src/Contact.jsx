import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_a2j59sg", // Replace with your EmailJS Service ID 
        "template_jcbhqtt", // Replace with your EmailJS Template ID 
        {
          from_name: formData.from_name,  // Maps to {{from_name}}
          from_email: formData.from_email, // Maps to {{from_email}}
          message: formData.message, // Maps to {{message}}
          to_name: "Pavithra" // Replace with recipient's name (optional)
        },
        "xOk3YUMNTf-VvvX1w" // Replace with your EmailJS Public Key 
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" }); // Reset form fields
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>GET IN TOUCH</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={(e) =>
              setFormData({ ...formData, from_name: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="from_email">Email</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={(e) =>
              setFormData({ ...formData, from_email: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;