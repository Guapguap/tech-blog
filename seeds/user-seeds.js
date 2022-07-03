const { User } = require('../models');

const userData = [
    {
        username: 'John',
        password: 'Doe'

    },
    {
        username: 'Jane',
        password: 'Doe'
    },
    {
        username: 'Joe',
        password: 'Schmo'
    }
];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;