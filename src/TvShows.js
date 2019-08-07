import React from "react";
import axios from "./Axios";

import Heart from "./Heart";

export default class TvShows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    };
    this.getTvShows = this.getTvShows.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
    this.addToLocal = this.addToLocal.bind(this);
  }

  componentDidMount() {
    this.getTvShows();
  }

  async getTvShows() {
    try {
      let response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=001da56e3b0ee5e6e11f8a1859a5e054&language=en-US&page=1"
      );
      // console.log("Responies TV SHows:", response);
      const shows = response.data.results;
      this.setState({
        shows
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  addToLocal(movieTitle) {
    localStorage.setItem("Favorite", movieTitle);
  }

  addToFavorite(movieTitle, movieId, imgUrl) {
    let newShows = this.state.shows.map(show => {
      if (show.id === movieId) {
        console.log("I am Running!");
        show.favorite = true;
        return show;
      } else {
        return show;
      }
    });
    console.log("New Movie: ", newShows);
    // =====================================================================

    this.setState({
      shows: newShows,
      favoriteMovie: movieTitle,
      favoriteMovieImgUrl: imgUrl
    });
  }

  render() {
    if (this.state.shows.length < 1) {
      return null;
    }

    const { shows } = this.state;
    const baseUrl = "https://image.tmdb.org/t/p/w200";

    const showList = (
      <div>
        {shows.map(show => {
          return (
            <div key={show.id} className="item-card">
              <img
                src={`${baseUrl}${show.poster_path}`}
                alt="Poster of Movie"
              />
              <div className="item-details" id="heart-container">
                <h2 className="item-title">{show.name}</h2>
                <Heart
                  id="favorite-heart-shows"
                  addToFavorite={this.addToFavorite}
                  movieId={show.id}
                  movieTitle={show.name}
                  imgUrl={show.poster_path}
                  favorite={show.favorite}
                />
                <p className="item-description">{show.overview}</p>
                <p className="item-voting">
                  Rating: <span>{show.vote_average}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
    return <div className="item-list">{showList}</div>;
  }
}
