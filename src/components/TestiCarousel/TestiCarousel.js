import React from "react";
import testiImg from "../../assets/testimonials/testi_01.png";
import ButtonCompo from "../Button/ButtonCompo";
import IconCircle from "../IconCircle/IconCircle";
import TestiCard from "../TestiCard/TestiCard";

const TESTIMONIALS = [
  {
    img: testiImg,
    testi:
      "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking.",
    name: "Gloria Rose",
    star: 5,
    subtle: "12 reviews at Yelp",
  },
];

function TestiCarousel() {
  return (
    <div style={{ maxWidth: "400px" }} className="mx-auto position-relative">
      {TESTIMONIALS.map((i) => (
        <div key={i.name} className="position-reltive">
          <img src={i.img} alt={i.name} className="w-100" />
          <TestiCard {...i} />
        </div>
      ))}
      <ButtonCompo className=" bg-transparent border-0 p-0 position-absolute translate-middle top-50">
        <IconCircle
          className="shadow-sm bg-white text-brand-blue-light"
          icon={<i className="bi bi-chevron-compact-left fs-3"></i>}
          size="58px"
        />
      </ButtonCompo>
      <ButtonCompo className="bg-transparent border-0 p-0 position-absolute top-50 start-100 translate-middle">
        <IconCircle
          className="shadow-sm bg-white text-brand-blue-light"
          icon={<i className="bi bi-chevron-compact-right fs-3"></i>}
          size="58px"
        />
      </ButtonCompo>
    </div>
  );
}

export default TestiCarousel;
