import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Auto-fill time input
    const currentTime = new Date().toLocaleString();
    form.current.querySelector('input[name="time"]').value = currentTime;

    emailjs
      .sendForm('service_h2xe313', 'template_ol5mi3i', form.current, {
        publicKey: 'Sws7PUzCWgJUSRvc_',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send message.');
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="name" placeholder="Your name" required />

        <label>Email</label>
        <input type="email" name="email" placeholder="Your email" required />

        <label>Message</label>
        <textarea name="message" placeholder="Your message" required />

        {/* Hidden field for current time */}
        <input type="hidden" name="time" />

        <input type="submit" value="Send" className="submit-btn" />
      </form>
    </div>
  );
};

export default Contact;
