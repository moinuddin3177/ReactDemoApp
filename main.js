import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import { Body } from "./src/components/Body";
import About from "./src/components/About";
import Contactus from "./src/components/Contactus";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ! classic old React way //
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello from React package"
);

console.log(heading);

//  ! Modern JSX way - trasnpiles before it reaches JS -- Parcel - Babel //
//  ? JSX => React.CreateElement => ReactElement - JS Object => HTMLElement(render) //

const jsxHeading = (
  <h1 id="heading" className="head">
    Hello from React JSX
  </h1>
);
console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1" }, [
//         React.createElement("h1", {}, "I am parent child element from h1"),
//         React.createElement("h2", {}, "I am parent child element from h2")
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "I am parent child element from h1"),
//         React.createElement("h2", {}, "I am parent child element from h2")
//     ])]
// );

// ! React Functional Component //
const Title = () => (
  <h1 className="head" tabIndex="5">
    Hello from Title React Functional Component
  </h1>
);
const randomNumber = Math.random();

const element = <span>React Element - </span>;
const title = (
  <h1 className="head">
    {element}
    Title using variable
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {title}
    <h3>{randomNumber}</h3>
    <h4>{100 + 200}</h4>
    <h1 id="heading">Hello from Heading React Functional Component</h1>
  </div>
);

// !Food ordering App //
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contactus",
        element: <Contactus/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
