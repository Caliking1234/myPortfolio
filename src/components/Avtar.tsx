"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Avtar = () => {
  const component = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "top bottom",
          scrub: 2,
          // markers: true,
        },
      });
      tl.fromTo(
        ".avtar",
        { opacity: 0, scale: 1.4 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      );

      window.onmousemove = (e) => {
        if (!component.current) return;
        const componentRect = (
          component.current as HTMLElement
        ).getBoundingClientRect();

        const componentCenterX = componentRect.left + componentRect.width / 2;

        let componentPercent = {
          x: (e.clientX - componentCenterX) / componentRect.width / 2,
        };
        let distFromCenter = 1 - Math.abs(componentPercent.x);

        gsap
          .timeline({
            defaults: {
              duration: 0.5,
              overwrite: "auto",
              ease: "power3.inOut",
            },
          })
          .to(
            ".avtar",
            {
              rotation: gsap.utils.clamp(-2, 2, 5 * componentPercent.x),
              duration: 0.5,
            },
            0
          )
          .to(
            ".highlight",
            {
              opacity: distFromCenter - 0.7,
              x: (-10 + 20) & componentPercent.x,
              duration: 0.5,
            },
            0
          );
      };
    }, component);
  }, []);
  return (
    <div
      ref={component}
      className=" relative h-full w-full row-start-1 md:col-start-2 md:row-end-3 max-w-sm"
    >
      <div className="avtar h-full w-full aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-1">
        <Image
          src={"/images/mypic.jpg"}
          width={300}
          height={300}
          alt="mypic"
          className="avtar-image w-full h-full object-fill"
        />
        <div className=" highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block"></div>
      </div>
    </div>
  );
};

export default Avtar;
