const routes = require('express').Router();
const RoutesApi = require('./api');

routes.use('/api', RoutesApi);

module.exports = routes;