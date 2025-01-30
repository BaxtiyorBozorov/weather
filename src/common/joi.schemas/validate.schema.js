import Joi from "joi";

export const userSchemas = {
    create: Joi.object({
        name: Joi.string()
                  .min(3)
                  .max(30)
                  .required(),
        surname: Joi.string()
                      .min(3)
                      .max(30)
                      .required(),
        username: Joi.string()
                      .min(3)
                      .max(30)
                      .required(),

        password: Joi.string()
                      .trim()
                      .min(6)
                      .max(30)
                      .required(),
    }),
    login: Joi.object({
        username:Joi.string().required(),
        password:Joi.string().required()
    }),
}