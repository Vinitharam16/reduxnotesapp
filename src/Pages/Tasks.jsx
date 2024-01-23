import React from "react";

export default function Tasks() {
    return (
        <div>
            <div className="task-create-container">
                <div className="add-task">
                    <h2><b>Add a Task</b></h2>
                    <input
                        className="form-control mb-4"
                        type="text" id="task-title"
                        placeholder="Title"
                    // value={notetitle.title}
                    // onChange={handleNoteChange}
                    />
                    <textarea
                        className="form-control"
                        id="description"
                        placeholder="Add a task..."
                    // value={notetitle.description}
                    // onChange={handleNoteChange} 
                    />
                    <input 
                        name="date"
                        type="date"
                        id="endDate"
                    />
                </div>

            </div>

        </div>
    );
}