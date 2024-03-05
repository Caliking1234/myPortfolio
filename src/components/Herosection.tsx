"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const Herosection = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom 80%",
          scrub: 3,
        },
      });
      tl.fromTo(
        ".opac1",
        {
          top: "10vh",
          left: "5vw",
          scale: 1,
        },
        {
          top: -1000,
          left: -1000,
          scale: 5,
          // duration: 2,
          // ease: "back.out(2)",
        },
        0
      );
      tl.fromTo(
        ".opac2",
        {
          top: "10vh",
          left: "30vw",
          scale: 1,
        },
        {
          top: -1000,
          left: "30vw",
          scale: 5,
          // duration: 2,
          // ease: "back.out(2)",
        },
        0
      );
      tl.fromTo(
        ".opac3",
        {
          top: "10vh",
          right: "5vw",
          scale: 1,
        },
        {
          top: -1000,
          right: -1000,
          scale: 5,
          // duration: 2,
          // ease: "back.out(2)",
        },
        0
      );
      tl.fromTo(
        ".opac4",
        {
          top: "40vh",
          left: "5vw",
          scale: 1,
        },
        {
          top: "40vh",
          left: -1000,
          scale: 5,
          // duration: 2,
          // ease: "back.out(2)",
        },
        0
      );
      tl.fromTo(
        ".opac5",
        {
          top: "40vh",
          right: "5vw",
          scale: 1,
        },
        {
          top: "40vh",
          right: -1000,
          scale: 5,
          // duration: 2,
          // ease: "back.out(2)",
        },
        0
      );
      tl.fromTo(
        ".opac6",
        {
          bottom: "5vh",
          left: "5vw",
          scale: 1,
        },
        {
          bottom: -1000,
          left: -1000,
          scale: 5,
          // duration: 2,
          // ease: "back.out(2)",
        },
        0
      );
      tl.fromTo(
        ".opac7",
        {
          bottom: "5vh",
          left: "30vw",
          scale: 1,
        },
        {
          bottom: -1000,
          left: "30vw",
          scale: 5,
          // duration: 2,
          // ease: "back.out(2)",
        },
        0
      );
      tl.fromTo(
        ".opac8",
        {
          bottom: "5vh",
          right: "5vw",
          scale: 1,
        },
        {
          bottom: -1000,
          right: -1000,
          scale: 5,
          // duration: 2,
          // ease: "back.out(2)",
        },
        0
      );
      tl.fromTo(
        ".hero-img",
        {
          width: "25vw",
          height: "25vh",
        },
        {
          width: "100%",
          height: "100%",
          // duration: 3,
          // ease: "back.out(2)",
        },
        0.15
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className=" w-full h-[150vh] relative bg-[#1E1842]">
      <div className=" w-full sticky top-0 h-[100vh] overflow-hidden">
        <div className="flex items-center justify-center w-full h-[100vh] top-0 absolute">
          <div
            style={{ mixBlendMode: "darken" }}
            className=" w-[30vw] h-[25vh] flex items-center justify-center absolute opac1"
          >
            <Image
              style={{ mixBlendMode: "darken" }}
              width={200}
              height={200}
              className=" object-fit w-[100%] h-[100%]"
              alt="zxc"
              src={"/images/cpp-removebg-preview.png"}
            />
          </div>
          <div
            style={{ mixBlendMode: "darken" }}
            className=" w-[30vw] h-[25vh] flex items-center justify-center absolute opac2"
          >
            <Image
              style={{ mixBlendMode: "darken" }}
              width={200}
              height={200}
              className=" object-fit w-[100%] h-[100%]"
              alt="zxc"
              src={"/images/expressjs-removebg-preview.png"}
            />
          </div>
          <div className=" w-[30vw] h-[25vh] flex items-center justify-center absolute opac3">
            <Image
              width={200}
              height={200}
              className=" object-fit w-[100%] h-[100%]"
              alt="zxc"
              src={"/images/next.png"}
            />
          </div>
          <div className=" w-[30vw] h-[25vh] flex items-center justify-center absolute opac4">
            <Image
              width={200}
              height={200}
              className=" object-fit w-[100%] h-[100%]"
              alt="zxc"
              src={"/images/nodejs-removebg-preview.png"}
            />
          </div>
          <div className=" w-[30vw] h-[25vh] z-10 hero-img ">
            <Image
              height={400}
              width={400}
              className=" object-fit w-[100%] h-[100%]"
              alt="zxc"
              src={"/images/dev.gif"}
            />
          </div>
          <div className=" w-[30vw] h-[25vh] flex items-center justify-center absolute opac5">
            <Image
              width={200}
              height={200}
              className=" object-fit w-[100%] h-[100%]"
              alt="zxc"
              src={"/images/python.png"}
            />
          </div>
          <div className=" w-[30vw] h-[25vh] flex items-center justify-center absolute opac6">
            <Image
              width={200}
              height={200}
              className=" object-fit w-[100%] h-[100%]"
              alt="zxc"
              src={"/images/react-native-removebg-preview.png"}
            />
          </div>
          <div className=" w-[30vw] h-[25vh] flex items-center justify-center absolute opac7">
            <Image
              width={200}
              height={200}
              className=" object-fit w-[100%] h-[100%]"
              alt="zxc"
              src={"/images/react-removebg-preview.png"}
            />
          </div>
          <div className=" w-[30vw] h-[25vh] flex items-center justify-center absolute opac8">
            <Image
              width={200}
              height={200}
              className=" object-fit w-[100%] h-[100%]"
              alt="zxc"
              src={"/images/posgre-removebg-preview.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
