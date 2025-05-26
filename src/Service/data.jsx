import axios from 'axios';
const VITE_TOMORROW_API_KEY = import.meta.env.VITE_TOMORROW_API_KEY ;

export const fData = async (location, lat, lon) => {
    try {
        const res = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${API_key}`);
        const geocodingResponse = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.error('API Error:', err);
        throw err;
    }
}

export const getData = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const locationData = `${lat},${lon}`;
                fData(locationData, lat, lon)
                    .then(resolve)
                    .catch(reject);
            },
            (error) => {
                console.error('Geolocation error:', error);
                reject(error);
            }
        );
    });
}

