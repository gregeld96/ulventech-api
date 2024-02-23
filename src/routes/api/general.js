/**
 * @swagger
 * components:
 *     securitySchemes:
 *        BearerAuth:
 *          type: http
 *          scheme: bearer
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     GetWordSuccess:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indicator if the process is success or fail
 *         message:
 *           type: string
 *           description: Indicator what the error occur
 *         data:
 *           type: string
 *           description: return hello word
 *       example:
 *         success: true
 *         message: Success register user
 *         data: Hello Word
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
 *     FailedAuthentication:
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
 *         message: You are not authorized!
 */

/**
 * @swagger
 * /api/general:
 *   get:
 *     security:
 *      - BearerAuth: [user]
 *     summary: Get Hello Word based on Role
 *     tags: [API Public]
 *     responses:
 *       200:
 *         description: The success get word.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetWordSuccess'
 *       401:
 *         description: Error due to different authorization.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FailedAuthentication'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginError'
 */

const routes = require('express').Router();
const { authUser } = require('../../middlewares/authorization');
const GeneralApiController = require('../../modules/general/api.controller');

routes.use(authUser);
routes.get('/', GeneralApiController.getWord);

module.exports = routes;