import { useDispatch } from "react-redux";
import { addItem } from "../../../Redux/cartSlice";

const RestaurantCategoryItems = (items) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    return (
        <div>
            { items?.items.map((item) => (
                <div className="flex justify-between w-max">
                <div 
                    key={item.card.info.id} 
                    className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between w-max">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span> - ₹ 
                            <span>{item?.card?.info?.price /100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4 ">  
                    <div className="absolute">
                        <button 
                            className="p-2 bg-black text-white shadow-lg mx-5 rounded-lg"
                            onClick={ () => handleAddItem(item)}
                        >
                            Add +
                        </button>
                    </div>
                 </div>   
                </div>
                
                 </div>
            ))}
        </div>
    )
}
export default RestaurantCategoryItems;