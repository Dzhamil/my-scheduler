import Task from "./task/Task";
import InputTaskArea from "./inputTaskArea/InputTaskArea";
import s from './TaskContent.module.css'

const TaskContent = () => {
    return (
        <div className={s.taskContent}>
            <Task category='Машина' description='Почистить салон' percent='50'/>
            <Task category='Дом' description='Сложить вещи' percent='100'/>
            <Task category='Учеба' description='Пройти курс реакта' percent='33'/>
            <InputTaskArea/>
        </div>
    );
}

export default TaskContent;