const Joi = require("joi");

const userSchema = Joi.object({
    email_userName: Joi.string()
        .min(3)
        .required()
        .messages({
            "string.base": "USERNAME_OR_EMAIL_MUST_BE_A_STRING",
            "string.min": "USERNAME_OR_EMAIL_MUST_BE_AT_LEAST_3_CHARACTERS_LONG",
            "any.required": "USERNAME_OR_EMAIL_IS_REQUIRED",
        }),

    password: Joi.string()
        .required()
        .messages({
            "string.base": "PASSWORD_MUST_BE_A_STRING",
            "any.required": "PASSWORD_IS_REQUIRED",
        }),
});

// Validation Function
const validateUserData = (req) => {
    const { error, value } = userSchema.validate(req.body, { abortEarly: true });

    if (error) {
        return { isValid: false, message: error.details[0].message };
    }

    return { isValid: true, message: "VALID_USER_DATA" };
};

module.exports = validateUserData;
