const express = require("express");
const router = new express.Router();
const userController = require("../controllers/user");

router.get("/", userController.getUser);

router.get("/username", userController.getUsername);

module.exports = router;
