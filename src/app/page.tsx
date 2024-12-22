"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 150, // Trigger animation 150px before the element enters the viewport
      once: false, // Set to false if you want animations to re-trigger on scroll
    });
  }, []);

  return (
    <div>
      
      <div className="flex flex-col gap-10">
        <div data-aos="fade-up">
          <Hero />
        </div>
        <div data-aos="fade-right" className="mb-14">
          <About />
        </div>
        <div data-aos="fade-up" className="mb-14">
          <Services />
        </div>
      </div>
     
    </div>
  );
}
