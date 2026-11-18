import Field from "./Field";

export default function EducationForm({ data, onChange }) {
  const addItem = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        {
          id: crypto.randomUUID(),
          degree: "",
          institution: "",
          location: "",
          startDate: "",
          endDate: "",
          details: "",
        },
      ],
    });
  };

  const removeItem = (id) => {
    onChange({
      ...data,
      education: data.education.filter((item) => item.id !== id),
    });
  };

  const updateItem = (id, name, value) => {
    onChange({
      ...data,
      education: data.education.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      ),
    });
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Education</h2>

        <button
          onClick={addItem}
          className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          + Add Education
        </button>
      </div>

      <div className="space-y-4">
        {data.education.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-slate-200 bg-slate-50 p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-700">
                Education Entry
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
                label="Degree"
                name="degree"
                value={item.degree}
                onChange={(event) =>
                  updateItem(item.id, event.target.name, event.target.value)
                }
              />

              <Field
                label="Institution"
                name="institution"
                value={item.institution}
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
                  label="Start Year"
                  name="startDate"
                  value={item.startDate}
                  onChange={(event) =>
                    updateItem(item.id, event.target.name, event.target.value)
                  }
                />

                <Field
                  label="End Year"
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
                label="Details"
                name="details"
                value={item.details}
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