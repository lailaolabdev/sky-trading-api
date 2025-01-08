/**
 * @swagger
 * /api/v1/faq:
 *   post:
 *     summary: Create a new FAQ
 *     description: Endpoint to create a new FAQ. Requires a Bearer token for authorization.
 *     tags:
 *       - FAQ
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 description: The type of the FAQ.
 *                 example: "News"
 *               typeEN:
 *                 type: string
 *                 description: The English type of the FAQ.
 *                 example: "NEWS"
 *               questionAnswer:
 *                 type: array
 *                 description: A list of questions and answers.
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                       description: The question being asked.
 *                       example: "What is your favorite color?"
 *                     answers:
 *                       type: array
 *                       description: A list of answers for the question.
 *                       items:
 *                         type: string
 *                       example: ["Blue", "Green", "Red"]
 *               questionAnswerEN:
 *                 type: array
 *                 description: A list of questions and answers in English.
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                       description: The question being asked in English.
 *                       example: "What is your favorite color?"
 *                     answers:
 *                       type: array
 *                       description: A list of answers for the question in English.
 *                       items:
 *                         type: string
 *                       example: ["he", "dj"]
 *               createdBy:
 *                 type: string
 *                 description: The ID of the user who created the FAQ.
 *                 format: uuid
 *                 example: "676068f305ed8477634bb0a0"
 *     responses:
 *       200:
 *         description: FAQ created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: FAQ_CREATED
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
 * /api/v1/faq/{id}:
 *   put:
 *     summary: Update an existing FAQ
 *     description: Endpoint to update an FAQ by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - FAQ
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the FAQ to update
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
 *               type:
 *                 type: string
 *                 description: The type of the FAQ.
 *                 example: "News"
 *               typeEN:
 *                 type: string
 *                 description: The English type of the FAQ.
 *                 example: "NEWS"
 *               questionAnswer:
 *                 type: array
 *                 description: A list of questions and answers.
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                       description: The question being asked.
 *                       example: "What is your favorite color?"
 *                     answers:
 *                       type: array
 *                       description: A list of answers for the question.
 *                       items:
 *                         type: string
 *                       example: ["Blue", "Green", "Red"]
 *               questionAnswerEN:
 *                 type: array
 *                 description: A list of questions and answers in English.
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                       description: The question being asked in English.
 *                       example: "What is your favorite color?"
 *                     answers:
 *                       type: array
 *                       description: A list of answers for the question in English.
 *                       items:
 *                         type: string
 *                       example: ["he", "dj"]
 *               updatedBy:
 *                 type: string
 *                 description: The ID of the user who created the FAQ.
 *                 format: uuid
 *                 example: "676068f305ed8477634bb0a0"
 *     responses:
 *       200:
 *         description: FAQ updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: UPDATE_FAQ_SUCCESSFUL
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
 * /api/v1/faq/{id}:
 *   delete:
 *     summary: Delete an FAQ
 *     description: Endpoint to delete an FAQ by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - FAQ
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the FAQ to delete
 *         schema:
 *           type: string
 *           example: 1a2b3c4d5e6f
 *     responses:
 *       200:
 *         description: FAQ deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: DELETE_FAQ_SUCCESSFUL
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
 * /api/v1/faq:
 *   get:
 *     summary: Get all FAQ
 *     description: Endpoint to retrieve all FAQ. Requires a Bearer token for authorization.
 *     tags:
 *       - FAQ
 *     parameters:
 *       - name: skip
 *         in: query
 *         required: false
 *         description: Page number for pagination.
 *         example: 0
 *       - name: limit
 *         in: query
 *         required: false
 *         description: Number of items per page for pagination.
 *         example: 25
 *       - name: search
 *         in: query
 *         required: false
 *         description: Search by type, question, or answer.
 *         example: "News"
 *     responses:
  *       200:
 *         description: FAQ created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier of the FAQ.
 *                   example: "6764a4838ed0192819de7c0a"
 *                 type:
 *                   type: string
 *                   description: The type of the FAQ.
 *                   example: "News"
 *                 typeEN:
 *                   type: string
 *                   description: The English type of the FAQ.
 *                   example: "NEWS"
 *                 questionAnswer:
 *                   type: array
 *                   description: List of questions and answers.
 *                   items:
 *                     type: object
 *                     properties:
 *                       question:
 *                         type: string
 *                         description: The question being asked.
 *                         example: "What is your favorite color and the best color?"
 *                       answers:
 *                         type: array
 *                         description: A list of answers for the question.
 *                         items:
 *                           type: string
 *                         example: ["Blue", "Green", "Red"]
 *                       _id:
 *                         type: string
 *                         description: The unique identifier of the question and answer set.
 *                         example: "6765c36285b6dda3ec5ce2dd"
 *                 questionAnswerEN:
 *                   type: array
 *                   description: List of questions and answers in English.
 *                   items:
 *                     type: object
 *                     properties:
 *                       question:
 *                         type: string
 *                         description: The question being asked in English.
 *                         example: "What is your favorite color?"
 *                       answers:
 *                         type: array
 *                         description: A list of answers for the question in English.
 *                         items:
 *                           type: string
 *                         example: ["he", "dj"]
 *                       _id:
 *                         type: string
 *                         description: The unique identifier of the question and answer set.
 *                         example: "6765c36285b6dda3ec5ce2df"
 *                 createdBy:
 *                   type: string
 *                   description: The ID of the user who created the FAQ.
 *                   example: "676068f305ed8477634bb0a0"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the FAQ was created.
 *                   example: "2024-12-19T22:56:03.408Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the FAQ was last updated.
 *                   example: "2024-12-20T19:20:02.808Z"
 *                 __v:
 *                   type: integer
 *                   description: The version key.
 *                   example: 0
 *                 updatedBy:
 *                   type: string
 *                   description: The ID of the user who last updated the FAQ.
 *                   example: "676068f305ed8477634bb0a0"

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
 * /api/v1/faq/faq-id/{id}:
 *   get:
 *     summary: Get FAQ by id
 *     description: Endpoint to retrieve FAQ by id. Requires a Bearer token for authorization.
 *     tags:
 *       - FAQ
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the FAQ 
 *         example: 1a2b3c4d5e6f
 *     responses:
  *       200:
 *         description: FAQ get successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier of the FAQ.
 *                   example: "6764a4838ed0192819de7c0a"
 *                 type:
 *                   type: string
 *                   description: The type of the FAQ.
 *                   example: "News"
 *                 typeEN:
 *                   type: string
 *                   description: The English type of the FAQ.
 *                   example: "NEWS"
 *                 questionAnswer:
 *                   type: array
 *                   description: List of questions and answers.
 *                   items:
 *                     type: object
 *                     properties:
 *                       question:
 *                         type: string
 *                         description: The question being asked.
 *                         example: "What is your favorite color and the best color?"
 *                       answers:
 *                         type: array
 *                         description: A list of answers for the question.
 *                         items:
 *                           type: string
 *                         example: ["Blue", "Green", "Red"]
 *                       _id:
 *                         type: string
 *                         description: The unique identifier of the question and answer set.
 *                         example: "6765c36285b6dda3ec5ce2dd"
 *                 questionAnswerEN:
 *                   type: array
 *                   description: List of questions and answers in English.
 *                   items:
 *                     type: object
 *                     properties:
 *                       question:
 *                         type: string
 *                         description: The question being asked in English.
 *                         example: "What is your favorite color?"
 *                       answers:
 *                         type: array
 *                         description: A list of answers for the question in English.
 *                         items:
 *                           type: string
 *                         example: ["he", "dj"]
 *                       _id:
 *                         type: string
 *                         description: The unique identifier of the question and answer set.
 *                         example: "6765c36285b6dda3ec5ce2df"
 *                 createdBy:
 *                   type: string
 *                   description: The ID of the user who created the FAQ.
 *                   example: "676068f305ed8477634bb0a0"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the FAQ was created.
 *                   example: "2024-12-19T22:56:03.408Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the FAQ was last updated.
 *                   example: "2024-12-20T19:20:02.808Z"
 *                 __v:
 *                   type: integer
 *                   description: The version key.
 *                   example: 0
 *                 updatedBy:
 *                   type: string
 *                   description: The ID of the user who last updated the FAQ.
 *                   example: "676068f305ed8477634bb0a0"
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