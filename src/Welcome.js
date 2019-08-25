// import React from "react";
//
import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="landing-background-image">
      <section className="wrapper">
        <a href="/">
          <img
            src="./assets/brokeflix-logo2.png"
            alt="Brokeflix Logo"
            border="0"
            className="logo"
          />
        </a>

        <div className="landing-wrapper">
          <div
            style={{ display: "block" }}
            className="landing-text-container"
            id="landing-greeting"
          >
            <h1 className="landing-title">Too broke for Netflix? </h1>
            <h2 className="landing-subtitle uppercase">
              Watch movies for free
            </h2>
            <Link to="/start">
              <button className="register-button uppercase">
                {" "}
                Start Watching
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
