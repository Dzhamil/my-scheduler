import s from './TopPanel.module.css'

const TopPanel = (props) => {
    return (
        <div className={s.topPanel}>
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

export default TopPanel;