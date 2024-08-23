const { db } = require("../firebase");
const {
    setDoc,
    doc,
    getDocs,
    getDoc,
    collection
} = require("firebase/firestore");

const ApiError = require("../utils/error");

class Note {
    constructor() {
        this.db = db;
    }
    async getNotes(userId) {
        try {
            const result = [];
            const notesRef = collection(this.db, "users", userId, "notes");

            await getDocs(notesRef).then(querySnapshot => {
                querySnapshot.forEach(data => {
                    result.push({
                        id: data.id,
                        title: data.data().title,
                        icon: data.data().icon
                    });
                });
            });

            return result;
        } catch (e) {
            const error = new ApiError("İstek başarısız...", 400);
            throw error;
        }
    }

    async getNote(userId, noteId) {
        try {
            var result;
            const noteRef = doc(this.db, "users", userId, "notes", noteId);

            await getDoc(noteRef).then(data => {
                result = data.data();
            });

            return result;
        } catch (e) {
            console.log(e);
            const error = new ApiError("İstek Başarısız...", 400);
            throw error;
        }
    }
}

module.exports = Note;
