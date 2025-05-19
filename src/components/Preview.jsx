import React from "react";
import PreviewHeader from "./PreviewHeader";
import PreviewGrid from "./PreviewGrid";

const Preview = React.forwardRef(({ title, closeRef, gridItems, idx }, ref) => (
  <div className="preview" id={`preview-${idx + 1}`} ref={ref}>
    <PreviewHeader title={title} closeRef={closeRef} />
    <PreviewGrid items={gridItems} />
  </div>
));

export default Preview;