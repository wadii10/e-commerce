const express = require("express");
const { signUp, login, getUser } = require("../controllers/user.controllers");
const { SignUpRules, validator } = require("../middleware/validator");
const auth = require("../middleware/auth");

//router
router = express.Router();

router.post("/signUp",SignUpRules(), validator, signUp);

router.post("/login",login);

router.get("/profile", auth, getUser);

module.exports = router;