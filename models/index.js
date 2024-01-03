const Admin = require('./admin');
const FizzBuzz = require('./fizzBuzz');
const Users = require('./users');

Users.hasMany(FizzBuzz, {
    foreignKey: 'usernameId'
});

FizzBuzz.belongsTo(Users);

module.exports = { Admin, FizzBuzz, Users };