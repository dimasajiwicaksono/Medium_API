'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        fullname: 'dimas aji wicaksono',
        username: 'dajiwicaksono',
        email: 'dimasajiwicaksono@gmail.com',
        password: 'xxxxx',
        is_active: true
      },
      {
        fullname: 'dimas aji',
        username: 'daji',
        email: 'dimasawicaksono@gmail.com',
        password: 'xxxxx',
        is_active: true
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};