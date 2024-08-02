import axios from "axios";




const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


  export const fetchData = async (query) => {
    try{
      const weatherData = await axios.get('http://api.weatherapi.com/v1/search.json',{
          params: {
              q: query,
              key:API_KEY
          }
      });
    console.log(weatherData.data);
    return weatherData.data;
    }catch(error){
      console.log("there is error",error)
    }
  }



