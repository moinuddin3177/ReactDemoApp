import {Link} from "react-router-dom";
import {imagesArray} from "../../../utils/constant";
import { useContext } from "react";
import UserContext from "../../../utils/UserContext";
const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, sla, costForTwo } = props.restaurant_data;
    const data = useContext(UserContext);

    return (
      <div className="m-4 p-4 w-[250px] bg-pink-50 rounded-lg shadow-lg hover:bg-gray-300" >
        <Link to="/restaurantmenu"></Link>
        <img className="rounded-lg" src={imagesArray[Math.floor(Math.random() * imagesArray.length)]} />
        <h3 className="font-bold py-2">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.slaString}</h4>
        <h4>{costForTwo}</h4>
        <h4>User: {data.loggedInUser}</h4>

      </div>
    );
  };

  export const PromotedCard = (RestaurantCard) => {
    return (props) => (
      <div>
        <label className="absolute bg-black text-white  m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
  export default RestaurantCard;