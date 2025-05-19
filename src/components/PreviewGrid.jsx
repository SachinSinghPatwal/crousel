import React from "react";
import GridItem from "./GridItem";

const PreviewGrid = ({ items }) => (
  <div className="grid">
    {items.map((item, i) => (
      <GridItem key={i} {...item} />
    ))}
  </div>
);

export default PreviewGrid;