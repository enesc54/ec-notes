import { get, post } from "./api";

const getAllNotes = userId => {
    const response = get(`/notes/getAllNotes/${userId}`);
    return response;
};

const getNote = (userId, noteId) => {
    return get(`/notes/getNote/${userId}&${noteId}`);
};

const saveNote = (userId, noteId, noteData) => {
    return post(`/notes/saveNote/${userId}&${noteId}`, noteData);
};

export { getAllNotes, getNote, saveNote };
