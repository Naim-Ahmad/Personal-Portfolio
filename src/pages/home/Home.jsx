import Contact from "../../Components/Contact";
import Portfolio from "../../Components/Portfolio";
import Services from "../../Components/Services";
import Skills from "../../Components/Skills";
import Testimonials from "../../Components/Testimonials";
import About from "../about/About";
import Banner from "./banner/Banner";


export default function Home() {

    return (
        <div>
            <Banner/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Services/>
            <Testimonials/>
            <Contact/>
        </div>
    )
}