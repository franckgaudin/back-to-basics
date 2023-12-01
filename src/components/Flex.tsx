import "./components.css";

export default function Flex({
  children,
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className="flex">{children}</div>;
}
