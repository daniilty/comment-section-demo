import React from 'react';
import ReactDOM from "react-dom";

const dest = document.getElementById("root");

const root = React.createElement (
    "div",
    {},
    React.createElement(
        "a",
        { href: "https://github.com/daniilty" },
        React.createElement(  "h1", {} , "Привет это храм мудрецей империи таджа" )
    )
);
ReactDOM.render(root,dest);
export default React;
export default ReactDOM;