import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../../utils/useRestaurantMenu";
import ShimmerCard from "./ShimmerCard";
import RestaurantCategory from "./RestaurantCategory";
import  {useState} from "react";

const RestaurantMenu = () =>{
   const { restaurantId } = useParams();
   const restaurantInfo = useRestaurantMenu(restaurantId);
   const [showIndex, setShowIndex] = useState(null);

   if(restaurantInfo === null) return <ShimmerCard />;


    const { name, cuisines, costForTwoMessage } = restaurantInfo?.cards[2]?.card?.card?.info;
    console.log(restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]);
    const categories = 
        restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (x) => x.card?.card?.["@type"] === 
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
    console.log("Categories - " + categories);
    categories?.forEach((category, index) => {
        console.log(`Category ${index + 1}:`, category.card?.card?.title);
    });
    



    return  (
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3 className="font-bold">Menu</h3>
            {/* <ul>
                {itemCards.map(itemcard => <li key = {itemcard?.card?.info?.id}> {itemcard?.card?.info?.name} - Rs. { itemcard?.card?.info?.defaultPrice/100 || itemcard?.card?.info?.price/100}</li>)}
            </ul> */}
            {categories.map((category, index) => (
                //Controlled compoennt
                <RestaurantCategory 
                    key = {category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false} 
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    )
};
export default RestaurantMenu;