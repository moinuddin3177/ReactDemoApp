const RestaurantCard = (props) => {

    const { name, cuisine, rating, eta, costfortwo, imageSrc } = props.restaurant_data;
    return (
      <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img className="restaurant-logo" alt="res-logo" src={imageSrc}></img>
        <h3>{name}</h3>
        <h4>{cuisine}</h4>
        <h4>{rating}</h4>
        <h4>{eta}</h4>
        <h4>{costfortwo}</h4>
      </div>
    );
  };
  export default RestaurantCard;