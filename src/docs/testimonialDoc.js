/**
 * @swagger
 * /api/v1/testimonial:
 *   post:
 *     summary: Create a new Testimonial
 *     description: Endpoint to create a new Testimonial. Requires a Bearer token for authorization.
 *     tags:
 *       - Testimonial
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
 *                 description: The name of the user providing the testimonial.
 *                 example: "testimonial 01"
 *               userNameEN:
 *                 type: string
 *                 description: The English name of the user providing the testimonial.
 *                 example: "testimonial 01"
 *               image:
 *                 type: string
 *                 description: The file name or URL of the testimonial image.
 *                 example: "testimonial_image.png"
 *               brokerID:
 *                 type: string
 *                 description: The ID of the broker associated with the testimonial.
 *                 format: uuid
 *                 example: "6761fe309990cd3dc0ba47c3"
 *               ratings:
 *                 type: integer
 *                 description: The rating given in the testimonial.
 *                 example: 4
 *               reviews:
 *                 type: string
 *                 description: The review text provided in the testimonial.
 *                 example: "good"
 *               reviewsEN:
 *                 type: string
 *                 description: The English version of the review text.
 *                 example: "GOOD"
 *               createdBy:
 *                 type: string
 *                 description: The ID of the user who created the testimonial.
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
 *                   example: CREATE_TESTIMONIAL_SUCCESSFUL
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
 * /api/v1/testimonial/{id}:
 *   put:
 *     summary: Update an existing Testimonial
 *     description: Endpoint to update an Testimonial by ID. Requires a Bearer token for authorization and ADMIN role.
 *     tags:
 *       - Testimonial
 *     security:
 *       - BearerAuth: []  # This references the defined security scheme
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the Testimonial to update
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
 *                 description: The name of the user providing the testimonial.
 *                 example: "testimonial 01"
 *               userNameEN:
 *                 type: string
 *                 description: The English name of the user providing the testimonial.
 *                 example: "testimonial 01"
 *               image:
 *                 type: string
 *                 description: The file name or URL of the testimonial image.
 *                 example: "testimonial_image.png"
 *               brokerID:
 *                 type: string
 *                 description: The ID of the broker associated with the testimonial.
 *                 format: uuid
 *                 example: "6761fe309990cd3dc0ba47c3"
 *               ratings:
 *                 type: integer
 *                 description: The rating given in the testimonial.
 *                 example: 4
 *               reviews:
 *                 type: string
 *                 description: The review text provided in the testimonial.
 *                 example: "good"
 *               reviewsEN:
 *                 type: string
 *                 description: The English version of the review text.
 *                 example: "GOOD"
 *               updatedBy:
 *                 type: string
 *                 description: The ID of the user who created the testimonial.
 *                 format: uuid
 *                 example: "676068f305ed8477634bb0a0"
 *     responses:
 *       200:
 *         description: Testimonial updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: UPDATE_TESTIMONIAL_SUCCESSFUL
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
 * /api/v1/testimonial/{id}:
 *   delete:
 *     summary: Delete an Testimonial
 *     description: Endpoint to delete an Testimonial by ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Testimonial
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
 *                   example: DELETE_TESTIMONIAL_SUCCESSFUL
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
 * /api/v1/testimonial:
 *   get:
 *     summary: Get all Testimonials
 *     description: Endpoint to retrieve all testimonials. Requires a Bearer token for authorization.
 *     tags:
 *       - Testimonial
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
 *         name: search
 *         schema:
 *           type: string
 *         description: A search term to filter testimonials.
 *         example: "search 1"
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: A date to filter testimonials.
 *         example: "2025-01-20"
 *     responses:
 *       200:
 *         description: Testimonials retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The unique identifier of the testimonial.
 *                     example: "6764a4838ed0192819de7c0a"
 *                   userName:
 *                     type: string
 *                     description: The name of the user providing the testimonial.
 *                     example: "testimonial 01"
 *                   userNameEN:
 *                     type: string
 *                     description: The English name of the user providing the testimonial.
 *                     example: "testimonial 01"
 *                   image:
 *                     type: string
 *                     description: The file name or URL of the testimonial image.
 *                     example: "testimonial_image.png"
 *                   brokerID:
 *                     type: string
 *                     description: The ID of the broker associated with the testimonial.
 *                     format: uuid
 *                     example: "6761fe309990cd3dc0ba47c3"
 *                   ratings:
 *                     type: integer
 *                     description: The rating given in the testimonial.
 *                     example: 4
 *                   reviews:
 *                     type: string
 *                     description: The review text provided in the testimonial.
 *                     example: "good"
 *                   reviewsEN:
 *                     type: string
 *                     description: The English version of the review text.
 *                     example: "GOOD"
 *                   createdBy:
 *                     type: string
 *                     description: The ID of the user who created the testimonial.
 *                     format: uuid
 *                     example: "676068f305ed8477634bb0a0"
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
 * /api/v1/testimonial/testimonial-id/{id}:
 *   get:
 *     summary: Get Testimonial by ID
 *     description: Retrieve details of a Testimonial member by their unique ID. Requires a Bearer token for authorization.
 *     tags:
 *       - Testimonial
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Unique identifier of the Testimonial
 *         schema:
 *           type: string
 *         example: 1a2b3c4d5e6f
 *     responses:
 *       200:
 *         description: Successfully retrieved Testimonial details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier of the Testimonial.
 *                   example: "6764a4838ed0192819de7c0a"
 *                 userName:
 *                   type: string
 *                   description: The name of the user providing the testimonial.
 *                   example: "testimonial 01"
 *                 userNameEN:
 *                   type: string
 *                   description: The English name of the user providing the testimonial.
 *                   example: "testimonial 01"
 *                 image:
 *                   type: string
 *                   description: The file name or URL of the testimonial image.
 *                   example: "testimonial_image.png"
 *                 brokerID:
 *                   type: string
 *                   description: The ID of the broker associated with the testimonial.
 *                   format: uuid
 *                   example: "6761fe309990cd3dc0ba47c3"
 *                 ratings:
 *                   type: integer
 *                   description: The rating given in the testimonial.
 *                   example: 4
 *                 reviews:
 *                   type: string
 *                   description: The review text provided in the testimonial.
 *                   example: "good"
 *                 reviewsEN:
 *                   type: string
 *                   description: The English version of the review text.
 *                   example: "GOOD"
 *                 createdBy:
 *                   type: string
 *                   description: The ID of the user who created the testimonial.
 *                   format: uuid
 *                   example: "676068f305ed8477634bb0a0"
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