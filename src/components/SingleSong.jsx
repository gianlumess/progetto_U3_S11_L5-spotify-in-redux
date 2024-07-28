import { Col, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addSelectedInPlayerAction } from "../redux/actions";

const SingleSong = ({ song }) => {
  const dispatch = useDispatch();

  return (
    <Col
      style={{ cursor: "pointer" }}
      className="text-center"
      onClick={() => {
        dispatch(addSelectedInPlayerAction(song));
      }}
    >
      <Image className="img-fluid" src={song.album.cover_medium} alt="track" />
      <p>
        Track: {song.title}
        <br />
        Artist: {song.artist.name}
      </p>
    </Col>
  );
};

export default SingleSong;
