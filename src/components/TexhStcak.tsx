"use client";
import React, { useEffect, useRef } from "react";
import Bounded from "./Bounded";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TexhStcak = () => {
  const data = ["ReactJS", "NextJS", "NodeJS", "THREEJS"];
  const color = ["#ffb77c", "#e97451", "#ffe5ef", "#ccffc8"];

  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
        }
      );
    }, component);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={component}
      className="flex min-h-screen flex-col bg-slate-900 w-full overflow-hidden"
    >
      <Bounded>
        <h2 className="mb-8 text-[clamp(1.5rem,15vmin,15rem)] font-extrabold leading-none tracking-tighter">
          What I Use
        </h2>
      </Bounded>
      <div>
        {data.map((name, index) => (
          <div
            key={index}
            className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          >
            {Array.from({ length: 15 }, (_, idx) => (
              <React.Fragment key={idx}>
                <span
                  className=" texh-item text-8xl font-extrabold uppercase tracking-tighter"
                  style={{ color: idx === 7 ? color[index] : "inherit" }}
                >
                  {name}
                </span>
                <span className=" text-8xl font-extrabold text-inherit">-</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TexhStcak;
