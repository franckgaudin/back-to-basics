import { Outlet, NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import { Home } from "react-feather";

import "./root.css";

const routes = [
  {
    id: 1,
    path: "/button",
    label: "Button",
  },
  {
    id: 2,
    path: "/contact",
    label: "Contact",
  },
];

export default function Root() {
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
