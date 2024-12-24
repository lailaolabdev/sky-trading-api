const Joi = require("joi");

const articleSchema = Joi.object({
    topic: Joi.string()
        .required()
        .messages({
            "string.base": "TOPIC_MUST_BE_A_STRING",
            "any.required": "TOPIC_IS_REQUIRED",
        }),

    topicEN: Joi.string()
        .required()
        .messages({
            "string.base": "TOPICEN_MUST_BE_A_STRING",
            "any.required": "TOPICEN_IS_REQUIRED",
        }),

    description: Joi.string()
        .required()
        .messages({
            "string.base": "DESCRIPTION_MUST_BE_A_STRING",
            "any.required": "DESCRIPTION_IS_REQUIRED",
        }),

    descriptionEN: Joi.string()
        .required()
        .messages({
            "string.base": "DESCRIPTIONEN_MUST_BE_A_STRING",
            "any.required": "DESCRIPTIONEN_IS_REQUIRED",
        }),

    image: Joi.string()
        .allow(null, "")
        .messages({
            "string.base": "IMAGE_MUST_BE_A_STRING",
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
const validateArticle = (req) => {
    const { error, value } = articleSchema.validate(req.body, { abortEarly: true });

    if (error) {
        return { isValid: false, message: error.details[0].message };
    }

return { isValid: true, message: "VALID_ARTICLE_DATA" };
};

module.exports = validateArticle;
