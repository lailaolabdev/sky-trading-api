const Joi = require("joi");

const articleSchema = Joi.object({
    topic: Joi.string()
        .messages({
            "string.base": "TOPIC_MUST_BE_A_STRING",
        }),

    topicEN: Joi.string()
        .messages({
            "string.base": "TOPICEN_MUST_BE_A_STRING",
        }),

    description: Joi.string()
        .messages({
            "string.base": "DESCRIPTION_MUST_BE_A_STRING",
        }),

    descriptionEN: Joi.string()
        .messages({
            "string.base": "DESCRIPTIONEN_MUST_BE_A_STRING",
        }),

    image: Joi.string()
        .allow(null, "")
        .messages({
            "string.base": "IMAGE_MUST_BE_A_STRING",
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
const validateArticle = (req) => {
    const { error, value } = articleSchema.validate(req.body, { abortEarly: true });

    if (error) {
        return { isValid: false, message: error.details[0].message };
    }

return { isValid: true, message: "VALID_ARTICLE_DATA" };
};

module.exports = validateArticle;
