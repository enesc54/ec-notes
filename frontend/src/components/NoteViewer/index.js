//import Heading from "components/Heading";
//import Callout from "components/Callout";
//import ListView from "components/ListView";
//import TodoListItem from "components/TodoListItem";
//import ToggleListItem from "components/ToggleListItem";

import { getNote } from "api/NotesApi";

import { useState, useEffect } from "react";

function NoteViewer(props) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        async function getNoteContent() {
            const res = await getNote(
                localStorage.getObject("currentUser").userId,
                props.noteId
            );

            setContent(res.data);
        }

        getNoteContent();
    }, [props.noteId]);

    return <div></div>;
}

export default NoteViewer;
