import { RESTAURANT_LIST } from "../utils/constant";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// Body 
const Body = () => {
  
  const [listOfRestaurant, setListOfRestaurant] = useState([])
  const [listOfRestaurantUpdate, setListOfRestaurantUpdate] = useState([])

  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {

    fetchData()
    

  },[])

  // useState(() => {

  //   updateData()
  // })
  
  const fetchData = async () => {
    try{
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const data = await fetch('https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5868397&lng=73.68599499999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      if(!data.ok) throw new Error("see error in console")
      const json = await data.json();
      console.log(json)
      setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setListOfRestaurantUpdate(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setLoading(false)
    }catch(err){
      console.log(err)
    }
    
  }

  // const updateData = async() => {
  //   try{
  //     const response = await fetch('https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/update', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json', 
  //       },
  //       body: JSON.stringify()
  //     });


  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  
  return(
      <div className="body-container">
        <div className="button-container">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button className="search-button" onClick={() => {
            const filteredListOfRestaurant = listOfRestaurantUpdate.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase()))
            setListOfRestaurant(filteredListOfRestaurant)
          }}>Search</button>
          <button className="top-rated-restaurant" onClick={() => {
            const filteredData = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            )
            setListOfRestaurant(filteredData)
          }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {loading? <Shimmer /> : listOfRestaurant.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
          
        </div>
  
      </div>
    )
  }

  export default Body;