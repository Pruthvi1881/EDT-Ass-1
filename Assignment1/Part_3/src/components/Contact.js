import React from 'react';
import '../styles/Contact.css';  // Import Contact styles

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
