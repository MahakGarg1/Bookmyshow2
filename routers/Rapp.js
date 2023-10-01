const express = require("express");
const router = express.Router();

/*const moviesRoute = require("./movies.route");
router.use("/movies", moviesRoute); */

const theatresRoute = require("./theatres.route");
router.use("/theatres", theatresRoute);
