import axios from 'axios';

const cors_api_host = 'https://cors-anywhere.herokuapp.com/';

export const api = axios.create({
  baseURL: `${cors_api_host}www.metaweather.com/api/`,
  headers: {
    'Access-Control-Allow-Headers': '*',
  },
});

// export const getClientLocalization = () => {
//   return navigator.geolocation.getCurrentPosition(
//     position => {
//       `${position.coords.latitude},${position.coords.longitude}`;
//     },
//     error => error.message,
//   );
// };

// export const fetchLocationData = async (): Promise<void> => {
//   try {
//     const { data } = await api.get(`/location/search/?query=${location}`);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const fetchLocationWeatherData = async (woeid: number): Promise<void> => {
  try {
    const { data } = await api.get(`/location/${woeid}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
