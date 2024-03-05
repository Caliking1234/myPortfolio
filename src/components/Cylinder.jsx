"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CylinderCarousel = () => {
  useEffect(() => {
    // Define the parent cylinder element
    const cylinder = document.getElementById("cylinder");

    // Define the child divs
    const slides = document.querySelectorAll(".slide");

    // Calculate the angle for each slide
    const angleIncrement = 360 / slides.length;

    // Set initial rotation angle
    let currentAngle = 0;

    // GSAP animation for rotation on scroll
    gsap.to(cylinder, {
      rotationY: currentAngle,
      scrollTrigger: {
        trigger: cylinder,
        start: "top top",
        end: () => "bottom bottom", // Scroll trigger based on parent cylinder height
        scrub: true, // Smooth animation during scroll
        onUpdate: (self) => {
          // Update the rotation angle based on scroll position
          currentAngle = self.progress * 360;
          gsap.set(cylinder, { rotationY: currentAngle });
        },
      },
    });
  }, []);

  return (
    <div className="cylinder-container overflow-hidden perspective h-[300vh]">
      <div id="cylinder" className="cylinder sticky top-0 h-screen">
        <div className="slide bg-blue-400 w-full h-screen absolute left-0 transform -translate-x-1/2"></div>
        <div className="slide bg-green-400 w-full h-screen absolute left-full transform -translate-x-1/2"></div>
        <div className="slide bg-red-400 w-full h-screen absolute left-full transform -translate-x-1/2"></div>
        <div className="slide bg-yellow-400 w-full h-screen absolute left-full transform -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default CylinderCarousel;
