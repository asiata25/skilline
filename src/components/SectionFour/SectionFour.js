import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { Col, Row } from "react-bootstrap";
import billingImg from "../../assets/icon/billing.png";
import customerImg from "../../assets/icon/customer.png";
import scheduleImg from "../../assets/icon/schedule.png";
import FeatureCard from "../FeatureCard/FeatureCard";

const FEATURES = [
  {
    title: "Online Billing, Invoicing, & Contracts",
    desc: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    icon: billingImg,
  },
  {
    title: "Easy Scheduling & Attendance Tracking",
    desc: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    icon: customerImg,
  },
  {
    title: "Customer Tracking",
    desc: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
    icon: scheduleImg,
  },
];

function SectionFour() {
  return (
    <section className="py-5 mb-3">
      <Row className="row-gap-5 justify-content-center">
        <Col sm={5} className="text-center">
          <h3 className="text-brand-orange fw-bold mb-4">
            <span className="text-brand-blue-dark">All-In-One</span> Cloud
            Software.
          </h3>
          <p className="text-body-secondary lh-lg mb-5">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </Col>
        <Col>
          <Splide
            aria-label="My Favorite Images"
            options={{
              mediaQuery: "min",
              arrows: false,
              gap: 20,
              breakpoints: {
                992: { hasTrack: false, drag: false, perPage: 3 },
              },
            }}
          >
            {FEATURES.map((i) => (
              <SplideSlide key={i.id} className="py-5 px-3">
                <FeatureCard {...i} />
              </SplideSlide>
            ))}
          </Splide>
        </Col>
      </Row>
    </section>
  );
}

export default SectionFour;
