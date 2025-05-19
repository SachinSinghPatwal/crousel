import React from "react";


const PreviewHeader = React.forwardRef(({ title, closeRef }) => (
  <header className="preview__header">
    <h2 className="preview__title"><span>{title}</span></h2>
    <button className="preview__close" ref={closeRef}>Close ×</button>
  </header>
));

export default PreviewHeader;