import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
// import axios from "axios";
import { Link } from "react-router-dom";

export const Body = () => {
  const [api_data, setapi_data] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Create axios instance with base configuration
    // const api = axios.create({
    //     baseURL: "https://www.swiggy.com",
    //     headers: {
    //         "Access-Control-Allow-Origin": "*"
    //     }
    // });

    try {
      // Use axios instead of fetch
      // const response = await api.get("/dapi/restaurants/list/v5", {
      //     params: {
      //         lat: "17.405765",
      //         lng: "78.4044968",
      //         collection: "80402",
      //         tags: "layout_Shawarma_Contextual",
      //         sortBy: "",
      //         filters: "",
      //         type: "rcv2",
      //         offset: "0",
      //         page_type: "null"
      //     }
      // });
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4066765&lng=78.4076841&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const response = await data.json();
      const cardsWithName = response?.data?.cards
        ?.filter((card) => card?.card?.card?.info?.name)
        ?.map((card) => card?.card?.card?.info);

      setapi_data(cardsWithName);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return api_data.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="bg-blue-900">
      <div className="flex space-x-10 m-4 p-4">
        <input
          className="border border-solid border-black"
          type="text"
          value={searchText}
          placeholder=" Search restaurants "
          onChange={(e) => {
            setSearchText(e.target.value);
           
              const searched_api_data = api_data.filter((restaurant) =>
                restaurant.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setapi_data(searched_api_data);
            
          }}
        />
        <button
          className="flex px-4 py-2 bg-green-200 rounded-lg"
          onClick={() => {
            const filtered_api_data = api_data.filter(
              (restaurant) => restaurant.avgRating >= 4.3
            );
            setapi_data(filtered_api_data);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className=" flex flex-wrap">
        {api_data.map((restaurant) => (
          <Link key={restaurant.name} to={"/restaurant/" + restaurant.id}><RestaurantCard restaurant_data={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
