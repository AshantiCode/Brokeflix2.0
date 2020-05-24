import React from "react";
import { Link } from "react-router-dom";
import YTSearch from "youtube-api-v3-search";
import "./App.css";
const Swiper = window.Swiper;
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

    this.swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 20,
      freeMode: true,
    });
  }

  async searchYT(options) {
    try {
      const response = await YTSearch(API_KEY, options);
      // console.log("Response.items:", response.items);

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
    // console.log("Teasers in Render:", teasers);
    // console.log("unique ID?:", teasers.id.videoId);

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
            <Link
              to="/player"
              onClick={() =>
                this.props.setPlayerUrl(
                  teaser.id.videoId,
                  teaser.snippet.description,
                  title
                )
              }
            >
              <div key={teaser.etag} className="swiper-slide">
                <img
                  src={teaser.snippet.thumbnails.medium.url}
                  alt="Movie Teaser Thumbnail"
                />
                <p className="teaser-description">{title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );

    return (
      <div>
        <p className="category-name">{this.props.category} &#8594;</p>
        <div className="swiper-container">
          <div className="swiper-wrapper">{teaserList}</div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}

// {
//   /* <div>
//         <div className="teaser-list-container">
//           <p className="category-name">{this.props.category} &#8594;</p>
//           {teaserList}
//         </div>
//       </div> */
// }
