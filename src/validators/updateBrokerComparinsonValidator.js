const Joi = require("joi");

const comparisonSchema = Joi.object({
    regulations: Joi.array()
        .items(Joi.string())
        .messages({
            "array.base": "REGULATIONS_MUST_BE_AN_ARRAY_OF_STRINGS",
        }),

    educationResources: Joi.string()
        .messages({
            "string.base": "EDUCATIONRESOURCES_MUST_BE_A_STRING",
        }),

    educationResourcesEN: Joi.string()
        .messages({
            "string.base": "EDUCATIONRESOURCESEN_MUST_BE_A_STRING",
        }),

    tradingPlatforms: Joi.array()
        .items(Joi.string())
        .messages({
            "array.base": "TRADINGPLATFORMS_MUST_BE_AN_ARRAY_OF_STRINGS",
        }),

    tradableInstruments: Joi.array()
        .items(Joi.string())
        .messages({
            "array.base": "TRADABLEINSTRUMENTS_MUST_BE_AN_ARRAY_OF_STRINGS",
        }),

    minimumDeposit: Joi.number()
        .integer()
        .messages({
            "number.base": "MINIMUMDEPOSIT_MUST_BE_AN_INTEGER",
        }),

    depositAndWithdrawFee: Joi.string()
        .messages({
            "string.base": "DEPOSITANDWITHDRAWFEES_MUST_BE_A_STRING",
        }),

    leverage: Joi.string()
        .messages({
            "string.base": "LEVERAGE_MUST_BE_A_STRING",
        }),

    leverageEN: Joi.string()
        .messages({
            "string.base": "LEVERAGEEN_MUST_BE_A_STRING",
        }),

    spread: Joi.number()
        .messages({
            "number.base": "SPREAD_MUST_BE_A_NUMBER",
        }),

    orderExecution: Joi.string()
        .messages({
            "string.base": "ORDEREXECUTION_MUST_BE_A_STRING",
        }),

    orderExecutionEN: Joi.string()
        .messages({
            "string.base": "ORDEREXECUTIONEN_MUST_BE_A_STRING",
        }),

    customerSupport: Joi.string()
        .messages({
            "string.base": "CUSTOMERSUPPORT_MUST_BE_A_STRING",
        }),

    introduceBrokerFee: Joi.string()
        .messages({
            "string.base": "INTRODUCEBROKERFEES_MUST_BE_A_STRING",
        }),

    introduceBrokerFeeEN: Joi.string()
        .messages({
            "string.base": "introduceBrokerFeeEN_MUST_BE_A_STRING",
        }),

    depositMethods: Joi.string()
        .messages({
            "string.base": "DEPOSITMETHODS_MUST_BE_A_STRING",
        }),

    tradingAfterDeposit: Joi.string()
        .messages({
            "string.base": "TRADINGAFTERDEPOSIT_MUST_BE_A_STRING",
        }),

    tradingAfterDepositEN: Joi.string()
        .messages({
            "string.base": "TRADINGAFTERDEPOSITEN_MUST_BE_A_STRING",
        }),

    rating: Joi.number()
        .integer()
        .messages({
            "number.base": "RATING_MUST_BE_AN_INTEGER",
        }),

    description: Joi.string()
        .messages({
            "string.base": "DESCRIPTION_MUST_BE_A_STRING",
        }),

    descriptionEN: Joi.string()
        .messages({
            "string.base": "DESCRIPTIONEN_MUST_BE_A_STRING",
        }),
    updatedBy: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            "string.base": "CREATEDBY_MUST_BE_A_VALID_OBJECTID",
            "string.pattern.base": "CREATEDBY_MUST_BE_A_VALID_OBJECTID",
            "any.required": "CREATEDBY_IS_REQUIRED",
        }),
});

// Validation Function
const validateComparisonData = (req) => {
    const { error, value } = comparisonSchema.validate(req.body, { abortEarly: true });

    if (error) {
        return { isValid: false, message: error.details[0].message };
    }

    return { isValid: true, message: "VALID_COMPARISON_DATA" };
};

module.exports = validateComparisonData;
