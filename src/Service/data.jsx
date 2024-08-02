import axios from 'axios';
const API_key = 'uX1QylB4rqY3PQVfZPSiLA9l0xiYw2dr';

export const fData = async (location,lat,lon) => {
    try {
        const res = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${API_key}`);
        const geocodingResponse = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
        console.log(res.data);
        console.log(geocodingResponse.data.city);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}
export const getData = ()=>{
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const locationData = `${lat},${lon}`;
            fData(locationData,lat,lon).then(resolve).catch(reject);
             });
    },(error)=>{
        console.log('gelocation error:',error);
        reject(error);
    })
   
}

