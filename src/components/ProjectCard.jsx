export default function ProjectCard({ title, description, tech }) {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-indigo-400 transition">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>
      <p className="text-sm text-slate-400">Tech: {tech}</p>
    </div>
  );
}
