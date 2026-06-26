export default function Badge({ children, green }) {
  return <span className={green ? "badge green" : "badge"}>{children}</span>;
}