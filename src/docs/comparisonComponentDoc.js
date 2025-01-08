/**
 * @swagger
 * /api/v1/comparison-component:
 *   post:
 *     summary: Create a new comparison component
 *     description: Endpoint to create a new comparison component. Requires a Bearer token for authorization.
 *     tags:
 *       - Comparison Components
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               component:
 *                 type: string
 *                 description: The main title or topic of the comparison component in the default language.
 *                 example: "Regulations"
 *               componentNo:
 *                 type: number
 *                 description: The English translation of the topic.
 *                 example: 1
 *               items:
 *                 type: array
 *                 description: A list of main titles or topics related to the comparison component.
 *                 items:
 *                   type: string
 *                   description: Each item in the array must be a string.
 *                 example: ["FCA", "ASIC", "NFA"]
 *     responses:
 *       200:
 *         description: Comparison component created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: CREATE_COMPARISON_COMPONENT_SUCCESSFUL
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
 * /api/v1/comparison-component/{id}:
 *   put:
 *     summary: Update an existing comparison component
 *     description: Endpoint to update an comparison component by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Comparison Components
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the comparison component to update
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
 *               component:
 *                 type: string
 *                 description: The main title or topic of the comparison component in the default language.
 *                 example: "Regulations"
 *               items:
 *                 type: array
 *                 description: A list of main titles or topics related to the comparison component.
 *                 items:
 *                   type: string
 *                   description: Each item in the array must be a string.
 *                 example: ["FCA", "ASIC", "NFA"]
 *     responses:
 *       200:
 *         description: Comparison component updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: UPDATE_COMPARISON_COMPONENT_SUCCESSFUL
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
 * /api/v1/comparison-component/{id}:
 *   delete:
 *     summary: Delete an comparison component
 *     description: Endpoint to delete an comparison component by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Comparison Components
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the comparison component to delete
 *         schema:
 *           type: string
 *           example: 1a2b3c4d5e6f
 *     responses:
 *       200:
 *         description: Comparison component deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: DELETE_COMPARISON_COMPONENT_SUCCESSFUL
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
 * /api/v1/comparison-component:
 *   get:
 *     summary: Get all comparison components
 *     description: Endpoint to retrieve all comparison components. Requires a Bearer token for authorization.
 *     tags:
 *       - Comparison Components
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     responses:
 *       200:
 *         description: Comparison components retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: GET_COMPARISON_COMPONENT_SUCCESSFUL
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: 677dd49c955a0eb690736606
 *                       component:
 *                         type: string
 *                         example: Regulations
 *                       componentNo:
 *                         type: integer
 *                         example: 1
 *                       items:
 *                         type: array
 *                         items:
 *                           type: string
 *                           example: FCA
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: 2025-01-08T01:27:56.132Z
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: 2025-01-08T01:27:56.132Z
 *                       __v:
 *                         type: integer
 *                         example: 0
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
