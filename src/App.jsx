import { useState, useEffect } from 'react';
import { MODULES, QUIZ, SAMPLE_MSGS, SAMPLE_URLS, analyzeMsg, analyzeURL, RES, STEPS } from './data';

const G = 'bg-white/5 border border-white/10 backdrop-blur rounded-2xl';
const B = 'px-4 py-2 rounded-xl font-medium transition cursor-pointer ';
const PRI = B + 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-white';
const SEC = B + 'bg-white/10 hover:bg-white/20 text-slate-100';
const COL = { Low: '#22c55e', Medium: '#f59e0b', High: '#ef4444' };
const lvl = (p) => (p >= 80 ? 'Cyber Aware' : p >= 50 ? 'Improving' : 'Beginner');

function useLS(k, d) {
  const [v, s] = useState(() => { try { const x = localStorage.getItem(k); return x ? JSON.parse(x) : d; } catch { return d; } });
  useEffect(() => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ } }, [k, v]);
  return [v, s];
}
const Bar = ({ p, c = '#22d3ee' }) => (
  <div className="h-2.5 rounded-full bg-white/10 overflow-hidden"><div className="h-full rounded-full transition-all duration-700" style={{ width: p + '%', background: c }} /></div>
);
const H = ({ t, s }) => (<div className="mb-5"><h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">{t}</h1>{s && <p className="text-slate-400 mt-1">{s}</p>}</div>);
const L = ({ t, a }) => (<div className="mt-4"><h4 className="font-semibold text-cyan-300">{t}</h4><ul className="list-disc ml-5 text-slate-300 text-sm mt-1 space-y-1">{a.map((i) => <li key={i}>{i}</li>)}</ul></div>);

const NAV = [['home', '🏠', 'Home / Dashboard'], ['learn', '📘', 'Learn Cyber Safety'], ['quiz', '🧠', 'Quiz & Assessment'], ['msg', '✉️', 'Message Checker'], ['url', '🔗', 'URL Checker'], ['help', '🚨', 'Reporting Resources'], ['stats', '📊', 'Awareness Analytics']];

export default function App() {
  const [page, setPage] = useState('home');
  const [menu, setMenu] = useState(false);
  const [learned, setLearned] = useLS('cs_learned', []);
  const [scores, setScores] = useLS('cs_scores', { pre: [], post: [] });
  const [fb, setFb] = useLS('cs_feedback', []);
  const go = (p) => { setPage(p); setMenu(false); window.scrollTo(0, 0); };
  return (
    <div className="min-h-screen lg:flex">
      <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between p-4 bg-slate-950/90 backdrop-blur border-b border-white/10">
        <b className="text-cyan-300">🛡️ CyberShield</b>
        <button aria-label="Menu" className={SEC} onClick={() => setMenu(!menu)}>{menu ? '✕' : '☰'}</button>
      </header>
      <aside className={(menu ? 'block' : 'hidden') + ' lg:block lg:w-64 lg:min-h-screen lg:sticky lg:top-0 lg:h-screen shrink-0 p-4 bg-slate-950/80 border-r border-white/10 z-30'}>
        <div className="hidden lg:flex items-center gap-2 mb-6 text-xl font-bold"><span className="text-2xl">🛡️</span><span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">CyberShield</span></div>
        <nav className="space-y-1">{NAV.map(([id, ic, lb]) => (
          <button key={id} onClick={() => go(id)} className={'w-full text-left px-3 py-2.5 rounded-xl transition flex gap-3 ' + (page === id ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/30' : 'hover:bg-white/10 text-slate-300 border border-transparent')}><span>{ic}</span>{lb}</button>
        ))}</nav>
        <p className="text-xs text-slate-500 mt-6">Educational awareness tool. Not a replacement for security software or official reporting services.</p>
      </aside>
      <main className="flex-1 p-4 md:p-8 max-w-6xl w-full mx-auto fade" key={page}>
        {page === 'home' && <Home go={go} learned={learned} scores={scores} />}
        {page === 'learn' && <Learn learned={learned} setLearned={setLearned} />}
        {page === 'quiz' && <Quiz scores={scores} setScores={setScores} />}
        {page === 'msg' && <Checker title="Suspicious Message Checker" sub="Paste an SMS, WhatsApp, email or internship ad. Use fictional or redacted text only." ph="Paste a suspicious message here..." samples={SAMPLE_MSGS} fn={analyzeMsg} rows={6} what="message" />}
        {page === 'url' && <Checker title="Suspicious URL Checker" sub="Analyses the text of the URL only. The link is never opened or fetched." ph="e.g. http://sbi-kyc-update.example.xyz/login" samples={SAMPLE_URLS} fn={analyzeURL} rows={2} what="URL" />}
        {page === 'help' && <Help />}
        {page === 'stats' && <Stats learned={learned} scores={scores} fb={fb} setFb={setFb} />}
      </main>
    </div>
  );
}

function Home({ go, learned, scores }) {
  const demo = [['72%', 'students unsure about spotting fake offers'], ['58%', 'have seen a suspicious UPI request'], ['3 in 4', 'would verify before paying, after training']];
  return (
    <div>
      <div className={G + ' p-6 md:p-10 relative overflow-hidden'}>
        <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-violet-600/20 blur-3xl" />
        <p className="text-cyan-300 text-sm font-semibold tracking-wide">CYBER SAFETY & DIGITAL FRAUD AWARENESS</p>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-2">Welcome to <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">CyberShield</span></h1>
        <p className="text-slate-300 mt-4 max-w-2xl">One place for college students to learn about phishing, UPI fraud, fake internships and impersonation, check suspicious messages and links, test their awareness, and know where to report.</p>
        <div className="flex flex-wrap gap-3 mt-6">
          <button className={PRI} onClick={() => go('learn')}>Start Learning</button>
          <button className={SEC} onClick={() => go('quiz')}>Take Pre-Test</button>
          <button className={SEC} onClick={() => go('msg')}>Check a Message</button>
          <button className={SEC} onClick={() => go('url')}>Check a URL</button>
          <button className={SEC} onClick={() => go('help')}>Report Fraud</button>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-8 mb-1">Awareness at a glance</h2>
      <p className="text-xs text-amber-300/80 mb-3">Demo / sample figures for illustration only – not real-world statistics.</p>
      <div className="grid sm:grid-cols-3 gap-4">{demo.map(([a, b]) => (<div key={a} className={G + ' p-5'}><div className="text-3xl font-bold text-cyan-300">{a}</div><div className="text-slate-400 text-sm mt-1">{b}</div></div>))}</div>
      <h2 className="text-xl font-bold mt-8 mb-3">Stay Ahead of Digital Threats</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{MODULES.slice(0, 4).map((m) => (
        <button key={m.id} onClick={() => go('learn')} className={G + ' p-5 text-left hover:-translate-y-1 hover:border-cyan-400/50 transition'}>
          <div className="text-3xl">{m.icon}</div><div className="font-semibold mt-2">{m.title}</div><div className="text-sm text-slate-400 mt-1">{m.sum}</div>
        </button>))}</div>
      <h2 className="text-xl font-bold mt-8 mb-3">How CyberShield works</h2>
      <div className={G + ' p-5 grid md:grid-cols-4 gap-3 text-center text-sm'}>
        {[['📘', 'Learn', 'Six interactive modules'], ['🧠', 'Assess', 'Pre-test and post-test quiz'], ['🔍', 'Check', 'Rule-based message and URL analysis'], ['🚨', 'Report', 'Official guidance and helplines']].map(([i, t, d]) => (
          <div key={t} className="p-3 rounded-xl bg-white/5"><div className="text-2xl">{i}</div><b>{t}</b><div className="text-slate-400">{d}</div></div>))}
        <div className="md:col-span-4 text-slate-400">Your progress: {learned.length}/{MODULES.length} modules · {scores.pre.length + scores.post.length} quiz attempts (stored only in your browser)</div>
      </div>
    </div>
  );
}

function Learn({ learned, setLearned }) {
  const [open, setOpen] = useState(null);
  const m = MODULES.find((x) => x.id === open);
  const toggle = (id) => setLearned((l) => (l.includes(id) ? l.filter((x) => x !== id) : [...l, id]));
  return (
    <div>
      <H t="Learn Cyber Safety" s={learned.length + ' of ' + MODULES.length + ' modules completed'} />
      <Bar p={(learned.length / MODULES.length) * 100} />
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">{MODULES.map((x) => (
        <button key={x.id} onClick={() => setOpen(x.id)} className={G + ' p-5 text-left hover:-translate-y-1 hover:border-cyan-400/50 transition'}>
          <div className="flex justify-between"><span className="text-3xl">{x.icon}</span>{learned.includes(x.id) && <span className="text-xs text-emerald-300 bg-emerald-500/20 px-2 py-1 rounded-full h-fit">✓ Learned</span>}</div>
          <div className="font-semibold mt-2">{x.title}</div><div className="text-sm text-slate-400 mt-1">{x.sum}</div><div className="text-cyan-300 text-sm mt-3">Open module →</div>
        </button>))}</div>
      {m && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <div className="bg-slate-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start"><h2 className="text-2xl font-bold">{m.icon} {m.title}</h2><button className={SEC} onClick={() => setOpen(null)}>✕</button></div>
            <p className="text-slate-300 mt-3">{m.sum}</p>
            <h4 className="font-semibold text-cyan-300 mt-4">How the scam works</h4><p className="text-sm text-slate-300 mt-1">{m.how}</p>
            <L t="Common warning signs" a={m.signs} />
            <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 text-sm"><b className="text-amber-300">Fictional example:</b> {m.ex}</div>
            <L t="What you should do" a={m.todo} /><L t="Prevention tips" a={m.tips} />
            <button className={(learned.includes(m.id) ? SEC : PRI) + ' mt-6 w-full'} onClick={() => toggle(m.id)}>{learned.includes(m.id) ? '✓ Learned – click to undo' : 'Mark as Learned'}</button>
          </div>
        </div>)}
    </div>
  );
}

function Quiz({ scores, setScores }) {
  const [mode, setMode] = useState(null);
  const [i, setI] = useState(0);
  const [ans, setAns] = useState([]);
  const [done, setDone] = useState(false);
  const [review, setReview] = useState(false);
  const start = (m) => { setMode(m); setI(0); setAns(Array(QUIZ.length).fill(null)); setDone(false); setReview(false); };
  const sc = ans.filter((a, k) => a === QUIZ[k]?.a).length;
  const finish = () => {
    setScores((s) => ({ ...s, [mode]: [...s[mode], { sc, total: QUIZ.length, pct: Math.round((sc / QUIZ.length) * 100), date: new Date().toLocaleDateString() }] }));
    setDone(true);
  };
  const last = (k) => scores[k][scores[k].length - 1];
  if (!mode) return (
    <div>
      <H t="Quiz & Assessment" s={QUIZ.length + ' scenario-based questions. Take the pre-test first, learn, then take the post-test to see your improvement.'} />
      <div className="grid md:grid-cols-2 gap-4">{[['pre', 'Pre-Test', 'Measure your awareness before learning.'], ['post', 'Post-Test', 'Measure improvement after the modules.']].map(([k, t, d]) => (
        <div key={k} className={G + ' p-6'}><h3 className="text-xl font-bold">{t}</h3><p className="text-slate-400 text-sm mt-1">{d}</p>
          <p className="mt-3 text-sm">{last(k) ? 'Last score: ' + last(k).pct + '% (' + lvl(last(k).pct) + ')' : 'Not attempted yet'}</p>
          <button className={PRI + ' mt-4'} onClick={() => start(k)}>{last(k) ? 'Retake ' : 'Start '}{t}</button></div>))}</div>
      {last('pre') && last('post') && <div className={G + ' p-5 mt-4'}>Pre-test {last('pre').pct}% → Post-test {last('post').pct}% : <b className="text-cyan-300">{last('post').pct - last('pre').pct >= 0 ? '+' : ''}{last('post').pct - last('pre').pct} points</b></div>}
    </div>
  );
  if (done) {
    const pct = Math.round((sc / QUIZ.length) * 100);
    return (
      <div>
        <H t={(mode === 'pre' ? 'Pre-Test' : 'Post-Test') + ' Results'} />
        <div className={G + ' p-8 text-center'}>
          <div className="text-6xl font-extrabold text-cyan-300">{pct}%</div>
          <div className="mt-2 text-lg">{sc} / {QUIZ.length} correct · <b>{lvl(pct)}</b></div>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <button className={PRI} onClick={() => start(mode)}>Retry Quiz</button>
            <button className={SEC} onClick={() => setReview(!review)}>{review ? 'Hide' : 'Review'} Answers</button>
            <button className={SEC} onClick={() => setMode(null)}>Back to Quiz Menu</button>
          </div>
        </div>
        {review && <div className="mt-4 space-y-3">{QUIZ.map((q, k) => (
          <div key={k} className={G + ' p-4 border-l-4 ' + (ans[k] === q.a ? 'border-l-emerald-500' : 'border-l-red-500')}>
            <b>{k + 1}. {q.q}</b>
            <p className="text-sm mt-2">Your answer: <span className={ans[k] === q.a ? 'text-emerald-300' : 'text-red-300'}>{q.o[ans[k]]}</span></p>
            {ans[k] !== q.a && <p className="text-sm text-emerald-300">Correct: {q.o[q.a]}</p>}
            <p className="text-sm text-slate-400 mt-1">{q.e}</p></div>))}</div>}
      </div>
    );
  }
  const q = QUIZ[i], picked = ans[i], allDone = ans.every((a) => a !== null);
  return (
    <div>
      <H t={mode === 'pre' ? 'Pre-Test' : 'Post-Test'} s={'Question ' + (i + 1) + ' of ' + QUIZ.length + ' · ' + q.c} />
      <Bar p={((i + (picked !== null ? 1 : 0)) / QUIZ.length) * 100} />
      <div className={G + ' p-6 mt-4'}>
        <p className="text-lg font-medium">{q.q}</p>
        <div className="mt-4 space-y-2">{q.o.map((o, k) => {
          const st = picked === null ? 'border-white/10 hover:border-cyan-400/60 hover:bg-white/10' : k === q.a ? 'border-emerald-500 bg-emerald-500/15' : k === picked ? 'border-red-500 bg-red-500/15' : 'border-white/10 opacity-60';
          return <button key={k} disabled={picked !== null} onClick={() => setAns((a) => a.map((x, j) => (j === i ? k : x)))} className={'w-full text-left p-3 rounded-xl border transition ' + st}><b className="mr-2 text-cyan-300">{String.fromCharCode(65 + k)}.</b>{o}</button>;
        })}</div>
        {picked !== null && <div className={'mt-4 p-4 rounded-xl text-sm ' + (picked === q.a ? 'bg-emerald-500/10 text-emerald-200' : 'bg-red-500/10 text-red-200')}><b>{picked === q.a ? '✓ Correct. ' : '✗ Incorrect. '}</b>{q.e}</div>}
      </div>
      <div className="flex justify-between mt-4">
        <button className={SEC} disabled={i === 0} onClick={() => setI(i - 1)}>← Previous</button>
        {i < QUIZ.length - 1 ? <button className={PRI} disabled={picked === null} onClick={() => setI(i + 1)}>Next →</button> : <button className={PRI} disabled={!allDone} onClick={finish}>Finish Quiz</button>}
      </div>
      <button className="text-sm text-slate-400 mt-4 underline cursor-pointer" onClick={() => setMode(null)}>Quit quiz</button>
    </div>
  );
}

function Checker({ title, sub, ph, samples, fn, rows, what }) {
  const [t, setT] = useState('');
  const [r, setR] = useState(null);
  const [err, setErr] = useState('');
  const run = () => {
    if (!t.trim()) { setErr('Please enter a ' + what + ' to analyze.'); setR(null); return; }
    const x = fn(t);
    if (!x) { setErr('That does not look like a valid URL.'); setR(null); return; }
    setErr(''); setR(x);
  };
  const steps = { Low: ['Few indicators found, but stay cautious.', 'Verify the sender through an official channel if money or data is involved.'], Medium: ['Do not click, pay or reply until you verify.', 'Confirm with the organisation on its official website or number.', 'Ask a senior or the college IT cell.'], High: ['Do not click, reply, pay or share any code.', 'Block the sender and keep screenshots as evidence.', 'Report at cybercrime.gov.in or call 1930 if money is involved.'] };
  return (
    <div>
      <H t={title} s={sub} />
      <div className={G + ' p-5'}>
        <textarea value={t} onChange={(e) => setT(e.target.value)} rows={rows} placeholder={ph} className="w-full bg-slate-950/60 border border-white/10 rounded-xl p-3 outline-none focus:border-cyan-400" />
        {err && <p className="text-red-300 text-sm mt-2">{err}</p>}
        <div className="flex flex-wrap gap-2 mt-3">
          <button className={PRI} onClick={run}>Analyze {what === 'URL' ? 'URL' : 'Message'}</button>
          <button className={SEC} onClick={() => { setT(''); setR(null); setErr(''); }}>Clear</button>
        </div>
        <p className="text-xs text-slate-400 mt-4 mb-2">Try a fictional sample:</p>
        <div className="flex flex-wrap gap-2">{samples.map(([l, s]) => (<button key={l} className="text-sm px-3 py-1.5 rounded-full bg-violet-500/20 hover:bg-violet-500/30 border border-violet-400/30 cursor-pointer" onClick={() => { setT(s); setR(null); setErr(''); }}>{l}</button>))}</div>
      </div>
      {r && (
        <div className={G + ' p-5 mt-4 fade'}>
          <div className="flex items-center justify-between flex-wrap gap-2"><h3 className="text-xl font-bold">Risk level: <span style={{ color: COL[r.level] }}>{r.level}</span></h3><span className="text-slate-300">Score {r.score}/100 · {r.hits.length} indicator(s)</span></div>
          <div className="mt-3"><Bar p={r.score} c={COL[r.level]} /></div>
          <h4 className="font-semibold mt-5 text-cyan-300">Detected warning signs</h4>
          {r.hits.length === 0 ? <p className="text-slate-300 text-sm mt-1">No rule-based indicators were triggered. This does not prove it is safe.</p> :
            <ul className="mt-2 space-y-2">{r.hits.map((h) => (<li key={h.t} className="p-3 rounded-xl bg-white/5 text-sm"><b>⚠ {h.t}</b> <span className="text-slate-500">(+{h.w})</span><div className="text-slate-400 mt-1">Why it matters: {h.why}</div></li>))}</ul>}
          <L t="Recommended next steps" a={steps[r.level]} />
          <p className="text-xs text-amber-300/90 mt-5">Preliminary educational assessment based on simple keyword/pattern rules. It cannot confirm a {what} as safe or malicious and can miss or over-flag threats. Nothing you typed is stored or sent anywhere.</p>
        </div>)}
    </div>
  );
}

function Help() {
  return (
    <div>
      <H t="Cybercrime Reporting & Safety Resources" s="CyberShield gives guidance only. Official reports must be filed with the services below." />
      <div className="grid sm:grid-cols-2 gap-4">{RES.map((r) => (
        <a key={r.n} href={r.u} target={r.u.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={G + ' p-5 hover:border-cyan-400/50 hover:-translate-y-1 transition block'}>
          <b className="text-cyan-300">{r.n} ↗</b><p className="text-sm text-slate-400 mt-1">{r.d}</p></a>))}</div>
      <h2 className="text-xl font-bold mt-8 mb-3">What should I do if...</h2>
      <div className="grid md:grid-cols-2 gap-4">{STEPS.map((s) => (<div key={s.t} className={G + ' p-5'}><h3 className="font-bold">{s.i} {s.t}</h3><ol className="list-decimal ml-5 mt-2 text-sm text-slate-300 space-y-1">{s.a.map((x) => <li key={x}>{x}</li>)}</ol></div>))}</div>
      <div className={G + ' p-5 mt-4'}><h3 className="font-bold">🔐 Secure your accounts</h3><p className="text-sm text-slate-300 mt-1">Change passwords on a clean device, enable two-factor authentication, log out of unknown sessions, and tell your bank to block exposed cards or UPI handles.</p></div>
    </div>
  );
}

function Stats({ learned, scores, fb, setFb }) {
  const all = [...scores.pre.map((x) => ({ ...x, k: 'Pre' })), ...scores.post.map((x) => ({ ...x, k: 'Post' }))];
  const pre = scores.pre.at(-1), post = scores.post.at(-1);
  const imp = pre && post ? post.pct - pre.pct : null;
  const demo = [['Phishing', 72], ['Fake offers', 64], ['UPI fraud', 58], ['Impersonation', 41]];
  return (
    <div>
      <H t="Awareness Analytics" s="Your own results are stored in this browser only." />
      <div className="grid md:grid-cols-2 gap-4">
        <div className={G + ' p-5'}><h3 className="font-bold mb-3">Quiz score history</h3>
          {all.length === 0 ? <p className="text-slate-400 text-sm">No quizzes taken yet. Take the pre-test to see your scores here.</p> :
            <div className="flex items-end gap-2 h-40">{all.map((x, k) => (<div key={k} className="flex-1 flex flex-col items-center justify-end h-full"><span className="text-xs">{x.pct}%</span><div className="w-full rounded-t-lg" style={{ height: Math.max(x.pct, 3) + '%', background: x.k === 'Pre' ? '#8b5cf6' : '#22d3ee' }} /><span className="text-[10px] text-slate-400">{x.k}</span></div>))}</div>}</div>
        <div className={G + ' p-5'}><h3 className="font-bold mb-3">Pre-test vs post-test</h3>
          {!pre && !post ? <p className="text-slate-400 text-sm">Take both tests to compare.</p> : <div className="space-y-3">
            <div><div className="text-sm mb-1">Pre-test: {pre ? pre.pct + '%' : 'not taken'}</div><Bar p={pre?.pct || 0} c="#8b5cf6" /></div>
            <div><div className="text-sm mb-1">Post-test: {post ? post.pct + '%' : 'not taken'}</div><Bar p={post?.pct || 0} /></div>
            <p className="text-sm">Improvement: <b className="text-cyan-300">{imp === null ? 'Take both tests' : (imp >= 0 ? '+' : '') + imp + ' percentage points' + (pre.pct > 0 ? ' (' + Math.round((imp / pre.pct) * 100) + '% relative)' : '')}</b></p></div>}</div>
        <div className={G + ' p-5'}><h3 className="font-bold mb-3">Module completion</h3><Bar p={(learned.length / MODULES.length) * 100} c="#10b981" />
          <p className="text-sm mt-2 text-slate-300">{learned.length} of {MODULES.length} completed</p>
          <div className="flex flex-wrap gap-2 mt-3">{MODULES.map((m) => (<span key={m.id} className={'text-xs px-2.5 py-1 rounded-full border ' + (learned.includes(m.id) ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-200' : 'border-white/10 text-slate-400')}>{m.icon} {m.title}</span>))}</div></div>
        <div className={G + ' p-5'}><h3 className="font-bold mb-3">Learning activity summary</h3>
          <ul className="text-sm text-slate-300 space-y-1"><li>Scam categories studied: {learned.length}/{MODULES.length}</li><li>Pre-tests taken: {scores.pre.length}</li><li>Post-tests taken: {scores.post.length}</li><li>Feedback submitted: {fb.length}</li></ul>
          <button className={SEC + ' mt-3 text-sm'} onClick={() => { if (window.confirm('Clear all saved CyberShield data?')) { localStorage.clear(); location.reload(); } }}>Reset my data</button></div>
      </div>
      <div className={G + ' p-5 mt-4'}><h3 className="font-bold">Sample data: how well students typically recognise scams</h3><p className="text-xs text-amber-300/80 mb-3">Illustrative demo values only – not real survey results.</p>
        <div className="space-y-2">{demo.map(([n, v]) => (<div key={n}><div className="text-sm">{n} – {v}%</div><Bar p={v} c="#a78bfa" /></div>))}</div></div>
      <Feedback fb={fb} setFb={setFb} />
    </div>
  );
}

function Feedback({ fb, setFb }) {
  const [f, setF] = useState({ rating: 0, useful: '', aware: '', note: '' });
  const [sent, setSent] = useState(false);
  const submit = () => {
    if (!f.rating || !f.useful || !f.aware) { alert('Please give a rating and answer both questions.'); return; }
    setFb((x) => [...x, { ...f, date: new Date().toLocaleDateString() }]); setSent(true); setF({ rating: 0, useful: '', aware: '', note: '' });
  };
  const Sel = ({ k, label, opts }) => (<label className="block text-sm mt-3">{label}<select value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} className="mt-1 w-full bg-slate-950 border border-white/10 rounded-xl p-2"><option value="">Select...</option>{opts.map((o) => <option key={o}>{o}</option>)}</select></label>);
  return (
    <div className={G + ' p-5 mt-4'}>
      <h3 className="font-bold">Feedback</h3>
      {sent && <div className="mt-2 p-3 rounded-xl bg-emerald-500/15 text-emerald-200 text-sm">Thank you! Your feedback was saved locally in this browser.</div>}
      <div className="mt-3 text-sm">Rate this website: {[1, 2, 3, 4, 5].map((n) => (<button key={n} aria-label={n + ' stars'} onClick={() => setF({ ...f, rating: n })} className={'text-2xl cursor-pointer ' + (n <= f.rating ? 'text-amber-400' : 'text-slate-600')}>★</button>))}</div>
      <Sel k="useful" label="How useful were the learning modules?" opts={['Very useful', 'Useful', 'Somewhat useful', 'Not useful']} />
      <Sel k="aware" label="Do you feel more aware of cyber scams?" opts={['Yes', 'Somewhat', 'No']} />
      <label className="block text-sm mt-3">Suggestions for improvement<textarea value={f.note} onChange={(e) => setF({ ...f, note: e.target.value })} rows={3} className="mt-1 w-full bg-slate-950 border border-white/10 rounded-xl p-2" /></label>
      <button className={PRI + ' mt-3'} onClick={submit}>Submit Feedback</button>
    </div>
  );
}
