import React from "react";
import { useSelector } from "react-redux";

export default function MyNotes({
    handleNoteUpdate = () => { },
    handleNoteDelete = () => { },
}) {
    const { notes = [] } = useSelector((state) => state.notesreducer);



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
                                        onChange={handleNoteUpdate}>
                                        <i className='bx bx-pencil'></i>
                                    </button>
                                    <button
                                        className="btn"
                                        id="delete-notes"
                                        onClick={handleNoteDelete}>
                                        <i className='bx bx-trash'></i>
                                    </button>
                                </div>
                            </div>
                            <div className="note-update-content">
                                {data.description}
                            </div>
                            <div className="note-update-time" >
                                {/* <p>{data.endtime}</p> */}
                                <p>{data.enddate} days ago</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}