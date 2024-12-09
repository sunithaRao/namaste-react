import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu = () => {
  console.log("In RestaurantMenu");

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  if (resInfo != null) {
    console.log("....resInfo.....");
    const { id, name, city, cuisines, costForTwoMessage } =
      resInfo?.data.cards[2]?.card?.card?.info;

    let resCardInfo =
      resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card
        ?.card;

    if (resCardInfo.hasOwnProperty("categories")) {
      resCardInfo =
        resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card
          ?.card.categories[0];
    }

    let { itemCards, title } = resCardInfo;
    return (
      <div className="p-4 m-4 border border-black border-solid rounded-lg bg-blue-200">
        <h1 className="font-bold py-4 text-xl">{name}</h1>
        <ul className="underline text-orange-600 py-5">
          {cuisines.map((c, index) => (
            <li key={index}>
              <a href="https://www.swiggy.com/city/vizag/healthy-food-cuisine-restaurants">
                {c + ", " + " "}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-bold text-blue-800 py-4">
          Cost for Two: {costForTwoMessage}
        </p>
        <h4>
          <p className="font-bold text-blue-800 underline py-2">{title}:</p>
          <ul>
            {itemCards.map((item, index) => (
              <li key={item.card.info.name}>
                {index + 1 + ".  " + item.card.info.name} - Rs.{" "}
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </li>
            ))}
          </ul>
        </h4>
      </div>
    );
  }
};

export default RestaurantMenu;
