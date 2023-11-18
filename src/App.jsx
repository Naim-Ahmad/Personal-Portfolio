import React from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Testimonials from './Components/Testimonials';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
