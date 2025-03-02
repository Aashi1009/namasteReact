import { RESTAURANT_LIST } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
// Body 
const Body = () => {
    return(
      <div className="body-container">
        <div className="search-container">Search</div>
        <div className="res-container">
          {RESTAURANT_LIST.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
        </div>
  
      </div>
    )
  }

  export default Body;