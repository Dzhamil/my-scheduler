import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div>
                <a>Tasks three</a>
            </div>

            <div>
                <a>Statistic</a>
            </div>
        </div>
    );
}

export default Navbar;