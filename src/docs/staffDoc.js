/**
 * @swagger
 * /api/v1/staff:
 *   post:
 *     summary: Create a new Staff
 *     description: Endpoint to create a new Staff. Requires a Bearer token for authorization.
 *     tags:
 *       - Staff
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: The username of the Staff.
 *                 example: "JohnDoe"
 *               profileImage: 
 *                 type: string
 *                 description: The profile image of the Staff.
 *                 example: "profile.jpg"
 *               email:
 *                 type: string
 *                 description: The email of the Staff.
 *                 example: "Xp0lH@example.com"
 *               password:
 *                 type: string
 *                 description: The password of the Staff.
 *                 example: "password123"
 *               createdBy:
 *                 type: string
 *                 description: The ID of the user who created the Staff.
 *                 example: "676060f30d23521002502ac9"
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
 *                   example: CREATE_STAFF_SUCCESSFUL
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
 * /api/v1/staff/staff-id/{id}:
 *   put:
 *     summary: Update an existing Staff
 *     description: Endpoint to update an Staff by ID. Requires a Bearer token for authorization and ADMIN role.
 *     tags:
 *       - Staff
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the Staff to update
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
 *               userName:
 *                 type: string
 *                 description: The username of the Staff.
 *                 example: "JohnDoe"
 *               email:
 *                 type: string
 *                 description: The email of the Staff.
 *                 example: "Xp0lH@example.com"
 *               password:
 *                 type: string
 *                 description: The password of the Staff.
 *                 example: "password123"
 *               updatedBy:
 *                 type: string
 *                 description: The ID of the user who created the Staff.
 *                 example: "676060f30d23521002502ac9"
 *     responses:
 *       200:
 *         description: Staff updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: UPDATE_STAFF_SUCCESSFUL
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
 * /api/v1/staff/staff-id/{id}:
 *   delete:
 *     summary: Delete an Staff
 *     description: Endpoint to delete an Staff by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Staff
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
 * /api/v1/staff:
 *   get:
 *     summary: Get all Staff
 *     description: Endpoint to retrieve all Staff. Requires a Bearer token for authorization.
 *     tags:
 *       - Staff
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
 *         name: userName
 *         schema:
 *           type: string
 *         description: A userName term to filter articles by userName.
 *         example: userName 1
 *     responses:
  *       200:
 *         description: Staff created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier of the FAQ.
 *                   example: "6764a4838ed0192819de7c0a"
 *                 userName:
 *                   type: string
 *                   description: The username of the Staff.
 *                   example: "JohnDoe"
 *                 profileImage: 
 *                   type: string
 *                   description: The profile image of the Staff.
 *                   example: "profile.jpg"
 *                 email:
 *                   type: string
 *                   description: The email of the Staff.
 *                   example: "Xp0lH@example.com"
 *                 role: 
 *                   type: string
 *                   description: The role of the Staff.
 *                   example: "ADMIN"
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
 * /api/v1/staff/staff-id/{id}:
 *   get:
 *     summary: Get Staff by id
 *     description: Endpoint to update Staff by id. Requires a Bearer token for authorization.
 *     tags:
 *       - Staff
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the Staff 
 *         example: 1a2b3c4d5e6f
 *     responses:
  *       200:
 *         description: Staff get successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier of the FAQ.
 *                   example: "6764a4838ed0192819de7c0a"
 *                 username:
 *                   type: string
 *                   description: The username of the Staff.
 *                   example: "JohnDoe"
 *                 profileImage: 
 *                   type: string
 *                   description: The profile image of the Staff.
 *                   example: "profile.jpg"
 *                 email:
 *                   type: string
 *                   description: The email of the Staff.
 *                   example: "Xp0lH@example.com"
 *                 role: 
 *                   type: string
 *                   description: The role of the Staff.
 *                   example: "ADMIN"
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