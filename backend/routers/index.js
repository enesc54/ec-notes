const mainRouter = require("express").Router();
const authRouter = require("./auth_router");
const notesRouter = require("./notes_router");

mainRouter.use("/auth", authRouter);
mainRouter.use("/notes", notesRouter);

module.exports = mainRouter;
