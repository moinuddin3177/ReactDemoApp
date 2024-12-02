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
    <div className="flex justify-between bg-pink-100 shadow-md m-2">
      <div className="logo-container">
        <img className="w-56" src={logo_url}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 space-x-5">
          <li className="px-4">
            Online Status: {onlineStatus ?  "✅" : "❌"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4"> 
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
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
