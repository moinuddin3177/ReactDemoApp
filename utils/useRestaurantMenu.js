import { useEffect, useState } from "react";
import ShimmerCard from "../src/components/Body/ShimmerCard";

const useRestaurantMenu = (restaurantId) => {
    const [ restaurantInfo, setRestaurantInfo ] = useState(null);
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
        setRestaurantInfo(json.data);
    }
    return restaurantInfo;
}
export default useRestaurantMenu;