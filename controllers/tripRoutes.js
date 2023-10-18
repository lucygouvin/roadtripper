const router = require("express").Router();
const { User, Trip, Day } = require("../models");

router.get("/:tripId", async (req, res) => {
    try {
        if (req.session.userid) {
            const tripData = await Trip.findByPk(req.params.tripId, {
                include: [{ model: Day }],
                plain: true,
                nest: true,
            });
            const plainTrips = tripData.dataValues;
            res.render("tripDetails", {
                plainTrips,
                loggedIn: req.session.loggedIn,
            });
        } else {
            res.render("login", {
                loggedIn: req.session.loggedIn,
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
