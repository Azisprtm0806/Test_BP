"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pelanggan", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      no_telp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tgl_lahir: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });

    await queryInterface.addConstraint("pelanggan", {
      type: "unique",
      fields: ["name"],
      name: "UNIQUE_USERS_NAME",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pelanggan");
  },
};
