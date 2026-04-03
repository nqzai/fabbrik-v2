import Link from 'next/link';
import { Shield, Lock, Database, Globe, BookOpen, ShieldCheck, Check, X, ArrowLeft } from 'lucide-react';

const C = { blue: '#1e40af', dark: '#1f2937', teal: '#10b981', border: '#e5e7eb' };

export default function Security() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold" style={{ color: C.blue }}>Fabbrik</Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </header>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-12 h-12 mx-auto mb-6" style={{ color: C.blue }} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: C.dark }}>Security & Privacy</h1>
          <p className="text-lg text-gray-600">Your code stays on GitHub. We read metadata only. Here's exactly how Fabbrik handles your data.</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: C.dark }}>GitHub OAuth Security</h2>
          <div className="bg-white rounded-lg border p-6" style={{ borderColor: C.border }}>
            <h3 className="font-semibold mb-3" style={{ color: C.dark }}>Read-Only Access</h3>
            <p className="text-sm text-gray-600 mb-4">
              Fabbrik requests the minimum OAuth scope required: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">read:user</code> and <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">repo</code> (read-only). We never request write, push, or admin permissions.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">What Fabbrik CAN do</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {['Read commit messages', 'Read file paths and line counts', 'Read commit timestamps', 'Read repository metadata'].map(t => (
                    <li key={t} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: C.teal }} />{t}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">What Fabbrik CANNOT do</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {['Write or push code', 'Delete repositories or branches', 'Modify issues, PRs, or wikis', 'Access private secrets or tokens'].map(t => (
                    <li key={t} className="flex items-start gap-2"><X className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: C.dark }}>Data We Store vs. Don't Store</h2>
          <div className="border rounded-lg overflow-hidden" style={{ borderColor: C.border }}>
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b" style={{ borderColor: C.border }}>
                <tr>
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Data Type</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Stored?</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Commit messages', true, 'AI coaching, narrative generation'],
                  ['Lines added / deleted', true, 'Speed & efficiency metrics'],
                  ['File paths changed', true, 'Impact Map categorisation'],
                  ['Build timestamps', true, 'Prompt-to-Prod Speed metric'],
                  ['Commit SHA & URL', true, 'Linking back to GitHub'],
                  ['OAuth token (encrypted)', true, 'API authentication'],
                  ['Source code', false, 'Never fetched, never stored'],
                  ['Code diffs / patches', false, 'Only stat counts, never actual code'],
                  ['Private repo secrets', false, 'Never accessed'],
                ].map(([data, stored, purpose]) => (
                  <tr key={data as string}>
                    <td className="px-5 py-3 text-gray-700">{data as string}</td>
                    <td className="px-5 py-3">
                      {stored
                        ? <span className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: C.teal }}><Check className="w-3.5 h-3.5" /> Yes</span>
                        : <span className="inline-flex items-center gap-1 text-xs font-medium text-red-500"><X className="w-3.5 h-3.5" /> Never</span>
                      }
                    </td>
                    <td className="px-5 py-3 text-gray-500">{purpose as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: C.dark }}>Compliance & Certifications</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Globe, title: 'GDPR Compliant', desc: 'Full compliance with EU data protection regulations. Data deletion on request.' },
              { icon: ShieldCheck, title: 'SOC 2 Type II', desc: 'Infrastructure built on SOC 2 compliant services. Enterprise-grade security.' },
              { icon: BookOpen, title: 'No Code Training', desc: 'Fabbrik never trains AI models on your code. Zero. None. Ever.' },
            ].map(c => (
              <div key={c.title} className="bg-white rounded-lg border p-6 text-center" style={{ borderColor: C.border }}>
                <c.icon className="w-8 h-8 mx-auto mb-3" style={{ color: C.blue }} />
                <h3 className="font-semibold text-sm mb-2" style={{ color: C.dark }}>{c.title}</h3>
                <p className="text-xs text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: C.dark }}>How to Disconnect</h2>
          <div className="bg-white rounded-lg border p-6 space-y-4" style={{ borderColor: C.border }}>
            <ol className="space-y-3 text-sm text-gray-700">
              {[
                'Go to Settings → Integrations in your Fabbrik dashboard.',
                'Click "Disconnect GitHub".',
                'Confirm disconnection. Your OAuth token is immediately revoked.',
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: C.blue }}>{i + 1}</span>
                  <span dangerouslySetInnerHTML={{ __html: step }} />
                </li>
              ))}
            </ol>
            <div className="bg-blue-50 rounded-lg p-4 border" style={{ borderColor: `${C.blue}22` }}>
              <p className="text-sm text-gray-700"><strong>What happens after disconnect:</strong> Your GitHub token is deleted, build history is purged, and no further data is collected. Your blueprints and questionnaire data remain intact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: C.dark }}>Questions?</h2>
          <p className="text-gray-600 mb-4">If you have security concerns or questions about how we handle your data, reach out directly.</p>
          <a href="mailto:security@fabbrik.us" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: C.blue }}>
            security@fabbrik.us
          </a>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: C.border }}>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Fabbrik. Immortal Reality PA LLC. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="/security" className="hover:text-gray-900 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
