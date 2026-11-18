import Field from "./Field";

export default function ProjectsForm({ data, onChange }) {
  const addItem = () => {
    onChange({
      ...data,
      projects: [
        ...data.projects,
        {
          id: crypto.randomUUID(),
          name: "",
          technologies: "",
          link: "",
          description: "",
        },
      ],
    });
  };

  const removeItem = (id) => {
    onChange({
      ...data,
      projects: data.projects.filter((item) => item.id !== id),
    });
  };

  const updateItem = (id, name, value) => {
    onChange({
      ...data,
      projects: data.projects.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      ),
    });
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Projects</h2>

        <button
          onClick={addItem}
          className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          + Add Project
        </button>
      </div>

      <div className="space-y-4">
        {data.projects.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-slate-200 bg-slate-50 p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-700">
                Project Entry
              </h3>

              <button
                onClick={() => removeItem(item.id)}
                className="rounded-md px-2 py-1 text-xs font-medium text-red-600 transition hover:bg-red-50"
              >
                Remove
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Field
                label="Project Name"
                name="name"
                value={item.name}
                onChange={(event) =>
                  updateItem(item.id, event.target.name, event.target.value)
                }
              />

              <Field
                label="Technologies"
                name="technologies"
                value={item.technologies}
                onChange={(event) =>
                  updateItem(item.id, event.target.name, event.target.value)
                }
              />

              <Field
                label="Project Link"
                name="link"
                value={item.link}
                onChange={(event) =>
                  updateItem(item.id, event.target.name, event.target.value)
                }
              />
            </div>

            <div className="mt-3">
              <Field
                label="Description"
                name="description"
                value={item.description}
                onChange={(event) =>
                  updateItem(item.id, event.target.name, event.target.value)
                }
                rows={3}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}