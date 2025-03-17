import { RESTAURANT_LIST } from "../utils/constant";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
// Body 
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(RESTAURANT_LIST)
    return(
      <div className="body-container">
        <div className="button-container">
          <button className="top-rated-restaurant" onClick={() => {
            const filteredData = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            )
            setListOfRestaurant(filteredData)
          }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {listOfRestaurant.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
        </div>
  
      </div>
    )
  }

  export default Body;