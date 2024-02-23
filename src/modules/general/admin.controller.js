const { helloWord } = require("./get/hello");

class GeneralAdminController {

    static async getWord(req, res, next) {
        try {
            res.status(200).json({
                success: true,
                message: 'Success get word',
                data: await helloWord(),
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = GeneralAdminController;