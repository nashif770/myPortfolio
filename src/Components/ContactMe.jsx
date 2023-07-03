import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    const userMail = event.target.userEmail.value;

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm('service_da2cm1q', 'template_9wro6yb', form.current, 'FW9fAmjavBQl72uJJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="hero bg-slate-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={sendEmail} ref={form} className="card-body flex flex-row">
            <div className="form-control">
              <input
                type="text"
                name="userEmail"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary"
              defaultValue="Get Email"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
