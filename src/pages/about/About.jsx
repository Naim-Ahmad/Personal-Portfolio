import { Button } from "@material-tailwind/react";
import React from "react";
import { SiGmail } from "react-icons/si";
import NaimAhmadImage from "../../Assets/naim_using_pc-min.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container-fluid container-md">
        <div className="row m-2 m-auto">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="mb-3 text-center">
              <img
                src={NaimAhmadImage}
                alt="developer's image"
                className="rounded img-fluid profile-pic"

              />
              <div className="flex justify-center gap-4 mt-8">
                <a href="naimahmad201103@gmail.com" target="_blank">
                  <SiGmail className="text-red-400" size={40} />
                </a>
                <a href="https://web.facebook.com/naim.ahmad.noyon" target="_blank">
                  <i className="fa-brands fa-facebook fa-2x text-[#166AFC]"></i>
                </a>
                <a href="https://github.com/Naim-Ahmad" target="_blank">
                  <i className="fa-brands fa-github fa-2x"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/naim-ahmad-7ab567256/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin text-blue-500 fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 pe-7">
            <h2 className="text-uppercase fw-bold mb-3 text-center text-sm-start">
              About me
            </h2>
            <p>
              Hi! My name is Naim Ahmad. Welcome to my personal page that I’ve
              designed to showcase my skills and expertise that I’ve accumulated
              over the year.
            </p>
            <p className="fs-6 mb-4">
              I’ve completed my master’s degree at Hathazari Arabic University.
              My background is Arabic but, I’m passionate about web development,
              and currently, I’m working on it. In the future, I want to work in
              web development. I’m expert at HTML, CSS, JavaScript, Rect, Tailwind CSS, DaisyUI , Bootstrap, Express js, MongoDB. And I worked on many projects you see in my
              works section. thanks for seeing my profile!!!
            </p>
            <div className="text-center text-sm-start">
              <a href="https://drive.google.com/file/d/182GSKdky8-Ba7fHNHS44QPPr3OBKxKeL/view" target="__blank">
                <Button>Download Resume</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

