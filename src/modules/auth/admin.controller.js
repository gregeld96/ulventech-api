const { loginAdmin } = require("./post/login_admin");
const { registerAdmin } = require("./post/register_admin");

class AuthenticationAdminController {
    static async login(req, res, next) {
        try {
            const data = await loginAdmin({
                email: req.body.email,
                password: req.body.password
            });

            res.status(200).json({
                success: true,
                message: 'Success login',
                data: {
                    accessToken: data.accessToken,
                    user: data.user
                }
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async register(req, res, next) {
        try {
            await registerAdmin({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
            });
            
            res.status(200).json({
                success: true,
                message: 'Success register admin',
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AuthenticationAdminController;