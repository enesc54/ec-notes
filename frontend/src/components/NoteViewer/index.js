import Heading from "components/Heading";
import Callout from "components/Callout";
import ListView from "components/ListView";
import TodoListItem from "components/TodoListItem";
import ToggleListItem from "components/ToggleListItem";
import TextViewer from "components/TextViewer";

import { getNote, saveNote } from "api/NotesApi";

import { useState, useEffect, useCallback } from "react";

function NoteViewer(props) {
    const { noteId } = props;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState([]);

    const [timeoutId, setTimeoutId] = useState(null);

    const resetTimer = useCallback(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        const newTimeoutId = setTimeout(() => {
            saveNote(localStorage.getObject("currentUser").userId, noteId, {
                title,
                content
            });
        }, 5000);

        setTimeoutId(newTimeoutId);
    }, [timeoutId]);

    useEffect(() => {
        window.addEventListener("keydown", resetTimer);

        return () => {
            window.removeEventListener("keydown", resetTimer);

            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [resetTimer, timeoutId]);

    useEffect(() => {
        setTitle("");
        setContent([]);

        getNote(localStorage.getObject("currentUser").userId, noteId).then(
            res => {
                setTitle(res.data.title);
                setContent(res.data.content);
            }
        );

        //    getNoteContent();
        //alert(title);
    }, [noteId]);

    const updateContent = (index, newContent) => {
        const updatedContent = [...content];
        updatedContent[index].content = newContent;
        setContent(updatedContent);
    };

    const noteRender = () => {
        return (
            <div>
                {content.map((item, index) => {
                    switch (item.type) {
                        case "text":
                            return (
                                <TextViewer
                                    content={item.content}
                                    onContentChange={newContent => {
                                        updateContent(index, newContent);
                                    }}
                                    style={item.style}
                                />
                            );
                        case "heading":
                            return (
                                <Heading
                                    type={item.headingType}
                                    placeholder={item.placeholder}
                                    value={item.value}
                                    onContentChange={newContent => {
                                        updateContent(index, newContent);
                                    }}
                                />
                            );
                        case "callout":
                            return (
                                <Callout
                                    content={item.content}
                                    onContentChange={newContent => {
                                        updateContent(index, newContent);
                                    }}
                                />
                            );
                        case "list":
                            var ListItem;
                            switch (item.listType) {
                                case "todo":
                                    ListItem = TodoListItem;
                                    break;
                                case "toggle":
                                    ListItem = ToggleListItem;
                                    break;
                                default:
                                    break;
                            }
                            return (
                                <ListView
                                    data={item.data}
                                    onContentChange={newContent =>
                                        updateContent(index, newContent)
                                    }
                                    item={ListItem}
                                />
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        );
    };

    return (
        <div className='h-full w-full'>
            <div>
                <Heading
                    type='h1'
                    value={title}
                    onContentChange={newTitle => setTitle(newTitle)}
                />
            </div>

            {content?.length > 0 ? (
                noteRender()
            ) : (
                <div
                    onClick={() => {
                        setContent([{ type: "text", content: "" }]);
                    }}
                    className='h-full w-full text-gray-400'
                >
                    <div>Tap here to continue...</div>
                </div>
            )}
        </div>
    );
}

export default NoteViewer;
