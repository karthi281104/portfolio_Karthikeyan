import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
export const ContactContent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iyzgcci', 'template_9iqytnn', form.current, 'bb-z6XIKDkoLE-g3S')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert("Email sent successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('FAILED...', error.text)
        },
      );
  };

  return (
    <div className="contact-content">
      <form ref={form} style={{width: "80%",margin: "0 auto"}} onSubmit={sendEmail}>        
        <input type="text" name="from_name" className="input-field" placeholder="Name" required />
        <input type="email" name="to_name" className="input-field" placeholder="Email" required />
        <textarea name="message" className="input-field textarea" placeholder="Message" required></textarea>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};


