import { get } from "./api";

const getAllNotes = userId => {
    const response = get(`/notes/getAllNotes/${userId}`);
    return response;
};

const getNote = (userId, noteId) => {
    return get(`/notes/getNote/${userId}&${noteId}`);
};

export { getAllNotes, getNote };
