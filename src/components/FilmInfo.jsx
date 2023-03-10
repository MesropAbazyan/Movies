import './FilmInfo.css';

function FilmInfo({movie}) {
  return (
    <div className='movieContainer'>
      <div className='movieHeading'>
        <img className='moviePoster' src={movie.poster} alt="" />
        <table className='movieData'>
          <tbody>
            <tr>
              <td>title</td>
              <td id='movieTitle'>{movie.title}</td>
            </tr>
            <tr>
              <td>premiere</td>
              <td>{movie.date}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{movie.country}</td>
            </tr>
            <tr>
              <td>genre</td>
              <td>{movie.genre}</td>
            </tr>
            <tr>
              <td>duration</td>
              <td>{movie.duration} min</td>
            </tr>
            <tr>
              <td>actors</td>
              <td>{movie.actors}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='movieDesc'>
        <h3 className='movieDescTitle'>{movie.title}</h3>
        <p className='movieDescText'>{movie.desc}</p>
      </div>

      <div className='movieRating'>
        <img src={"star.png"} alt="" /><img src={"star.png"} alt="" />
        <img src={"star.png"} alt="" /><img src={"star.png"} alt="" />
        <img src={"star.png"} alt="" /><img src={"star.png"} alt="" />
        <img src={"star.png"} alt="" /><img src={"star.png"} alt="" />
        <img src={"star.png"} alt="" /><img src={"star-half.png"} alt="" />
        <span className="movieRatingNumber">
          Film rating: {movie.rating}
        </span>
      </div>

      <div className='movieWatching'>
        <video controls
          className='movieVideo' 
          src={movie.trailer}
        >Watch Movie</video>
      </div>
    </div>
  );
}

export default FilmInfo;