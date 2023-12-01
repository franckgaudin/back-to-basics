import Flex from "../components/Flex";

import "./button.css";

export default function ButtonPage() {
  return (
    <>
      <h1 className="title">Button</h1>
      <div className="playground">
        <Flex>
          <button className="button">Manage</button>
          <button className="button button-2024">Manage</button>
        </Flex>
      </div>
    </>
  );
}
