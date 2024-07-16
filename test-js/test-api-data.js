const axios = require('axios');
const API_key = 'f12e67f58ada4727b57201316241407';
const fetchData = async () => {
  try {
    const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=f12e67f58ada4727b57201316241407', {
      params: {
        q: [44.34,10.99],
    
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
