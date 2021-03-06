import React from "react";
import Header from "./Header";
import Teaser from "./Teaser";
import Carousel from "./Carousel";
import VideoPlayer from "./VideoPlayer";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Welcome from "./Welcome";

import { BrowserRouter, Route } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.setPlayerUrl = this.setPlayerUrl.bind(this);
    this.toggleActiveLink = this.toggleActiveLink.bind(this);
  }

  setPlayerUrl(url, description, title) {
    this.setState({
      playerUrl: url,
      description,
      title,
    });
  }

  toggleActiveLink(e) {
    let links = document.querySelectorAll(".active");
    [].forEach.call(links, function (link) {
      link.classList.remove("active");
      link.classList.add("no-link-styling");
    });
    e.target.className = "active";
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-background">
          <Header toggleActiveLink={this.toggleActiveLink} />

          <Route
            exact
            path="/start"
            render={() => (
              <div>
                <Carousel />
                <Teaser setPlayerUrl={this.setPlayerUrl} genre={"full movie drama"} category={"Drama"} />
                <Teaser setPlayerUrl={this.setPlayerUrl} genre={"full movie comedy"} category={"Comedy"} />
                <Teaser setPlayerUrl={this.setPlayerUrl} genre={"full movie romance"} category={"Romance"} />
                <Teaser setPlayerUrl={this.setPlayerUrl} genre={"full movie for kids"} category={"For Kids"} />
                <Teaser setPlayerUrl={this.setPlayerUrl} genre={"full movie family"} category={"Family"} />
              </div>
            )}
          />

          <Route
            exact
            path="/player"
            render={() => {
              return (
                <VideoPlayer playerUrl={this.state.playerUrl} description={this.state.description} title={this.state.title} />
              );
            }}
          />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/shows" component={TvShows} />
        </div>
      </BrowserRouter>
    );
  }
}
