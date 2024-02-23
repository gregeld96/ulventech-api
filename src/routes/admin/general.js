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
 *     GetWordAdminSuccess:
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
 *         message: Success get hello word admin
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
 * tags:
 *   name: Admin API
 *   description: API for admin only
 * /api/internal/general:
 *   get:
 *     security:
 *      - BearerAuth: [admin]
 *     summary: Get Hello Word based on Role
 *     tags: [Admin API]
 *     responses:
 *       200:
 *         description: The success get word.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetWordAdminSuccess'
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
const { authAdmin } = require('../../middlewares/authorization');
const GeneralAdminController = require('../../modules/general/admin.controller');

routes.use(authAdmin);
routes.get('/', GeneralAdminController.getWord);

module.exports = routes;