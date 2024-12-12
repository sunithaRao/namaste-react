import { LOGO_URL } from "../utils/constant";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    console.log("In Header useEffect..");
  }, [btnName]);

  return (
    <div className="flex justify-between bg-yellow-200 shadow-lg sm:bg-blue-200">
      <div className="logo-container">
        <img className="w-56" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: ({onlineStatus ? "GREEN" : "RED"})
          </li>
          <li className="px-4">
            <Link to="/namaste-react">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/namaste-react/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/namaste-react/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/namaste-react/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/namaste-react/cart">
              Cart ({cartItems.length} items)
            </Link>
          </li>
          <li className="px-4">
            <button
              className="login"
              onClick={() => {
                console.log("In Header");
                //btnName = "Logout";
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
