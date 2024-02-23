const routes = require('express').Router();
const InternalRoutes = require('../admin');
const AuthenticationRoute = require('./auths');
const GeneralRoutes = require('./general');


routes.use('/auths', AuthenticationRoute);
routes.use('/general', GeneralRoutes);
routes.use('/internal', InternalRoutes);

module.exports = routes;