const Joi = require("joi");

const faqsSchema = Joi.object({
    type: Joi.string()
        .messages({
            "string.base": "TYPE_MUST_BE_A_STRING",
        }),

    typeEN: Joi.string()
        .messages({
            "string.base": "TYPEEN_MUST_BE_A_STRING",
        }),

    questionAnswer: Joi.array()
        .items(
            Joi.object({
                question: Joi.string()
                    .messages({
                        "string.base": "QUESTION_MUST_BE_A_STRING",
                    }),
                answers: Joi.array()
                    .items(
                        Joi.string().messages({
                            "string.base": "ANSWERS_MUST_BE_AN_ARRAY_OF_STRINGS",
                        })
                    )
                    .messages({
                        "array.base": "ANSWERS_MUST_BE_AN_ARRAY_OF_STRINGS",
                    }),
            })
        )
        .messages({
            "array.base": "QUESTIONANSWER_MUST_BE_AN_ARRAY_OF_OBJECTS",
        }),

    questionAnswerEN: Joi.array()
        .items(
            Joi.object({
                question: Joi.string()
                    .messages({
                        "string.base": "QUESTIONEN_MUST_BE_A_STRING",
                    }),
                answers: Joi.array()
                    .items(
                        Joi.string().messages({
                            "string.base": "ANSWERSEN_MUST_BE_AN_ARRAY_OF_STRINGS",
                        })
                    )
                    .messages({
                        "array.base": "ANSWERSEN_MUST_BE_AN_ARRAY_OF_STRINGS",
                    }),
            })
        )
        .messages({
            "array.base": "QUESTIONANSWEREN_MUST_BE_AN_ARRAY_OF_OBJECTS",
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
const validateFaqsData = (req) => {
    const { error, value } = faqsSchema.validate(req.body, { abortEarly: true });

    if (error) {
        return { isValid: false, message: error.details[0].message };
    }

    return { isValid: true, message: "VALID_FAQS_DATA" };
};

module.exports = validateFaqsData;
