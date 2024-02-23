/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email user
 *         password:
 *           type: string
 *           description: The user password for account
 *       example:
 *         email: greg@greg.id
 *         password: password
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Register:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - phone
 *         - name
 *       properties:
 *         email:
 *           type: string
 *           description: The email user
 *         password:
 *           type: string
 *           description: The user password for account
 *         phone:
 *           type: string
 *           description: The phone number user
 *         name:
 *           type: string
 *           description: The user name
 *       example:
 *         email: greg@grego.id
 *         name: Gregorius
 *         phone: 08123456789
 *         password: genius
 */

// Response Success
/**
 * @swagger
 * components:
 *   schemas:
 *     LoginSuccess:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indicator if the process is success or fail
 *         message:
 *           type: string
 *           description: Indicator what the error occur
 *         data:
 *           type: object
 *           description: Indicator what the result data
 *       example:
 *         success: true
 *         message: Success login
 *         data: {
 *              "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyZWdAZ3JlZy5pZCIsImlhdCI6MTcwODYyNDI1Nn0.2uZVGgRUMduxufzNJTJ4ah9Crp7d2kulEH1AaUdfBsI",
 *              "user": {
 *                  "name": "Gregorius Eldwin P",
 *                  "email": "greg@greg.id",
 *                  "role": "user"
 *              }
 *         }
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterSuccess:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indicator if the process is success or fail
 *         message:
 *           type: string
 *           description: Indicator what the error occur
 *       example:
 *         success: true
 *         message: Success register user
 */

// Response Error
/**
 * @swagger
 * components:
 *   schemas:
 *     LoginError:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indicator if the process is success or fail
 *         message:
 *           type: string
 *           description: Indicator what the error occur
 *       example:
 *         success: false
 *         message: Internal Server Error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterBadRequest:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indicator if the process is success or fail
 *         message:
 *           type: string
 *           description: Indicator what the error occur
 *       example:
 *         success: false
 *         message: Name, email and field required
 */

/**
 * @swagger
 * tags:
 *   name: API Public
 *   description: API for Public Consume
 * /api/auths/login:
 *   post:
 *     summary: Login authentication for User
 *     tags: [API Public]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: The created Login.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginSuccess'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginError'
 * /api/auths/register:
 *   post:
 *     summary: Register API for user sign up
 *     tags: [API Public]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *         description: The success register / create user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterSuccess'
 *       400:
 *         description: Bad request error due to some field missing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterBadRequest'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginError'
 */

const routes = require('express').Router();
const AuthenticationApiController = require('../../modules/auth/api.controller');

routes.post('/login', AuthenticationApiController.login);
routes.post('/register', AuthenticationApiController.register);

module.exports = routes;