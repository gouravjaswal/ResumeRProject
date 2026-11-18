import Field from "./Field";

export default function PersonalInfoForm({ data, onChange }) {
  const { personal } = data;

  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange({
      ...data,
      personal: {
        ...personal,
        [name]: value,
      },
    });
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">
        Personal Information
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="fullName"
          value={personal.fullName}
          onChange={handleChange}
        />

        <Field
          label="Job Title"
          name="jobTitle"
          value={personal.jobTitle}
          onChange={handleChange}
        />

        <Field
          label="Email"
          name="email"
          type="email"
          value={personal.email}
          onChange={handleChange}
        />

        <Field
          label="Phone"
          name="phone"
          value={personal.phone}
          onChange={handleChange}
        />

        <Field
          label="Location"
          name="location"
          value={personal.location}
          onChange={handleChange}
        />

        <Field
          label="LinkedIn"
          name="linkedin"
          value={personal.linkedin}
          onChange={handleChange}
        />

        <Field
          label="GitHub"
          name="github"
          value={personal.github}
          onChange={handleChange}
        />

        <Field
          label="Portfolio"
          name="portfolio"
          value={personal.portfolio}
          onChange={handleChange}
        />
      </div>

      <div className="mt-4">
        <Field
          label="Professional Summary"
          name="summary"
          value={personal.summary}
          onChange={handleChange}
          rows={4}
          placeholder="Write 2–4 lines about your experience and goals."
        />
      </div>
    </section>
  );
}