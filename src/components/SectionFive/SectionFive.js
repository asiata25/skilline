import React from "react";
import { Col, Row } from "react-bootstrap";

import ButtonCompo from "../Button/ButtonCompo";
import IconCircle from "../IconCircle/IconCircle";
import TestiCarousel from "../TestiCarousel/TestiCarousel";
import TitleSection from "../TitleSection/TitleSection";

function SectionFive() {
  return (
    <section>
      <Row>
        <Col className="mb-5 mb-lg-0" lg={4}>
          <TitleSection>Testimonial</TitleSection>
          <h2 className="text-brand-blue-dark my-4">What They Say?</h2>
          <p className="text-body-secondary lh-lg">
            Skilline has got more than 100k positive ratings from our users
            around the world.{" "}
          </p>
          <p className="text-body-secondary lh-lg">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p className="text-body-secondary mb-5">
            Are you too? Please give your assessment
          </p>
          <ButtonCompo variant="outline-brand-orange p-0 ps-3 d-flex align-items-center border-end-0">
            Write your assessment{" "}
            <IconCircle
              size="58px"
              icon={<i className="bi bi-arrow-right fs-3"></i>}
              className="ms-3 border-brand-orange border"
            />
          </ButtonCompo>
        </Col>
        <Col>
          <TestiCarousel />
        </Col>
      </Row>
    </section>
  );
}

export default SectionFive;
