import React from "react";

function IconCircle({ icon, size, ...props }) {
  return (
    <span
      {...props}
      style={{ width: size, height: size, lineHeight: size }}
      className={`rounded-circle d-inline-block ${props.className}`}
    >
      {icon}
    </span>
  );
}

export default IconCircle;
