import c from '../../styles/Sidebar.module.css';

function Sidebar() {
  return (
    <nav className={c.nav}>
      <a href="#">Profile</a>
      <a href="#">Messages</a>
      <a href="#">News</a>
      <a href="#">Music</a>
      <a href="#">Settings</a>
    </nav>
  )
}

export default Sidebar;