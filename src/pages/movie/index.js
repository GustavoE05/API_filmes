/* Movie.js */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState([]);
  const KEY = process.env.REACT_APP_KEY;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const res = data.results;
        let filme = res.find((key) => {
          // eslint-disable-next-line
          return key.id == id;
        });
        setMovie(filme);
      }); // eslint-disable-next-line
  }, []);

  return (
    <div className="movie-container">
      <nav>
        {/* Navigation links */}
      </nav>
      <div className="container">
        <img
          className="img_movie"
          src={`${imagePath}${movie.poster_path}`}
          alt="{movie.title}"
        />
        <div className="movie-details">
          <h1>{movie.title}</h1>
          <div className="movie-info-section">
            <p className="movie-info">Data de Lançamento: {movie.release_date}</p>
            <p className="movie-info">Avaliação: {movie.vote_average}</p>
            <p className="movie-info">Popularidade: {movie.popularity}</p>
            <p className="movie-info">Idioma: {movie.original_language}</p>
          </div>
          <div className="descricao">
            <p className="movie-desc">{movie.overview}</p>
          </div>
          <div className="button-container">
            <Link to="/">
              <button className="link_button">Voltar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
