export default function ProjectCard({
  title,
  description,
  tech,
  repoLink,
  liveLink,
}) {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-indigo-400 transition">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>

      <p className="text-slate-300 mb-4">{description}</p>

      <p className="text-sm text-slate-400 mb-6">
        Tech: {tech}
      </p>

      <div className="flex gap-4">
        {/* GitHub Repo */}
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
        >
          View Code
        </a>

        {/* Live Demo (optional) */}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-slate-700 rounded-lg hover:border-indigo-400 transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
