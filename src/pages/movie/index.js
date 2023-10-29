/* Movie.js */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]); // Estado para os gêneros do filme
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    // Obter detalhes do filme
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setGenres(data.genres); // Define os gêneros do filme
      });
  }, [id, KEY]);

  return (
    <div>
      <header>
        {/* Seu conteúdo de cabeçalho aqui */}
      </header>
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
              <div className="movie-info">
                <p>Data de Lançamento: {movie.release_date}</p>
              </div>
              <div className="movie-info">
                <p>Avaliação: {movie.vote_average}</p>
              </div>
              <div className="movie-info">
                <p>Popularidade: {movie.popularity}</p>
              </div>
              <div className="movie-info">
                <p>Idioma: {movie.original_language}</p>
              </div>
            </div>
            <div className="descricao">
              <p className="movie-desc">{movie.overview}</p>
            </div>
            <div className="genres">
              <p>Gêneros: {genres.map((genre) => genre.name).join(", ")}</p>
            </div>
            <div className="button-container">
              <Link to="/">
                <button className="link_button">Voltar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer>
        {}
      </footer>
    </div>
  );
};

export default Movie;
