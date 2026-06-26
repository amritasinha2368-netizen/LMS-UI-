export default function StatCard({ title, icon, children, wide }) {
  return (
    <section className={`stat-card ${wide ? "wide" : ""}`}>
      <div className="card-title">
        {icon}
        <h3>{title}</h3>
      </div>
      {children}
    </section>
  );
}