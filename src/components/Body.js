import RestaurantCard from "./RestaurantCard";
import api_data from "../../utils/mockData";
  
  export const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="restaurant-container">
          { 
              api_data.map(x => <RestaurantCard key={x.name} restaurant_data={x} />)
          }
        </div>
      </div>
    );
  };
