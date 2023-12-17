import Flex from "../components/Flex";
import Preview from "../components/Preview";

import "./button.css";

export default function ButtonPage() {
  return (
    <>
      <h1 className="title">Button</h1>
      <div className="playground">
        <Flex>
          <Preview label="2023">
            <button className="button">Manage</button>
          </Preview>
          <Preview label="2024">
            <button className="button button-2024">Manage</button>
          </Preview>
        </Flex>
      </div>
    </>
  );
}
