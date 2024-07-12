import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";
import MainSection from "../components/MainSection";

const Home = () => {
  return (
    <>
      <Container className="container-fluid">
        <Row>
          <Col xs={2}>
            <SideBar />
          </Col>
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <MainSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
