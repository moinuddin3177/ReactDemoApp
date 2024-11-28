import {Link} from "react-router-dom";
import {imagesArray} from "../../../utils/constant";
const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, sla, costForTwo } = props.restaurant_data;

    return (
      <div className="m-4 p-4 w-[250px] bg-pink-50 rounded-lg shadow-lg hover:bg-gray-300" >
        <Link to="/restaurantmenu"></Link>
        <img className="rounded-lg" src={imagesArray[Math.floor(Math.random() * imagesArray.length)]} />
        <h3 className="font-bold py-2">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.slaString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };
  export default RestaurantCard;