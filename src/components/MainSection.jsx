import { Col, Row } from "react-bootstrap";
import TopLinks from "./TopLinks";
import SongsSection from "./SongsSection";

const MainSection = () => {
  return (
    <>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <TopLinks />
        </Col>
      </Row>
      <SongsSection />
    </>
  );
};

export default MainSection;
