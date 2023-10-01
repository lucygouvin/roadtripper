const router = require("express").Router();
const { User, Trip } = require("../models");

// GET the login page
router.get("/login", (req, res) => {
    res.render("login");
});

// Log in
router.post("/login", async (req, res) => {
    try {
        const dbUser = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!dbUser) {
            res.status(400).json({
                message: "Incorrect username or password, please try again.",
            });
            return;
        }

        const verifyPassword = await dbUser.confirmPassword(req.body.password);

        if (!verifyPassword) {
            res.status(400).json({
                message: "Incorrect username or password, please try again.",
            });
            return;
        }

        req.session.loggedIn = true;
        req.session.user = dbUser.username;
        req.session.userid = dbUser.id;
        req.session.save();
        res.status(200).send();
    } catch (err) {
        res.status(500).json(err);
    }
});

// Log out
router.post("/logout", async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.get("/dashboard", async (req, res) => {
    try {
        if (req.session.userid) {
            const tripData = await Trip.findAll({
                where: {
                    userId: req.session.userid,
                },
            });
            const plainTrips = tripData.map((trip) =>
                trip.get({ plain: true })
            );
            res.render("dashboard", {
                plainTrips,
                loggedIn: req.session.loggedIn,
            });
        } else {
            res.render("dashboard", {
                loggedIn: req.session.loggedIn,
            });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
