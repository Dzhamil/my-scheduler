import s from './InfoPanel.module.css'

const InfoPanel = (props) => {
    return (
        <div className={s.infoPanel}>
            <div className={s.infoItem}>
                    <span className={s.category}>
                        {props.category}
                    </span>
            </div>
            <div className={s.infoItem}>
                    <span className={s.description}>
                        {props.description}
                    </span>
            </div>
        </div>
    );
}

export default InfoPanel;