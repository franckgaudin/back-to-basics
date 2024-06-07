import clsx from "clsx";

import "./components.css";

interface FlexProps extends React.ComponentPropsWithoutRef<"div"> {
  wrap?: boolean;
}

export default function Flex(props: FlexProps) {
  const { wrap, children } = props;

  return <div className={clsx("flex", wrap && "wrap")}>{children}</div>;
}
