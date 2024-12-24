
/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: User login
 *     description: Login endpoint for authenticating users using email or username and password.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email_userName:
 *                 type: string
 *                 description: User's email or username
 *                 example: Done01
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: 1234567890
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Status message
 *                   example: LOGIN_SUCCESSFUL
 *                 data:
 *                   type: string
 *                   description: JWT token
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjA2OGYzMDVlZDg0Nzc2MzRiYjBhMCIsInJvbGUiOiJTVEFGRiIsInVzZXJOYW1lIjoiRG9uZSIsImlhdCI6MTczNDU4NDcyNCwiZXhwIjoxNzM0NTg4MzI0fQ.i1XNDJ3j0q9DK_lqoGSmI_58C3kJYu3ymMCFK74QHL8
 *       400:
 *         description: Bad request (invalid email/username or password)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Status message
 *                   example: INVALID_CREDENTIALS
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Status message
 *                   example: INTERNAL_SERVER_ERROR
 */
