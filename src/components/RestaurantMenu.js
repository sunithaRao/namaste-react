import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6868159&lng=83.2184815&restaurantId=167119&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    setResInfo(json.data);
    //console.log("resInfo:::", json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards, title } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <h3>{title}</h3>

      <ul>
        {/*  {itemCards.map((item) => (
          <li>
            {item.card.info.name} - {item.card.info.price}
          </li>
        ))}
        */}
        {
             
        cards.map((card) => (
          //if (card.card.card.title !== undefined) {

          <li>
            {card.card.card.title}
            <ul>
              {
              itemCards.map((card) => (
                <li>{card.card.info.name}</li>
              ))
              }
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
