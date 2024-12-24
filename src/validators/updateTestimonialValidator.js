const Joi = require("joi");

// MongoDB ObjectId regex validator
const objectIdPattern = /^[0-9a-fA-F]{24}$/;

const schema = Joi.object({
    userName: Joi.string().messages({
        "string.base": "USERNAME_MUST_BE_A_STRING",
    }),

    userNameEN: Joi.string().messages({
        "string.base": "USERNAMEEN_MUST_BE_A_STRING",
    }),

    image: Joi.string().messages({
        "string.base": "IMAGE_MUST_BE_A_STRING",
    }),

    brokerID: Joi.string()
        .pattern(objectIdPattern)
        .messages({
            "string.pattern.base": "BROKERID_MUST_BE_A_VALID_OBJECTID",
        }),

    ratings: Joi.number().messages({
        "number.base": "RATINGS_MUST_BE_A_NUMBER",
    }),

    reviews: Joi.string().messages({
        "string.base": "REVIEWS_MUST_BE_A_STRING",
    }),

    reviewsEN: Joi.string().messages({
        "string.base": "REVIEWSEN_MUST_BE_A_STRING",
    }),

    updatedBy: Joi.string()
        .pattern(objectIdPattern)
        .required()
        .messages({
            "string.pattern.base": "UPDATEDBY_MUST_BE_A_VALID_OBJECTID",
            "any.required": "UPDATEDBY_IS_REQUIRED",
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
