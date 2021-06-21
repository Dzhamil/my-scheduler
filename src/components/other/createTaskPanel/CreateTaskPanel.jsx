import s from './CreateTaskPanel.module.css'
import React from "react";

const CreateTaskPanel = () => {
    let taskCategoryValue = React.createRef();
    let taskDescValue = React.createRef();

    let addTask = () => {
        alert("add new task"
            + "\ntask category = "
            + taskCategoryValue.current.value
            + "\ntask description = "
            + taskDescValue.current.value);
    }

    return (
        <div className={s.inputTaskArea}>
            <span>
                Add the category:
            </span>
            <div className={s.input}>
                <textarea ref={taskCategoryValue}/>
            </div>
            <span>
                Add the description:
            </span>
            <div className={s.input}>
                <textarea ref={taskDescValue}/>
            </div>
            <div onClick={addTask} className={s.addButton}>
                <button>Add task</button>
            </div>
        </div>
    );
}

export default CreateTaskPanel;