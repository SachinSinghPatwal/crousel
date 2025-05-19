import React from "react";
import SceneTitle from "./SceneTitle";
import Carousel from "./Carousel";

const Scene = React.forwardRef(
  ({ title, titleRef, carouselRef, images, idx, radius }, ref) => (
    <div className="scene" ref={ref} data-radius={radius || 500}>
      <SceneTitle ref={titleRef}>
        <a href={`#preview-${idx + 1}`}>
          <span>{title}</span>
        </a>
      </SceneTitle>
      <Carousel ref={carouselRef} images={images} />
    </div>
  )
);

export default Scene;
