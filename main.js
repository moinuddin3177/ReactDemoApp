import React  from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello from React package");

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am parent child element from h1"),
        React.createElement("h2", {}, "I am parent child element from h2")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am parent child element from h1"),
        React.createElement("h2", {}, "I am parent child element from h2")
    ])]
);

console.log(parent);
// root.render(heading);
root.render(parent);