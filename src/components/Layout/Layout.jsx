import { NavLink, Outlet } from "react-router-dom";
import s from "./Layout.module.css";
const Layout = () => {
  const setActive = ({ isActive }) =>
    isActive ? s.activeLink : s.noActiveLink;
  return (
    <div className="container">
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink to={"/"} className={setActive}>
            Home
          </NavLink>
          <NavLink to={"/quiz"} className={setActive}>
            Quiz
          </NavLink>
          <NavLink to={"/quiz-builder"} className={setActive}>
            Quiz Builder
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
