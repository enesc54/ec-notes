const Note = require("../models/note");
const NoteModel = new Note();

const Response = require("../utils/response");

const getNotes = async (req, res) => {
    const { userId } = req.params;
    const result = await NoteModel.getNotes(userId);

    new Response("İstek başarılı...", result).success(res);
};

const getNote = async (req, res) => {
    const { userId, noteId } = req.params;
    const result = await NoteModel.getNote(userId, noteId);

    new Response("İstek başarılı...", result).success(res);
};

const saveNote = async (req, res) => {
    try {
        const { userId, noteId } = req.params;
        const noteData = req.body;
        await NoteModel.saveNote(userId, noteId, noteData);

        new Response("Not başarıyla kaydedildi...").success(res);
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getNotes,
    getNote,
    saveNote
};
