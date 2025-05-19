import React, { useRef, useState } from "react";
import "./base.css";

import { scenes } from "./data.js";

import Scene from "./components/Scene";
import Preview from "./components/Preview";
import useProjectGSAP from "./useProjectGSAP";

// --- Main Project Component ---
const Project = () => {
  // --- Refs ---
  const sceneWrapperRef = useRef(null);
  const previewWrapperRef = useRef(null);
  const sceneRefs = useRef([]);
  const carouselRefs = useRef([]);
  const previewRefs = useRef([]);
  const sceneTitleRefs = useRef([]);
  const previewCloseRefs = useRef([]);

  // Helper to set refs in map style
  const setRef = (refArr, idx) => (el) => (refArr.current[idx] = el);

  const [isAnimating, setIsAnimating] = useState(false);

  useProjectGSAP({
    sceneWrapperRef,
    previewWrapperRef,
    sceneRefs,
    carouselRefs,
    previewRefs,
    sceneTitleRefs,
    previewCloseRefs,
    isAnimating,
    setIsAnimating,
  });

  return (
    <div>
      <header className="frame">
        <h1 className="frame__title">On-Scroll 3D Carousel</h1>
        <nav className="frame__links">
          <a className="line" href="https://tympanus.net/codrops/?p=93330">
            Article
          </a>
          <a className="line" href="https://github.com/codrops/3DCarousel/">
            Code
          </a>
          <a className="line" href="https://tympanus.net/codrops/demos/">
            All demos
          </a>
        </nav>
        <nav className="frame__tags">
          <a className="line" href="https://tympanus.net/codrops/demos/?tag=3d">
            #3d
          </a>
          <a
            className="line"
            href="https://tympanus.net/codrops/demos/?tag=carousel"
          >
            #carousel
          </a>
          <a
            className="line"
            href="https://tympanus.net/codrops/demos/?tag=page-transition"
          >
            #page-transition
          </a>
        </nav>
      </header>
      <main id="smooth-content">
        <div className="scene-wrapper" ref={sceneWrapperRef}>
          {scenes.map((scene, idx) => (
            <Scene
              key={idx}
              ref={setRef(sceneRefs, idx)}
              title={scene.title}
              titleRef={setRef(sceneTitleRefs, idx)}
              carouselRef={setRef(carouselRefs, idx)}
              images={scene.images}
              idx={idx}
              radius={scene.radius}
            />
          ))}
        </div>
      </main>
      <div className="preview-wrapper" ref={previewWrapperRef}>
        {scenes.map((scene, idx) => (
          <Preview
            key={idx}
            ref={setRef(previewRefs, idx)}
            title={scene.title}
            closeRef={setRef(previewCloseRefs, idx)}
            gridItems={scene.gridItems}
            idx={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
