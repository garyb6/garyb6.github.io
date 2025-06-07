import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me through any of the following channels:</p>
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:gary.bennett6@outlook.com">gary.bennett6@outlook.com</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Whitley Bay, Tyne & Wear, United Kingdom</span>
              </li>
            </ul>
          </div>
          <div className="contact-form-section">
            <div className="wip-message">
              <i className="fas fa-tools"></i>
              <h3>Contact Form Coming Soon</h3>
              <p>I'm currently working on implementing a secure contact form. In the meantime, please feel free to reach out through email or LinkedIn.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 