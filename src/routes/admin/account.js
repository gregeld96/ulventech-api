/**
 * @swagger
 * components:
 *   schemas:
 *     LoginAdmin:
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
 *         email: greg@admin.id
 *         password: password
 */


// Response Success
/**
 * @swagger
 * components:
 *   schemas:
 *     LoginAdminSuccess:
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
 *              "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyZWdAYWRtaW4uaWQiLCJpYXQiOjE3MDg2NTU1MjR9.U9zhvS9s06BQsdCcRNLsSjmy2fsp9UqVdCMNVT0AFQM",
 *              "user": {
 *                  "name": "Gregorius Eldwin",
 *                  "email": "greg@admin.id",
 *                  "role": "admin"
 *              }
 *         }
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterAdmin:
 *       type: object
 *       required:
 *         - email
 *         - phone
 *         - name
 *       properties:
 *         email:
 *           type: string
 *           description: The email user
 *         phone:
 *           type: string
 *           description: The phone number user
 *         name:
 *           type: string
 *           description: The user name
 *       example:
 *         email: gregorius@admin.id
 *         name: Gregorius
 *         phone: 08123456789
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
 *         message: Name, email and phone field required
 */

/**
 * @swagger
 * /api/internal/accounts/login:
 *   post:
 *     summary: Login authentication for Admin
 *     tags: [Admin API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginAdmin'
 *     responses:
 *       200:
 *         description: The created Login.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginAdminSuccess'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginError'
 * /api/internal/accounts/register:
 *   post:
 *     summary: Create account for admin
 *     tags: [Admin API]
 *     security:
 *      - BearerAuth: [admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterAdmin'
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
const { authAdmin } = require('../../middlewares/authorization');
const AuthenticationAdminController = require('../../modules/auth/admin.controller');

routes.post('/login', AuthenticationAdminController.login);
routes.use(authAdmin);
routes.post('/register', AuthenticationAdminController.register);

module.exports = routes;