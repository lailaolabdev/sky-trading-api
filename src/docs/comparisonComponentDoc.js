/**
 * @swagger
 * /api/v1/comparison-component:
 *   post:
 *     summary: Create a new article
 *     description: Endpoint to create a new article. Requires a Bearer token for authorization.
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
 *                 description: The main title or topic of the article in the default language.
 *                 example: "Regulations"
 *               items:
 *                 type: array
 *                 description: A list of main titles or topics related to the article.
 *                 items:
 *                   type: string
 *                   description: Each item in the array must be a string.
 *                 example: ["FCA", "ASIC", "NFA"]
 *     responses:
 *       200:
 *         description: Article created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ARTICLE_CREATED
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
 *     summary: Update an existing article
 *     description: Endpoint to update an article by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Comparison Components
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
 *               component:
 *                 type: string
 *                 description: The main title or topic of the article in the default language.
 *                 example: "Regulations"
 *               items:
 *                 type: array
 *                 description: A list of main titles or topics related to the article.
 *                 items:
 *                   type: string
 *                   description: Each item in the array must be a string.
 *                 example: ["FCA", "ASIC", "NFA"]
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
 * /api/v1/comparison-component/{id}:
 *   delete:
 *     summary: Delete an article
 *     description: Endpoint to delete an article by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Comparison Components
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the article to delete
 *         schema:
 *           type: string
 *           example: 1a2b3c4d5e6f
 *     responses:
 *       200:
 *         description: Article deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ARTICLE_DELETED
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