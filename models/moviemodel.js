
const { Sequelize, DataTypes} = reqire('sequelize');
const { sequelize } = require("./database");
const { Theatre } = require("./theatre");
const { Timings } = require("./showtimemodel");

const Movie = sequelize.define(
    "Movie",
    {
      movieid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      firstScreeningDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      lastScreeningDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Movie",
      defaultScope: {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    }
  );

  Theatre.belongsToMany(Movie, {
    foreignKey: "theatreId",
    through: { model: Timings, unique: false },
  });

  sequelize
  .sync()
  .then(() => {
    console.log("Movies db synchronized successfully.");
  })
  .catch((err) => {
    console.error("Error synchronizing Movies db:", err);
  });

module.exports = { Movie };