import clsx from "clsx";

import "./components.css";

export default function Stack({
  children,
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={clsx("stack", className)}>{children}</div>;
}