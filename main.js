import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import { Body } from "./src/components/Body/Body";
// import About from "./src/components/Header/About";
import Contactus from "./src/components/Header/Contactus";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/Body/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { useState,useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";
import Cart from "./src/components/Body/Cart";

const Grocery = lazy( () => import ("./src/components/Grocery")); 
const About = lazy( () => import ("./src/components/Header/About")); 
// ! classic old React way //
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello from React package"
);


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
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Make an API call and send user & password
      const data = {
        name: "Moin"
      };
      setUserName(data.name);
  }, [])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <Suspense fallback="About Loading..."><About/></Suspense>
            },
            {
                path: "/contactus",
                element: <Contactus/>
            },
            {
                path: "/restaurant/:restaurantId",
                element: <RestaurantMenu/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback= { <h1>Loading..........</h1>}><Grocery/></Suspense>
            }, 
            {
              path: "/cart",
              element: <Cart/>
            }
        ],
        errorElement: <Error/>
    }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
