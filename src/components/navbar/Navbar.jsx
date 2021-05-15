import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div>
                <a>Задачи</a>
            </div>
            <div>
                <a>Финансы</a>
            </div>
            <div>
                <a>Статистика</a>
            </div>
        </div>
    );
}

export default Navbar;