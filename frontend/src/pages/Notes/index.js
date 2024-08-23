import LeftMenuItem from "components/LeftMenuItem";
import Dropdown from "components/Dropdown";
import NoteViewer from "components/NoteViewer";

import { useState, useEffect } from "react";

import { getAllNotes } from "api/NotesApi";

function Notes() {
    const [notes, setNotes] = useState([]);
    const [menuItemList, setMenuItemList] = useState([]);
    const [activeNote, setActiveNote] = useState("");

    useEffect(() => {
        async function getNotes() {
            const res = await getAllNotes(
                localStorage.getObject("currentUser").userId
            );
            setNotes(res.data);
        }
        getNotes();
    }, []);
    useEffect(() => {
        if (notes) {
            setMenuItemList(
                notes.map(note => {
                    return (
                        <LeftMenuItem
                            id={note.id}
                            title={note.title}
                            icon={note.icon}
                            active={activeNote}
                            setActive={setActiveNote}
                        />
                    );
                })
            );
        }
    }, [notes, activeNote]);

    return (
        <div className='h-dvh grid grid-cols-12 bg-[#007BFF]'>
            <div className='h-full grid justify-items-center col-span-3'>
                <div className='w-[90%] rounded-2xl bg-[#1E1F20] flex flex-col p-5 mr-0 m-10 shadow-2xl max-h-[calc(100dvh-80px)]'>
                    <div className='flex flex-row px-3  justify-between mb-3'>
                        <div className='font-lobster font-bold text-white text-4xl'>
                            ec-notes
                        </div>
                        <Dropdown
                            items={[
                                {
                                    text: "Yeni Note",
                                    onclick: () => {
                                        //TODO => new note
                                    }
                                }
                            ]}
                            className='text-white'
                        />
                    </div>
                    <div className='overflow-y-scroll no-scrollbar'>
                        {menuItemList}
                    </div>
                </div>
            </div>
            <div className='col-span-9 h-full grid justify-items-center'>
                <div className='w-[90%] rounded-2xl bg-[#1E1F20] flex flex-col p-10 m-10 shadow-2xl h-[calc(100dvh-80px)] justify-start'>
                    <NoteViewer noteId={activeNote} />
                </div>
            </div>
        </div>
    );
}

export default Notes;
