import React, { useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import logo from '../Assets/Naim_Ahmad_logo_dark.png';
import activeNavLink from '../Utils/activeNavLink';

export default function NavbarComp() {
  useEffect(() => {
    window.addEventListener('scroll', activeNavLink);
    return () => window.removeEventListener('scroll', activeNavLink);
  }, []);

  return (
    <nav
      id="navBar"
      className="navbar  navbar-expand-md fixed-top"
    >
      <div className="container">
        <a className="text-white" href="#">
          <img
            src={logo}
            alt="brand logo"
            className="rounded-circle"
            style={{ width: '4rem' }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <FiMenu className="fs-2" />
        </button>
        <div
          className="offcanvas offcanvas-end bg-dark text-white"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Naim Ahmad
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body myNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
