import s from './MenuItem.module.css'
import {NavLink} from "react-router-dom";

const MenuItem = (props) => {
    let classOfMenuItem;
    props.color === 'red'
        ? classOfMenuItem = s.taskItem + " " + s.redRef
        : classOfMenuItem = s.taskItem + " " + s.whiteRef;

    return (
        <div className={classOfMenuItem}>
            <span>
                <NavLink to={props.to} activeClassName={s.active}>{props.category}</NavLink>
            </span>
        </div>
    );
}

export default MenuItem;