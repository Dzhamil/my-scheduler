import Task from "./taskInfo/task/Task";
import CreateTaskPanel from "../../other/createTaskPanel/CreateTaskPanel";
import s from './TaskContent.module.css'
import {Route} from "react-router-dom";
import MenuItem from "./taskItem/MenuItem";
import {useState} from "react";
import Modal from "../../other/modal/Modal";

const TaskContent = (props) => {
    let tasks = props.taskData.tasks
        .map(item => <MenuItem to={item.to} category={item.category} color={'white'}/>);
    let taskInfos = props.taskData.tasks
        .map(item => <Route exact path={item.to}
                            render={() => <Task category={item.category} description={item.description}
                                                percent={item.percent}/>}/>);

    const [modalActive, setModalActive] = useState(true);

    return (
        <div className={s.taskContent}>
            <div className={s.menuItems}>
                <div className={s.tasks}>
                    {tasks}
                </div>
                <div className={s.createTask}>
                    <MenuItem to={props.taskData.createTaskPanelData.to}
                              setModalActive={setModalActive}
                              category={props.taskData.createTaskPanelData.description}
                              menuItemType={'newTask'}
                              setActive={setModalActive}
                    />
                </div>
            </div>
            <div className={s.taskInfo}>
                {taskInfos}
                <Modal active={modalActive} setActive={setModalActive}>
                    <CreateTaskPanel/>
                    {/*blblbl*/}
                </Modal>
                {/*<Route exact path={props.taskData.createTaskPanelData.to} render={() => <CreateTaskPanel/>}/>*/}
            </div>
        </div>
    );
}

export default TaskContent;