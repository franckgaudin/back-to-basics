import { Outlet, NavLink } from "react-router-dom";
import clsx from 'clsx';

import './root.css';

export default function Root() {

  const navLinkClasses = ({ isActive, isPending}: {isActive: boolean, isPending: boolean}) => {
    return clsx("nav__link", {
      "active": isActive,
      "pending": isPending
    })
  }

  return (
    <div className="root">
      <div className="top-bar">
        <h1 className="brand">Playground</h1>
      </div>
      <div className="wrapper">
        <aside className="sidebar">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink className={navLinkClasses} to="/">Home</NavLink>
              </li>
              <li className="nav__item">
                <NavLink className={navLinkClasses} to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}