"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const PerspectiveView = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "350% bottom",
          scrub: 3,
          pin: true,
        },
      });

      tl.to(".cover-text", {
        opacity: 0,
        scale: 0,
      });

      tl.fromTo(
        ".animate-div",
        { scale: 1, rotate: 0 },
        { scale: 5, rotate: 360 }
      );

      tl.fromTo(
        ".inner-div",
        { width: 200, height: 200, opacity: 0 },
        { width: "100%", height: "100%", opacity: 1 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className=" w-full h-[100vh] relative bg-slate-900 overflow-hidden hidden md:block"
    >
      <div className=" w-full h-full absolute top-0 left-0 cover-text flex items-center justify-center bg-slate-900 z-10">
        <h1 className=" text-5xl font-bold">you imagine,</h1>
      </div>
      <div
        style={{ perspective: 800 }}
        className=" w-full sticky top-0 h-[100vh] overflow-hidden flex items-center justify-center flex-col  animate-div"
      >
        <div
          style={{ transform: "rotateX(-60deg)" }}
          className=" w-full h-[30vh] flex items-center justify-center"
        >
          <Image
            src={"/images/coding1.jpeg"}
            height={400}
            width={400}
            alt="xbc"
          />
        </div>
        <div
          style={{ perspective: 800 }}
          className=" w-full flex flex-row items-center justify-center"
        >
          <div
            style={{ transform: "rotateY(70deg)" }}
            className=" w-full h-[30vh] flex items-center justify-center"
          >
            <Image
              src={"/images/coding2.jpg"}
              height={400}
              width={400}
              alt="xbc"
            />
          </div>
          <div className="inner-div z-10 flex items-center justify-center text-xs">
            <h1>I create</h1>
          </div>
          <div
            style={{ transform: "rotateY(-70deg)" }}
            className=" w-full h-[30vh] flex items-center justify-center"
          >
            <Image
              src={"/images/coding3.jpg"}
              height={400}
              width={400}
              alt="xbc"
            />
          </div>
        </div>
        <div
          style={{ transform: "rotateX(30deg)" }}
          className=" w-full h-[30vh] flex items-center justify-center"
        >
          <Image
            src={"/images/coding4.jpg"}
            height={400}
            width={400}
            alt="xbc"
          />
        </div>
      </div>
    </div>
  );
};

export default PerspectiveView;
