import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
   const { restaurantId } = useParams();
   const restaurantInfo = useRestaurantMenu(restaurantId);


    const { name, cuisines, costForTwoMessage } = restaurantInfo?.cards[2]?.card?.card?.info;
    const itemCards = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards;
    
    const itemCardsFiltered = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(x => x?.card?.itemCards);
    console.log(itemCardsFiltered);


    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <h3>Menu</h3>
            <ul>
                {itemCards.map(itemcard => <li key = {itemcard?.card?.info?.id}> {itemcard?.card?.info?.name} - Rs. { itemcard?.card?.info?.defaultPrice/100 || itemcard?.card?.info?.price/100}</li>)}
            </ul>
        </div>
    )
};
export default RestaurantMenu;