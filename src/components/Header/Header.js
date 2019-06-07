import React from "react";
import "./Header.css";

const Header = props => (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div className="header">
        <div className="name">{props.children}</div>
        <div className="correctIncorrect">{props.correctIncorrect}</div>
        <div className="scores">
            Score: {props.score} Highscore: {props.topScore}
        </div>
    </div>
    </nav>
);

export default Header;