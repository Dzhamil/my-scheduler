import s from './LeftPanel.module.css'

const LeftPanel = () => {
    let hideTasks = () => {
        alert("Скрыть дерево тасок");
    }

    return (
        <div className={s.leftPanel}>
            <div/>
            <div className={s.item}>
                <button onClick={hideTasks} className={s.close}>
                    {'<'}
                </button>
            </div>
        </div>
    );
}

export default LeftPanel;