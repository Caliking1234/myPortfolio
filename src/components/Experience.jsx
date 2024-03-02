"use client";
import React from "react";
import { Animation1 } from "../../Animation1";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Float,
  Environment,
  OrbitControls,
} from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <Canvas
        className=" z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Animation1 />
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.65}
          scale={40}
          blur={1}
          far={9}
        />
        <Environment preset="studio" />
      </Canvas>
    </>
  );
};

export default Experience;
