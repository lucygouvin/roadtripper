const router = require("express").Router();
const activityRoutes = require("./activityRoutes");
const dayRoutes = require("./dayRoutes");
const tripRoutes = require("./tripRoutes");
const userRoutes = require("./userRoutes");

router.get("/", (req, res) => {
    res.render("home", { loggedIn: req.session.loggedIn });
});

// router.use("/activity", activityRoutes);
// router.use("/day", dayRoutes);
router.use("/trip", tripRoutes);
router.use("/user", userRoutes);

module.exports = router;
