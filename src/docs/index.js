const swaggerJSDoc = require('swagger-jsdoc');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 9090;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Sky-Trading API documentation',
    },
    servers: [
    //   {
    //     url: `http://13.215.249.116:${PORT}`, // Production server
    //     description: 'Dev Development server',
    //   },
      {
        url: `http://localhost:${PORT}`, // Update with your server's URL
        description: 'Local Development server',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/docs/*.js'], // Adjust the path to match your route files
};

module.exports = swaggerOptions;