import React from "react";
import { useSelector } from "react-redux";
import TimeStamp from "../TimeStamp/TimeStamp";
import StarRadioButton from "../StarRadioButton/StarRadioButton";

export default function MyTasks() {
    const { tasks = [] } = useSelector((state) => state.taskreducer);
    const handleStarChange = (isChecked) => {
        console.log('Star checked:', isChecked);
        // Handle your logic when the star is checked or unchecked
    };

    return (
        <div className="saved-task-container">
            <div className="icon-link task-heading">
                <i className='bx bx-list-check bx-sm'></i>
                My Tasks
            </div>
            <div className="saved-task shadow">
                {
                    tasks.map((data, index) => (
                        <div className="task-updated shadow" key={`${data.title}-${index}`}>
                            <div className="task-update" >
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <div className="task-title">
                                            {data.title}
                                        </div>
                                        <div>
                                            <TimeStamp timeStamp={data.enddate} />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <StarRadioButton 
                                    id={index}
                                    name={data.title}
                                    onChange={handleStarChange}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}