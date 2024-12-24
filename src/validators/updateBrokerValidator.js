const Joi = require("joi");

// MongoDB ObjectId regex validator
const objectIdPattern = /^[0-9a-fA-F]{24}$/;

const schema = Joi.object({
    userID: Joi.string()
        .pattern(objectIdPattern)
        .messages({
            "string.pattern.base": "USERID_MUST_BE_A_VALID_OBJECTID",
        }),

    name: Joi.string()
        .messages({
            "string.base": "NAME_MUST_BE_A_STRING",
        }),

    nameEN: Joi.string()
        .messages({
            "string.base": "NAMEEN_MUST_BE_A_STRING",
        }),

    subtitle: Joi.string()
        .messages({
            "string.base": "SUBTITLE_MUST_BE_A_STRING",
        }),

    subtitleEN: Joi.string()
        .messages({
            "string.base": "SUBTITLEEN_MUST_BE_A_STRING",
        }),

    foundedYear: Joi.string()
        .messages({
            "string.base": "FOUNDEDYEAR_MUST_BE_A_STRING",
        }),

    brokerLink: Joi.string()
        .messages({
            "string.base": "BROKERLINK_MUST_BE_A_STRING",
        }),

    logo: Joi.string()
        .messages({
            "string.base": "LOGO_MUST_BE_A_STRING",
        }),
    isRecommended: Joi.boolean()
        .messages({
            "string.base": "LOGO_MUST_BE_A_BOOLEAN",
        }),

    updatedBy: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            "string.base": "UPDATEDBY_MUST_BE_A_VALID_OBJECTID",
            "string.pattern.base": "UPDATEDBY_MUST_BE_A_VALID_OBJECTID",
            "any.required": "UPDATEDBY_IS_REQUIRED",
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
