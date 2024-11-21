import RestaurantCard from "./RestaurantCard";
import mock_data from "../../utils/mockData";
import { useState } from "react";
import  ShimmerCard  from "./ShimmerCard";

export const Body = () => {
  const [api_data, setapi_data] = useState(mock_data);
  const [searchText, setSearchText] = useState("");

  if (api_data === 0) {
    <ShimmerCard />;
  }
  console.log("body rendered");

  return (
    <div className="body">
      <div className="search">
        <input
          className="search-box"
          type="text-box"
          value={searchText}
          placeholder="Search restaurants"
          onChange={(e) => {
            setSearchText(e.target.value);
            const searched_api_data = mock_data.filter((restaurant) =>
              restaurant.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            );
            setapi_data(searched_api_data);
          }}
        />
        <button
          className="filter-btn"
          onClick={() => {
            const filtered_api_data = api_data.filter(
              (restaurant) => restaurant.rating >= 4.1
            );
            setapi_data(filtered_api_data);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {api_data.map((x) => (
          <RestaurantCard key={x.name} restaurant_data={x} />
        ))}
      </div>
    </div>
  );
};
