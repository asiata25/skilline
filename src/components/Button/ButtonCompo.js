import React from "react";
import { Button } from "react-bootstrap";

function ButtonCompo({ children, ...props }) {
  let classes = "rounded-pill ";

  switch (props.variant) {
    case "brand-orange":
      classes += "text-white py-2 px-4";
      break;
    case "brand-rose":
      classes += "text-white py-2 px-4";
      break;
    case "light":
      classes += "shadow py-2 px-4";
      break;
    default:
      classes += "";
      break;
  }

  return (
    <Button {...props} className={`${classes} ${props.className}`}>
      {children}
    </Button>
  );
}

export default ButtonCompo;
