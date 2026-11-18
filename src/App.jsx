import { useEffect, useState } from "react";
import Header from "./components/Header";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import ProjectsForm from "./components/ProjectsForm";
import SkillsForm from "./components/SkillsForm";
import ResumePreview from "./components/ResumePreview";
import { initialResumeData } from "./data/initialData";

const STORAGE_KEY = "resume-builder-pro-data";

export default function App() {
  const [resumeData, setResumeData] = useState(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    return savedData ? JSON.parse(savedData) : initialResumeData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
  }, [resumeData]);

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset the resume? All changes will be lost."
    );

    if (confirmed) {
      setResumeData(initialResumeData);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header onPrint={handlePrint} onReset={handleReset} />

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="no-print space-y-5">
          <PersonalInfoForm data={resumeData} onChange={setResumeData} />
          <EducationForm data={resumeData} onChange={setResumeData} />
          <ExperienceForm data={resumeData} onChange={setResumeData} />
          <ProjectsForm data={resumeData} onChange={setResumeData} />
          <SkillsForm data={resumeData} onChange={setResumeData} />
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <ResumePreview data={resumeData} />
        </div>
      </main>
    </div>
  );
}