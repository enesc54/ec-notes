const notesRouter = require("express").Router();
const notesController = require("../controllers/notes_controller");

notesRouter.get("/getAllNotes/:userId", notesController.getNotes);
notesRouter.get("/getNote/:userId&:noteId", notesController.getNote);

module.exports = notesRouter;
