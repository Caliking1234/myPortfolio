"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MyProjectList = () => {
  const projectList = [
    {
      title: "GulfGlobal",
      link: "https://vpncloudconnect.com",
      thumbnail: "/images/gulfglobal.jpg",
    },
    {
      title: "Dotclu",
      link: "https://https://dotclu.com",
      thumbnail: "/images/dotclu.jpg",
    },
    {
      title: "MSPIT",
      link: "https://mspit.in/",
      thumbnail: "/images/mspit.jpg",
    },
    {
      title: "Toppers Edge",
      link: "https://toppersedge.co.in/",
      thumbnail: "/images/TE.jpg",
    },
    {
      title: "Diagnoos",
      link: "https://diagnoos.com/",
      thumbnail: "/images/diagnoos.jpg",
    },
    {
      title: "Crypto-Dashboard",
      link: "https://crypto-dashboard-five-sage.vercel.app/",
      thumbnail: "/images/cryptodashboard.jpg",
    },
    {
      title: "Aaditya Media",
      link: "https://aadityamedia.com/",
      thumbnail: "/images/aadityamedia.jpg",
    },
    {
      title: "Caliking",
      link: "https://caliking1234.github.io/CALIKING/",
      thumbnail: "/images/caliking.jpg",
    },
  ];
  const component = useRef(null);
  const revealRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const [currentItem, setcurrentItem] = useState<null | number>(null);
  const contentImage = (index: number) => {
    return projectList[index].thumbnail;
  };

  const onMouseEnter = (index: number) => {
    setcurrentItem(index);
  };

  const handleTouchStart = (index: number) => {
    setcurrentItem(index);
  };
  const onMouseLeave = () => {
    setcurrentItem(null);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };

      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      let ctx = gsap.context(() => {
        if (currentItem != null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 50),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3,
            opacity: 1,
          });
        }
        lastMousePos.current = mousePos;
        return () => ctx.revert();
      }, component);
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        const mousePos = {
          x: touch.clientX,
          y: touch.clientY + window.scrollY,
        };

        const speed = Math.sqrt(
          Math.pow(mousePos.x - lastMousePos.current.x, 2)
        );

        let ctx = gsap.context(() => {
          if (currentItem != null) {
            const maxY = window.scrollY + window.innerHeight - 350;
            const maxX = window.innerWidth - 250;

            gsap.to(revealRef.current, {
              x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
              y: gsap.utils.clamp(0, maxY, mousePos.y - 10),
              rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
              ease: "back.out(2)",
              duration: 1.3,
              opacity: 1,
            });
          }
          lastMousePos.current = mousePos;
          return () => ctx.revert();
        }, component);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", onMouseLeave);
    };
  });
  return (
    <div ref={component} className=" w-full">
      <ul
        className=" w-full grid border-b border-b-slate-100"
        onMouseLeave={onMouseLeave}
        onTouchEnd={onMouseLeave}
      >
        {projectList.map((project, index) => (
          <li
            className="list- border-t border-t-slate-100 w-full flex items-center opacity-0f"
            key={index}
            onMouseEnter={() => onMouseEnter(index)}
            onTouchStart={() => handleTouchStart(index)}
          >
            <Link
              className=" w-full py-5 pl-3 flex items-center  text-slate-200 text-3xl"
              href={project.link}
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
      <div
        ref={revealRef}
        className="hover-reveal pointer-events-none absolute left-0 top-0  h-[100px] w-[200px] rounded-lg bg-cover opacity-0 transition-[background] duration-300"
        style={{
          backgroundImage:
            currentItem != null ? `url(${contentImage(currentItem)})` : "",
          //   backgroundImage: `url(${projectList[1].Image})`,
        }}
      ></div>
    </div>
  );
};

export default MyProjectList;
