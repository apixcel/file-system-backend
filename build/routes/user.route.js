"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.post("/register", user_controller_1.registerUserController);
router.post("/signin", user_controller_1.signinController);
const userRoute = router;
exports.default = userRoute;
