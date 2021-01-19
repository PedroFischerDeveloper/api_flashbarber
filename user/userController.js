const express = require("express");

const router = express.Router();
const Atend = require('../user/User');


router.get("/", (req, res) => {
    res.json("user controller");
});


module.exports = router;
