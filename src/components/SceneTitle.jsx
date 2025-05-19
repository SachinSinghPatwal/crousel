import React from "react";

const SceneTitle = React.forwardRef(({ children }, ref) => (
  <h2 className="scene__title" data-speed="0.7" ref={ref}>
    {children}
  </h2>
));

export default SceneTitle;