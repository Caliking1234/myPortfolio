import React from "react";
import Bounded from "@/components/Bounded";
import Avtar from "@/components/Avtar";
import TexhStcak from "@/components/TexhStcak";

const About = () => {
  return (
    <>
      <Bounded className="flex min-h-screen flex-col bg-slate-900 w-full ">
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr] ">
          <h1 className=" col-start-1 mb-8 text-[clamp(1.5rem,15vmin,15rem)] font-extrabold leading-none tracking-wider">
            About Me
          </h1>
          <div className=" prose prose-xl prose-slate prose-invert col-start-1">
            Piyush Sharma, a dedicated B.Tech student from NSUT graduating in
            2024, is driven by a fervent passion for animating and enhancing web
            designs. With a keen eye for detail and a commitment to excellence,
            I specializes in crafting captivating products using
            state-of-the-art technologies and frameworks. As a dynamic
            freelancer, I thrive on pushing boundaries, consistently delivering
            exceptional solutions that exceed client expectations. With a blend
            of creativity and technical expertise, he continuously strives to
            elevate my craft, ensuring each project is executed with precision
            and finesse, leaving a lasting impression on every endeavor.
          </div>
          <Avtar />
        </div>
      </Bounded>
      <TexhStcak />
    </>
  );
};

export default About;
