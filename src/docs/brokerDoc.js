
/**
 * @swagger
 * /api/v1/broker:
 *   post:
 *     summary: Create a new broker
 *     description: Endpoint to create a new broker. Requires a Bearer token for authorization.
 *     tags:
 *       - Broker
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the broker.
 *                 example: "broker 1"
 *               nameEN:
 *                 type: string
 *                 description: The English name of the broker.
 *                 example: "BROKER1"
 *               subtitle:
 *                 type: string
 *                 description: Subtitle or slogan of the broker.
 *                 example: "i am broker"
 *               subtitleEN:
 *                 type: string
 *                 description: English subtitle or slogan of the broker.
 *                 example: "I AM BROKER"
 *               foundedYear:
 *                 type: string
 *                 description: The year or range of years the broker was founded.
 *                 example: "2023-2024"
 *               brokerLink:
 *                 type: string
 *                 format: uri
 *                 description: Link to the broker's website.
 *                 example: "https://sample.org"
 *               logo:
 *                 type: string
 *                 description: File name or URL of the broker's logo image.
 *                 example: "logo_image.jpg"
 *               createdBy:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the user who created the broker.
 *                 example: "676060f30d23521002502ac9"
 *     responses:
 *       200:
 *         description: Broker created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: BROKER_CREATED
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
 * /api/v1/broker/{id}:
 *   put:
 *     summary: Update an existing broker
 *     description: Endpoint to update a broker by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Broker
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the broker to update
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
 *                 name:
 *                   type: string
 *                   description: The name of the broker.
 *                   example: "broker 1"
 *                 isRecommended:
 *                   type: boolean
 *                   description: Whether the broker is recommended or not.
 *                   example: false
 *                 nameEN:
 *                   type: string
 *                   description: The English name of the broker.
 *                   example: "BROKER1"
 *                 subtitle:
 *                   type: string
 *                   description: Subtitle or slogan of the broker.
 *                   example: "i am broker"
 *                 subtitleEN:
 *                   type: string
 *                   description: English subtitle or slogan of the broker.
 *                   example: "I AM BROKER"
 *                 foundedYear:
 *                   type: string
 *                   description: The year or range of years the broker was founded.
 *                   example: "2023-2024"
 *                 brokerLink:
 *                   type: string
 *                   format: uri
 *                   description: Link to the broker's website.
 *                   example: "https://sample.org"
 *                 logo:
 *                   type: string
 *                   description: File name or URL of the broker's logo image.
 *                   example: "logo_image.jpg"
 *                 updatedBy:
 *                   type: string
 *                   format: uuid
 *                   description: ID of the user who created the broker.
 *                   example: "6761fe309990cd3dc0ba47c3"
 *     responses:
 *       200:
 *         description: Broker updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: BROKER_UPDATED
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
 * /api/v1/broker/broker-top/update:
 *   put:
 *     summary: Update an top 10 brokers
 *     description: Endpoint to update the top 10 brokers. Requires a Bearer token for authorization.
 *     tags:
 *       - Broker
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *                 topBrokers:
 *                   type: array
 *                   description: List of brokers with their top rankings.
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The ID of the broker.
 *                         example: "64fa7b5d3cfa3b2e1b123456"
 *                       top:
 *                         type: integer
 *                         description: The ranking position of the broker.
 *                         example: 1
 *                     example:
 *                     - _id: "676a0c4f45759fcea9c1b4c9"
 *                       top: 1
 *                     - _id: "676a0c5045759fcea9c1b4cd"
 *                       top: 2
 *                     - _id: "676a0c5045759fcea9c1b4d1"
 *                       top: 3
 *                     - _id: "676a0c5145759fcea9c1b4d5"
 *                       top: 4
 *                     - _id: "676a0c6cddb19a69b5e27868"
 *                       top: 5
 *                     - _id: "676a0c4f45759fcea9c1b4c9"
 *                       top: 6
 *                     - _id: "676a0c4f45759fcea9c1b4c9"
 *                       top: 7
 *                     - _id: "676a0c4f45759fcea9c1b4c9"
 *                       top: 8
 *                     - _id: "676a0c4f45759fcea9c1b4c9"
 *                       top: 9
 *                     - _id: "676a0c4f45759fcea9c1b4c9"
 *                       top: 10
 *                 updatedBy:
 *                   type: string
 *                   format: uuid
 *                   description: ID of the user who created the broker.
 *                   example: "6761fe309990cd3dc0ba47c3"
 *     responses:
 *       200:
 *         description: Broker updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: BROKER_UPDATED
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
 * /api/v1/broker/{id}:
 *   delete:
 *     summary: Delete a broker
 *     description: Endpoint to delete a broker by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Broker
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the broker to delete
 *         schema:
 *           type: string
 *           example: 1a2b3c4d5e6f
 *     responses:
 *       200:
 *         description: Broker deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: BROKER_DELETED
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
 * /api/v1/broker/broker-id/{id}:
 *   get:
 *     summary: Get a broker by ID
 *     description: Endpoint to retrieve a broker's details by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Broker
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the broker to retrieve
 *         schema:
 *           type: string
 *           example: 1a2b3c4d5e6f
 *     responses:
 *       200:
 *         description: Broker details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: BROKER_FOUND
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 1a2b3c4d5e6f
 *                     name:
 *                       type: string
 *                       example: John Doe
 *                     email:
 *                       type: string
 *                       example: john.doe@example.com
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
 * /api/v1/broker:
 *   get:
 *     summary: Get all brokers
 *     description: Endpoint to retrieve all brokers. Requires a Bearer token for authorization.
 *     tags:
 *       - Broker
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     parameters:
 *       - in: query
 *         name: skip
 *         schema:
 *           type: integer
 *         description: The number of records to skip for pagination.
 *         example: 0
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The maximum number of records to return.
 *         example: 25
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: A name term to filter brokers by name or other fields.
 *         example: broker 1
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: A date term to filter brokers by date or other fields.
 *         example: 2025-01-13
 *     responses:
 *       200:
 *         description: Brokers retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: BROKERS_FOUND
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 1a2b3c4d5e6f
 *                       name:
 *                         type: string
 *                         example: John Doe
 *                       email:
 *                         type: string
 *                         example: john.doe@example.com
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
 * /api/v1/broker/recommended-brokers:
 *   get:
 *     summary: Get all recommended brokers
 *     description: Endpoint to retrieve all recommended brokers. Requires a Bearer token for authorization.
 *     tags:
 *       - Broker
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     responses:
 *       200:
 *         description: Brokers retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: BROKERS_FOUND
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 1a2b3c4d5e6f
 *                       name:
 *                         type: string
 *                         example: John Doe
 *                       email:
 *                         type: string
 *                         example: john.doe@example.com
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
