// Require packages
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize");
// Require files
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const routes = require("./controllers");

// Instantiate Express and set the port
const app = express();
const PORT = process.env.PORT || 3001;

// Instantiate the session
// const sess = {
//     secret: process.env.SECRET,
//     cookie: {
//         // cookie expires after 1 day
//         maxAge: 24 * 60 * 60 * 1000,
//     },
//     resave: true,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize,
//     }),
// };
// app.use(session(sess));

// Instantiate handlebars as template engine
const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Express middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// Sync Sequelize
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});
