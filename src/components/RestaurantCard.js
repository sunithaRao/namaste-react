import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  console.log("In RestaurantCard props: ", props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData;
  return (
    <>
      <div
        data-testid="resCard"
        className="m-4 p-4 w-[250px] rounded-lg bg-blue-400 shadow-2xl hover:bg-gray-300"
      >
        <img
          className="rounded-lg h-[200px] w-[200px]"
          alt="res"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <h3 className="font-bold py-4 text-xl">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{costForTwo}</h5>
        <h5>{avgRating}</h5>
        <h5>{sla.slaString}</h5>
      </div>
    </>
  );
};

//Higher Order Component

//input - RestaurantCard => RestaurantCardPromoted

export const nearByRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white mx-2 px-2 rounded">
          NearBy
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
