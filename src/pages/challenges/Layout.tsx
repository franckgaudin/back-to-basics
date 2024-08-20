import { Outlet } from "react-router-dom";

export default function ChallengeLayout() {
  return (
    <div>
      <h1>Challenge Layout</h1>
      <Outlet />
    </div>
  );
}