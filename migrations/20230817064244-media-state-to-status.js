'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('media', 'state', 'status');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('media', 'status', 'state');
  },
};
