import React, { useState } from "react";
import './Notes.css';
import { useDispatch, useSelector } from "react-redux";
import { addNotes } from "../Redux/Reducers/NoteReducer";
import MyNotes from "../Components/MyNotes/MyNotes";



export default function Notes() {

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    function days(date) {
        var currdate = new Date();
        var saveddate = date;
        var timediff = saveddate.getTime() - currdate.getTime();
        var days = Math.round(timediff / (1000 * 3600 * 24));
        return days;
    }

    const icons = ["bx-bold","bxs-color-fill","bx-list-ul","bx-font-color","bx-align-left","bx-undo","bx-redo"];

    const INITIAL_STATE = {
        title: "",
        description: "",
        enddate: "",
        endtime: "",
    }

    const [notetitle, setNotetitle] = useState(INITIAL_STATE);
    const dispatcher = useDispatch();
    const { notes = [] } = useSelector((state) => state.notesreducer);
    


    function handleNoteChange(e) {
        let notetitleCopy = {
            ...notetitle,
            enddate: `${days(new Date())}`,
            endtime: `${formatAMPM(new Date())}`,           
        };
        notetitleCopy[e.target.id] = e.target.value;
        setNotetitle(notetitleCopy);
    }

    function handleSaveNote(e) {
        dispatcher(addNotes(notetitle));
        console.log(notes);

    }

    return (
        <div>
            <div className="notes-create-container shadow">
                <div className="add-notes">
                    <h2 className="mb-4"><b>Add a Note</b></h2>
                    <input
                        className="form-control mb-4"
                        type="text" id="title"
                        placeholder="Title"
                        value={notetitle.title}
                        onChange={handleNoteChange}
                    />
                    <textarea
                        className="form-control"
                        id="description"
                        placeholder="Take a note..."
                        value={notetitle.description}
                        onChange={handleNoteChange} />
                </div>
                <div 
                    className="set-time icon-link"
                    onChange={handleNoteChange}
                    value = {notetitle.endtime}>
                    <i className='bx bx-time-five bx-sm'></i>
                    {`Today, ${formatAMPM(new Date())}`}
                </div>
                <div className="toolbar bx-md">
                    <div>
                        {
                            icons.map((icon,index) => (
                                <i className={`bx ${icon}`} key={`${index}`}></i>
                            ))
                        }
                    </div>
                    <div>
                        <button
                            className="btn"
                            id="add-notes"
                            onClick={handleSaveNote}>
                            Save
                        </button>
                    </div>

                </div>
            </div>
            {/* <div className="saved-notes-container">
                <div className="icon-link notes-heading">
                    <i className='bx bx-notepad bx-sm'></i>
                    My Notes
                </div>
                <div className="heading-1">Recently viewed</div>
                <div className="notes-updated shadow">
                    <div className="note-update-title">
                        {
                            notes.map((data, index) => (
                                <p key={`${data.title}-${index}`}>{data.title}</p>
                            ))
                        }
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
                        {
                            notes.map((data, index) => (
                                <p key={`${data.description}-${index}`}>{data.description}</p>
                            ))
                        }
                    </div>
                    <div className="note-update-time">
                        {`5 days ago`}
                    </div>
                </div>
            </div> */}
            <MyNotes/>
        </div>
    );
}