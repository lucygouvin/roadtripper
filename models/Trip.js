const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trip extends Model {}

Trip.init(
    {
        startLocation: {
            type: DataTypes.STRING,
        },
        startDate: {
            type: DataTypes.DATE,
        },
        endLocation: {
            type: DataTypes.STRING,
        },
        endDate: {
            type: DataTypes.DATE,
        },
        duration: {
            type: DataTypes.INTEGER,
        },
    },
    {
        hooks: {
            beforeCreate: async (newTripData) => {
                newTripData.duration = await parseInt(
                    newTripData.endDate - newTripData.startDate
                );
                return newTripData;
            },
        },
        sequelize,
        freezeTableName: true,
        underscored: false,
        modelName: "trip",
    }
);

module.exports = Trip;
