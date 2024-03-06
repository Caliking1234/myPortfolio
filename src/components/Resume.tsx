"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Bounded from "./Bounded";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "30% 30%",
          end: "70% 90%",
          scrub: 2,
        },
      });

      tl.to(".part1", {
        rotateX: "0deg",
      });
      tl.to(".part2", {
        rotateX: "0deg",
      });
      tl.to(".part3", {
        rotateX: "0deg",
      });
      tl.to(
        ".resume",
        {
          marginTop: "10vh",
          scale: 0.8,
        },
        "a"
      );
      tl.to(
        ".resumeText",
        {
          opacity: 1,
        },
        "a"
      );
      tl.to(
        ".overlay",
        {
          opacity: 1,
        },
        "a"
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={component}
      className=" h-[200vh] relative flex flex-col items-center py-10"
    >
      <div className=" resume h-fit sticky top-0">
        <div>
          <Image
            src={"/images/resume1.jpg"}
            alt="abc"
            width={500}
            height={500}
          />
        </div>
        <div
          style={{
            transform: "rotateX(-90deg)",
            transformOrigin: "top",
            perspective: 1000,
          }}
          className=" part1"
        >
          <Image
            src={"/images/resume2.jpg"}
            alt="abc"
            width={500}
            height={500}
          />
        </div>
        <div
          style={{
            transform: "rotateX(-90deg)",
            transformOrigin: "top",
            perspective: 1000,
          }}
          className=" part2"
        >
          <Image
            src={"/images/resume3.jpg"}
            alt="abc"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className=" resumeText z-50 opacity-0 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h1 className="mb-8 text-[clamp(1.5rem,15vmin,15rem)] font-extrabold leading-none tracking-wider">
          Download
        </h1>
        <button className=" py-3 px-2 bg-slate-900 rounded-lg cursor-pointer">
          <a
            href={"/resources/resume-2023.pdf"}
            download={"Piyush Sharma.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click me
          </a>
        </button>
      </div>
      <div className=" overlay w-full h-full bg-black/50 fixed top-0 left-0 z-40 opacity-0"></div>
    </div>
  );
};

export default Resume;
