import RestaurantCard, { nearByRestaurantCard } from "./RestaurantCard";
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

  const NearbyRestaurants = nearByRestaurantCard(RestaurantCard);

  if (onlineStatus === false) {
    return <h1>Please check. Looks like your internet is down.</h1>;
  }

  useEffect(() => {
    console.log("In useEffect");
    fetchData();
  }, []);

  const fetchData = () => {
    console.log("In fetchData");
    //setTimeout(() => {
    //console.log("In Body setTimeout");
    resList =
      mockResList.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(resList);
    setListOfRestaurant(resList);
    setFilteredRestaurants(resList);
    //});
    //setListOfRestaurant(resList);
    //setFilteredRestaurants(resList);
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
            data-testid="searchInput"
            className="border border-black border-solid rounded px-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            data-testid="searchButton"
            className="px-4 py-2 bg-green-100 m-4 border border-black border-solid rounded-lg"
            onClick={() => {
              //console.log(searchText);
              //console.log(listOfRestaurant);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase().trim())
              );
              //console.log(filteredRestaurant);
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

      <div className="flex flex-wrap flex-row transition delay-150 duration-300 ease-in-out">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/namaste-react/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.sla.lastMileTravel < 3 ? (
              <NearbyRestaurants resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
  //  }
};

export default Body;
