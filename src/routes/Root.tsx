import { Outlet } from "react-router-dom";

import './root.css';

export default function Root() {
  return (
    <div>
      <h1>Layout</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}