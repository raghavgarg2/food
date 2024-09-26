import { RES_PHOTO_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div className="m-4 w-72">
      <img
        className="h-48 w-72 rounded-xl"
        src={RES_PHOTO_URL + cloudinaryImageId}
      ></img>

      <div className="font-bold">{name}</div>
      <div>
        <span className="font-bold"> ⭐ {avgRating} </span>
        <span className="font-bold">. {deliveryTime} minutes</span>
      </div>
      <div>{cuisines.join(",")}</div>
    </div>
  );
};

export default RestaurantCard;
