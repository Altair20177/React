import { NavLink } from 'react-router-dom';
import c from '../../styles/Sidebar.module.css';

function Sidebar() {
  return (
    <nav className={c.nav}>
      <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink>
      <NavLink to="/messages" activeClassName={c.active}>Messages</NavLink>
      <NavLink to="/users" activeClassName={c.active}>Users</NavLink>
      <NavLink to="/news" activeClassName={c.active}>News</NavLink>
      <NavLink to="/music" activeClassName={c.active}>Music</NavLink>
      <NavLink to="/settings" activeClassName={c.active}>Settings</NavLink>
    </nav>
  )
}

export default Sidebar;