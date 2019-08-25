import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  // console.log(props);
  return (
    <div className="header-container ">
      <img
        src="./assets/brokeflix-logo2.png"
        className="header-logo"
        alt="Brokeflix Logo"
      />
      <div className="nav-flex-container">
        <nav>
          <ul className="ul-flex-container">
            <li>
              <Link
                to="/Start"
                className="no-link-styling"
                onClick={props.toggleActiveLink}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/movies"
                className="no-link-styling"
                onClick={props.toggleActiveLink}
              >
                Movies
              </Link>
            </li>
            <li id="tv-show">
              <Link
                to="/shows"
                className="no-link-styling"
                onClick={props.toggleActiveLink}
              >
                TV-Shows
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="ul-flex-container">
            <li>
              {" "}
              <a href="/" className="no-link-styling">
                <p>Done</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
