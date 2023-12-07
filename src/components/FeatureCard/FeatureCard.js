import React from "react";
import { Card } from "react-bootstrap";

function FeatureCard({ ...props }) {
  return (
    <Card
      bg="white"
      className="border-0 shadow p-4 rounded-4 text-center h-100 pt-5"
      style={{ maxWidth: "450px" }}
    >
      <img
        src={props.icon}
        alt={props.title}
        width={80}
        height={80}
        className="position-absolute top-0 start-50 translate-middle rounded-circle shadow"
      />
      <Card.Body className="d-flex flex-column pt-5 mt-3">
        <Card.Title className="text-brand-blue-dark fs-3 fw-normal lh-base mb-4 flex-grow-1">
          {props.title}
        </Card.Title>
        <Card.Text className="text-body-secondary lh-lg">
          {props.desc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FeatureCard;
