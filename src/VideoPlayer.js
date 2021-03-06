import React from "react";
import { Link } from "react-router-dom";

export default class VideoPlayer extends React.Component {
  componentDidMount() {}

  render() {
    const { playerUrl, description, title } = this.props;
    return (
      <div className="player-flex-container">
        <Link to="/Start" className="no-link-styling ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 100 125"
            x="0px"
            y="0px"
            className="back-arrow"
          >
            <title>01</title>
            <polygon points="66.99 16.09 31.62 50 66.99 83.91 68.38 82.46 34.51 50 68.38 17.54 66.99 16.09" />
          </svg>
          Back
        </Link>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${playerUrl}?autoplay=1&origin=http://example.com`}
          frameBorder="0"
          modestbranding="1"
          fs="1"
          allowFullScreen="allowFullScreen"
          title="My Cinema"
        />
        <div className="video-description">
          <h2 className="video-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
