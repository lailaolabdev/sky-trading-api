const Joi = require("joi");

// Joi Schema for Validation
const schema = Joi.object({
    component: Joi.string()
        .required()
        .messages({
            "string.base": "COMPONENT_MUST_BE_A_STRING",
            "any.required": "COMPONENT_IS_REQUIRED",
        }),
    items: Joi.array()
        .items(
            Joi.string().messages({
                "string.base": "ITEMS_MUST_CONTAIN_ONLY_STRINGS",
            })
        )
        .min(1)
        .required()
        .messages({
            "array.base": "ITEMS_MUST_BE_AN_ARRAY",
            "array.min": "ITEMS_CANNOT_BE_EMPTY",
            "any.required": "ITEMS_ARE_REQUIRED",
        }),
});

// Validation Function
const validateComparisonComponent = (req) => {
    const check = schema.validate(req.body, {
        abortEarly: true,    // Stop at the first error
        presence: "required" // Require all fields to be explicitly provided
    });

    if (check.error) {
        return { isValid: false, message: check.error.details[0].message };
    }

    return { isValid: true, message: "VALID_COMPARISON_COMPONENT" };
};

module.exports = validateComparisonComponent;
