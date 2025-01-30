
import { HttpErrorCodes } from "../common/exeption/error.code.js"
import { CommonException } from "../common/exeption/index.js"
import { fetchWeatherForMultipleCountries } from "../common/services/weather.service.js"


export async function getWeatherCountries(req , res) {
    const countries = req.query.countries
    if(!countries) return res.status(HttpErrorCodes.BadRequest).json(CommonException.BadRequest("Countries parameter is required"))
    const countryList = countries.split(",")
    try {
        const weatherData = await fetchWeatherForMultipleCountries(countryList)
        res.status(HttpErrorCodes.Success).json(CommonException.Success(weatherData))
    } catch (error) {
        res.status(HttpErrorCodes.ServerError).json(CommonException.Unknown(error.message))
    }
}