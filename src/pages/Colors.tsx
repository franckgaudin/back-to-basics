import { useState } from "react";
import clsx from "clsx";

import Stack from "../components/Stack";
import Flex from "../components/Flex";
import Preview from "../components/Preview";

import "./colors.css"

const colors = {
  neutral: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900],
}

export default function ColorsPage() {
  const [baseColor, setBaseColor] = useState<string>("#212121");

  return (
    <>
      <h1 className="title">Colors</h1>
      <div className="playground">
        <Stack>
          <fieldset className="fieldset">
            <legend>Select base color</legend> 
            <input type="color" value={baseColor} onChange={event => setBaseColor(event.target.value)}/>
          </fieldset>
          <Flex>
            {colors.neutral.map(
              (color, index) => (
                <Preview key={index} label={`neutral-${color}`}>
                  <div className={clsx("box neutral", `neutral-${color}`)} style={{ "--dark": baseColor }} />
                </Preview>
              )
            )}
          </Flex>
        </Stack>
      </div>
    </>
  );
}