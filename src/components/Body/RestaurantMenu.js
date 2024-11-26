import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
    const [restaurantInfo, setrestaurantInfo] = useState(null);
    const { restaurantId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4066765&lng=78.4076841&restaurantId=" +
            restaurantId +
            "&catalog_qa=undefined&query=Burger&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setrestaurantInfo(json.data);
    }
    if(restaurantInfo === null) return <ShimmerCard/>;

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