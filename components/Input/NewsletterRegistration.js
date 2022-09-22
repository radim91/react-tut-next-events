import { useRef } from 'react';
import classes from './NewsletterRegistration.module.css';

function NewsletterRegistration() {
  const userEmail = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: userEmail.current.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
      });

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={userEmail}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
