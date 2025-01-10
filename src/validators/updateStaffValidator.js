const Joi = require("joi");
const userModel = require("../models/userModel");

const staffSchema = Joi.object({
    userName: Joi.string()
        .min(3)
        .messages({
            'string.min': 'USERNAME_SHOULD_MORE_THAN_3',
        }),

    email: Joi.string()
        .email()
        .messages({
            'string.email': 'EMAIL_INVALID',
        }),

    role: Joi.string(), // Already optional

    profileImage: Joi.string(), // Already optional

    password: Joi.string()
        .min(8)
        .messages({
            'string.min': 'PASSWORD_SHOULD_MORE_THAN_8',
        }),
    updatedBy: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            "string.base": "UPDATEDBY_MUST_BE_A_VALID_OBJECTID",
            "string.pattern.base": "UPDATEDBY_MUST_BE_A_VALID_OBJECTID",
            "any.required": "UPDATEDBY_IS_REQUIRED",
        }),
})


const validateStaff = (staff) => {
    const { error } = staffSchema.validate(staff);

    if (error) {
        return { isValid: false, message: error.details[0].message  };
    }

    return { isValid: true, message: "VALID_STAFF_DATA" };
}
module.exports = validateStaff;
