import c from '../../styles/Header.module.css';
/* import preloader from "../../assets/Spinner-1s-200px.gif";
import {flag} from "../Users/UsersContainer" */

function Header() {
    return (
        <header className={c.header}>
            <img src="https://pbs.twimg.com/profile_images/1063925348205821958/DlGcxdOl.jpg" alt="" />
            {/* {flag ? <img src={preloader}/> : null} */}
        </header>
    )
}

export default Header;