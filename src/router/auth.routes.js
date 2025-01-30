import {Router} from "express"
import { createUserHandler , loginHandler } from "../handler/auth.handler.js"
import { validateIt } from "../middleware/validate.js"
import { userSchemas } from "../common/joi.schemas/validate.schema.js"

const routes = Router()

routes.post("/signup" , validateIt(userSchemas.create) , createUserHandler)
routes.post("/login" , validateIt(userSchemas.login) , loginHandler)

export default routes   