import { useState } from "react";
import { createPortal } from "react-dom";

import {Button} from "./Button.tsx";

import "./isolation.css";

function Modal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <div>I'm a modal dialog</div>
        <Button onClick={onClose} year="2024">Close</Button>
      </div>
    </div>
  );
}
// the css definition is on `../routes/Root.tsx`
export default function IsolationPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <h1 className="title">Isolation</h1>
      <div className="playground">
      <Button onClick={() => setShowModal(true)} variant="secondary" year="2024">Show modal using a portal</Button>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} />,
          document.getElementById("root")!,
        )}
      </div>
    </>
  );
}
