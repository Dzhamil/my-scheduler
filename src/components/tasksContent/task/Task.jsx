import s from './Task.module.css'

const Task = () => {
    return (
        <div className={s.task}>
            <div>
                this is task category
            </div>
            <div className={s.description}>
                this is task description
            </div>
            <div className={s.deleteButton}>
                <button>
                    delete
                </button>
            </div>
        </div>
    );
}

export default Task;