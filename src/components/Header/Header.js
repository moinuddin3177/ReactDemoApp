import logo_url from "../../../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../../utils/useOnlineStatus";

const Header = () => {
  const [buttontName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
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
          <li>
            Online Status: {onlineStatus ?  "Green" : "Red"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li > 
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
