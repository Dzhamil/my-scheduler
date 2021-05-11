import s from './InputTaskArea.module.css'

const InputTaskArea = () => {
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

export default InputTaskArea;