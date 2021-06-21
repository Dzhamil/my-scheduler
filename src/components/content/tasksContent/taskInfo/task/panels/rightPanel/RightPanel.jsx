import s from './RightPanel.module.css'

const RightPanel = () => {
    let addTask = () => {
        alert("Добавить новую таску");
    }

    let showTasks = () => {
        alert("Открыть дерево тасок?");
    }

    return (
        <div className={s.rightPanel}>
            <div className={s.item}>
                <button onClick={addTask} className={s.new}>
                    +
                </button>
            </div>
            <div className={s.item}>
                <button onClick={showTasks} className={s.show}>
                    >
                </button>
            </div>
        </div>
    );
}

export default RightPanel;