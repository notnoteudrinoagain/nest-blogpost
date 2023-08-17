'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('media', 'featuredDate');
    await queryInterface.removeColumn('media', 'mostPopularDate');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'media',
      'featuredDate',
      Sequelize.DataTypes.DATE,
    );
    await queryInterface.addColumn(
      'media',
      'mostPopularDate',
      Sequelize.DataTypes.DATE,
    );
  },
};
