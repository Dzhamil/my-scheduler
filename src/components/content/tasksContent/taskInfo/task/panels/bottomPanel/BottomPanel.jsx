import s from './BottomPanel.module.css'

const BottomPanel = () => {
    let completeTask = () => {
        alert("Завершить задачу");
    };

    let deleteTask = () => {
        alert("Удалить задачу");
    };

    return (
        <div className={s.bottomPanel}>
            <div className={s.item}>
                <button onClick={completeTask} className={s.complete}>
                   complete
                </button>
            </div>
            <div className={s.item}>
                <button onClick={deleteTask} className={s.delete}>
                   delete
                </button>
            </div>
        </div>
    );
}

export default BottomPanel;