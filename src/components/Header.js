import logo_url from "../../utils/constant";
import { useEffect, useState } from "react";

const Header = () => {
  const [buttontName, setButtonName] = useState("Login");
  console.log("header rendered")

  // if no dependency array is passed => useEffect will called on every render
  // if dependency array is empty => useEfect is called on initial render(just once)
  // if dependency array is passed => useEffect is called every time passed dependency changes

  useEffect(() => {
    console.log("useEffect Rendered");
  }, [buttontName])

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo_url}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button 
            className="btn-login"
            onClick={ () => buttontName === "Login" ? setButtonName("Logout") : setButtonName("Login")}
          >{buttontName}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
