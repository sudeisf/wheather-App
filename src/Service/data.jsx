import axios from 'axios';
const VITE_TOMORROW_API_KEY = import.meta.env.VITE_TOMORROW_API_KEY;

export const fData = async (location, lat, lon) => {
    try {
        if (!VITE_TOMORROW_API_KEY) {
            throw new Error('Tomorrow.io API key is not configured');
        }

        const res = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${VITE_TOMORROW_API_KEY}`);
        
        if (!res.data) {
            throw new Error('No data received from Tomorrow.io API');
        }

        const geocodingResponse = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
        
        if (!geocodingResponse.data) {
            throw new Error('No data received from geocoding API');
        }

        // Merge location data from geocoding response
        res.data.location = {
            ...res.data.location,
            name: geocodingResponse.data.city || geocodingResponse.data.locality || 'Unknown Location'
        };

        console.log('Weather data:', res.data);
        return res.data;
    } catch (err) {
        console.error('API Error:', err);
        if (err.response) {
            console.error('Error response:', err.response.data);
            console.error('Error status:', err.response.status);
        }
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

