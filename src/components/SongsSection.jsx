import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addSongsToHipHopSectionAction,
  addSongsToPopCultureSectionAction,
  addSongsToRockSectionAction,
  getSongsAction,
} from "../redux/actions";
import SingleSong from "./SingleSong";

const SongsSection = () => {
  const rockSongs = useSelector((state) => state.songs.rock);
  const popSongs = useSelector((state) => state.songs.popCulture);
  const hipHopSongs = useSelector((state) => state.songs.hipHop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsAction("queen", addSongsToRockSectionAction));
    dispatch(getSongsAction("eminem", addSongsToPopCultureSectionAction));
    dispatch(getSongsAction("katyperry", addSongsToHipHopSectionAction));
  }, []);

  return (
    <>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            {rockSongs && rockSongs.slice(0, 4).map((song) => <SingleSong key={song.id} song={song} />)}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            {popSongs && popSongs.slice(0, 4).map((song) => <SingleSong key={song.id} song={song} />)}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>#HipHop</h2>
            {hipHopSongs && hipHopSongs.slice(0, 4).map((song) => <SingleSong key={song.id} song={song} />)}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SongsSection;
