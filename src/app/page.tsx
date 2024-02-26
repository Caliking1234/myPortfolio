"use client";
import About from "@/components/About";
import Bounded from "@/components/Bounded";
import Herosection from "@/components/Herosection";
// import MyProjectList from "@/components/MyProjectList";
import MyProjects from "@/components/MyProjects";
import PerspectiveView from "@/components/PerspectiveView";
import Shapes from "@/components/Shapes";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
export default function Home() {
  const componenet = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          transform: "left top",
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );

      t1.fromTo(
        ".job-title",
        {
          y: 25,
          opacity: 0,
          scale: 1.2,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          scale: 1,
          ease: "elastic.out(1,0.1)",
        }
      );
    }, componenet);

    return () => ctx.revert();
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return;

    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation nameanimation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div>
      <Bounded
        ref={componenet}
        className="flex min-h-screen flex-col bg-slate-900 w-full"
      >
        <div className=" grid max-h-screen grid-cols-1 md:grid-cols-2 items-center">
          <Shapes />
          <div>
            <h1 className=" mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter">
              <div className=" col-start-1 md:row-start-1">
                <span className=" block text-slate-300">
                  {renderLetters("Piyush", "first")}
                </span>
                <span className=" -mt[.2em] block text-slate-500">
                  {renderLetters("Sharma", "last")}
                </span>
              </div>
            </h1>
            <span className=" job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 text-2xl font-bold uppercase trackin-[.2em] text-transparent bg-clip-text opacity-0 md:text-4xl">
              passionate developer
            </span>
          </div>
        </div>
      </Bounded>
      <About />
      <Herosection />
      <PerspectiveView />
      <MyProjects />
    </div>
  );
}
