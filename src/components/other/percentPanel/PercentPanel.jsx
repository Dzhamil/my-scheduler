import s from './PercentPanel.module.css'

const PercentPanel = (props) => {
    return (
        <div className={s.percentPanel}>
            <div className={s.status}>
                    <span>
                        {props.percent} %
                    </span>
            </div>
            <div className={s.line} >
                <progress value={props.percent} max="100"/>
            </div>
        </div>

    );
}

export default PercentPanel;