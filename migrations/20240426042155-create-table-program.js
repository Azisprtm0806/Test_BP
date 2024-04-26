"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("program", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_program: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pelanggan_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint("program", {
      type: "foreign key",
      name: "PROGRAM_PELANGGAN_ID",
      fields: ["pelanggan_id"],
      references: {
        table: "pelanggan",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("program");
  },
};
