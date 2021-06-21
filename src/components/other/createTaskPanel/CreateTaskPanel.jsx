import s from './CreateTaskPanel.module.css'

const CreateTaskPanel = () => {
    return (
        <div className={s.inputTaskArea}>
            <span>
                Add the category:
            </span>
            <div className={s.input}>
                <textarea/>
            </div>
            <span>
                Add the description:
            </span>
            <div className={s.input}>
                <textarea/>
            </div>
            <div className={s.addButton}>
                <button>Add task</button>
            </div>
        </div>
    );
}

export default CreateTaskPanel;