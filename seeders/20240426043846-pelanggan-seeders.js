"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pelanggan", [
      {
        name: "Azisprtm",
        uuid: "cc2eb56e-9aec-4779-a731-d635a5f90e7f",
        no_telp: "0895349139240",
        password: await bcrypt.hash("azisprtm123", 10),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
      },
      {
        name: "azzssss",
        uuid: "cc2eb56e-9aec-4779-a731-d635a5f90e7f",
        no_telp: "0895349139240",
        password: await bcrypt.hash("azisprtm123", 10),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pelanggan", null, {});
  },
};
