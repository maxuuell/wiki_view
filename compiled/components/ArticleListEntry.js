"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ArticleListEntry = exports.ArticleListEntry = function ArticleListEntry(props) {
  return React.createElement(
    "div",
    { className: "row" },
    React.createElement(
      "div",
      { className: "col s12 m6" },
      React.createElement(
        "div",
        { className: "card blue-grey darken-1" },
        React.createElement(
          "div",
          { className: "card-content white-text" },
          React.createElement(
            "span",
            { className: "card-title" },
            props.title
          ),
          React.createElement(
            "p",
            null,
            props.description
          )
        ),
        React.createElement(
          "div",
          { className: "card-action" },
          React.createElement(
            "a",
            { href: props.link, target: "_blank" },
            "Article Source"
          )
        )
      )
    )
  );
};