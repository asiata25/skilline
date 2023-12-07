import React from "react";
import { Card } from "react-bootstrap";

function FloatingCard({ isProfile, ...props }) {
  return (
    <Card
      {...props}
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.80)",
        animation: "float 6s ease-in-out infinite",
        ...props.style,
      }}
      className={`position-absolute rounded-4 border-0 ${props.className}`}
    >
      <Card.Body className="d-flex">
        <div className="position-relative">
          <img src={props.img} alt="header icon" width={50} height={50} />
          {isProfile && (
            <span
              style={{ backgroundColor: "#2EBB5E" }}
              className="position-absolute bottom-0 start-100 translate-middle border border-light rounded-circle p-2"
            >
              {/* <span class="visually-hidden">online</span> */}
            </span>
          )}
        </div>
        <div className="ms-3 text-start">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </div>
      </Card.Body>
      {props.footer && <div className="pb-3">{props.footer}</div>}
    </Card>
  );
}

export default FloatingCard;
