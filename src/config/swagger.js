const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Bank Library System API',
      version: '1.0.0',
      description: 'API Documentation for the Bank Library System',
    },
    server: [
      {
        url: 'http://localhost:8000',
      },
    ]
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpecs = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpecs };