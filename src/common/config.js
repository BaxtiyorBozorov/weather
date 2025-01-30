import Dotenv from "dotenv"
import path from 'path'
import {env} from "process"

Dotenv.config({
    path:path.join(process.cwd() , '.env')
})

export const ENV = {
    HOST: env.HOST,
    PORT: env.PORT,
    DB_URL :env.DB_URL,
    JWT_SECRET: env.JWT_SECRET,
    WEATHER_API_KEY: env.WEATHER_API_KEY
} 