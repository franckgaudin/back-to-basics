import "./components.css";

export default function Stack({
  children,
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className="stack">{children}</div>;
}