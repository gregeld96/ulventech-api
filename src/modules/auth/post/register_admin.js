const { PrismaClient } = require('@prisma/client');
const { hashPassword } = require('../../../utilities/bcrypt');
const { generateUUID } = require('../../../utilities/uuid');

const prisma = new PrismaClient();

exports.registerAdmin = async ({
    email,
    name,
    phone,
}) => {
    try {
        if (!email || !name) throw ({
            status: 400,
            message: 'Email, and name required!'
        });

        const exist = await prisma.account.findUnique({
            where: {
              email: email,
            },
            include: {
                role: true,
            }
        });

        if (exist) throw ({
            status: 400,
            message: 'Email already taken!'
        });

        const role = await prisma.role.findFirst({
            where: {
                name: 'admin'
            }
        })

        await prisma.account.create({
            data: {
                id: generateUUID(),
                name,
                email,
                password: hashPassword(email),
                phone: phone.toString(),
                roleId: role.id
            }
        })
    } catch (error) {
        throw (error)
    }
}