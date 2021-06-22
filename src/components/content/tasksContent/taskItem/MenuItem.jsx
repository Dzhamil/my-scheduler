import s from './MenuItem.module.css'
import {NavLink} from "react-router-dom";

const MenuItem = (props) => {
    let menuItemType;
    let clickLink;

    if(props.menuItemType === 'newTask') {
        menuItemType = s.taskItem + " " + s.redRef;
        clickLink = () => {
            props.setActive(true)
        }
    } else {
        menuItemType = s.taskItem + " " + s.whiteRef
    };

    return (
        <div className={menuItemType}>
            <span>
                <NavLink onClick={clickLink} to={props.to} activeClassName={s.active}>
                    {props.category}
                </NavLink>
            </span>
        </div>
    );
}

export default MenuItem;