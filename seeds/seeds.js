const sequelize = require('../config/connection');
const { Admin } = require('../models');

const adminData = require('./adminData.json');

const seedDatabase = async () => {
    await sequelize.sync ({ force: true });

    const admin = await Admin.bulkCreate(adminData, {
        individualHooks: true,
        returning: true,
    });
};

seedDatabase();