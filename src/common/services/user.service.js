import { userModel } from "../db/model/user.model.js";
import { BaseService } from "./base.service.js";


class UserService extends BaseService {}

export const userService = new UserService(userModel)