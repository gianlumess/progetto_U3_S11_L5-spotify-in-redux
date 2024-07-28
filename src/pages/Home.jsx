import { Col, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";
import MainSection from "../components/MainSection";
import Player from "../components/Player";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col className="d-none d-md-inline-block">
            <SideBar />
          </Col>
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <MainSection />
          </Col>
        </Row>
      </div>
      <div className="container-fluid fixed-bottom bg-container pt-1">
        <Player />
      </div>
    </>
  );
};

export default Home;
