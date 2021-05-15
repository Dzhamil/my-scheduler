import s from './BottomPanel.module.css'

const BottomPanel = () => {
    return (
        <div className={s.bottomPanel}>
            <div className={s.item}>
                <button className={s.complete}>
                   complete
                </button>
            </div>
            <div className={s.item}>
                <button className={s.delete}>
                   delete
                </button>
            </div>
        </div>
    );
}

export default BottomPanel;