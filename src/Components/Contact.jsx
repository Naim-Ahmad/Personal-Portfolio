import emailjs from "@emailjs/browser";
import { Button } from "@material-tailwind/react";
import React, { useRef } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7t7qfsc",
        "template_0fu4sfy",
        form.current,
        "hHTXS9JawQYx_zKJU"
      )
      .then(
        function () {
          Swal.fire({
            icon: "success",
            title: "Send Successfull",
            text: `Hey ${form.current.user_name.value} ! You have successfully Sent Messages.`,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="pt-5">
      <div className="container">
        <div
          style={{
            maxWidth: "29rem",
            textAlign: "center",
            margin: "auto",
          }}
          className="pt-5"
        >
          <h1 className="text-center contactMe">contact me</h1>
          <p className="fs-6" style={{ color: "gray" }}>
            Always love to be connected with new people , and listen their words
            and suggestions. Stay Connected!
          </p>
        </div>

        <div className="py-lg-5 pb-5">
          <address className="mb-5">
            <div className="home_address">
              <div className="location_icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact_details">
                <h2> Address</h2>
                <p>Hathazari, Chittagong, Bangladesh</p>
              </div>
            </div>

            <div className="email_address">
              <div className="email_icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="contact_details">
                <h2>Email Me</h2>
                <p>naimahmad201103@gmail.com</p>
              </div>
            </div>

            <div className="mobile_number">
              <div className="mobile_icon">
                <i className="fa-solid fa-phone-volume"></i>
              </div>

              <div className="contact_details">
                <h2>Call Me</h2>
                <p>+880 1625 366 735</p>
              </div>
            </div>
          </address>

          <div className="contact_form_location">
            <div className="" style={{ height: "30rem" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d58960.521867817115!2d91.8295113!3d22.5404509!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1670678585616!5m2!1sen!2sbd"
                style={{ border: 0, height: "100%", width: "100%" }}
                loading="lazy"
              ></iframe>
            </div>
            <div className="">
              <form id="contact_form" onSubmit={sendEmail} ref={form}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="user_subject"
                    className="form-control"
                    placeholder="Subject"
                    id="subject"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="user_message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Messages"
                    className="form-control"
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="">
                  Send Messages
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
