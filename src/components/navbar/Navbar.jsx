import s from './Navbar.module.css'
import NavbarItem from "./navbarItem/NavbarItem";

const Navbar = (props) => {
    let items = props.navbarData.itemsData
        .map(item => <NavbarItem to={item.to} description={item.description}/>)

    return (
        <div className={s.navbar}>
            <div className={s.items}>
                {items}
            </div>
        </div>
    );
}

export default Navbar;