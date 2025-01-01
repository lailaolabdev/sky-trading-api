const Joi = require("joi");

// MongoDB ObjectId regex validator
const objectIdPattern = /^[0-9a-fA-F]{24}$/;

const schema = Joi.object({
    topBrokers: Joi.array()
        .items(
            Joi.object({
                id: Joi.string()
                    .pattern(objectIdPattern)
                    .required()
                    .messages({
                        "string.pattern.base": "TOPBROKERS_ID_MUST_BE_A_VALID_OBJECTID",
                        "any.required": "TOPBROKERS_ID_IS_REQUIRED",
                    }),
                top: Joi.number()
                    .integer()
                    .required()
                    .messages({
                        "number.base": "TOP_MUST_BE_AN_INTEGER",
                        "any.required": "TOP_IS_REQUIRED",
                    }),
            }).required()
        )
        .required()
        .messages({
            "array.base": "TOPBROKERS_MUST_BE_AN_ARRAY",
            "any.required": "TOPBROKERS_IS_REQUIRED",
        }),

    updatedBy: Joi.string()
        .pattern(objectIdPattern)
        .required()
        .messages({
            "string.pattern.base": "UPDATEDBY_MUST_BE_A_VALID_OBJECTID",
            "any.required": "UPDATEDBY_IS_REQUIRED",
        }),
});

// Validation Function
const validateTopBrokersData = (req) => {
    const { error, value } = schema.validate(req.body, { abortEarly: true });

    if (error) {
        return { isValid: false, message: error.details[0].message };
    }

    return { isValid: true, message: "VALID_TOPBROKERS_DATA" };
};

module.exports = validateTopBrokersData;
