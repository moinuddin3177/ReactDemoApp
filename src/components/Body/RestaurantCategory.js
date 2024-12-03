import RestaurantCategoryItems from "./RestaurantCategoryItems";

const RestaurantCategory = (data, showItems) => {
  
    return (
        <div className="bg-gray-50 mx-auto my-4 shadow-lg p-4 cursor-pointer">
            <div className="flex justify-between" onClick={handleClick}>
                <span className="font-bold">{data?.data?.title} ({data?.data?.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            
            { showItems && <RestaurantCategoryItems  items = {data?.data?.itemCards}/>}
        </div>

    )
}
export default RestaurantCategory;