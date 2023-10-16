import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Container,
  Movie,
  BannerGradient,
  BannerContainer,
  BannerImage,
} from "./style";
import { Link } from "react-router-dom";
import Header from "./Header";

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const KEY = process.env.REACT_APP_KEY;

  const [movies, setMovies] = useState([]);
  const [bannerMovies, setBannerMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]); // Estado para os filmes pesquisados
  const [searchTerm, setSearchTerm] = useState(""); // Termo de pesquisa

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });

    fetchBannerMovies();
    fetchTopRatedMovies();
    fetchUpcomingMovies();
  }, [KEY]);

  const fetchBannerMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    );
    const data = await response.json();
    const moviesWithBackdrop = data.results.filter((movie) => movie.backdrop_path);
    setBannerMovies(moviesWithBackdrop);
  };

  const fetchTopRatedMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=pt-BR`
    );
    const data = await response.json();
    setTopRatedMovies(data.results);
  };

  const fetchUpcomingMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=pt-BR`
    );
    const data = await response.json();
    setUpcomingMovies(data.results);
  };

  const generateStars = (rating) => {
    const stars = [];
    const totalStars = 5;
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating / 2) {
        stars.push(<span key={i} className="star filled"></span>);
      } else {
        stars.push(<span key={i} className="star"></span>);
      }
    }
    return stars;
  };

  const handleSearch = () => {
    if (searchTerm) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchedMovies(data.results);
        });
    } else {
      setSearchedMovies([]);
    }
  };

  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    customPaging: function (i) {
      return <div className="custom-dot"></div>;
    },
    appendDots: (dots) => (
      <div
        style={{
          bottom: "-25px",
          position: "absolute",
        }}
      >
        <ul style={{ margin: "0" }}>{dots}</ul>
      </div>
    ),
  };

  const movieSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const topRatedSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const upcomingSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Header />

      <Container>
        <input
          type="text"
          placeholder="Pesquisar filmes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar Filmes</button>
      </Container>

      {searchedMovies.length > 0 && (
        <Container>
          <Slider {...movieSettings}>
            {searchedMovies.map((movie) => (
              <Link to={`/${movie.id}`} key={movie.id}>
                <Movie>
                  <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                  <span>{movie.title}</span>
                  <div className="rating">{generateStars(movie.vote_average)}</div>
                </Movie>
              </Link>
            ))}
          </Slider>
        </Container>
      )}

      {bannerMovies.length > 0 && (
        <BannerContainer>
          <Slider {...bannerSettings}>
            {bannerMovies.map((movie) => (
              <div key={movie.id}>
                <Link to={`/${movie.id}`}>
                  <BannerImage src={`${imagePath}${movie.backdrop_path}`} alt={movie.title} />
                </Link>
              </div>
            ))}
            <BannerGradient />
          </Slider>
        </BannerContainer>
      )}

      <Container>
        <h1>Filmes populares</h1>
        <Slider {...movieSettings}>
          {movies.map((movie) => (
            <Link to={`/${movie.id}`} key={movie.id}>
              <Movie>
                <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                <span>{movie.title}</span>
                <div className="rating">{generateStars(movie.vote_average)}</div>
              </Movie>
            </Link>
          ))}
        </Slider>
      </Container>

      <Container>
        <h1>Mais bem avaliados</h1>
        <Slider {...topRatedSettings}>
          {topRatedMovies.map((movie) => (
            <Link to={`/${movie.id}`} key={movie.id}>
              <Movie>
                <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                <span>{movie.title}</span>
                <div className="rating">{generateStars(movie.vote_average)}</div>
              </Movie>
            </Link>
          ))}
        </Slider>
      </Container>

      <Container>
        <h1>Próximos lançamentos</h1>
        <Slider {...upcomingSettings}>
          {upcomingMovies.map((movie) => (
            <Link to={`/${movie.id}`} key={movie.id}>
              <Movie>
                <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                <span>{movie.title}</span>
                <div className="rating">{generateStars(movie.vote_average)}</div>
              </Movie>
            </Link>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default Home;
