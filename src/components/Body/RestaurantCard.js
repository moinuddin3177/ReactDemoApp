import {Link} from "react-router-dom";
import {IMG_CDN_URL} from "../../../utils/constant";
const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = props.restaurant_data;
    console.log(IMG_CDN_URL + cloudinaryImageId);

    return (
      <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
        <Link to="/restaurantmenu"></Link>
        <img className="restaurant-logo" alt="res-logo" src={IMG_CDN_URL + cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.slaString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };
  export default RestaurantCard;