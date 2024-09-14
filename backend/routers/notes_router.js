const notesRouter = require("express").Router();
const notesController = require("../controllers/notes_controller");

notesRouter.get("/getAllNotes/:userId", notesController.getNotes);
notesRouter.get("/getNote/:userId&:noteId", notesController.getNote);
notesRouter.post("/saveNote/:userId&:noteId", notesController.saveNote);

module.exports = notesRouter;
