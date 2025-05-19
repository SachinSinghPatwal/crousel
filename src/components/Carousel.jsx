import React from "react";
import CarouselCell from "./CarouselCell";

const Carousel = React.forwardRef(({ images }, ref) => (
  <div className="carousel" ref={ref}>
    {images.map((img, i) => (
      <CarouselCell img={img} key={i} />
    ))}
  </div>
));

export default Carousel;