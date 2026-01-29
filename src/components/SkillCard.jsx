export default function SkillCard({ icon, title, items }) {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
      <div className="flex items-center gap-3 mb-4 text-indigo-400">
        {icon}
        <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      </div>

      <ul className="text-slate-300 space-y-1">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
