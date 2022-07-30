import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const setActive = ({ isActive }) => (isActive ? css.active_link : css.link);

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>

          <NavLink to="/movies" className={setActive}>
            Movies
          </NavLink>

          {/* <NavLink to="/about" className={setActive}>
            About
          </NavLink> */}
        </nav>
      </header>

      <main className={css.container}>
        <Outlet />
      </main>

      <footer className={css.footer}>
        &copy;
        <a href="https://github.com/devisd" className={css.footer_link}>
          DevisD.
        </a>
        2022
      </footer>
    </>
  );
};

export default Layout;
