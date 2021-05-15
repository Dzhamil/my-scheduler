import s from './RightPanel.module.css'

const RightPanel = () => {
    return (
        <div className={s.rightPanel}>
            <div className={s.item}>
                <button className={s.new}>
                    +
                </button>
            </div>
            <div className={s.item}>
                <button className={s.close}>
                    >
                </button>
            </div>
        </div>
    );
}

export default RightPanel;