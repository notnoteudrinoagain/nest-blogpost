'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.dropTable('BoughtVideos');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.createTable('BoughtVideos', {
      videoId: Sequelize.DataTypes.INTEGER,
      userId: Sequelize.DataTypes.INTEGER,
    });
  },
};
