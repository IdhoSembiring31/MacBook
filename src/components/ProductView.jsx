import React from "react";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SpotLightSetup from "./Three/SpotLightSetup.jsx";
import useMacbookStore from "../Store/index.js";
import { MacbookModel14 } from "./models/Macbook-14.jsx";
import ModelSwitcher from "./Three/ModelSwitcher.jsx";
import { useMediaQuery } from "react-responsive";


function ProductView() {
  const { color, setColor, scale, setScale } = useMacbookStore();
  const isMobile = useMediaQuery({query: '(max-width:1024px)'}) 
  return (
    <section id="product-viewer">
      <h2>Take a Look Closer.</h2>

      <div className="controls">
        <p className="info">
          MacBook Pro | Available in a 14" & 16" in Space Gray & Dark Colors
        </p>

        <div className="gap-5 mt-5 flex-center">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5db")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5db" && "active"
              )}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
            />

            
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black "
                  : " bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black "
                  : " bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas
        id="canvas"
        camera={{ position: [0, 3, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <SpotLightSetup />
        <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile}/>
      </Canvas>
    </section>
  );
}

export default ProductView;
