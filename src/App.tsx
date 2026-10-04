import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load the LegalPages
const LegalPage = lazy(() => import('./LegalPages').then(module => ({ default: module.LegalPage })));

function LandingPage() {
  useEffect(() => {
    document.title = "";
  }, []);

  return <div className="min-h-screen bg-slate-950"></div>;
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

