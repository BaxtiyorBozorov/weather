import express from "express"
import { connectDB } from "./common/db/connect.js"
import { ENV } from "./common/config.js";

import weatherRoutes from "./router/weather.routes.js"


import authRoutes from "./router/auth.routes.js"

import "./common/cron/fetch.weather.js"

const app = express()

// console.log( new Date());


async function start() {
    await connectDB()
    app.use(express.json())
    app.use('/auth' , authRoutes)
    app.use('/weather' , weatherRoutes)
    console.log(`server is running on http://${ENV.HOST}:${ENV.PORT}`);
    
}

app.listen(ENV.PORT , start)


