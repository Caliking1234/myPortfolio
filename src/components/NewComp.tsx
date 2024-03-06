"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Bounded from "./Bounded";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
import Shapes from "./Shapes";

const NewComp = () => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "25% top",
          end: "50% 50%",
          scrub: 2,
        },
      });

      // tl.fromTo(".space", { scale: 0.5 }, { scale: 2 }, 0);
      tl.to(".text1", {
        scale: 0,
        opacity: 0,
      });
      tl.to(".text2", {
        scale: 1,
        opacity: 1,
      });
    }, component);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={component}
      className=" h-[150vh] md:h-[200vh] w-full relative flex flex-row justify-center"
    >
      <div className=" w-1/2 h-[50vh] z-10 sticky top-[50%] translate-y-[-50%]">
        <div className=" w-full h-full text1 absolute top-0 left-0 flex items-center justify-center ">
          <h1 className=" text-5xl font-bold">you imagine,</h1>
        </div>
        <div className=" w-full h-full text2 absolute top-0 left-0 scale-0 opacity-0 flex items-center justify-center">
          <h1 className=" text-5xl font-bold">i code</h1>
        </div>
      </div>
      <div className=" h-[50vh] w-1/2 flex z-10 items-center justify-center sticky top-[50%] translate-y-[-50%] ">
        <Shapes />
      </div>
      {/* <Image
        src={"/images/universe.jpg"}
        alt=" abc"
        fill
        className=" absolute top-0 space z-10"
      /> */}
    </div>
  );
};

export default NewComp;
