import React from "react";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  //console.log(items);
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-gray-900">{item.card.info.name}</span>
              <span>
                {" "}
                - Rs.{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <span className="text-xs text-gray-400">
              {item.card.info.description}
            </span>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg  bottom-0"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-40"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
