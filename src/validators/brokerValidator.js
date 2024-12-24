const Joi = require("joi");

// MongoDB ObjectId regex validator
const objectIdPattern = /^[0-9a-fA-F]{24}$/;

const schema = Joi.object({
    userID: Joi.string()
        .pattern(objectIdPattern)
        .messages({
            "string.pattern.base": "USERID_MUST_BE_A_VALID_OBJECTID"
        }),

    name: Joi.string()
        .required()
        .messages({
            "string.base": "NAME_MUST_BE_A_STRING",
            "any.required": "NAME_IS_REQUIRED",
        }),

    nameEN: Joi.string()
        .required()
        .messages({
            "string.base": "NAMEEN_MUST_BE_A_STRING",
            "any.required": "NAMEEN_IS_REQUIRED",
        }),

    subtitle: Joi.string()
        .required()
        .messages({
            "string.base": "SUBTITLE_MUST_BE_A_STRING",
            "any.required": "SUBTITLE_IS_REQUIRED",
        }),

    subtitleEN: Joi.string()
        .required()
        .messages({
            "string.base": "SUBTITLEEN_MUST_BE_A_STRING",
            "any.required": "SUBTITLEEN_IS_REQUIRED",
        }),

    foundedYear: Joi.string()
        .required()
        .messages({
            "string.base": "FOUNDEDYEAR_MUST_BE_A_STRING",
            "any.required": "FOUNDEDYEAR_IS_REQUIRED",
        }),

    brokerLink: Joi.string()
        .required()
        .messages({
            "string.base": "BROKERLINK_MUST_BE_A_STRING",
            "any.required": "BROKERLINK_IS_REQUIRED",
        }),
    logo: Joi.string()
        .required()
        .messages({
            "string.base": "LOGO_MUST_BE_A_STRING",
            "any.required": "LOGO_IS_REQUIRED",
        }),
    top: Joi.number()
        .integer()
        .messages({
            "number.base": "TOP_MUST_BE_AN_INTEGER",
        }),
    createdBy: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            "string.base": "CREATEDBY_MUST_BE_A_VALID_OBJECTID",
            "string.pattern.base": "CREATEDBY_MUST_BE_A_VALID_OBJECTID",
            "any.required": "CREATEDBY_IS_REQUIRED",
        }),
});

// Validation Function
const validateBrokerData = (req) => {
    const { error, value } = schema.validate(req.body, { abortEarly: true });

    if (error) {
        return { isValid: false, message: error.details[0].message };
    }

    return { isValid: true, message: "VALID_BROKER_DATA"};
};

module.exports = validateBrokerData;
