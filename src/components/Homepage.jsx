import React from "react";
/* FILEPATH: /Users/sarthakshrestha/Documents/czu-portfolio/czu-portfolio/src/components/Navbar.css */
import "./stylesheets/Navbar.css";
import "./canvas/Canvas";
import PortfolioItem from "./canvas/Canvas";
import { Link, NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <nav>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap')
                    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap')
                `}
      </style>

      <div className="navbar-left">
        <h1>caesarinn.</h1>
      </div>
      <div className="navbar-right">
        <h2>folio </h2>
        <h2>
          <NavLink to="/prints">prints</NavLink>
        </h2>
        <h2>
          <NavLink to="/images">image</NavLink>
        </h2>
        <h2> archives </h2>
      </div>
      {/* <Portfolionpm run devItem/> */}
    </nav>
  );
};

export default Homepage;
