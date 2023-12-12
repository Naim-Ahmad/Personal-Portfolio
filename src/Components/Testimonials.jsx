import { Carousel } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axios } from '../hooks/useAxios';
import Testimonial from './Testimonial';

export default function Testimonials() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axios.get("/testimonials");
      return res.data;
    },
  });

  return (
    <section className="testimonials">
      <div className="my-container">
          <div className="carousel-inner">
            <div className="container my-container-style">
              <h1 className="my-review-txt">TESTIMONIALS</h1>
              <div>
                <i className="fa-solid fa-quote-left fa-3x mb-3"></i>
              </div>
              <Carousel className=''>
                
              {
                data?.map(test=> <Testimonial key={test?._id} data={test}/>)
              }
              </Carousel>
              {/* <div className="carousel-item">
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
              </div> */}
            </div>
         
        </div>
      </div>
    </section>
  );
}
