import React from "react";

function TitleSection({ children }) {
  return (
    <small
      className="text-uppercase text-dark-emphasis d-flex align-items-center gap-3"
      style={{ letterSpacing: "4px" }}
    >
      <span
        style={{ width: 50, height: 2 }}
        className="bg-dark-subtle d-inline-block"
      ></span>
      {children}
    </small>
  );
}

export default TitleSection;
