import { TypeAnimation } from "react-type-animation";
import NavbarComp from "../../../Components/NavbarComp";

export default function Banner() {
  return (
    <header id="home">
      <div className="container">
        <NavbarComp />
        <div className="intro">
          <h1 className="fw-bold fs-1">
            i am naim ahmad <br />
            <TypeAnimation
              sequence={[
                "Web Designer",
                1000,
                "Web Developer",
                1000,
                "React Developer",
                1000,
              ]}
              repeat={Infinity}
              speed={20}
              style={{
                fontSize: "0.8em",
                color: "lightgray",
              }}
            />
          </h1>
        </div>
      </div>
    </header>
  );
}
