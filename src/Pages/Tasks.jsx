import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Redux/Reducers/TaskReducer";
import './Tasks.css';
import MyTasks from "../Components/MyTasks/MyTasks";

export default function Tasks() {

    const INITIAL_STATE = {
        title: "",
        description: "",
        enddate: "",
        endtime: "",
    };

    const [taskData, setTaskData] = useState(INITIAL_STATE);
    const dispatcher = useDispatch();
    const { tasks = [] } = useSelector((state) => state.taskreducer);

    function handleChange(e) {
        let taskDataCopy = {
            ...taskData,
        };
        taskDataCopy[e.target.id] = e.target.value;
        setTaskData(taskDataCopy);
        console.log(e.target.value);
    }

    function handleSubmit() {
        dispatcher(addTask(taskData));
        setTaskData(INITIAL_STATE);
        console.log(taskData);
    }


    return (
        <div>
            <div className="task-create-container shadow">
                <div className="add-task">
                    <h2 className="mb-4"><b>Add a Task</b></h2>
                    <input
                        className="form-control mb-4"
                        type="text" id="title"
                        placeholder="Title"
                        value={taskData.title}
                        onChange={handleChange}
                    />
                    <textarea
                        className="form-control mb-4"
                        id="description"
                        placeholder="Take a task..."
                        value={taskData.description}
                        onChange={handleChange} />
                </div>
                <div className="set-time">
                    <input 
                        className="form-control mb-4"
                        type="date" id="enddate"
                        placeholder="enddate"
                        value={taskData.enddate}
                        onChange={handleChange}
                    />
                    <input 
                        className="form-control mb-4"
                        type="time" id="endtime"
                        placeholder="endtime"
                        value={taskData.endtime}
                        onChange={handleChange}
                    />
                </div>
                <div className="save-task">
                    <button
                        className="btn"
                        id="add-notes"
                        onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </div>
            <div>
                <MyTasks/>
            </div>
        </div>
    );
}