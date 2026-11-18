export const initialResumeData = {
  personal: {
    fullName: "Your Name",
    jobTitle: "Frontend Developer",
    email: "you@example.com",
    phone: "+91 00000 00000",
    location: "Hamirpur, Himachal Pradesh, India",
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
    portfolio: "https://yourportfolio.com",
    summary:
      "Frontend developer passionate about building clean, responsive, and user-friendly web applications using React, JavaScript, and Tailwind CSS.",
  },
  education: [
    {
      id: crypto.randomUUID(),
      degree: "Bachelor of Technology",
      institution: "Your College Name",
      location: "Himachal Pradesh, India",
      startDate: "2022",
      endDate: "2026",
      details:
        "Relevant coursework: Data Structures, Web Development, Databases, Operating Systems.",
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      jobTitle: "Frontend Developer Intern",
      company: "Your Company Name",
      location: "Remote",
      startDate: "Jun 2025",
      endDate: "Present",
      bullets:
        "Built responsive React interfaces using Tailwind CSS.\nImproved page performance and reusable component structure.\nCollaborated with the team using Git and GitHub.",
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      name: "Resume Builder Pro",
      technologies: "React, Tailwind CSS, JavaScript",
      link: "https://github.com/yourusername/resume-builder-pro",
      description:
        "Built a resume builder with live preview, editable sections, autosave, theme customization, and PDF export.",
    },
  ],
  skills: {
    technical: "React, JavaScript, HTML, CSS, Tailwind CSS, Git, GitHub",
    soft: "Problem Solving, Communication, Teamwork, Time Management",
  },
  settings: {
    accentColor: "#2563eb",
    template: "modern",
  },
};