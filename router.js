const express = require("express");
const router = express();
const convertNumber = require("./controller");

router.post("/number", convertNumber);

module.exports = router;
