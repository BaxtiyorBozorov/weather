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
                        .pattern(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/, "password")
                        .required()
                        .messages({
                          "string.min": "Parol kamida 6 ta belgidan iborat bo‘lishi kerak.",
                          "string.max": "Parol 30 ta belgidan oshmasligi kerak.",
                          "string.pattern.name": "Parolda kamida bitta harf va bitta raqam bo‘lishi kerak.",
                          "any.required": "Parol kiritish majburiy."
                        }),
    }),
    login: Joi.object({
        username:Joi.string().required(),
        password:Joi.string().required()
    }),
}