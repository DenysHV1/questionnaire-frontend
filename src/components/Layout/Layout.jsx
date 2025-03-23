import s from "./Layout.module.css";
import { NavLink, Outlet } from "react-router-dom";

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
      <main style={{ minHeight: "100vh" }}>
        <Outlet />
      </main>
      <footer className={s.footer}>
        <p className={s.footer_text}>
          Created by Denys Harkusha | All rights reserved © 2025
        </p>
      </footer>
    </div>
  );
};

export default Layout;
