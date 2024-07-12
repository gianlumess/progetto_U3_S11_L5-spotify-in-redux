import { Col, Image, Row } from "react-bootstrap";

const SingleSong = ({ song }) => {
  return (
    <Col className="text-center">
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
