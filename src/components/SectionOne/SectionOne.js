import React from "react";
import ButtonCompo from "../Button/ButtonCompo";
import IconCircle from "../IconCircle/IconCircle";

function SectionOne() {
  return (
    <section className="py-5 text-center text-lg-start">
      <h1 className="text-brand-blue-dark fw-bold mb-4 pt-5">
        <span className="text-brand-orange">Studying</span> Online is now much
        easier
      </h1>
      <p className="text-secondary-emphasis mb-5">
        Skilline is an interesting platform that will teach you in more an
        interactive way
      </p>
      <div className="d-flex justify-content-center justify-content-lg-start column-gap-4">
        <ButtonCompo variant="brand-orange" className="">
          Join for free
        </ButtonCompo>
        <ButtonCompo className="bg-transparent text-dark border-0 p-0">
          <IconCircle
            className="shadow-sm bg-white text-brand-blue-light me-2"
            icon={<i className="bi bi-play-fill fs-3"></i>}
            size="58px"
          />{" "}
          Watch how it works
        </ButtonCompo>
      </div>
    </section>
  );
}

export default SectionOne;
