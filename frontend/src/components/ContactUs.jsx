import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Shopping Cart</h1>
      <form>
        <label htmlFor="name">First Name:</label>
        <input type="text" id="name" name="name" placeholder="Name" />

        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last Name"
        />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" placeholder="Address" />

        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" placeholder="Phone" />

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
