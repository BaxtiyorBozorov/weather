import { Router } from "express";
import { getWeatherCountries } from "../handler/weather.handler.js";
import { authorization } from "../middleware/auth.js";

const router = Router()

router.use(authorization)
router.get("/" , getWeatherCountries)

export default router