import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData.info;
  return (
    <>
      <div className="m-4 p-4 w-[250px] rounded-lg bg-blue-400 shadow-2xl hover:bg-gray-300">
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

export default RestaurantCard;
