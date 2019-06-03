import React from "react";
import "./style.css";
import "./Header.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Header = props => (
    <div className="header">
    <div className="title">{props.children}</div>
    </div>
);

export default Header;
