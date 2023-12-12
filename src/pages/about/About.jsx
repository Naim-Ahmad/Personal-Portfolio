import { Button } from "@material-tailwind/react";
import React from "react";
import NaimAhmadImage from "../../Assets/naim-profile-min.jpg";

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
                style={{ maxWidth: "307px" }}
              />
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
              web development. I’m good at HTML, CSS, JavaScript, Bootstrap,
              React Js, and Next Js. And I worked on many projects you see in my
              works section. Now I’m working as a frontend developer at
              Freelancer.com. thanks for seeing my profile!!!
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

