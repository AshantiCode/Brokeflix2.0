import React from "react";
import axios from "./Axios";
import Heart from "./Heart";

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };

    // this.getMovies = this.getMovies.bind(this);
    // this.toggleFavorite = this.toggleFavorite.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    try {
      let response = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=001da56e3b0ee5e6e11f8a1859a5e054"
      );
      // console.log("Response MovieDB:", response);
      const movies = response.data.results;
      this.setState({
        movies
      });
      console.log("State Movies:", this.state.movies);
    } catch (error) {
      console.log(error.message);
    }
  }

  addToFavorite(movieTitle, movieId, imgUrl) {
    let newMovies = this.state.movies.map(movie => {
      if (movie.id === movieId) {
        // console.log("I am Running!");
        movie.favorite = true;
        return movie;
      } else {
        return movie;
      }
    });
    console.log("New Movie: ", newMovies);
    this.setState({
      movies: newMovies,
      favoriteMovie: movieTitle,
      favoriteMovieImgUrl: imgUrl
    });
  }

  render() {
    if (this.state.movies.length < 1) {
      return null;
    }
    const { movies } = this.state;
    const baseUrl = "https://image.tmdb.org/t/p/w200";
    // console.log("STATE Movies:", movies);
    const movieList = (
      <div>
        {movies.map(movie => {
          return (
            <div key={movie.id} className="item-card">
              <div className="image-wrapper">
                <img
                  src={`${baseUrl}${movie.poster_path}`}
                  alt="Poster from Movie"
                />
                <Heart
                  addToFavorite={this.addToFavorite}
                  movieId={movie.id}
                  movieTitle={movie.title}
                  imgUrl={movie.poster_path}
                  favorite={movie.favorite}
                />
              </div>
              <div className="item-details">
                <h2 className="item-title">{movie.title}</h2>

                <p className="item-description">{movie.overview}</p>
                <p className="item-voting">
                  Rating: <span>{movie.vote_average}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );

    // return <div className="item-list">{movieList}</div>;

    return (
      <div>
        <p className="movie-welcome-text">
          {" "}
          Here you can read about movies that are currently running in movie
          theaters.
        </p>
        <div className="item-list">{movieList}</div>
      </div>
    );
  }
}
