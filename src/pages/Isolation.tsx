import { useState } from "react";
import { createPortal } from "react-dom";

import "./isolation.css";

function Modal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <div>I'm a modal dialog</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
// the css definition is on `../routes/Root.tsx`
export default function IsolationPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} />,
          document.getElementById("root")!,
        )}
    </>
  );
}
