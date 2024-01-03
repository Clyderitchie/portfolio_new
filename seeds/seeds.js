const sequelize = require('../config/connection');
const { Admin, FizzBuzz, Users } = require('../models');

const adminData = require('./adminData.json');
const userData = require('./userData.json');
const fizzBuzzData = require('./fizzBuzzData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const admin = await Admin.bulkCreate(adminData, {
        individualHooks: true,
        returning: true,
    });

    const users = await Users.bulkCreate(userData);

    const games = await FizzBuzz.bulkCreate(fizzBuzzData);

};

seedDatabase();