import c from '../../styles/Header.module.css';
import { NavLink } from "react-router-dom";

function Header(props) {
    return (
        <header className={c.header}>
            <img src="https://pbs.twimg.com/profile_images/1063925348205821958/DlGcxdOl.jpg" alt="" />
            <div className={c.login}>
                {props.isAuth 
                    ? props.login
                    : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;