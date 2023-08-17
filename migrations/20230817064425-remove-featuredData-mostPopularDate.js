'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('media', 'featuredDate', { transaction: t }),
        queryInterface.removeColumn('media', 'mostPopularDate', { transaction: t })
      ])
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'media',
          'featuredDate',
          Sequelize.DataTypes.DATE,
          { transaction: t }
        ),
        queryInterface.addColumn(
          'media',
          'mostPopularDate',
          Sequelize.DataTypes.DATE, { transaction: t }
        ),
      ])
    });
  },
};
