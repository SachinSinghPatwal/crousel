import React from "react";

const CarouselCell = ({ img }) => (
  <div className="carousel__cell">
    <div className="card" style={{ "--img": `url(${img})` }}>
      <div className="card__face card__face--front"></div>
      <div className="card__face card__face--back"></div>
    </div>
  </div>
);

export default CarouselCell;