export default function Preview({ label, children }: React.ComponentPropsWithoutRef<"div"> & { label?: string }) {
  return (
    <div className="preview">
      <div className="preview-label">
        {label}
      </div>
      <div className="preview-body">
        {children}
      </div>
    </div>
  )}