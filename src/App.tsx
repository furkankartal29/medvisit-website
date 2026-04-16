import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, DollarSign, Users, CheckCircle2, Mail } from 'lucide-react';
import { LegalPage } from './LegalPages';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 md:w-10 md:h-10 text-emerald-500 overflow-hidden rounded-lg flex items-center justify-center">
      <img src="/logo.png" alt="Medvisit Logo" className="w-full h-full object-cover" />
    </div>
    <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-sky-600">
      Medvisit
    </span>
  </div>
);

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Features', href: isHome ? '#features' : '/#features' },
    { name: 'Pricing', href: isHome ? '#pricing' : '/#pricing' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <a href="#hero" className="px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Download Free
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-b border-slate-200/50 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-slate-200 my-2"></div>
          <a href="#hero" className="px-4 py-3 text-center text-sm font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors shadow-md" onClick={() => setIsOpen(false)}>
            Download Free
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-100/50 rounded-full blur-3xl opacity-50 pointer-events-none -z-10"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-3xl opacity-40 pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Now available on iOS & Android
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight text-balance">
            Your Private Clinic, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">in Your Pocket.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 text-balance mb-10 leading-relaxed">
            Smart scheduling, package management, and financial tracking designed exclusively for independent therapists, physiotherapists, and solo healthcare practitioners.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="https://apps.apple.com/app/id6760361651" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
              <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              Download on App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.medvisitapp.android" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-900 bg-white border-2 border-slate-200 rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group">
              <svg viewBox="0 0 512 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              Get on Google Play
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
            <div className="flex -space-x-2">
              {['E', 'S', 'A', 'M'].map((initial, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white ${['bg-emerald-500', 'bg-sky-500', 'bg-orange-400', 'bg-slate-700'][i]
                  }`}>
                  {initial}
                </div>
              ))}
            </div>
            <p>Trusted by solo practitioners worldwide</p>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-none relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-sky-500/20 rounded-[3rem] blur-2xl transform rotate-6"></div>
          {/* Mockup Container */}
          <div className="relative mx-auto w-[300px] h-[600px] bg-white border-[8px] border-slate-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
            <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-3xl w-40 mx-auto z-20"></div>
            {/* Mockup UI */}
            <div className="flex-1 bg-slate-50 relative pt-10 px-4 pb-6 overflow-hidden flex flex-col gap-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Dr. Sarah</h3>
                  <p className="text-xs text-slate-500">Tue, 24 Oct</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold border border-emerald-200">
                  S
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Next Appointment</h4>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex flex-col items-center justify-center text-orange-600 leading-tight">
                    <span className="text-sm font-bold">14</span>
                    <span className="text-[10px] uppercase font-bold">Oct</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Michael R.</p>
                    <p className="text-sm text-slate-500">Physiotherapy - 45m</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-2">
                <div className="flex-1 bg-emerald-500 text-white p-4 rounded-2xl shadow-sm shadow-emerald-200">
                  <DollarSign className="w-6 h-6 mb-2 opacity-80" />
                  <p className="text-2xl font-bold">$2,450</p>
                  <p className="text-xs font-medium opacity-80">This Month</p>
                </div>
                <div className="flex-1 bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
                  <Users className="w-6 h-6 mb-2 text-sky-500" />
                  <p className="text-2xl font-bold text-slate-900">128</p>
                  <p className="text-xs font-medium text-slate-500">Active Patients</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mt-2 flex-1">
                <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center justify-between">
                  Today's Schedule
                  <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full font-medium">3 Left</span>
                </h4>
                <div className="space-y-3 relative before:absolute before:inset-y-2 before:left-[11px] before:w-[2px] before:bg-slate-100">
                  <div className="flex gap-4 relative">
                    <div className="w-6 h-6 rounded-full bg-white border-[3px] border-emerald-500 z-10 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">10:00 AM</p>
                      <p className="text-xs text-slate-500">Emma Thompson</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative">
                    <div className="w-6 h-6 rounded-full bg-white border-[3px] border-sky-500 z-10 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">11:30 AM</p>
                      <p className="text-xs text-slate-500">James Wilson (Initial)</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative">
                    <div className="w-6 h-6 rounded-full bg-white border-[3px] border-slate-300 z-10 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">02:00 PM</p>
                      <p className="text-xs text-slate-500">Break</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-sky-500" />,
      title: 'Smart Calendar',
      description: 'Prevent double-booking with intelligent conflict alerts and timezone-aware scheduling.',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-100',
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-500" />,
      title: 'Package Sessions',
      description: 'Easily manage recurring patients, track session balances, and automate reminders.',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
    },
    {
      icon: <DollarSign className="w-6 h-6 text-orange-500" />,
      title: 'Revenue Dashboard',
      description: 'Track your paid/unpaid sessions and monitor clinic expenses in real-time.',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-100',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to run your practice</h2>
          <p className="text-lg text-slate-600">Focus on your patients while we handle the administrative heavy lifting.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} ${feature.borderColor} border flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white to-slate-50 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transparent, simple pricing</h2>
          <p className="text-lg text-slate-600 mb-8">Start for free, upgrade when you need to grow.</p>

          {/* Monthly / Yearly Toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full p-1.5 shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${!isYearly ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${isYearly ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              Yearly <span className="text-emerald-500 font-bold ml-1">Save 16%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-lg transition-all relative">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Free</h3>
            <p className="text-slate-500 mb-6 min-h-[48px]">Perfect for getting started.</p>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-slate-900">$0</span>
              <span className="text-slate-500 font-medium">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-slate-600"><strong className="text-slate-900">Up to 20 appointments</strong> / month</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-slate-600">Basic Calendar</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-slate-600">Single Device</span>
              </li>
            </ul>
            <a href="#hero" className="block w-full py-4 px-6 text-center font-semibold text-slate-900 bg-white border-2 border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-colors">
              Get Started Free
            </a>
          </div>

          {/* Solo Pro Tier */}
          <div className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl relative text-white transform md:-translate-y-4">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Solo Pro</h3>
            <p className="text-slate-500 mb-6 min-h-[48px]">Everything you need to run a full-time practice.</p>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold">{isYearly ? '$19.99' : '$1.99'}</span>
              <span className="text-slate-500 font-medium">{isYearly ? '/year' : '/month'}</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-200"><strong className="text-white">Unlimited</strong> Appointments</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-200">Package Sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-200">Expense Tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-200">Financial Dashboard</span>
              </li>
            </ul>
            <a href="#hero" className="block w-full py-4 px-6 text-center font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-2xl transition-colors shadow-lg shadow-emerald-500/30">
              Upgrade to Pro
            </a>
          </div>
        </div>

        {/* Removed Founder's edition */}
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 text-emerald-500 overflow-hidden rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="Medvisit Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold text-slate-900">Medvisit</span>
            </Link>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Smart scheduling, package management, and financial tracking for independent practitioners.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-center sm:text-left">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><Link to="/terms" className="text-slate-500 hover:text-emerald-600 transition-colors text-sm">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-slate-500 hover:text-emerald-600 transition-colors text-sm">Privacy Policy</Link></li>
                <li><Link to="/dpa" className="text-slate-500 hover:text-emerald-600 transition-colors text-sm">Data Processing (DPA)</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Contact</h3>
              <ul className="space-y-3">
                <li><a href="mailto:support@medvisitapp.com" className="text-slate-500 hover:text-emerald-600 transition-colors text-sm flex items-center justify-center sm:justify-start gap-2"><Mail className="w-4 h-4" /> support@medvisitapp.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>Copyright © 2026 Medvisit (medvisitapp.com). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans text-slate-900 bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/faq" element={<LegalPage type="faq" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/dpa" element={<LegalPage type="dpa" />} />
          {/* Mobile App Redirect Matches */}
          <Route path="/data-processing-addendum" element={<LegalPage type="dpa" defaultLang="en" />} />
          <Route path="/tr/kvkk-aydinlatma-metni" element={<LegalPage type="dpa" defaultLang="tr" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
