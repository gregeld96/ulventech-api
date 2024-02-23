const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.helloWord = async () => {
    try {
        return 'Hello Word';
    } catch (error) {
        throw (error)
    }
}