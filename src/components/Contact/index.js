import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {


  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        // isValid conditional statement
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
      }  
      if (!errorMessage) { 
          setFormState({...formState, [e.target.name]: e.target.value })
      }
  }

  function handleSubmit(e) {
      e.preventDefault();
  }

  return (
    <section>
      <div className="col s12 center">
      <h3>Contact me</h3>
      </div>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label className="text-light" htmlFor="name">Name:</label>
          <input className="form-control form-control-sm" type="text" defaultValue={name} onBlur={handleChange} name="name"/>
        </div>
        <div>
          <label className="text-light" htmlFor="email">Email address:</label>
          <input type="email" className="form-control form-control-sm" defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div>
          <label className="text-light" htmlFor="message">Message:</label>
          <textarea name="message" className="form-control form-control-lg" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;