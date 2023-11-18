import React from 'react';
import aisha from '../Assets/aisha-avater-min.png';
import maleServiceIcon from '../Assets/male-services-support-icon.svg';
import tamim from '../Assets/tamim-pic-min.jpg';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="my-container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-interval="500"
        >
          <div className="carousel-indicators carousel-indicator ">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="container my-container-style">
              <h1 className="my-review-txt">TESTIMONIALS</h1>
              <div>
                <i className="fa-solid fa-quote-left fa-3x mb-3"></i>
              </div>
              <div className="carousel-item active">
                <figure>
                  <blockquote className="blockquote">
                    <p>
                      Naim, I saw your work and I really impressed. hold it and
                      go ahead. I think you will be a good web Developer in a
                      few days.
                    </p>
                    <img
                      src={tamim}
                      alt="Tamims picture"
                      className="img-fluid rounded-circle"
                      width="150px"
                    />
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title" className="fs-4">
                      Tamim (Python Developer)
                    </cite>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel-item">
                <figure>
                  <blockquote className="blockquote">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus aliquid in expedita voluptatem nobis iste libero
                      quam qui quibusdam, officia nostrum dignissimo
                    </p>
                    <img
                      src={maleServiceIcon}
                      alt="Tamim's picture"
                      className="img-fluid rounded-circle"
                      width="150px"
                    />
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title" className="fs-4">
                      Adnan
                    </cite>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel-item">
                <figure>
                  <blockquote className="blockquote">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus aliquid in expedita voluptatem nobis iste libero
                    </p>
                    <img
                      src={aisha}
                      alt="Aisha"
                      className="img-fluid rounded-circle"
                      width="150px"
                    />
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title" className="fs-4">
                      Aisha
                    </cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
