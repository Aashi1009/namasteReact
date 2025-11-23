import { LOGO_URL } from "../utils/constant";


const RestaurantCard = ({resData}) => {
    const {name, cuisines, avgRating, cloudinaryImageId, costForTwo } = resData?.info ;
    const {deliveryTime} = resData?.info?.sla
    return(
      <div className="res-card">
          <img alt="restaurant-img" src={LOGO_URL + cloudinaryImageId}/>
          <h3>{name}</h3>
          <h5>{cuisines.join(", ")}</h5>
          <h5>{avgRating} stars</h5>
          <h5>{costForTwo}</h5>
          <h5>{deliveryTime} minutes</h5>
      </div>
    )
    
  }

export default RestaurantCard;  //default export