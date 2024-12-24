const Joi = require("joi");

const schema = Joi.object({
    type: Joi.string()
        .valid("image/jpg", "image/png", "image/jpeg")
        .required()
        .messages({
            "any.only": "INVALID_IMAGE_FORMAT",
            "any.required": "IMAGE_IS_REQUIRED",
        }),
});

const fileValidator = (req) =>{
    const validationResult = schema.validate({ type: req.body.type });
    
    if (validationResult.error) {
        return { isInvalid: false, message: validationResult.error.details[0].message };
    }
    
    // If valid:
    return { isInvalid: true, message: "VALID_IMAGE" };
}

module.exports = fileValidator;
