const { Sequelize, DataTypes} = reqire('sequelize');
const { sequelize } = require("./database");

const { Timings } = require("./showtimemodel");

const Screen = sequelize.define(
  "Screen",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Screen",
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    },
  }
);

Screen.hasMany(Timings, {
  foreignKey: "screenId",
  as: "timings",
});

Timings.belongsTo(Screen, {
  foreignKey: "screenId",
});

sequelize
  .sync()
  .then(() => {
    console.log("Screen db synchronized successfully.");
  })
  .catch((err) => {
    console.error("Error synchronizing Screen db:", err);
  });
