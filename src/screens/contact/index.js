// import React, { useState } from 'react';
// import './contact.css';

// const Contact = () => {

//  return (
//     <div className="container">
//       <form>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//         />

//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//          />

//         <label htmlFor="subject">Subject</label>
//         <input
//           type="text"
//           id="subject"
//           name="subject"
//         />

//         <label htmlFor="message">Message</label>
//         <textarea
//           id="message"
//           name="message"
//         />

//         <button type="submit">Send</button>
//       </form>
//     </div>
//  );
// };

// export default Contact;

import React from 'react';
import { FormControl, Box, Stack, TextField, Button, Typography } from '@mui/material';
import './contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // Add your logic for handling form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <FormControl>
          <TextField id="name" label="Name" variant="filled" fullWidth />
        </FormControl>
        <FormControl>
          <TextField id="email" label="Email" variant="filled" fullWidth />
        </FormControl>
        <FormControl>
          <TextField id="subject" label="Subject" variant="filled" fullWidth />
        </FormControl>
        <FormControl>
          <TextField
            id="message"
            label="Message"
            variant="filled"
            multiline
            rows={4}
            fullWidth
          />
        </FormControl>
        <FormControl>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </FormControl>
      </Stack>
    </form>
  );
}

