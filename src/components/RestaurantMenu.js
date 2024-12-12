import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  console.log("In RestaurantMenu");

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

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

    const catagories =
      resInfo?.data.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) =>
          c.card.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    console.log("catagories::", catagories);

    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <p className="font-bold text-lg">
          {catagories.map((catogery, index) => (
            <div className="py-2">
              <RestaurantCategory
                key={catogery?.card?.card?.title}
                data={catogery.card.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
              />
            </div>
          ))}
        </p>
      </div>
    );
  }
};

export default RestaurantMenu;
