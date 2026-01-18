import React, { useEffect, useRef } from "react";
import MacbookModel from "./models/Macbook";
import SpotLightSetup from "./Three/SpotLightSetup";
import { features, featureSequence } from "../constans";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import { Html } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import useMacbookStore from "../Store";
import gsap from "gsap";

const ModelScroll = () => {
  const groupRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  const { setTexture } = useMacbookStore();
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");

      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });
      v.load();
    });
  }, []);

  useGSAP(() => {
    //3D MODEL ROTATION ANIMATION
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });
    //SYNC THE FEATURE CONTENT
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    //3D SPIN
    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }
    //Content & Texture Sync
    timeline
    .call(()=>setTexture('/videos/feature-1.mp4'))
    .to('.box1',{opacity:1, y:0, delay:1})

    .call(()=>setTexture('/videos/feature-2.mp4'))
    .to('.box2',{opacity:1, y:0, })

    .call(()=>setTexture('/videos/feature-3.mp4'))
    .to('.box3',{opacity:1, y:0, })
    
    .call(()=>setTexture('/videos/feature-4.mp4'))
    .to('.box4',{opacity:1, y:0, })

    .call(()=>setTexture('/videos/fe.mp4'))
    .to('.box5',{opacity:1, y:0, })
  }, []);
  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl uppercase">Loading...</h1>
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

function Features() {
  return (
    <section id="features">
      <h2>See it all in a new light</h2>
      <Canvas id="f-canvas">
        <ModelScroll />
        <ambientLight intensity={1} />
        <SpotLightSetup />
      </Canvas>

      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className={clsx("box", `box${index + 1}`, feature.styles)}
          >
           <img src={feature.icon} alt={feature.highlight} />
           <p>
            <span className="text-white">{feature.highlight}</span>
            {feature.text}
           </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
