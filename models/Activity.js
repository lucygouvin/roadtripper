const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Activity extends Model {}

Activity.init(
    {
        name: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
        },
        duration: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.STRING,
        },
        prioriy: {
            type: DataTypes.FLOAT,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: false,
        modelName: "activity",
    }
);

module.exports = Activity;
