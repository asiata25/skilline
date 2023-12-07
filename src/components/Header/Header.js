import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavbarCompo from "../Navbar/NavbarCompo";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import "./header.css";

function Header() {
  return (
    <header>
      <NavbarCompo />
      <Container className="pt-lg-5">
        <Row className="align-items-start">
          <Col lg={5}>
            <SectionOne />
          </Col>
          <Col>
            <SectionTwo />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
