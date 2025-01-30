import mongoose from "mongoose";

const WeatherDataSchema = new mongoose.Schema({
  name: String,
  country: String,
  lat: Number,
  lon: Number,
  temp_c: Number,
  temp_color: String,
  wind_kph: Number,
  wind_color: String,
  cloud: Number,
  cloud_color: String
} , {versionKey: false});

export default mongoose.model('WeatherData', WeatherDataSchema);