import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
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
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1 className="">Contact me</h1>
      <form className="col s12" id="contact-form" onSubmit={handleSubmit}>
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input
            id="icon_prefix"
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            className="validate"
          />
          <label htmlFor="name">Name:</label>
        </div>
        <div className="input-field col s6">
          <i class="material-icons prefix">mail</i>
          <input
            id="icon_mail"
            type="email"
            className="validate"
            defaultValue={email}
            onBlur={handleChange}
          />
          <label id="icon_mail">Email address:</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">mode_edit</i>
          <textarea
            id="message"
            className="materialize-textarea"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
          <label htmlFor="message">Message:</label>
        </div>
      </form>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </div>
  );
}

export default ContactForm;
