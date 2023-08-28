import s from "./Header.module.css"
import { Link } from "react-router-dom"

function Header() {

    const menu = ['Home', 'Works', 'Blog', 'Contact']

    return ( 
        <div className={s.header}>
            <div className={s.menu_wrapper}>
                {menu.map((elem, index) => 
                    <Link to={(index === 0) ? '/' : `/${elem.toLowerCase()}`} key={index}>
                        <h3>{elem}</h3>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;