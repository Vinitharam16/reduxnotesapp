import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteById, getNoteById } from "../../Redux/Reducers/NoteReducer";

export default function MyNotes() {
    const INITIAL_STATE = {
        title: "",
        description: "",
        enddate: "",
        endtime: "",
    }

    const [notetitle, setNotetitle] = useState(INITIAL_STATE);
    const { notes = [], note = {} } = useSelector((state) => state.notesreducer);
    const dispatcher = useDispatch();

    function handleNoteUpdate(e,notetitle) {
        const matchingData = dispatcher(getNoteById({e,notetitle}));
        let matchingDataCopy = {
            ...matchingData
        };
        console.log(matchingDataCopy);

        matchingDataCopy[e.target.id]=e.target.value;
        setNotetitle(matchingDataCopy); 
    }

    function handleNoteDelete(index) {
        dispatcher(deleteNoteById(index));
    }



    return (
        <div className="saved-notes-container">
            <div className="icon-link notes-heading">
                <i className='bx bx-notepad bx-sm'></i>
                My Notes
            </div>
            <div className="heading-1">
                Recently viewed
            </div>
            <div className="saved-note">
                {
                    notes.map((data, index) => (
                        <div className="notes-updated shadow" key={`${data.title}-${index}`}>
                            <div className="note-update" >
                                <div className="note-title">
                                    {data.title}
                                </div>
                                <div className="note-icons">
                                    <button className="btn"
                                        id="edit-notes"
                                        onClick={handleNoteUpdate}
                                    >
                                        <i className='bx bx-pencil'></i>
                                    </button>
                                    <button
                                        className="btn"
                                        id="delete-notes"
                                        onClick={()=>handleNoteDelete(index)}>
                                        <i className='bx bx-trash'></i>
                                    </button>
                                </div>
                            </div>
                            <div className="note-update-content">
                                {data.description}
                            </div>
                            <div className="note-update-time" >
                                <p>{data.enddate} days ago</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}