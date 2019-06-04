import React from "react";
import "./Header.css";

const Header = props => (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div className="header">
        <div className="App-logo"></div>
        <div className="title">{props.children}</div>
        <div className="scores">
            Score: {props.score} Highscore: {props.highscore}
        </div>
    </div>
    </nav>
);

export default Header;