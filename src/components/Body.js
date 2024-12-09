import RestaurantCard from "./RestaurantCard";
import { mockResList } from "../utils/mockData/mockResList";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

/* const fetchData = async () => {
  const data = await fetch("http://api-url.com");
  const json = await data.json();
  console.log(json);
}; */

//let listOfRestaurant = resList;

const Body = () => {
  let resList;
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(" ");

  const onlineStatus = useOnlineStatus();

  //console.log("onlineStatus:::", onlineStatus);

  if (onlineStatus === false) {
    return <h1>Please check. Looks like your internet is down.</h1>;
  }

  useEffect(() => {
    console.log("In useEffect");
    fetchData();
  }, []);

  const fetchData = () => {
    console.log("In fetchData");
    setTimeout(() => {
      //console.log("In Body setTimeout");
      resList =
        mockResList.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      //console.log(resList);
      setListOfRestaurant(resList);
      setFilteredRestaurants(resList);
    }, 2000);
  };

  //console.log("In render");
  // if (resList) {

  if (listOfRestaurant.length === 0) return <Shimmer />;
  if (filteredRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter m-4 flex justify-evenly bg-blue-200 rounded-lg shadow-lg">
        <div className="p-4">
          <input
            type="text"
            className="border border-black border-solid rounded"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 border border-black border-solid rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4">
          <button
            className="px-4 py-4 bg-gray-100 border border-black border-solid rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap flex-row">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
  //  }
};

export default Body;
