import React from 'react';
import responsiveImg from '../Assets/responsive (1)-min.png';
import webDesignImg from '../Assets/web-design-min.png';
import developmentImg from '../Assets/web_icon-min.png';

export default function Services() {
  return (
    <section id="service" className="bg-black pt-5">
      <div className="text-center m-auto service-div">
        <h1 className="text-white text-center text-capitalize services commonBeforeTxt">
          What I do for clients
        </h1>
        <p className="fs-6" style={{ color: 'gray' }}>
          Build and Develop websites with a high professional attitude and
          punctuality. With every line of code, I Strive to make the web a
          beautiful place.
        </p>
      </div>

      <div className="service-wrapper justify-content-center align-items-center d-flex m-auto flex-wrap gap-3 py-5">
        <div className="service-item bg-dark text-white p-4 rounded">
          <div className="service-icon m-auto">
            <div className="circle"></div>
            <div className="service-img">
              <img src={webDesignImg} className="img-fluid" alt="Web design" />
            </div>
          </div>
          <div className="service-body">
            <h2 className="my-3 text-capitalize">PSD to HTML</h2>
            <p className="text-justify">
              Design Sites as Clients Project Requirement. Love to work with
              Perfection. Try to Design the Site as like the design template
            </p>
          </div>
        </div>

        <div className="service-item bg-dark text-white p-4 rounded">
          <div className="service-icon m-auto">
            <div className="circle"></div>
            <div className="service-img">
              <img
                src={responsiveImg}
                className="img-fluid"
                alt="responsive design"
              />
            </div>
          </div>
          <div className="service-body">
            <h2 className="my-3 text-capitalize">Responsive Design</h2>
            <p>
              Responsiveness is a very important part of Modern websites. I
              build fully (Mobile, PC, Tablet) responsive sites
            </p>
          </div>
        </div>

        <div className="service-item bg-dark text-white p-4 rounded">
          <div className="service-icon m-auto">
            <div className="circle"></div>
            <div className="service-img">
              <img
                src={developmentImg}
                className="img-fluid"
                alt="Make Web Dynamic"
              />
            </div>
          </div>
          <div className="service-body">
            <h2 className="my-3 text-capitalize text-start fs-5">
              Build Dynamic Sites
            </h2>
            <p>
              Make fully functional dynamic sites , implement updated features,
              make attractive look.
            </p>
          </div>
        </div>

        <div className="service-item bg-dark text-white p-4 rounded">
          <div className="service-icon m-auto">
            <div className="circle"></div>
            <div className="service-img">
              <img
                src={webDesignImg}
                className="img-fluid"
                alt="responsive design"
              />
            </div>
          </div>
          <div className="service-body">
            <h2 className="my-3 text-capitalize">Web Development</h2>
            <p>
              Work with previously built sites, and modify them as client
              requirements. Add new functionality and update site
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
