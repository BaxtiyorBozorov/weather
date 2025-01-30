import cron from "node-cron"
import { fetchWeatherForMultipleCountries } from "../services/weather.service.js";
import weatherModel from "../db/model/weather.model.js";

cron.schedule("0 0 12 * * *" , async () => {
    const countries = [
    "afghanistan","albania", "algeria", "andorra", "angola", "argentina", "armenia", "australia", "austria", "azerbaijan", "bahamas","bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", 
    "bhutan", "bolivia", "bosnia and herzegovina", "botswana", "brazil", "brunei", "bulgaria", "burkina faso", 
    "burundi", "cambodia", "cameroon", "canada", "cape verde", "central african republic", "chad", "chile", 
    "china", "colombia", "comoros", "congo", "costa rica", "croatia", "cuba", "cyprus", "czech republic", 
    "denmark", "djibouti", "dominica", "dominican republic", "ecuador", "egypt", "el salvador", "equatorial guinea", 
    "eritrea", "estonia", "eswatini", "ethiopia", "fiji", "finland", "france", "gabon", "gambia", "georgia", 
    "germany", "ghana", "greece", "grenada", "guatemala", "guinea", "guinea-bissau", "guyana", "haiti", "honduras", 
    "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy", "ivory coast", 
    "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kiribati", "korea", "kosovo", "kuwait", "kyrgyzstan", 
    "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", 
    "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "marshall islands", "mauritania", "mauritius", 
    "mexico", "micronesia", "moldova", "monaco", "mongolia", "montenegro", "morocco", "mozambique", "myanmar", 
    "namibia", "nauru", "nepal", "netherlands", "new zealand", "nicaragua", "niger", "nigeria", "north macedonia", 
    "norway", "oman", "pakistan", "palau", "panama", "papua new guinea", "paraguay", "peru", "philippines", 
    "poland", "portugal", "qatar", "romania", "russia", "rwanda", "saint kitts and nevis", "saint lucia", 
    "saint vincent and the grenadines", "samoa", "san marino", "sao tome and principe", "saudi arabia", "senegal", 
    "serbia", "seychelles", "sierra leone", "singapore", "slovakia", "slovenia", "solomon islands", "somalia", 
    "south africa", "south sudan", "spain", "sri lanka", "sudan", "suriname", "sweden", "switzerland", "syria", 
    "taiwan", "tajikistan", "tanzania", "thailand", "timor-leste", "togo", "tonga", "trinidad and tobago", 
    "tunisia", "turkey", "turkmenistan", "tuvalu", "uganda", "ukraine", "united arab emirates", "united kingdom", 
    "united states", "uruguay", "uzbekistan", "vanuatu", "vatican city", "venezuela", "vietnam", "yemen", 
    "zambia", "zimbabwe"
]

    console.log('Fetching weather data for countries: ' , countries);
    try {
        const weatherData = await fetchWeatherForMultipleCountries(countries)

        for (const data of weatherData) {
            if(data.error)
                console.error(`Error for ${data.country}:`, data.error);
            else{
                const existingData = await weatherModel.findOne({country: data.country})
                if(existingData){
                    await weatherModel.updateOne({country: data.country} , data)
                    console.log(`updated ${data.country} weather data`);
                    
                } else {
                    await weatherModel.create(data)
                    console.log(`created ${data.country} weather data`);
            }

        }
    }
}  
    catch (error) {
        console.error('Error in cron job: ' , error);     
    }
    
})

// (async () => {
//     console.log('Manually running cron job...');
//     await import('./fetch.weather').default();
// })();
