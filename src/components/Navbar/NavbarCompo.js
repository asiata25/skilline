import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoImg from "../../assets/logo.svg";
import ButtonCompo from "../Button/ButtonCompo";

function NavbarCompo() {
  return (
    <Navbar expand="lg" bg="transparent">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logoImg}
            width="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5 column-gap-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#careers">Careers</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
          </Nav>
          <div className="d-flex column-gap-3 mt-3 mt-lg-0">
            <ButtonCompo variant="light" className="flex-grow-1">
              Login
            </ButtonCompo>
            <ButtonCompo variant="brand-orange" className="flex-grow-1">
              Sign Up
            </ButtonCompo>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCompo;
