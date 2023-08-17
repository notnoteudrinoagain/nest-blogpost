'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.dropTable('InterestedVideos');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.createTable('InterestedVideos', {
      videoId: Sequelize.DataTypes.INTEGER,
      userId: Sequelize.DataTypes.INTEGER,
    });
  },
};
