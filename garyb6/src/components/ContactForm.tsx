import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `New Contact Form Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.wipOverlay}>
        <i className="fas fa-tools"></i>
        <h3>Contact Form Coming Soon</h3>
        <p>I'm currently working on implementing a secure contact form. In the meantime, please feel free to reach out through email or LinkedIn.</p>
      </div>
      <h3 className="contact-subheading">Send a Message</h3>
      <form className={`contact-form ${styles.contactForm}`} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          disabled
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          value={formData.message}
          onChange={handleChange}
          disabled
        />
        <button 
          type="submit" 
          className="submit-button"
          disabled
        >
          <span>Coming Soon</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 