/**
 * @swagger
 * /api/v1/broker-comparison:
 *   post:
 *     summary: Create a new broker comparison
 *     description: Endpoint to create a new broker comparison. Requires a Bearer token for authorization.
 *     tags:
 *       - Broker Comparison
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brokerID:
 *                 type: string
 *                 description: The ID of the broker being compared.
 *                 example: "676a0c6cddb19a69b5e27868"
 *               regulations:
 *                 type: array
 *                 description: A list of regulations associated with the broker.
 *                 items:
 *                   type: string
 *                 example: ["AB", "DD"]
 *               educationResources:
 *                 type: string
 *                 description: The level of education resources provided by the broker.
 *                 example: "high"
 *               educationResourcesEN:
 *                 type: string
 *                 description: The English version of the education resources description.
 *                 example: "higher"
 *               tradingPlatforms:
 *                 type: array
 *                 description: The trading platforms provided by the broker.
 *                 items:
 *                   type: string
 *                 example: ["web"]
 *               tradableInstruments:
 *                 type: array
 *                 description: The instruments available for trading with the broker.
 *                 items:
 *                   type: string
 *                 example: ["None profit"]
 *               minimumDeposit:
 *                 type: number
 *                 description: The minimum deposit required by the broker.
 *                 example: 200000
 *               depositAndWithdrawFees:
 *                 type: string
 *                 description: The fees for deposit and withdrawal.
 *                 example: "1/2"
 *               leverage:
 *                 type: string
 *                 description: The leverage offered by the broker.
 *                 example: "1C"
 *               leverageEN:
 *                 type: string
 *                 description: The English version of the leverage description.
 *                 example: "1C"
 *               spread:
 *                 type: number
 *                 description: The spread offered by the broker.
 *                 example: 1232
 *               orderExecution:
 *                 type: string
 *                 description: Details about the order execution.
 *                 example: "abcdef"
 *               orderExecutionEN:
 *                 type: string
 *                 description: The English version of the order execution details.
 *                 example: "ladfheo"
 *               customerSupport:
 *                 type: string
 *                 description: Details about the customer support provided by the broker.
 *                 example: "dfkljfd"
 *               introduceBrokerFees:
 *                 type: string
 *                 description: Details about the fees for introducing brokers.
 *                 example: "dlfj"
 *               introduceBrokerFeesEN:
 *                 type: string
 *                 description: The English version of the fees for introducing brokers.
 *                 example: "ldfjde"
 *               depositMethods:
 *                 type: string
 *                 description: The methods available for depositing funds.
 *                 example: "valet"
 *               tradingAfterDeposit:
 *                 type: string
 *                 description: Details about trading after depositing funds.
 *                 example: "kafhddl"
 *               tradingAfterDepositEN:
 *                 type: string
 *                 description: The English version of the trading after deposit description.
 *                 example: "dlkfjad"
 *               rating:
 *                 type: number
 *                 description: The broker's rating.
 *                 example: 3
 *               description:
 *                 type: string
 *                 description: A detailed description of the broker in the default language.
 *                 example: "dafjladfe"
 *               descriptionEN:
 *                 type: string
 *                 description: The English version of the broker's description.
 *                 example: "dlakfjeio"
 *               createdBy:
 *                 type: string
 *                 description: The ID of the user who created the entry.
 *                 format: uuid
 *                 example: "67606218a6670170743c4614"
 *             required:
 *               - brokerID
 *               - regulations
 *               - educationResources
 *               - educationResourcesEN
 *               - tradingPlatforms
 *               - tradableInstruments
 *               - minimumDeposit
 *               - createdBy
 *     responses:
 *       200:
 *         description: Broker comparison created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: BROKER_COMPARISON_CREATED
 *       400:
 *         description: Bad request (missing or invalid field data)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: BAD_REQUEST
 *       401:
 *         description: Unauthorized (missing or invalid Bearer token)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: UNAUTHORIZED
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: INTERNAL_SERVER_ERROR
 */



/**
 * @swagger
 * /api/v1/broker-comparison/{id}:
 *   put:
 *     summary: Update an existing broker comparison
 *     description: Endpoint to update an broker comparison by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Broker Comparison
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the article to update
 *         schema:
 *           type: string
 *           example: 1a2b3c4d5e6f
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brokerID:
 *                 type: string
 *                 description: The ID of the broker being compared.
 *                 example: "676a0c6cddb19a69b5e27868"
 *               regulations:
 *                 type: array
 *                 description: A list of regulations associated with the broker.
 *                 items:
 *                   type: string
 *                 example: ["AB", "DD"]
 *               educationResources:
 *                 type: string
 *                 description: The level of education resources provided by the broker.
 *                 example: "high"
 *               educationResourcesEN:
 *                 type: string
 *                 description: The English version of the education resources description.
 *                 example: "higher"
 *               tradingPlatforms:
 *                 type: array
 *                 description: The trading platforms provided by the broker.
 *                 items:
 *                   type: string
 *                 example: ["web"]
 *               tradableInstruments:
 *                 type: array
 *                 description: The instruments available for trading with the broker.
 *                 items:
 *                   type: string
 *                 example: ["None profit"]
 *               minimumDeposit:
 *                 type: number
 *                 description: The minimum deposit required by the broker.
 *                 example: 200000
 *               depositAndWithdrawFees:
 *                 type: string
 *                 description: The fees for deposit and withdrawal.
 *                 example: "1/2"
 *               leverage:
 *                 type: string
 *                 description: The leverage offered by the broker.
 *                 example: "1C"
 *               leverageEN:
 *                 type: string
 *                 description: The English version of the leverage description.
 *                 example: "1C"
 *               spread:
 *                 type: number
 *                 description: The spread offered by the broker.
 *                 example: 1232
 *               orderExecution:
 *                 type: string
 *                 description: Details about the order execution.
 *                 example: "abcdef"
 *               orderExecutionEN:
 *                 type: string
 *                 description: The English version of the order execution details.
 *                 example: "ladfheo"
 *               customerSupport:
 *                 type: string
 *                 description: Details about the customer support provided by the broker.
 *                 example: "dfkljfd"
 *               introduceBrokerFees:
 *                 type: string
 *                 description: Details about the fees for introducing brokers.
 *                 example: "dlfj"
 *               introduceBrokerFeesEN:
 *                 type: string
 *                 description: The English version of the fees for introducing brokers.
 *                 example: "ldfjde"
 *               depositMethods:
 *                 type: string
 *                 description: The methods available for depositing funds.
 *                 example: "valet"
 *               tradingAfterDeposit:
 *                 type: string
 *                 description: Details about trading after depositing funds.
 *                 example: "kafhddl"
 *               tradingAfterDepositEN:
 *                 type: string
 *                 description: The English version of the trading after deposit description.
 *                 example: "dlkfjad"
 *               rating:
 *                 type: number
 *                 description: The broker's rating.
 *                 example: 3
 *               description:
 *                 type: string
 *                 description: A detailed description of the broker in the default language.
 *                 example: "dafjladfe"
 *               descriptionEN:
 *                 type: string
 *                 description: The English version of the broker's description.
 *                 example: "dlakfjeio"
 *               createdBy:
 *                 type: string
 *                 description: The ID of the user who created the entry.
 *                 format: uuid
 *                 example: "67606218a6670170743c4614"
 *     responses:
 *       200:
 *         description: Article updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ARTICLE_UPDATED
 *       400:
 *         description: Bad request (invalid field data)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: BAD_REQUEST
 *       401:
 *         description: Unauthorized (missing or invalid Bearer token)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: UNAUTHORIZED
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: INTERNAL_SERVER_ERROR
 */


/**
 * @swagger
 * /api/v1/broker-comparison/broker1/{broker1}/broker2/{broker2}:
 *   get:
 *     summary: Get two broker comparison
 *     description: Endpoint to retrieve two broker comparison. Requires a Bearer token for authorization.
 *     tags:
 *       - Broker Comparison
 *     responses:
 *       200:
 *         description: Articles retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: GET_ARTICLES_SUCCESSFUL
 *                 data:
 *                   type: object
 *                   properties:
 *                     totalArticles:
 *                       type: integer
 *                       example: 1
 *                     articles:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: 1a2b3c4d5e6f
 *                           topic:
 *                             type: string
 *                             example: article topic 1
 *                           topicEN:
 *                             type: string
 *                             example: article topic EN 1
 *                           description:
 *                             type: string
 *                             example: article description 1
 *                           descriptionEN:
 *                             type: string
 *                             example: article description EN 1
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: 2023-01-01T00:00:00.000Z
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             example: 2023-01-01T00:00:00.000Z
 * 
 *       401:
 *         description: Unauthorized (missing or invalid Bearer token)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: UNAUTHORIZED
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: INTERNAL_SERVER_ERROR
 */

/**
 * @swagger
 * /api/v1/broker-comparison/broker1/{broker1}/broker2/{broker2}/broker3/{broker3}:
 *   get:
 *     summary: Get three broker comparison
 *     description: Endpoint to retrieve three broker comparison. Requires a Bearer token for authorization.
 *     tags:
 *       - Broker Comparison
 *     responses:
 *       200:
 *         description: Articles retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: GET_ARTICLES_SUCCESSFUL
 *                 data:
 *                   type: object
 *                   properties:
 *                     totalArticles:
 *                       type: integer
 *                       example: 1
 *                     articles:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: 1a2b3c4d5e6f
 *                           topic:
 *                             type: string
 *                             example: article topic 1
 *                           topicEN:
 *                             type: string
 *                             example: article topic EN 1
 *                           description:
 *                             type: string
 *                             example: article description 1
 *                           descriptionEN:
 *                             type: string
 *                             example: article description EN 1
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: 2023-01-01T00:00:00.000Z
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             example: 2023-01-01T00:00:00.000Z
 * 
 *       401:
 *         description: Unauthorized (missing or invalid Bearer token)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: UNAUTHORIZED
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: INTERNAL_SERVER_ERROR
 */