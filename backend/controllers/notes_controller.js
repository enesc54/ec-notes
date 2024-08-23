const Note = require("../models/note");
const NoteModel = new Note();

const Response = require("../utils/response");

const getNotes = async (req, res) => {
    const { userId } = req.params;
    const result = await NoteModel.getNotes(userId);

    new Response("İstek başarılı...", result).success(res);
};

const getNote = async (req, res) => {
    const { userId,noteId } = req.params;
    const result = await NoteModel.getNote(userId,noteId);

    new Response("İstek başarılı...", result).success(res);
};

module.exports = {
    getNotes
    ,getNote
};
