import Bounded from "@/components/Bounded";
import MyProjectList from "@/components/MyProjectList";
import PerspectiveView from "@/components/PerspectiveView";
import React from "react";
import Experience from "@/components/Experience";

const page = () => {
  return (
    <Bounded className="flex min-h-screen flex-col bg-slate-900 w-full ">
      <h1 className=" col-start-1 mb-8 text-[clamp(1.5rem,15vmin,15rem)] font-extrabold leading-none tracking-tighter">
        My Work
      </h1>
      {/* <MyProjectList /> */}
      {/* <PerspectiveView /> */}
      <Experience />
    </Bounded>
  );
};

export default page;
