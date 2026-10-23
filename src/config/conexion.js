require('dotenv/config');
const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("@prisma/client");

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const ormPrisma = new PrismaClient({ adapter });

module.exports = ormPrisma;