'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameTable('videos', 'media');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameTable('media', 'videos');
  },
};
