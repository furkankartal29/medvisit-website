import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Lazy load the LegalPages
const LegalPage = lazy(() => import('./LegalPages').then(module => ({ default: module.LegalPage })));

function LandingPage() {
  // Update document title for SEO
  useEffect(() => {
    document.title = "Legal & Privacy Portal";
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 relative overflow-hidden font-sans">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Minimal Header */}
      <header className="p-6 md:p-8 max-w-7xl w-full mx-auto flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">Compliance & Policy Portal</span>
        </div>
      </header>

      {/* Main minimal section */}
      <main className="max-w-3xl w-full mx-auto px-4 py-16 text-center z-10 my-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium mb-8 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Official System Documents Active
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          System Portal <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
            & Policy Documents
          </span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Welcome to the official policy portal. All privacy compliance, terms of service, and data processing addendums remain fully active and accessible below.
        </p>

        {/* Action cards for legal links */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
          <Link
            to="/privacy"
            className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-200 group flex flex-col justify-between gap-3 shadow-lg"
          >
            <div>
              <div className="text-emerald-400 font-semibold text-sm mb-1 group-hover:translate-x-0.5 transition-transform flex items-center justify-between">
                <span>Privacy Policy</span>
                <span>&rarr;</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Data protection guidelines, security, and user rights.
              </p>
            </div>
          </Link>

          <Link
            to="/terms"
            className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900 transition-all duration-200 group flex flex-col justify-between gap-3 shadow-lg"
          >
            <div>
              <div className="text-sky-400 font-semibold text-sm mb-1 group-hover:translate-x-0.5 transition-transform flex items-center justify-between">
                <span>Terms of Service</span>
                <span>&rarr;</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                User agreement, platform terms, and service conditions.
              </p>
            </div>
          </Link>

          <Link
            to="/dpa"
            className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-900 transition-all duration-200 group flex flex-col justify-between gap-3 shadow-lg"
          >
            <div>
              <div className="text-teal-400 font-semibold text-sm mb-1 group-hover:translate-x-0.5 transition-transform flex items-center justify-between">
                <span>Data Processing</span>
                <span>&rarr;</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                KVKK & GDPR data processing addendum (DPA).
              </p>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-xs text-slate-500 z-10 border-t border-slate-900">
        <p>© 2026. All legal compliance and privacy policy documents remain active.</p>
      </footer>
    </div>
  );
}

// Fallback loader for Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-950">
    <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans text-slate-100 bg-slate-950 selection:bg-emerald-500/20 selection:text-emerald-300">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/faq" element={<LegalPage type="faq" />} />
            <Route path="/terms" element={<LegalPage type="terms" />} />
            <Route path="/privacy" element={<LegalPage type="privacy" />} />
            <Route path="/dpa" element={<LegalPage type="dpa" />} />
            {/* Mobile App & Store Privacy Policy Links */}
            <Route path="/data-processing-addendum" element={<LegalPage type="dpa" defaultLang="en" />} />
            <Route path="/tr/kvkk-aydinlatma-metni" element={<LegalPage type="dpa" defaultLang="tr" />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;

