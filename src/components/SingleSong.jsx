const SingleSong = ({ song }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
        <div className="col text-center">
          <img className="img-fluid" src={song.album.cover_medium} alt="track" />
          <p>
            Track: {song.title}
            <br />
            Artist: {song.artist.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleSong;
