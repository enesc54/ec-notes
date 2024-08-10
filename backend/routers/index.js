const mainRouter = require("express").Router();
const authRouter = require("./auth_router");

mainRouter.use("/auth", authRouter);

module.exports = mainRouter;
