const {
    PrismaClient
} = require('@prisma/client')
const {
    generateUUID
} = require('../../src/utilities/uuid')
const {
    hashPassword
} = require('../../src/utilities/bcrypt')
const prisma = new PrismaClient()

async function main() {
    await prisma.role.deleteMany({});
    await prisma.account.deleteMany({});

    const roleAdminId = generateUUID();
    const roleUserId = generateUUID();

    await prisma.role.upsert({
        where: {
            name: 'admin'
        },
        update: {},
        create: {
            id: roleAdminId,
            name: 'admin',
        },
    })

    await prisma.role.upsert({
        where: {
            name: 'user'
        },
        update: {},
        create: {
            id: roleUserId,
            name: 'user',
        },
    })

    const userData = [{
            id: generateUUID(),
            email: 'greg@greg.id',
            name: 'Gregorius Eldwin P',
            password: hashPassword('password'),
            roleId: roleUserId
        },
        {
            id: generateUUID(),
            email: 'greg@admin.id',
            name: 'Gregorius Eldwin',
            password: hashPassword('password'),
            roleId: roleAdminId
        },
    ];

    userData.forEach(async (data) => {
        await prisma.account.create({
            data: data,
        })
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })