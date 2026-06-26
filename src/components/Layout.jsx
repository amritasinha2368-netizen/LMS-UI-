import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ role, setRole, children }) {
  return (
    <div className="app-layout">
      <Sidebar role={role} />
      <div className="main-area">
        <Topbar role={role} setRole={setRole} />
        <main className="page-content">{children}</main>
      </div>
    </div>
  );
}