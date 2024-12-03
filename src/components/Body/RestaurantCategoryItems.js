const RestaurantCategoryItems = (items) => {
    console.log(items);
    return (
        <div>
            { items.items.map((item) => (
                <div 
                    key={item.card.info.id} 
                    className="p-2 m-2 border border-gray-200 border-b-2"
                >
                    <div>
                        <span>{item?.card?.info?.name}</span> - ₹ 
                        <span>{item?.card?.info?.price /100}</span>
                    </div>
                   <p className="text-xs">{item?.card?.info?.description}</p>
                </div>
            ))}
        </div>
    )
}
export default RestaurantCategoryItems;