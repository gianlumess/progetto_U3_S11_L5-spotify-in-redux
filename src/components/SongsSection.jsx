import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addSongsToHipHopSectionAction,
  addSongsToPopCultureSectionAction,
  addSongsToRockSectionAction,
  getSongsAction,
} from "../redux/actions";

const SongsSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsAction("queen", addSongsToRockSectionAction));
    dispatch(getSongsAction("eminem", addSongsToPopCultureSectionAction));
    dispatch(getSongsAction("katyperry", addSongsToHipHopSectionAction));
  }, []);

  return (
    <>
      <Row>
        <Col xs={10}></Col>
      </Row>
      <Row>
        <Col xs={10}></Col>
      </Row>
      <Row>
        <Col xs={10}></Col>
      </Row>
    </>
  );
};

export default SongsSection;
