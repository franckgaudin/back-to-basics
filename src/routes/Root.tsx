import { useDarkMode } from 'usehooks-ts'
import { Outlet, NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import { ToggleButton } from 'react-aria-components';

import { Home, Moon, Sun } from "react-feather";

import "./root.css";


const routes = [
  {
    id: 1,
    path: "/colors",
    label: "Colors",
  },
  {
    id: 2,
    path: "/shadow",
    label: "Shadow",
  },
  {
    id: 3,
    path: "/button",
    label: "Button",
  },
];

const navLinkClasses = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) => {
  return clsx("nav__link", {
    active: isActive,
    pending: isPending,
  });
};

export default function Root() {
  const { isDarkMode, toggle} = useDarkMode(false);

  return (
    <div className="root" data-mode={isDarkMode ? "dark" : "light"}>
      <div className="top-bar">
        <h1 className="brand">Playground</h1>
        <ToggleButton className="toggle-mode" onChange={toggle}>
          { isDarkMode ? <Sun /> : <Moon /> }
        </ToggleButton>
      </div>
      <div className="wrapper">
        <aside className="sidebar">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link nav__link--home">
                  <Home />
                </Link>
              </li>
              <li className="nav__item">
                <span className="nav__group">HTML & CSS</span>
                <ul className="nav__list">
                  {routes.map((route) => (
                    <li className="nav__item" key={route.id}>
                      <NavLink className={navLinkClasses} to={route.path}>
                        {route.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
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
