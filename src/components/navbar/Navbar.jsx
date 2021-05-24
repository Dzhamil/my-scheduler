import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div>
                <a href='/tasks'>Задачи</a>
            </div>
            <div>
                <a href='/finance'>Финансы</a>
            </div>
            <div>
                <a href='/statistic'>Статистика</a>
            </div>
        </div>
    );
}

export default Navbar;