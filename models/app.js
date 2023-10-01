const { Sequelize, DataTypes } = require("sequelize");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Theatre = require('./theatremodel')(sequelize, DataTypes);
db.Movie = require('./moviemodel')(sequelize, DataTypes);
db.Timings = require('./showtimemodel')(sequelize, DataTypes);
db.Screen = require('./screenmodel')(sequelize, DataTypes);



module.exports = db;