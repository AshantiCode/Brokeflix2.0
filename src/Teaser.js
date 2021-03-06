import React from "react";
import { Link } from "react-router-dom";
import YTSearch from "youtube-api-v3-search";

const API_KEY = "AIzaSyA5wxR9MiDHSA22z6ZPZtP-jolTGogbcYo";

export default class Teaser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teasers: [],
    };

    this.searchYT = this.searchYT.bind(this);
  }

  componentDidMount() {
    this.searchYT({
      q: `${this.props.genre}`,
      part: "snippet",
      type: "video",
      maxResults: "8",
    });
  }

  async searchYT(options) {
    try {
      const response = await YTSearch(API_KEY, options);

      let teasers = response.items;
      this.setState({
        teasers,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    if (this.state.teasers.length < 1) {
      return null;
    }
    const { teasers } = this.state;

    const teaserList = (
      <div className="teasers-list">
        {teasers.map((teaser) => {
          //cuts  i.e (subtitle Mexican) off
          let title = teaser.snippet.title;

          if (title.indexOf("(", 0) > -1) {
            let pos = title.lastIndexOf("(");
            title = title.substr(0, pos);
          }

          return (
            <Link to="/player" onClick={() => this.props.setPlayerUrl(teaser.id.videoId, teaser.snippet.description, title)}>
              <div key={teaser.etag} className="teaser-box">
                <img src={teaser.snippet.thumbnails.medium.url} alt="Movie Teaser Thumbnail" />
                <p className="teaser-description">{title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );

    return (
      <div>
        <div className="teaser-list-container">
          <p className="category-name">{this.props.category} &#8594;</p>
          {teaserList}
        </div>
      </div>
    );
  }
}
