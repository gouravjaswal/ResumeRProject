export default function Header({ onPrint, onReset }) {
  return (
    <header className="no-print sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            Resume Builder <span className="text-blue-600">Pro</span>
          </h1>
          <p className="text-xs text-slate-500">
            Build, customize, and download a professional resume
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Reset
          </button>

          <button
            onClick={onPrint}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Download PDF
          </button>
        </div>
      </div>
    </header>
  );
}