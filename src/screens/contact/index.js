// import React, { useState } from 'react';
// import './contact.css';

// const Contact = () => {
//  const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//  });

//  const { name, email, subject, message } = formData;

//  const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//  };

//  const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//  };

//  return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={name}
//           onChange={handleChange}
//         />

//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={handleChange}
//         />

//         <label htmlFor="subject">Subject</label>
//         <input
//           type="text"
//           id="subject"
//           name="subject"
//           value={subject}
//           onChange={handleChange}
//         />

//         <label htmlFor="message">Message</label>
//         <textarea
//           id="message"
//           name="message"
//           value={message}
//           onChange={handleChange}
//         />

//         <button type="submit">Send</button>
//       </form>
//     </div>
//  );
// };

// export default Contact;
import React, { useState } from 'react';
import { Container, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
 },
}));

const Contact = () => {
 const classes = useStyles();
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
 });

 const { name, email, subject, message } = formData;

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
 };

 return (
    <Container>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label="Name"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          label="Subject"
          id="subject"
          name="subject"
          value={subject}
          onChange={handleChange}
        />

        <TextField
          label="Message"
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
          multiline
          rows={4}
        />

        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Container>
 );
};

export default Contact;