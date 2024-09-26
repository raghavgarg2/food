import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantContainer = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>looks like you are offline</h1>;
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <input
        className="m-10 bg-gray-200 rounded-2xl w-1/2 p-2 font-bold text-black"
        type="text"
        placeholder="food,grocery,drinks etc"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setFilteredList(
            resList.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(searchText)
            )
          );
        }}
        className="bg-black w-auto px-4 py-4 rounded-xl text-stone-50 m-4"
      >
        search
      </button>

      <button
        onClick={() => {
          setFilteredList(
            resList.filter((restaurant) => restaurant.info.avgRating > 4)
          );
        }}
        className="bg-black w-auto px-4 py-4 rounded-xl text-stone-50"
      >
        top rated restaurant
      </button>
      <div className="m-10 flex flex-wrap">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurantmenu/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
