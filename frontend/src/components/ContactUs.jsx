import React from "react";
import "./App.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
