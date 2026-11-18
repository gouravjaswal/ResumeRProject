import Field from "./Field";

const colors = [
  { name: "Blue", value: "#2563eb" },
  { name: "Green", value: "#16a34a" },
  { name: "Purple", value: "#7c3aed" },
  { name: "Red", value: "#dc2626" },
  { name: "Dark", value: "#0f172a" },
];

export default function SkillsForm({ data, onChange }) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange({
      ...data,
      skills: {
        ...data.skills,
        [name]: value,
      },
    });
  };

  const updateSettings = (name, value) => {
    onChange({
      ...data,
      settings: {
        ...data.settings,
        [name]: value,
      },
    });
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">
        Skills & Theme
      </h2>

      <div className="space-y-4">
        <Field
          label="Technical Skills"
          name="technical"
          value={data.skills.technical}
          onChange={handleChange}
          rows={3}
          placeholder="React, JavaScript, Tailwind CSS, Git"
        />

        <Field
          label="Soft Skills"
          name="soft"
          value={data.skills.soft}
          onChange={handleChange}
          rows={3}
          placeholder="Communication, Teamwork, Problem Solving"
        />

        <div>
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Accent Color
          </span>

          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => updateSettings("accentColor", color.value)}
                className={`h-9 w-9 rounded-full border-2 transition ${
                  data.settings.accentColor === color.value
                    ? "border-slate-900 scale-110"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}