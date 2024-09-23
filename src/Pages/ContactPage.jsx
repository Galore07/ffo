import React from 'react'
import "../Pages/ContactPage.css"

const ContactPage = () => {
  return (
    <div class="contact-container">
        <h1>Get in Touch</h1>
        <form>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
        <div class="contact-info">
            <h2>Contact Information</h2>
            <p>Phone: 555-555-5555</p>
            <p>Email: [info@example.com](mailto:info@example.com)</p>
            <p>Address: 123 Main St, Anytown, USA</p>
        </div>
    </div>

  )
}

export default ContactPage