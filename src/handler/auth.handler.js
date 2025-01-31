import md5 from "md5";
import { HttpErrorCodes } from "../common/exeption/error.code.js";
import { CommonException } from "../common/exeption/index.js";
import { userService } from "../common/services/user.service.js";
import JWT from "jsonwebtoken"
import { ENV } from "../common/config.js";



export async function createUserHandler(request , response){
    try {
        const data = request.body
        const user = await userService.findByQuery({username: data.username})
        console.log(user);
        
        if(user.length){
            return response.status(HttpErrorCodes.BadRequest).json(CommonException.BadRequest("User already exists"))
        }
        data.password = md5(data.password)
        const result = await userService.create(data)
        return response.status(201).json(CommonException.Success(result))
    } catch (error) {
        console.log(error);
        response.status(HttpErrorCodes.ServerError).json(CommonException.Unknown(error.message))
    }
}


export async function loginHandler(request , response){
    try {
        const {username , password} = request.body
        const user = await userService.findByQuery({username: username})
        if(!user.length){
            return response.status(HttpErrorCodes.NotFound).json(CommonException.NotFound("User not found"))
        }
        if(user[0].password !== md5(password)){
            return response.status(HttpErrorCodes.Unauthorized).json(CommonException.Unauthorized("Invalid password"))
        }
        const token = JWT.sign({id: user[0]._id , username: user[0].username} , ENV.JWT_SECRET)
        return response.status(HttpErrorCodes.Success).json({message: "OK" , token})
        
    } catch (error) {
        console.log(error);
        response.status(HttpErrorCodes.ServerError).json(CommonException.Unknown(error.message))
 }}