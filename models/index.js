const User = require("./User");
const Activity = require("./Activity");
const Day = require("./Day");
const Trip = require("./Trip");

User.hasMany(Trip, { onDelete: "CASCADE" });
Trip.belongsTo(User);

Trip.hasMany(Day, { onDelete: "CASCADE" });
Day.belongsTo(Trip);

Day.hasMany(Activity, { onDelete: "CASCADE" });
Activity.belongsTo(Day);

module.exports = { User, Trip, Day, Activity };
