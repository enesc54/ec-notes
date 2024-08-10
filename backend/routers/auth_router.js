const authRouter = require("express").Router();
const authController = require("../controllers/auth_controller");

authRouter.post("/login", authController.login);
authRouter.post("/signup", authController.signup);
authRouter.post("/forgot-password", authController.forgotPassword);
authRouter.post("/reset-password", authController.resetPassword);

module.exports = authRouter;
