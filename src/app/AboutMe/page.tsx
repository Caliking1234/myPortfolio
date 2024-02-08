import React from "react";
import Bounded from "@/components/Bounded";
import Avtar from "@/components/Avtar";
import TexhStcak from "@/components/TexhStcak";

const About = () => {
  return (
    <>
      <Bounded className="flex min-h-screen flex-col bg-slate-900 w-full ">
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr] ">
          <h1 className=" col-start-1 mb-8 text-[clamp(1.5rem,15vmin,15rem)] font-extrabold leading-none tracking-tighter">
            About Me
          </h1>
          <div className=" prose prose-xl prose-slate prose-invert col-start-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            velit aut est commodi aperiam recusandae aspernatur? Animi dolores
            magnam suscipit! Nobis esse facilis labore iure ab voluptatibus cum
            totam reprehenderit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis fugit doloribus, eum, voluptas, et
            voluptatibus porro quisquam nostrum dicta voluptatem incidunt
            aperiam recusandae nobis harum blanditiis provident quas esse
            delectus.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facere
            cum temporibus? Iusto dolore possimus nisi dolor consequatur eius
            saepe at laudantium dicta deserunt, beatae fugiat optio porro
            voluptate eos?
          </div>
          <Avtar />
        </div>
      </Bounded>
      <TexhStcak />
    </>
  );
};

export default About;
