require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const ip = process.env.IP || 'localhost';
const port = process.env.PORT || 3000;
const routes = require('./src/routes');
const errorHandler = require('./src/middlewares/error_handler');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Ulventech Test",
            version: "1.0.0",
            description: "Simple Authentication API",
        },
        servers: [{
            url: `http://${ip}:${port}`,
        }, ],
    },
    apis: ["./src/routes/*.js", "./src/routes/api/*.js", "./src/routes/admin/*.js"],
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const specs = swaggerJsdoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.use(routes);
app.use(errorHandler);

if (process.env.NODE_ENV === 'development') {
    app.listen(port, ip, () => {
        console.log(`Server start : http://${ip}:${port}`);
    })
} else {
    app.listen(port, () => {
        console.log('Server start');
    })
}