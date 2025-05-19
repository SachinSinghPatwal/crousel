import React from "react";

const GridItem = ({ img, caption, id }) => (
  <figure aria-labelledby={id} className="grid__item" role="img">
    <div className="grid__item-image" style={{ backgroundImage: `url(${img})` }}></div>
    <figcaption className="grid__item-caption" id={id}>
      <h3>{caption}</h3>
    </figcaption>
  </figure>
);

export default GridItem;