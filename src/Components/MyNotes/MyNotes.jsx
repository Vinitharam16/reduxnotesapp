import React from "react";
import { useSelector } from "react-redux";

export default function MyNotes() {
    const { notes = [] } = useSelector((state) => state.notesreducer);

    return (
        <div>
            <div className="saved-notes-container">
                <div className="icon-link notes-heading">
                    <i className='bx bx-notepad bx-sm'></i>
                    My Notes
                </div>
                <div className="heading-1">Recently viewed</div>
                <div className="saved-note">
                    {
                        notes.map((data, index) => (
                            <div className="notes-updated shadow">
                                <div className="note-update-title" key={`${data.title}-${index}`}>
                                    <p>{data.title}</p>
                                    <div className="editing-icon bx-sm">
                                        <div>
                                            <i className='bx bx-pencil'></i>
                                        </div>
                                        <div>
                                            <i className='bx bx-trash' ></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="note-update-content">
                                    {data.description}
                                </div>
                                <div className="note-update-time">
                                    {/* <p>{data.endtime}</p> */}
                                    <p>{data.enddate} days ago</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}