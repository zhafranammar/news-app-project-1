'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'John',
        email: 'john@example.com',
        password: 'password123',
        phone: '123456789',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Alice',
        email: 'alice@example.com',
        password: 'password456',
        phone: '987654321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Bob',
        email: 'bob@example.com',
        password: 'password789',
        phone: '555555555',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Emma',
        email: 'emma@example.com',
        password: 'passwordabc',
        phone: '444444444',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Michael',
        email: 'michael@example.com',
        password: 'passwordxyz',
        phone: '666666666',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Sarah',
        email: 'sarah@example.com',
        password: 'passworddef',
        phone: '777777777',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'David',
        email: 'david@example.com',
        password: 'passwordghi',
        phone: '888888888',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Laura',
        email: 'laura@example.com',
        password: 'passwordjkl',
        phone: '999999999',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Kevin',
        email: 'kevin@example.com',
        password: 'passwordmno',
        phone: '1010101010',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Olivia',
        email: 'olivia@example.com',
        password: 'passwordpqr',
        phone: '1212121212',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Admin',
        email: 'admin@admin.com',
        password: 'admin',
        phone: '000000000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
