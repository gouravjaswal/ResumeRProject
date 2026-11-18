export default function ResumePreview({ data }) {
  const { personal, education, experience, projects, skills, settings } = data;

  const accent = settings.accentColor;

  return (
    <div
      id="resume-preview"
      className="print-area mx-auto w-full max-w-3xl rounded-xl border border-slate-200 bg-white p-8 shadow-lg"
    >
      <header className="border-b-4 pb-4" style={{ borderColor: accent }}>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="mt-1 text-lg font-medium" style={{ color: accent }}>
          {personal.jobTitle || "Your Job Title"}
        </p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.linkedin && <span>LinkedIn</span>}
          {personal.github && <span>GitHub</span>}
          {personal.portfolio && <span>Portfolio</span>}
        </div>
      </header>

      {personal.summary && (
        <section className="mt-6">
          <h2
            className="mb-2 text-sm font-bold uppercase tracking-wide"
            style={{ color: accent }}
          >
            Professional Summary
          </h2>

          <p className="text-sm leading-relaxed text-slate-700">
            {personal.summary}
          </p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mt-6">
          <h2
            className="mb-3 text-sm font-bold uppercase tracking-wide"
            style={{ color: accent }}
          >
            Work Experience
          </h2>

          <div className="space-y-4">
            {experience.map((job) => (
              <div key={job.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-900">
                    {job.jobTitle || "Job Title"}
                  </h3>

                  <span className="text-xs font-medium text-slate-500">
                    {job.startDate} – {job.endDate}
                  </span>
                </div>

                <p className="text-sm font-medium text-slate-700">
                  {job.company}
                  {job.location && ` • ${job.location}`}
                </p>

                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {job.bullets
                    .split("\n")
                    .filter((line) => line.trim() !== "")
                    .map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="mt-6">
          <h2
            className="mb-3 text-sm font-bold uppercase tracking-wide"
            style={{ color: accent }}
          >
            Projects
          </h2>

          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id}>
                <h3 className="text-base font-semibold text-slate-900">
                  {project.name || "Project Name"}
                </h3>

                {project.technologies && (
                  <p className="text-xs font-medium text-slate-500">
                    {project.technologies}
                  </p>
                )}

                <p className="mt-1 text-sm text-slate-700">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-sm font-medium underline"
                    style={{ color: accent }}
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section className="mt-6">
          <h2
            className="mb-3 text-sm font-bold uppercase tracking-wide"
            style={{ color: accent }}
          >
            Education
          </h2>

          <div className="space-y-3">
            {education.map((item) => (
              <div key={item.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.degree || "Degree"}
                  </h3>

                  <span className="text-xs font-medium text-slate-500">
                    {item.startDate} – {item.endDate}
                  </span>
                </div>

                <p className="text-sm font-medium text-slate-700">
                  {item.institution}
                  {item.location && ` • ${item.location}`}
                </p>

                {item.details && (
                  <p className="mt-1 text-sm text-slate-700">{item.details}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <h2
            className="mb-2 text-sm font-bold uppercase tracking-wide"
            style={{ color: accent }}
          >
            Technical Skills
          </h2>

          <p className="text-sm text-slate-700">{skills.technical}</p>
        </div>

        <div>
          <h2
            className="mb-2 text-sm font-bold uppercase tracking-wide"
            style={{ color: accent }}
          >
            Soft Skills
          </h2>

          <p className="text-sm text-slate-700">{skills.soft}</p>
        </div>
      </section>
    </div>
  );
}