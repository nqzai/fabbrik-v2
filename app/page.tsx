'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Zap, GitBranch, Lock, Database, Shield,
  ChevronDown, Menu, X, ArrowRight, RotateCw, ShieldCheck,
  Check, History, BarChart3, FileText, Map, Star,
  User, Layout, Server, HardDrive, Settings, TrendingUp, TrendingDown
} from 'lucide-react';

const C = {
  blue: '#1e40af',
  dark: '#1f2937',
  teal: '#10b981',
  border: '#e5e7eb',
};

const CAROUSEL_SLIDES = [
  { step: 1, title: 'Answer the Questionnaire', desc: 'Tell Fabbrik what you want to build. Smart fields guide you through every decision.', mockup: 'questionnaire' },
  { step: 2, title: 'Get Your Blueprint', desc: 'AI generates a complete technical blueprint — architecture, stack, and implementation guide.', mockup: 'blueprint' },
  { step: 3, title: 'Connect GitHub', desc: 'One-click OAuth. Read-only access. Your code never leaves GitHub.', mockup: 'github' },
  { step: 4, title: 'Track Performance', desc: 'Live metrics, coaching scores, and cost savings — updated with every commit.', mockup: 'dashboard' },
];

function MockQuestionnaire() {
  return (
    <div className="bg-white rounded-lg border p-4 space-y-3 text-left" style={{ borderColor: C.border }}>
      <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Step 2 of 5</div>
      <div className="space-y-2">
        <label className="block text-xs font-medium text-gray-700">Project Name</label>
        <div className="h-8 rounded border px-3 flex items-center text-xs text-gray-500" style={{ borderColor: C.blue }}>My SaaS Dashboard</div>
      </div>
      <div className="space-y-2">
        <label className="block text-xs font-medium text-gray-700">Tech Stack</label>
        <div className="flex gap-2">
          {['React', 'Node.js', 'PostgreSQL'].map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-blue-50 font-medium" style={{ color: C.blue }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <label className="block text-xs font-medium text-gray-700">Description</label>
        <div className="h-16 rounded border px-3 py-2 text-xs text-gray-400" style={{ borderColor: C.border }}>A real-time analytics dashboard with user auth...</div>
      </div>
    </div>
  );
}

function MockBlueprint() {
  return (
    <div className="bg-white rounded-lg border p-4 space-y-3 text-left" style={{ borderColor: C.border }}>
      <div className="flex items-center gap-2 mb-2">
        <FileText className="w-4 h-4" style={{ color: C.blue }} />
        <span className="text-xs font-semibold text-gray-900">Generated Blueprint</span>
      </div>
      {[
        { icon: Layout, label: 'Architecture', detail: 'Monorepo · REST API · React SPA' },
        { icon: Server, label: 'Backend', detail: 'Node.js + Express + PostgreSQL' },
        { icon: Shield, label: 'Auth', detail: 'JWT + OAuth 2.0 + RBAC' },
      ].map(s => (
        <div key={s.label} className="flex items-start gap-3 p-2 rounded border bg-gray-50" style={{ borderColor: C.border }}>
          <s.icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: C.teal }} />
          <div>
            <p className="text-xs font-semibold text-gray-900">{s.label}</p>
            <p className="text-xs text-gray-500">{s.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MockGitHub() {
  return (
    <div className="bg-white rounded-lg border p-4 text-center space-y-3" style={{ borderColor: C.border }}>
      <GitBranch className="w-8 h-8 mx-auto text-gray-700" />
      <p className="text-sm font-semibold text-gray-900">Connect to GitHub</p>
      <p className="text-xs text-gray-500">Fabbrik requests <strong>read-only</strong> access to your repositories.</p>
      <div className="space-y-1 text-left text-xs text-gray-600 bg-gray-50 rounded p-3 border" style={{ borderColor: C.border }}>
        <p className="flex items-center gap-2"><Check className="w-3 h-3" style={{ color: C.teal }} /> Read commit messages & metadata</p>
        <p className="flex items-center gap-2"><Check className="w-3 h-3" style={{ color: C.teal }} /> Read file paths & line counts</p>
        <p className="flex items-center gap-2"><X className="w-3 h-3 text-red-400" /> Cannot write, push, or delete</p>
      </div>
      <div className="h-8 rounded-lg flex items-center justify-center text-xs font-semibold text-white" style={{ backgroundColor: C.blue }}>
        Authorize Fabbrik
      </div>
    </div>
  );
}

function MockDashboard() {
  return (
    <div className="bg-white rounded-lg border p-4 space-y-3 text-left" style={{ borderColor: C.border }}>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Speed', value: '18m', color: C.teal },
          { label: 'Builds', value: '47', color: C.blue },
          { label: 'Success', value: '94%', color: C.teal },
        ].map(m => (
          <div key={m.label} className="rounded border p-2 text-center" style={{ borderColor: C.border }}>
            <p className="text-xs text-gray-400">{m.label}</p>
            <p className="text-lg font-bold" style={{ color: m.color }}>{m.value}</p>
          </div>
        ))}
      </div>
      <div className="h-20 rounded border flex items-end justify-around px-2 pb-2" style={{ borderColor: C.border }}>
        {[40, 55, 45, 65, 50, 70, 60, 75, 68, 80].map((h, i) => (
          <div key={i} className="rounded-sm w-3" style={{ height: `${h}%`, backgroundColor: i > 6 ? C.teal : `${C.blue}33` }} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {[1,2,3,4].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
          <Star className="w-3 h-3 text-gray-300" />
        </div>
        <span className="text-xs text-gray-500">Coach Score: 4.2</span>
      </div>
    </div>
  );
}

const MOCKUP_MAP: Record<string, () => React.ReactElement> = {
  questionnaire: MockQuestionnaire,
  blueprint: MockBlueprint,
  github: MockGitHub,
  dashboard: MockDashboard,
};

function HeroCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % CAROUSEL_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  const slide = CAROUSEL_SLIDES[active];
  const MockComponent = MOCKUP_MAP[slide.mockup];
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="transition-opacity duration-300">
        <MockComponent />
        <div className="mt-3 bg-white/90 backdrop-blur-sm rounded-lg border p-3 text-center" style={{ borderColor: C.border }}>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Step {slide.step} of 4</p>
          <p className="text-sm font-bold mt-1" style={{ color: C.dark }}>{slide.title}</p>
          <p className="text-xs text-gray-500 mt-1">{slide.desc}</p>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {CAROUSEL_SLIDES.map((_, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === active ? 'scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
            style={i === active ? { backgroundColor: C.blue } : undefined}
          />
        ))}
      </div>
    </div>
  );
}

function TrustSignal() {
  const initials = ['SC', 'MR', 'PK', 'JD'];
  return (
    <div className="flex items-center gap-3 mt-6">
      <div className="flex -space-x-2.5">
        {initials.map((init, i) => (
          <div key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white"
            style={{ backgroundColor: [C.blue, C.teal, '#6366f1', '#f59e0b'][i] }}>
            {init}
          </div>
        ))}
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white bg-gray-100" style={{ color: C.blue }}>+500</div>
      </div>
      <p className="text-sm text-gray-500">Join 500+ developers who saved time and improved code quality</p>
    </div>
  );
}

const TABS = [
  { id: 'history', label: 'Build History', icon: History },
  { id: 'dashboard', label: 'Performance', icon: BarChart3 },
  { id: 'report', label: 'Report Card', icon: FileText },
  { id: 'impact', label: 'Impact Map', icon: Map },
] as const;

type TabId = typeof TABS[number]['id'];

function TabBuildHistory() {
  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-4">
        <h3 className="text-2xl font-bold" style={{ color: C.dark }}>See Every Build. Every Metric. Every Saving.</h3>
        <p className="text-gray-600 leading-relaxed">Every push to GitHub is a data point. Every data point tells a story.</p>
        <ul className="space-y-2 mt-4">
          {['Which prompts took longest to ship', 'Which features required the most revisions', 'Cost per build and total credit spent', 'Full prompt text for every build'].map(t => (
            <li key={t} className="flex items-start gap-2 text-gray-700"><Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: C.teal }} />{t}</li>
          ))}
        </ul>
        <div className="mt-6 border rounded-lg overflow-hidden text-xs" style={{ borderColor: C.border }}>
          <div className="grid grid-cols-5 bg-gray-50 font-semibold text-gray-500 px-3 py-2">
            <span>Timestamp</span><span>Feature</span><span>Commit</span><span>LoC</span><span>Status</span>
          </div>
          {[
            { time: 'Apr 1, 10:31', feat: 'Auth flow', sha: 'a3c1def', loc: '+150', ok: true },
            { time: 'Apr 1, 11:42', feat: 'Dashboard', sha: 'b7f2ea1', loc: '+230', ok: true },
            { time: 'Apr 2, 09:15', feat: 'API routes', sha: 'c9d4b32', loc: '+180', ok: false },
          ].map((r, i) => (
            <div key={i} className="grid grid-cols-5 px-3 py-2 border-t text-gray-500" style={{ borderColor: '#f3f4f6' }}>
              <span>{r.time}</span><span>{r.feat}</span><span className="font-mono">{r.sha}</span><span>{r.loc}</span>
              <span style={{ color: r.ok ? C.teal : '#f59e0b' }}>{r.ok ? '✓ Done' : '⏳ Undone'}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="border-l-4 bg-blue-50 p-5 rounded-r-lg" style={{ borderColor: C.blue }}>
          <p className="text-sm text-gray-700 font-medium">Filter by date, feature, status. Export to CSV. Drill into any build.</p>
        </div>
      </div>
    </div>
  );
}

function TabDashboard() {
  const metrics = [
    { icon: Zap, color: C.teal, metric: 'Prompt-to-Prod Speed', value: '18 min', sub: '↓ 29 min last week' },
    { icon: RotateCw, color: C.blue, metric: 'Build Volume', value: '47 builds', sub: '+12 vs. last week' },
    { icon: ShieldCheck, color: C.teal, metric: 'Stability Index', value: '94%', sub: 'Excellent' },
  ];
  const velocityData = [6,8,5,9,7,4,3,7,9,6,8,10,5,4];
  const complexityData = [
    { feat: 'Auth', words: 120, loc: 150 },
    { feat: 'Dashboard', words: 200, loc: 230 },
    { feat: 'API', words: 80, loc: 180 },
    { feat: 'Settings', words: 60, loc: 90 },
    { feat: 'Reports', words: 150, loc: 200 },
  ];
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold" style={{ color: C.dark }}>Your Personal Performance Cockpit</h3>
        <p className="text-gray-600 mt-1">Updated every 60 seconds with live metrics.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {metrics.map(m => (
          <div key={m.metric} className="rounded-lg border p-5 bg-white shadow-sm" style={{ borderColor: C.border }}>
            <div className="flex items-center justify-between mb-3">
              <m.icon className="w-6 h-6" style={{ color: m.color }} />
              <TrendingUp className="w-4 h-4" style={{ color: C.teal }} />
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">{m.metric}</p>
            <p className="text-2xl font-bold mt-1" style={{ color: C.dark }}>{m.value}</p>
            <p className="text-xs mt-1 text-gray-500">{m.sub}</p>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="border rounded-lg p-5 bg-white" style={{ borderColor: C.border }}>
          <p className="text-sm font-semibold mb-4" style={{ color: C.dark }}>Build Velocity (Last 14 Days)</p>
          <div className="flex items-end gap-1 h-32">
            {velocityData.map((v, i) => (
              <div key={i} className="flex-1 rounded-sm" style={{ height: `${(v / 12) * 100}%`, backgroundColor: C.teal }} />
            ))}
          </div>
        </div>
        <div className="border rounded-lg p-5 bg-white" style={{ borderColor: C.border }}>
          <p className="text-sm font-semibold mb-4" style={{ color: C.dark }}>Prompt Complexity vs LoC</p>
          <div className="space-y-3">
            {complexityData.map(d => (
              <div key={d.feat} className="space-y-1">
                <p className="text-xs text-gray-500">{d.feat}</p>
                <div className="flex gap-1">
                  <div className="h-3 rounded-sm" style={{ width: `${(d.words / 250) * 100}%`, backgroundColor: C.blue }} />
                  <div className="h-3 rounded-sm" style={{ width: `${(d.loc / 250) * 100}%`, backgroundColor: `${C.teal}99` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TabReportCard() {
  const grades = [
    { grade: 'A+', color: C.teal, subject: 'Speed', note: "You're shipping 34% faster than last quarter." },
    { grade: 'B-', color: '#f59e0b', subject: 'Clarity', note: 'Your prompts are cleaner, but try cutting 20% more words.' },
    { grade: 'A', color: C.teal, subject: 'Budget', note: 'Cost per LoC is down 18%.' },
    { grade: 'A+', color: C.teal, subject: 'Stability', note: '91% first-try success.' },
  ];
  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2 space-y-4">
        <h3 className="text-2xl font-bold" style={{ color: C.dark }}>Your Quarterly Report Card</h3>
        <p className="text-gray-600">School grades for your builds.</p>
        <div className="space-y-3 mt-6">
          {grades.map(g => (
            <div key={g.subject} className="flex items-start gap-4 p-3 rounded-lg border bg-white" style={{ borderColor: C.border }}>
              <span className="text-3xl font-bold shrink-0 w-12 text-center" style={{ color: g.color }}>{g.grade}</span>
              <div>
                <p className="font-semibold text-sm" style={{ color: C.dark }}>{g.subject}</p>
                <p className="text-xs text-gray-500 mt-0.5">🦉 {g.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-3 space-y-4">
        <div className="bg-blue-50 border rounded-lg p-4 text-center" style={{ borderColor: `${C.blue}33` }}>
          <p className="text-sm text-gray-500">Overall Efficiency Index</p>
          <p className="text-4xl font-bold mt-1" style={{ color: C.blue }}>92/100</p>
        </div>
      </div>
    </div>
  );
}

function TabImpactMap() {
  const blocks = [
    { icon: User, label: 'The Front Door', desc: 'Auth / Login', active: true },
    { icon: Layout, label: 'The Look & Feel', desc: 'UI / Components', active: false },
    { icon: Server, label: 'The Engine Room', desc: 'API / Logic', active: true },
    { icon: HardDrive, label: 'The Memory', desc: 'Database / Schema', active: false },
    { icon: Settings, label: 'The Control Panel', desc: 'Config / Secrets', active: false },
  ];
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {blocks.map(b => (
          <div key={b.label} className="rounded-lg p-4 text-center border transition-all"
            style={{ borderColor: b.active ? C.teal : C.border, backgroundColor: b.active ? '#ecfdf5' : '#f9fafb' }}>
            <b.icon className="w-6 h-6 mx-auto mb-2" style={{ color: b.active ? C.teal : '#9ca3af' }} />
            <p className="text-xs font-semibold" style={{ color: b.active ? C.dark : '#6b7280' }}>{b.label}</p>
            <p className="text-xs text-gray-400 mt-0.5">{b.desc}</p>
            {b.active && <span className="inline-block mt-2 text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-100" style={{ color: C.teal }}>Changed</span>}
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold" style={{ color: C.dark }}>What You Actually Built</h3>
        <p className="text-gray-600 leading-relaxed">Your app has a house. This shows which rooms you just remodeled.</p>
        <div className="border-l-4 bg-blue-50 p-4 rounded-r-lg" style={{ borderColor: C.blue }}>
          <p className="text-sm text-gray-700">Changed areas glow green. Untouched areas stay grey.</p>
        </div>
      </div>
    </div>
  );
}

function FeatureTabs() {
  const [tab, setTab] = useState<TabId>('history');
  return (
    <div>
      <div className="flex overflow-x-auto border-b mb-8" style={{ borderColor: C.border }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className="flex items-center gap-2 px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors"
            style={{ borderColor: tab === t.id ? C.blue : 'transparent', color: tab === t.id ? C.dark : '#6b7280' }}>
            <t.icon className="w-4 h-4" />{t.label}
          </button>
        ))}
      </div>
      <div key={tab}>
        {tab === 'history' && <TabBuildHistory />}
        {tab === 'dashboard' && <TabDashboard />}
        {tab === 'report' && <TabReportCard />}
        {tab === 'impact' && <TabImpactMap />}
      </div>
    </div>
  );
}

function TestimonialCards() {
  const testimonials = [
    { name: 'Sarah Chen', title: 'Founder, NovaTech', initials: 'SC', color: C.blue, quote: "I stopped guessing. After connecting GitHub, I saw that Fabbrik saved me $247 in Q1 alone.", stat: 'Saved $247/quarter' },
    { name: 'Marcus Rodriguez', title: 'Senior Developer', initials: 'MR', color: C.teal, quote: 'My Coach Score went from 3.2 to 4.6 stars over 12 builds.', stat: 'Prompt quality +35%' },
    { name: 'Priya Kapoor', title: 'CTO, BuildStack', initials: 'PK', color: '#6366f1', quote: 'One GitHub OAuth. Visibility across Lovable, Cursor, and Replit builds.', stat: '3 platforms connected' },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map(t => (
        <div key={t.name} className="bg-white rounded-lg border p-6 shadow-sm" style={{ borderColor: C.border, borderLeftWidth: '4px', borderLeftColor: C.blue }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: t.color }}>
              {t.initials}
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: C.dark }}>{t.name}</p>
              <p className="text-xs text-gray-500">{t.title}</p>
            </div>
          </div>
          <p className="italic text-gray-600 text-sm leading-relaxed mb-3">"{t.quote}"</p>
          <div className="flex items-center gap-1 mb-2">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
          </div>
          <p className="font-bold text-sm" style={{ color: C.blue }}>{t.stat}</p>
        </div>
      ))}
    </div>
  );
}

const FAQS = [
  { q: 'Can Fabbrik write back to my repo?', a: 'No. Read-only OAuth only. Fabbrik can never modify your code.' },
  { q: 'What if I disconnect GitHub later?', a: 'From Settings → Integrations, you can disconnect anytime. Your build history is deleted. Zero residual data.' },
  { q: 'How long after I push does Fabbrik see my build?', a: '<60 seconds. GitHub webhooks deliver in real-time.' },
  { q: "My commits don't have the prompt in them. Will Fabbrik still work?", a: 'Fabbrik will extract a narrative from the code diff alone.' },
  { q: "Can I use Fabbrik if I'm building with Cursor, not Lovable?", a: 'Absolutely. Any GitHub-connected workflow works.' },
  { q: 'Is there a free trial for the GitHub connection?', a: 'Yes. Connect GitHub and get your first 20 builds of free coaching + insights.' },
  { q: 'Does Fabbrik train on my code?', a: 'No. Your code never leaves GitHub. We read metadata only.' },
  { q: 'What if my team uses multiple vibe-coding tools?', a: 'Fabbrik sees all of them via GitHub. One OAuth connection.' },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {FAQS.map((faq, i) => (
        <div key={i} className="border rounded-lg overflow-hidden" style={{ borderColor: C.border }}>
          <button onClick={() => setOpen(open === i ? null : i)}
            className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
            <span className="font-medium text-sm pr-4" style={{ color: C.dark }}>{faq.q}</span>
            <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && (
            <div className="p-4 bg-white border-t" style={{ borderColor: C.border }}>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Landing() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold" style={{ color: C.blue }}>Fabbrik</span>
            <span className="text-xs font-semibold text-white px-2 py-0.5 rounded-full" style={{ backgroundColor: C.blue }}>v3</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#security" className="hover:text-gray-900 transition-colors">Security</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link href="/auth/login" className="px-4 py-2 text-sm font-semibold border rounded-lg transition-all hover:bg-gray-50" style={{ color: C.blue, borderColor: C.blue }}>Sign In</Link>
            <Link href="/auth/sign-up" className="px-5 py-2 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90" style={{ backgroundColor: C.blue }}>Get Started</Link>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3" style={{ borderColor: C.border }}>
            <a href="#features" className="block text-gray-600 py-2 text-sm" onClick={() => setMobileMenu(false)}>Features</a>
            <a href="#security" className="block text-gray-600 py-2 text-sm" onClick={() => setMobileMenu(false)}>Security</a>
            <a href="#faq" className="block text-gray-600 py-2 text-sm" onClick={() => setMobileMenu(false)}>FAQ</a>
            <div className="flex gap-3 pt-2">
              <Link href="/auth/login" className="flex-1 text-center px-4 py-2 text-sm font-semibold border rounded-lg" style={{ color: C.blue, borderColor: C.blue }}>Sign In</Link>
              <Link href="/auth/sign-up" className="flex-1 text-center px-4 py-2 text-sm font-semibold text-white rounded-lg" style={{ backgroundColor: C.blue }}>Get Started</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: C.dark }}>
              From Prompt to Proof in One GitHub Connection
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">Fabbrik gives you the blueprint. Then it proves the blueprint actually works.</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><span>⚡</span> Build once. Get graded instantly.</li>
              <li className="flex items-center gap-2"><span>🎯</span> See exactly what you shipped.</li>
              <li className="flex items-center gap-2"><span>💰</span> Finally prove you saved money.</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/auth/sign-up" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: C.blue }}>
                Connect GitHub & See Your Performance <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#features" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:bg-gray-50" style={{ borderColor: C.blue, color: C.blue }}>
                Watch Demo
              </a>
            </div>
            <TrustSignal />
          </div>
          <HeroCarousel />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <TestimonialCards />
        </div>
      </section>

      {/* Features Tabs */}
      <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FeatureTabs />
        </div>
      </section>

      {/* Vibe-Coder Comparison */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: C.dark }}>Built for Everyone Who Codes With AI</h2>
            <p className="text-gray-600">Whether you're in Lovable, Cursor, or Replit — Fabbrik proves it works.</p>
            <ul className="space-y-4 mt-4">
              {[
                '⚡ Your Prompt Coach grades every build (1–5 stars + tips)',
                '🎯 Platform-agnostic — GitHub sees all your vibe-coding tools',
                '🔄 Webhook-powered, not polled — <60 second latency',
                '📊 Real-time feedback loop — watch your prompt quality improve',
                '📈 Proof of ROI — show your boss the numbers',
              ].map(b => <li key={b} className="text-gray-700 text-sm">{b}</li>)}
            </ul>
          </div>
          <div className="border rounded-lg overflow-hidden bg-white" style={{ borderColor: C.border }}>
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b" style={{ borderColor: C.border }}>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">Metric</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">Direct AI</th>
                  <th className="text-left px-4 py-3 font-semibold" style={{ color: C.blue }}>Fabbrik v3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Avg iterations per MVP', '4–6', '1–2'],
                  ['Prompt length', '500–1K words', '3K+ words'],
                  ['Setup time (new dev)', '3–5 days', '4–8 hours'],
                  ['Cost per SaaS build', '$40–60', '$15–25'],
                  ['Includes guide?', 'No', 'Yes'],
                ].map(r => (
                  <tr key={r[0]}>
                    <td className="px-4 py-3 text-gray-700">{r[0]}</td>
                    <td className="px-4 py-3 text-gray-400">{r[1]}</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: C.blue }}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: C.dark }}>Your Code Stays On GitHub. Period.</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Lock, title: 'Read-Only Access', desc: 'Fabbrik cannot write, modify, or delete anything.' },
              { icon: Database, title: 'Metadata Only', desc: 'We store commit messages, file paths, line counts. Never source code.' },
              { icon: Shield, title: 'Encrypted Tokens', desc: 'GitHub OAuth tokens stored encrypted at rest.' },
            ].map(c => (
              <div key={c.title} className="rounded-lg bg-white border p-6 shadow-sm text-center" style={{ borderColor: C.border }}>
                <c.icon className="w-8 h-8 mx-auto mb-4" style={{ color: C.blue }} />
                <h3 className="font-semibold mb-2" style={{ color: C.dark }}>{c.title}</h3>
                <p className="text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: C.dark }}>Frequently Asked Questions</h2>
          <FAQAccordion />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 text-center text-white" style={{ backgroundColor: C.blue }}>
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">See Your Performance in Real-Time</h2>
          <p className="text-lg text-blue-100">Connect GitHub. Get graded on every build. Know your savings.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/auth/sign-up" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-white transition-all hover:bg-gray-100 text-base" style={{ color: C.blue }}>
              Connect GitHub for Free <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#features" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 border-white/40 text-white hover:bg-white/10 transition-all text-base">
              Watch the 4-Min Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 text-white" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-xl font-bold text-white">Fabbrik</span>
            <p className="text-sm text-gray-400 mt-2">Blueprint to build. Proof at every step.</p>
          </div>
          <div>
            <p className="font-semibold text-sm mb-3">Product</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm mb-3">Company</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm mb-3">Resources</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Fabbrik. Immortal Reality PA LLC. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
