import Contact from "../../Components/Contact";
import Services from "../../Components/Services";
import Skills from "../../Components/Skills";
import Testimonials from "../../Components/Testimonials";
import About from "../about/About";
import Projects from "../projects/Projects";
import Banner from "./banner/Banner";


export default function Home() {

    return (
        <div>
            <Banner/>
            <About/>
            <Skills/>
            {/* <Portfolio/> */}
            <Projects/>
            <Services/>
            <Testimonials/>
            <Contact/>
        </div>
    )
}