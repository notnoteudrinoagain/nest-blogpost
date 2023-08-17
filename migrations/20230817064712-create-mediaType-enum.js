'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'media',
      'mediaType',
      Sequelize.DataTypes.ENUM(['image', 'video', 'audio']),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('media', 'mediaType');
  },
};
