const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Day extends Model {}

Day.init(
    {
        date: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: false,
        modelName: "day",
    }
);

module.exports = Day;
