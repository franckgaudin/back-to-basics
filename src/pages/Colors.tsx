import Flex from "../components/Flex";
import Preview from "../components/Preview";

import "./colors.css"

export default function ColorsPage() {
  return (
    <>
      <h1 className="title">Colors</h1>
      <div className="playground">
        <Flex>
          <Preview label="rgb(0 0 0 / 0.5)">
            <div className="box colors" />
          </Preview>
          <Preview label="color-mix">
            <div className="box color-mix" />
          </Preview>
        </Flex>
      </div>
    </>
  );
}