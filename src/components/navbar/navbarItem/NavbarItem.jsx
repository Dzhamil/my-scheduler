import s from './NavbarItem.module.css'
import {NavLink} from "react-router-dom";

const NavbarItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.to} activeClassName={s.active}>{props.description}</NavLink>
        </div>
    );
}

export default NavbarItem;