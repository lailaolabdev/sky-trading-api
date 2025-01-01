const Joi = require("joi");
const userModel = require("../models/userModel");

const staffSchema = Joi.object({
    userName: Joi.string().min(3).required().messages({
        'string.empty': 'USERNAME_REQUIRED',
        'string.min': 'USERNAME_SHOULD_MORE_THAN_3',
        'any.required': 'USERNAME_REQUIRED',
    }),
    email: Joi.string().email().required().messages({
        'string.empty': 'EMAIL_REQUIRED',
        'string.email': 'EMAIL_INVALID',
        'any.required': 'EMAIL_REQUIRED'
    }),
    profileImage: Joi.string(),
    password: Joi.string().min(8).required().messages({
        'string.empty': 'PASSWORD_REQUIRED',
        'string.min': 'PASSWORD_SHOULD_MORE_THAN_8',
        'any.required': 'PASSWORD_REQUIRED'
    }),
    createdBy: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            "string.base": "CREATEDBY_MUST_BE_A_VALID_OBJECTID",
            "string.pattern.base": "CREATEDBY_MUST_BE_A_VALID_OBJECTID",
            "any.required": "CREATEDBY_IS_REQUIRED",
        }),
})


const validateStaff = (staff) => {
    const { error } = staffSchema.validate(staff);

    if (error) {
        // Map Joi's error details to a custom format
        const customErrors = error.details.map((err) => ({
            field: err.context.key, 
            message: err.message,  
        }));

        return { isValid: false, errors: customErrors };
    }

    return { isValid: true, errors: [] };
}
module.exports = { validateStaff }
