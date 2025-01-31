import JWT from "jsonwebtoken";
import { ENV } from "../common/config.js";
import { CommonException } from "../common/exeption/index.js";

export async function authorization(request , response , next){
    try {
        if(!request.headers.authorization) return response.status(401).json(CommonException.Unauthorized("Access denied. No token provided."))
        const token = request.headers.authorization.split(" ")[1]
        if(!token) return response.status(401).json(CommonException.Unauthorized("Access denied. No token provided."))
        const payload = JWT.verify(token , ENV.JWT_SECRET)
        request.user = payload
        next()
    } catch (error) {
        response.status(400).json(CommonException.Unauthorized(error.message))

    }
}