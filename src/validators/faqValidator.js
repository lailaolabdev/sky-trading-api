const Joi = require("joi");

const faqsSchema = Joi.object({
    type: Joi.string()
        .required()
        .messages({
            "string.base": "TYPE_MUST_BE_A_STRING",
            "any.required": "TYPE_IS_REQUIRED",
        }),

    typeEN: Joi.string()
        .required()
        .messages({
            "string.base": "TYPEEN_MUST_BE_A_STRING",
            "any.required": "TYPEEN_IS_REQUIRED",
        }),

    questionAnswer: Joi.array()
        .items(
        Joi.object({
            question: Joi.string()
            .required()
            .messages({
                'string.base': 'QUESTION_MUST_BE_A_STRING',
                'any.required': 'QUESTIONEN_IS_REQUIRED',
            }),
            answers: Joi.array()
            .items(Joi.string().required().messages({
                'string.base': 'ANSWERS_MUST_BE_AN_ARRAY_OF_STRINGS',
                'any.required': 'ANSWERSEN_IS_REQUIRED',
            }))
            .required()
            .messages({
                'any.required': 'ANSWERS_IS_REQUIRED',
                'array.base': 'ANSWERS_MUST_BE_AN_ARRAY_OF_STRINGS',
            }),
        })
        )
        .required()
        .messages({
        'any.required': 'QUESTIONANSWER_IS_REQUIRED',
        }),

    questionAnswerEN: Joi.array()
        .items(
          Joi.object({
            question: Joi.string()
              .required()
              .messages({
                'string.base': 'QUESTIONEN_MUST_BE_A_STRING',
                'any.required': 'QUESTIONEN_IS_REQUIRED',
              }), 
            answers: Joi.array()
              .items(Joi.string().required().messages({
                'string.base': 'ANSWERSEN_MUST_BE_AN_ARRAY_OF_STRINGS',
                'any.required': 'ANSWERSEN_IS_REQUIRED',
              })) 
              .required()
              .messages({
                'any.required': 'ANSWERSEN_IS_REQUIRED',
                'array.base': 'ANSWERSEN_MUST_BE_AN_ARRAY_OF_STRINGS',
              }),
          })
        )
        .required()
        .messages({
          'any.required': 'QUESTIONANSWEREN_IS_REQUIRED',
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
const validateFaqsData = (req) => {
    const { error, value } = faqsSchema.validate(req.body, { abortEarly: true });

    if (error) {
        return { isValid: false, message: error.details[0].message };
    }

    return { isValid: true, message: "VALID_FAQS_DATA" };
};

module.exports = validateFaqsData;
