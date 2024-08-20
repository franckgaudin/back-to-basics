import clsx from "clsx";

import Flex from "../components/Flex";
import Preview from "../components/Preview";

import "./button.css";

export const Button = ({ children, variant = "default", year = "2023", ...other }: React.ComponentPropsWithoutRef<"button"> & { variant?: "default" | "secondary", year? : "2023" | "2024" }) => {
  const classes = clsx("button",{
    [`button-${variant}`]: variant !== "default",
    [`button-${year}`]: year !== "2023",
  })

  return (
    <button className={classes} {...other}>
      {children}
    </button>
  );
}

export default function ButtonPage() {
  return (
    <>
      <h1 className="title">Button</h1>
      <div className="playground">
          <Flex>
            <Preview label="2023">
              <Button>Manage</Button>
            </Preview>
            <Preview>
              <Button variant="secondary">Manage</Button>
            </Preview>
            <Preview label="2024">
              <Button year="2024">Manage</Button>
            </Preview>
            <Preview>
              <Button variant="secondary" year="2024">Manage</Button>
            </Preview>
          </Flex>
      </div>
    </>
  );
}
