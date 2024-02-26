"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const PerspectiveView = () => {
  const container = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     const ctx = gsap.context(() => {
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: container.current,
  //           start: "top top",
  //           end: "bottom bottom",
  //           scrub: 3,
  //         },
  //       });
  //       tl.fromTo(
  //         ".animate-div",
  //         {
  //           rotate: 0,
  //           scale: 1,
  //         },
  //         {
  //           scale: 10,
  //           rotate: "360deg",
  //         },
  //         0
  //       );
  //       });
  //     });
  //   }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 3,
          markers: true,
        },
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
      className=" w-full h-[100vh] relative bg-slate-900 overflow-hidden"
    >
      <div
        style={{ perspective: 500 }}
        className=" w-full sticky top-0 h-[100vh] overflow-hidden flex items-center justify-center flex-col  animate-div"
      >
        <div
          style={{ transform: "rotateX(-60deg)" }}
          className=" w-full h-[30vh] flex items-center justify-center"
        >
          <Image
            src={"/images/boruto.gif"}
            height={400}
            width={400}
            alt="xbc"
          />
        </div>
        <div
          style={{ perspective: 500 }}
          className=" w-full flex flex-row items-center justify-center"
        >
          <div
            style={{ transform: "rotateY(60deg)" }}
            className=" w-full h-[30vh] flex items-center justify-center"
          >
            <Image
              src={"/images/byronmode.gif"}
              height={400}
              width={400}
              alt="xbc"
            />
          </div>
          <div className="inner-div z-10 flex items-center justify-center text-xs">
            <h1>Welcome to Amazing World of Anime</h1>
          </div>
          <div
            style={{ transform: "rotateY(-60deg)" }}
            className=" w-full h-[30vh] flex items-center justify-center"
          >
            <Image
              src={"/images/rengoku.gif"}
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
            src={"/images/tanjiro.gif"}
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
