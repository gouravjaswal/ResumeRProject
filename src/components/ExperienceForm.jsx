import Field from "./Field";

export default function ExperienceForm({ data, onChange }) {
  const addItem = () => {
    onChange({
      ...data,
      experience: [
        ...data.experience,
        {
          id: crypto.randomUUID(),
          jobTitle: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          bullets: "",
        },
      ],
    });
  };

  const removeItem = (id) => {
    onChange({
      ...data,
      experience: data.experience.filter((item) => item.id !== id),
    });
  };

  const updateItem = (id, name, value) => {
    onChange({
      ...data,
      experience: data.experience.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      ),
    });
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">
          Work Experience
        </h2>

        <button
          onClick={addItem}
          className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          + Add Experience
        </button>
      </div>

      <div className="space-y-4">
        {data.experience.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-slate-200 bg-slate-50 p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-700">
                Experience Entry
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
                label="Job Title"
                name="jobTitle"
                value={item.jobTitle}
                onChange={(event) =>
                  updateItem(item.id, event.target.name, event.target.value)
                }
              />

              <Field
                label="Company"
                name="company"
                value={item.company}
                onChange={(event) =>
                  updateItem(item.id, event.target.name, event.target.value)
                }
              />

              <Field
                label="Location"
                name="location"
                value={item.location}
                onChange={(event) =>
                  updateItem(item.id, event.target.name, event.target.value)
                }
              />

              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="Start Date"
                  name="startDate"
                  value={item.startDate}
                  onChange={(event) =>
                    updateItem(item.id, event.target.name, event.target.value)
                  }
                />

                <Field
                  label="End Date"
                  name="endDate"
                  value={item.endDate}
                  onChange={(event) =>
                    updateItem(item.id, event.target.name, event.target.value)
                  }
                />
              </div>
            </div>

            <div className="mt-3">
              <Field
                label="Responsibilities / Achievements"
                name="bullets"
                value={item.bullets}
                onChange={(event) =>
                  updateItem(item.id, event.target.name, event.target.value)
                }
                rows={4}
                placeholder="Write one achievement per line."
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}