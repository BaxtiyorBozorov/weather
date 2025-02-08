
import weatherModel from "../common/db/model/weather.model.js"
import { HttpErrorCodes } from "../common/exeption/error.code.js"
import { CommonException } from "../common/exeption/index.js"
import { fetchAllCountries } from "../common/services/weather.service.js"
import { formatText } from "../common/utils/formatString.js"


export async function getWeatherCountries(req , res) {
    const countries = req.query.countries
    if(!countries){
        const countries = await fetchAllCountries()
        
        return res.status(HttpErrorCodes.Success).json(CommonException.Success(countries))
    }
    const countryList = countries.split(",")
    try {
        const weatherData = []
        for(const country of countryList){
            const data = await weatherModel.find({country:formatText(country)})
            if(data[0]) weatherData.push(data[0])
            else weatherData.push({message:`This country not found : ${country}`})
        }
        res.status(HttpErrorCodes.Success).json(CommonException.Success(weatherData))
    } catch (error) {
        res.status(HttpErrorCodes.ServerError).json(CommonException.Unknown(error.message))
    }
}