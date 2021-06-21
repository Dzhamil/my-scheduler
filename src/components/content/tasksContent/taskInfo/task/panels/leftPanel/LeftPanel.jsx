import s from './LeftPanel.module.css'

const LeftPanel = () => {
    return (
        <div className={s.leftPanel}>
            <div className={s.item}>

            </div>
            <div className={s.item}>
                <button className={s.close}>
                    {'<'}
                </button>
            </div>
        </div>
    );
}

export default LeftPanel;