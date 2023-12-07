import React from "react";
import { Card } from "react-bootstrap";
import starImg from "../../assets/icon/Star.png";
import classes from "./TestiCard.module.css";

function TestiCard({ ...props }) {
  const stars = [];
  for (let i = 0; i < props.star; i++) {
    stars.push(<img key={i} alt="star review" src={starImg} width={20} />);
  }

  return (
    <Card
      className={`border-0 border-10 border-start border-danger-subtle position-absolute p-3 shadow ${classes["testi-card"]}`}
    >
      <Card.Body>
        <div className="border-start ps-3 text-secondary mb-3">
          <p className="fs-6">{props.testi}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span>{props.name}</span>
          <div className="text-end">
            <div className="flex gap-3 mb-2">{stars}</div>
            <small className="text-secondary">{props.subtle}</small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TestiCard;
