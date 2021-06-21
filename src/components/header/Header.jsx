import s from "./Header.module.css"
import PercentPanel from "../other/percentPanel/PercentPanel";
const Header = (props) => {
    return (
        <div className={s.header}>
            <div>
                <span>
                    Статус выполненных задач:
                </span>
            </div>
            <div>
                <PercentPanel percent={props.percent}/>
            </div>
        </div>
    );
}

export default Header;