const Joi = require("joi");

// MongoDB ObjectId regex validator
const objectIdPattern = /^[0-9a-fA-F]{24}$/;

const comparisonSchema = Joi.object({
    brokerID: Joi.string()
        .pattern(objectIdPattern)
        .required()
        .messages({
            "string.pattern.base": "BROKERID_MUST_BE_A_VALID_OBJECTID",
            "any.required": "BROKERID_IS_REQUIRED",
        }),

    regulations: Joi.array()
        .items(Joi.string())
        .required()
        .messages({
            "array.base": "REGULATIONS_MUST_BE_AN_ARRAY_OF_STRINGS",
            "any.required": "REGULATIONS_IS_REQUIRED",
        }),

    educationResources: Joi.string()
        .required()
        .messages({
            "string.base": "EDUCATIONRESOURCES_MUST_BE_A_STRING",
            "any.required": "EDUCATIONRESOURCES_IS_REQUIRED",
        }),

    educationResourcesEN: Joi.string()
        .required()
        .messages({
            "string.base": "EDUCATIONRESOURCESEN_MUST_BE_A_STRING",
            "any.required": "EDUCATIONRESOURCESEN_IS_REQUIRED",
        }),

    tradingPlatforms: Joi.array()
        .items(Joi.string())
        .required()
        .messages({
            "array.base": "TRADINGPLATFORMS_MUST_BE_AN_ARRAY_OF_STRINGS",
            "any.required": "TRADINGPLATFORMS_IS_REQUIRED",
        }),

    tradableInstruments: Joi.array()
        .items(Joi.string())
        .required()
        .messages({
            "array.base": "TRADABLEINSTRUMENTS_MUST_BE_AN_ARRAY_OF_STRINGS",
            "any.required": "TRADABLEINSTRUMENTS_IS_REQUIRED",
        }),

    minimumDeposit: Joi.number()
        .integer()
        .required()
        .messages({
            "number.base": "MINIMUMDEPOSIT_MUST_BE_AN_INTEGER",
            "any.required": "MINIMUMDEPOSIT_IS_REQUIRED",
        }),

    depositAndWithdrawFees: Joi.string()
        .required()
        .messages({
            "string.base": "DEPOSITANDWITHDRAWFEES_MUST_BE_A_STRING",
            "any.required": "DEPOSITANDWITHDRAWFEES_IS_REQUIRED",
        }),

    leverage: Joi.string()
        .required()
        .messages({
            "string.base": "LEVERAGE_MUST_BE_A_STRING",
            "any.required": "LEVERAGE_IS_REQUIRED",
        }),

    leverageEN: Joi.string()
        .required()
        .messages({
            "string.base": "LEVERAGEEN_MUST_BE_A_STRING",
            "any.required": "LEVERAGEEN_IS_REQUIRED",
        }),

    spread: Joi.number()
        .required()
        .messages({
            "number.base": "SPREAD_MUST_BE_A_NUMBER",
            "any.required": "SPREAD_IS_REQUIRED",
        }),

    orderExecution: Joi.string()
        .required()
        .messages({
            "string.base": "ORDEREXECUTION_MUST_BE_A_STRING",
            "any.required": "ORDEREXECUTION_IS_REQUIRED",
        }),

    orderExecutionEN: Joi.string()
        .required()
        .messages({
            "string.base": "ORDEREXECUTIONEN_MUST_BE_A_STRING",
            "any.required": "ORDEREXECUTIONEN_IS_REQUIRED",
        }),

    customerSupport: Joi.string()
        .required()
        .messages({
            "string.base": "CUSTOMERSUPPORT_MUST_BE_A_STRING",
            "any.required": "CUSTOMERSUPPORT_IS_REQUIRED",
        }),

    introduceBrokerFees: Joi.string()
        .required()
        .messages({
            "string.base": "INTRODUCEBROKERFEES_MUST_BE_A_STRING",
            "any.required": "INTRODUCEBROKERFEES_IS_REQUIRED",
        }),

    introduceBrokerFeesEN: Joi.string()
        .required()
        .messages({
            "string.base": "INTRODUCEBROKERFEESEN_MUST_BE_A_STRING",
            "any.required": "INTRODUCEBROKERFEESEN_IS_REQUIRED",
        }),

    depositMethods: Joi.string()
        .required()
        .messages({
            "string.base": "DEPOSITMETHODS_MUST_BE_A_STRING",
            "any.required": "DEPOSITMETHODS_IS_REQUIRED",
        }),

    tradingAfterDeposit: Joi.string()
        .required()
        .messages({
            "string.base": "TRADINGAFTERDEPOSIT_MUST_BE_A_STRING",
            "any.required": "TRADINGAFTERDEPOSIT_IS_REQUIRED",
        }),

    tradingAfterDepositEN: Joi.string()
        .required()
        .messages({
            "string.base": "TRADINGAFTERDEPOSITEN_MUST_BE_A_STRING",
            "any.required": "TRADINGAFTERDEPOSITEN_IS_REQUIRED",
        }),

    rating: Joi.number()
        .integer()
        .required()
        .messages({
            "number.base": "RATING_MUST_BE_AN_INTEGER",
            "any.required": "RATING_IS_REQUIRED",
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
const validateComparisonData = (req) => {
    const { error, value } = comparisonSchema.validate(req.body, { abortEarly: true });

    if (error) {
        return { isValid: false, message: error.details[0].message };
    }

    return { isValid: true, message: "VALID_COMPARISON_DATA" };
};

module.exports = validateComparisonData;
