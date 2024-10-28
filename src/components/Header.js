import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  //const buttonName = "Login";
  const [buttonNameReact, setButtonNameReact] = useState("Login");
  console.log("Header Called.");
  useEffect(() => {
    console.log("Use Effect Called.");
  }, [buttonNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              buttonNameReact === "Login"
                ? setButtonNameReact("Logout")
                : setButtonNameReact("Login");
            }}
          >
            {buttonNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
