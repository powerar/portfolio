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
    <section>
      <div className="col s12 center">
      <h3>Contact me</h3>
      </div>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label className="text-light" htmlFor="name">Name:</label>
          <input className="form-control form-control-sm" type="text" defaultValue={name} onBlur={handleChange} name="name"/>
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
    </section>
  );
}

export default ContactForm;
