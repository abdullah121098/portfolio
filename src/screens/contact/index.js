import React, { useState } from 'react';
import './contact.css';
import { Box } from '@mui/material';

const Contact = () => {

  const handleSubmit = () => {
  }

  return (
    <div className="container">
      <Box>
        <div id="contact-form" className="box-container">
          <h2>Contact Me</h2>
        </div>
      </Box>
      <form action="#" method="post" name="contact" data-netl="true" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
        />

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
