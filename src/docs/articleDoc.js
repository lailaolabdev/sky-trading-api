/**
 * @swagger
 * /api/v1/article:
 *   post:
 *     summary: Create a new article
 *     description: Endpoint to create a new article. Requires a Bearer token for authorization.
 *     tags:
 *       - Articles
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               topic:
 *                 type: string
 *                 description: The main title or topic of the article in the default language.
 *                 example: "hello word"
 *               topicEN:
 *                 type: string
 *                 description: The English translation of the topic.
 *                 example: "HEELO"
 *               description:
 *                 type: string
 *                 description: A short description or summary of the article in the default language.
 *                 example: "article dec"
 *               descriptionEN:
 *                 type: string
 *                 description: The English translation of the description.
 *                 example: "descriptionEN"
 *               image:
 *                 type: string
 *                 description: The file name or URL of an image associated with the article.
 *                 example: "image.png"
 *               createdBy:
 *                 type: string
 *                 description: The ID of the user or entity who created the article.
 *                 format: uuid
 *                 example: "67606540dfea26130fd393bc"
 *             required:
 *               - topic
 *               - topicEN
 *               - description
 *               - descriptionEN
 *               - image
 *               - createdBy
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
 * /api/v1/article/{id}:
 *   put:
 *     summary: Update an existing article
 *     description: Endpoint to update an article by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Articles
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
 *               topic:
 *                 type: string
 *                 description: The main title or topic of the article in the default language.
 *                 example: "hello word"
 *               topicEN:
 *                 type: string
 *                 description: The English translation of the topic.
 *                 example: "HEELO"
 *               description:
 *                 type: string
 *                 description: A short description or summary of the article in the default language.
 *                 example: "article dec"
 *               descriptionEN:
 *                 type: string
 *                 description: The English translation of the description.
 *                 example: "descriptionEN"
 *               image:
 *                 type: string
 *                 description: The file name or URL of an image associated with the article.
 *                 example: "image.png"
 *               updatedBy:
 *                 type: string
 *                 description: The ID of the user or entity who created the article.
 *                 format: uuid
 *                 example: "67606540dfea26130fd393bc"
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
 * /api/v1/article/{id}:
 *   delete:
 *     summary: Delete an article
 *     description: Endpoint to delete an article by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Articles
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
 * /api/v1/article/article-id/{id}:
 *   get:
 *     summary: Get an article by ID
 *     description: Endpoint to retrieve an article's details by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Articles
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the article to retrieve
 *         schema:
 *           type: string
 *           example: 1a2b3c4d5e6f
 *     responses:
 *       200:
 *         description: Article details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ARTICLE_FOUND
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 1a2b3c4d5e6f
 *                     title:
 *                       type: string
 *                       example: The Importance of Education
 *                     author:
 *                       type: string
 *                       example: Jane Doe
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
 * /api/v1/article:
 *   get:
 *     summary: Get all articles
 *     description: Endpoint to retrieve all articles. Requires a Bearer token for authorization.
 *     tags:
 *       - Articles
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
 *         name: topic
 *         schema:
 *           type: string
 *         description: A topic term to filter articles by topic.
 *         example: topic 1
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