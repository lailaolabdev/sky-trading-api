const Joi = require("joi");

// MongoDB ObjectId regex validator
const objectIdPattern = /^[0-9a-fA-F]{24}$/;

const schema = Joi.object({
    userName: Joi.string()
        .required()
        .messages({
            "string.base": "USERNAME_MUST_BE_A_STRING",
            "any.required": "USERNAME_IS_REQUIRED",
        }),

    userNameEN: Joi.string()
        .required()
        .messages({
            "string.base": "USERNAMEEN_MUST_BE_A_STRING",
            "any.required": "USERNAMEEN_IS_REQUIRED",
        }),

    image: Joi.string()
        .required()
        .messages({
            "string.base": "IMAGE_MUST_BE_A_STRING",
            "any.required": "IMAGE_IS_REQUIRED",
        }),

    brokerID: Joi.string()
        .pattern(objectIdPattern)
        .required()
        .messages({
            "string.pattern.base": "BROKERID_MUST_BE_A_VALID_OBJECTID",
            "any.required": "BROKERID_IS_REQUIRED",
        }),

    ratings: Joi.number()
        .required()
        .messages({
            "number.base": "RATINGS_MUST_BE_A_NUMBER",
            "any.required": "RATINGS_IS_REQUIRED",
        }),

    reviews: Joi.string()
        .required()
        .messages({
            "string.base": "REVIEWS_MUST_BE_A_STRING",
            "any.required": "REVIEWS_IS_REQUIRED",
        }),

    reviewsEN: Joi.string()
        .required()
        .messages({
            "string.base": "REVIEWSEN_MUST_BE_A_STRING",
            "any.required": "REVIEWSEN_IS_REQUIRED",
        }),

    createdBy: Joi.string()
        .pattern(objectIdPattern)
        .required()
        .messages({
            "string.pattern.base": "CREATEDBY_MUST_BE_A_VALID_OBJECTID",
            "any.required": "CREATEDBY_IS_REQUIRED",
        }),
});

// Validation function
const validateTestimonialData = (req) => {
    const { error, value } = schema.validate(req.body, { abortEarly: true });

    if (error) {
        return { isValid: false, message: error.details[0].message };
    }

    return { isValid: true, message: "VALID_ARTICLE_DATA" };
};

module.exports = validateTestimonialData;
