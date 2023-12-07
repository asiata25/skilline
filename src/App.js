import { Container } from "react-bootstrap";

import Header from "./components/Header/Header";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionThree from "./components/SectionThree/SectionThree";

function App() {
  return (
    <>
      <Header />
      <Container>
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </Container>
    </>
  );
}

export default App;
