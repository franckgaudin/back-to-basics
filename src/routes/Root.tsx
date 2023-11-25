import { Outlet, Link } from "react-router-dom";

import './root.css';

export default function Root() {
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
                <Link className="nav__link" to="/">Home</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/contact">Contact</Link>
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