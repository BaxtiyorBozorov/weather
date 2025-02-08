import axios from "axios";
import { ENV } from "../config.js";
import formatWeatherData from "../utils/formatWeatherData.js";
import weatherModel from "../db/model/weather.model.js";

const fetchWeatherData = async (country) => {
  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${ENV.WEATHER_API_KEY}&q=${country}`);
    return formatWeatherData(response.data);
  } catch (err) {
    if (err.response && err.response.status === 400) {
      return { country, error: 'Country not found' }; // Mamlakat topilmagan holat
    }
    throw new Error(`Failed to fetch weather data for ${country}`);
  }
};

const fetchWeatherForMultipleCountries = async (countries) => {
  const weatherData = [];
  for (const country of countries) {
    const data = await fetchWeatherData(country);
    weatherData.push(data);
  }
  return weatherData;
};


const fetchAllCountries = async () => {
  const response  = await weatherModel.find()
  return response;
};

// const findOneCountry = async(countrey)
// }

export { fetchWeatherData, fetchWeatherForMultipleCountries, fetchAllCountries };