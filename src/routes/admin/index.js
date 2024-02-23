const routes = require('express').Router();
const GeneralRoutes = require('./general');
const AccountRoutes = require('./account');

routes.use('/general', GeneralRoutes);
routes.use('/accounts', AccountRoutes);

module.exports = routes;