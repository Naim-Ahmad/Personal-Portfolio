import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark px-md-5 px-md-4 text-white">
      <div className="container d-md-flex justify-content-between my-footer align-items-center">
        <div className="social-link">
          <a href="https://www.youtube.com/@easytechtune1187" target="_blank">
            <i className="fa-brands fa-youtube my-style fa-2x"></i>
          </a>
          <a href="https://web.facebook.com/naim.ahmad.noyon" target="_blank">
            <i className="fa-brands fa-facebook my-style fa-2x"></i>
          </a>
          <a href="https://github.com/Naim-Ahmad" target="_blank">
            <i className="fa-brands fa-github my-style fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/naim-ahmad-7ab567256/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin my-style fa-2x"></i>
          </a>
        </div>
        <p className="fs-4 fw-bold footer-name">Naim Ahmad</p>
        <div>
          <p className="fs-6 text-center mb-0 pb-3">
            &copy; Copy Right And Designed by Name Ahmad
          </p>
        </div>
      </div>
    </footer>
  );
}
