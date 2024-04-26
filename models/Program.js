module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define(
    "Program",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name_program: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      pelanggan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "program",
      timestamps: true,
    }
  );

  return Program;
};
