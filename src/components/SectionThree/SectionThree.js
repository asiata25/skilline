import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { Col, Row } from "react-bootstrap";
import airbnbImg from "../../assets/companies/airbnb.png";
import amazonImg from "../../assets/companies/amazon.png";
import facebookImg from "../../assets/companies/facebook.png";
import googleImg from "../../assets/companies/google.png";
import grabImg from "../../assets/companies/grab.png";
import netflixImg from "../../assets/companies/netflix.png";

const IMG_CAROUSEL = [
  { src: googleImg, alt: "google", id: 4 },
  { src: netflixImg, alt: "netflix", id: 6 },
  { src: airbnbImg, alt: "airbnb", id: 1 },
  { src: amazonImg, alt: "amazon", id: 2 },
  { src: facebookImg, alt: "facebook", id: 3 },
  { src: grabImg, alt: "grab", id: 5 },
];

function SectionThree() {
  return (
    <section className="py-5 mb-3">
      <Row className="row-gap-2">
        <Col sm={12}>
          <h5 className="text-center text-secondary mt-5">
            Trusted by 5,000+ Companies Worldwide
          </h5>
        </Col>
        <Col className="text-center">
          <Splide
            aria-label="My Favorite Images"
            options={{
              mediaQuery: "min",
              arrows: false,
              perPage: 2,
              autoplay: true,
              type: "loop",
              breakpoints: {
                992: {
                  hasTrack: false,
                  drag: false,
                  perPage: 6,
                  autoplay: false,
                },
              },
            }}
          >
            {IMG_CAROUSEL.map((i) => (
              <SplideSlide key={i.id}>
                <div>
                  <img src={i.src} alt={i.alt} height={40} />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </Col>
      </Row>
    </section>
  );
}

export default SectionThree;
