import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
import { 
  DollarSign, 
  UserCheck, 
  ShieldAlert, 
  Megaphone, 
  FileText, 
  Activity, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Flame, 
  Cpu, 
  ArrowRight,
  TrendingUp,
  Infinity as InfinityIcon
} from 'lucide-react';

type HatDomain = 'finance' | 'hr' | 'compliance' | 'marketing' | 'admin';

interface DomainSpec {
  id: HatDomain;
  title: string;
  icon: any;
  chaosLabel: string;
  solutionLabel: string;
  metrics: { label: string; manual: string; auto: string; icon: any }[];
  chaosLogs: string[];
  autoLogs: string[];
  subTitle: string;
}

const domains: DomainSpec[] = [
  {
    id: 'finance',
    title: 'Finance',
    icon: DollarSign,
    subTitle: 'Accounting & Payroll',
    chaosLabel: 'Unreconciled ledger blocks, manual audit trails, constant spreadsheet sync errors.',
    solutionLabel: 'Neovogent instant automated bank reconciliations and ledger health verification.',
    metrics: [
      { label: 'Processing Latency', manual: '3-5 Business Days', auto: 'Near Instant (3.2s)', icon: Clock },
      { label: 'Risk & Discrepancies', manual: '14.2% Est. Rate', auto: '0.00% Verified', icon: ShieldAlert }
    ],
    chaosLogs: [
      'ERR: Ledger mismatch on Row #1409',
      'ALERT: Bank feed timeout. Retrying...',
      'SYSTEM: Manual invoice upload pending approval',
    ],
    autoLogs: [
      'SECURE: API verified bank sync completed',
      'AUTO_RUN: AI Marcus auto-matched 48 inbound entries',
      'STABLE: Perfect ledger balance verified',
    ]
  },
  {
    id: 'hr',
    title: 'HR & People Ops',
    icon: UserCheck,
    subTitle: 'Vetting & Boarding',
    chaosLabel: 'Backlogged resume pipelines, slow vetting loops, manual security tracking.',
    solutionLabel: 'Autonomous resume pre-screening, vetting assistance, and instant culture updates.',
    metrics: [
      { label: 'Vetting Throughput', manual: '2 candidates/day', auto: '140+ candidates/hour', icon: Activity },
      { label: 'Onboarding Overhead', manual: '18 hours paperwork', auto: '0.5 hours setup', icon: FileText }
    ],
    chaosLogs: [
      'WARN: Interview scheduling collision',
      'STALE: Background check delayed > 72 hours',
      'HR_ALERT: Profile update pending manual signoff',
    ],
    autoLogs: [
      'AUTO_VET: Sarah parsed 58 new talent vectors',
      'SECURE: Smart verification certificates signed',
      'ONBOARD: Automated welcome packet completed',
    ]
  },
  {
    id: 'compliance',
    title: 'Compliance',
    icon: ShieldAlert,
    subTitle: 'Risk & Audit Trails',
    chaosLabel: 'Sifting through hundreds of pages of Transport/Finance regulation manuals.',
    solutionLabel: 'Instant semantic search across legal docs, regulatory flagging, and risk analysis.',
    metrics: [
      { label: 'Audit Search Time', manual: '12 hours reading', auto: '0.8 seconds search', icon: Activity },
      { label: 'Compliance Score', manual: 'Fluctuating / High Risk', auto: '99.9% Monitored 24/7', icon: CheckCircle }
    ],
    chaosLogs: [
      'WARN: Potential regulatory drift in Sweden section',
      'ERR: Outdated compliance form detected (#219)',
      'ALERT: Safety audit overdue',
    ],
    autoLogs: [
      'SCAN_SAFE: 1,400 legislative clauses verified',
      'RISK_CALC: Zero regulatory drifts flagged',
      'AUDIT: Multi-layer system reports generated',
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: Megaphone,
    subTitle: 'Campaign & Brand System',
    chaosLabel: 'Slow ad iteration, manual market research, sluggish response to trends.',
    solutionLabel: 'Real-time copy analysis, demographic matching, automated brand voice consistency.',
    metrics: [
      { label: 'Demographic Target Time', manual: '4 Days Research', auto: '12 Seconds Analysis', icon: TrendingUp },
      { label: 'Iteration Speed', manual: '1 Campaign / Week', auto: 'Dynamic generation on-the-fly', icon: InfinityIcon }
    ],
    chaosLogs: [
      'ERR: Demographic feedback loop missing',
      'STALE: Ad copy engagement dropped below 1.2%',
      'MARKET: Competitor activity ignored',
    ],
    autoLogs: [
      'SCAN_TREND: Real-time industry metrics aggregated',
      'AUTO_GEN: Generated 10 variant target hooks',
      'CONVERSION: Projected ROI optimized to +24%',
    ]
  },
  {
    id: 'admin',
    title: 'Admin',
    icon: FileText,
    subTitle: 'Backoffice & Scheduling',
    chaosLabel: 'Inbox avalanche, disorganized meeting schedules, repeating low-value work.',
    solutionLabel: 'Neovogent smart backoffice coordination, meeting briefs, and seamless action tasks.',
    metrics: [
      { label: 'Email Triaging', manual: '2.5 Hours Daily', auto: 'Background instant sorting', icon: Clock },
      { label: 'Data Retrieval', manual: '15 Mins / Doc search', auto: '<0.5 Seconds cloud indexing', icon: FileText }
    ],
    chaosLogs: [
      'WARN: Inbox unread count exceeded 200 items',
      'ERR: Doublebooking alert on calendar',
      'STALE: Documentation backlog piling up',
    ],
    autoLogs: [
      'TRIAGE: 42 marketing enquiries sorted & replied',
      'SYNC: Smart scheduling conflict cleared',
      'INDEX: Backoffice logs categorized & nested',
    ]
  }
];

export default function Story() {
  const [activeDomain, setActiveDomain] = useState<HatDomain>('finance');
  const [isNeovogentActive, setIsNeovogentActive] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedSpec = domains.find(d => d.id === activeDomain) || domains[0];
  const IconComponent = selectedSpec.icon;

  return (
    <section id="about" ref={containerRef} className="py-32 relative bg-transparent overflow-hidden border-t border-zinc-900/10">
      {/* Absolute futuristic grid & element highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(59,130,246,0.04),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Modern high-end display header */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/10 bg-red-500/5 backdrop-blur-md mb-6"
            >
              <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-red-400 uppercase">The Multitasking Trap</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-zinc-900 leading-none"
            >
              Running a business means <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 italic">
                wearing too many hats.
              </span>
            </motion.h2>
          </div>
          
          <div className="lg:col-span-4 max-w-sm">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-zinc-600 font-light leading-relaxed text-lg"
            >
              From Admin to Finance to HR, managing details leaves no time for strategy. 
              While you spin plates, your competitors are moving faster.
            </motion.p>
          </div>
        </div>

        {/* The interactive Sim / Control Center */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hats Navigation & Selector */}
          <div className="lg:col-span-4 flex flex-col gap-3 min-w-0">
            <p className="text-xs uppercase font-semibold tracking-widest text-zinc-500 mb-2">
              Select or cycle a department
            </p>
            
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory lg:snap-none">
              {domains.map((d) => {
                const isSelected = activeDomain === d.id;
                const DIcon = d.icon;
                return (
                  <button
                    key={d.id}
                    onClick={() => setActiveDomain(d.id)}
                    className={`relative text-left px-5 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border shrink-0 lg:shrink snap-start active:scale-95 ${
                      isSelected 
                        ? 'bg-blue-50/80 border-blue-500/30 text-zinc-900 shadow-[0_0_20px_rgba(59,130,246,0.15)] shadow-inner' 
                        : 'bg-black/5 border-zinc-900/10 text-zinc-600 hover:border-zinc-900/10 hover:text-zinc-900'
                    }`}
                  >
                    {isSelected && (
                      <motion.div 
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/5 rounded-2xl border border-blue-400/30 pointer-events-none"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-500/20 text-blue-400' : 'bg-zinc-100/5 text-zinc-600'}`}>
                      <DIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display font-medium text-sm leading-tight">{d.title}</div>
                      <div className="text-xs text-zinc-500 font-light hidden sm:block">{d.subTitle}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick automation lever */}
            <div className="mt-6 glass-card p-6 border-zinc-800 bg-zinc-50/80">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Department Status</span>
                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-wider font-bold ${
                  isNeovogentActive 
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/40'
                }`}>
                  {isNeovogentActive ? 'NEOVOGENT_AI_ONLINE' : 'MANUAL_OVERHEAD'}
                </span>
              </div>
              <p className="text-xs text-zinc-600 mb-4 font-light leading-relaxed">
                Toggle below to deploy Neovogent AI to this desk.
              </p>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsNeovogentActive(!isNeovogentActive)}
                  className={`relative inline-flex h-9 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none ${
                    isNeovogentActive ? 'bg-blue-600' : 'bg-zinc-100'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-8 w-8 transform rounded-full bg-white shadow-lg ring-0 transition duration-300 ease-in-out ${
                      isNeovogentActive ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
                <span className="text-sm font-semibold tracking-wide text-zinc-700">
                  {isNeovogentActive ? 'Frictionless automation' : 'Manual Chaos mode'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Immersive Visualization Panel */}
          <div className="lg:col-span-8 min-w-0">
            <div className="glass-card min-h-[500px] flex flex-col justify-between p-6 md:p-8 border border-zinc-900/10 shadow-[2xl] bg-black/5">
              <div className="glass-glow opacity-30 pointer-events-none" />

              {/* Status Header inside panel */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-zinc-900/10 pb-6">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                    <IconComponent className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-medium text-base sm:text-lg text-zinc-900 leading-snug">Desk Area: {selectedSpec.title}</h3>
                    <p className="text-xs text-zinc-500">Autonomous Workflow Simulation</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pl-[52px] sm:pl-0">
                  <Cpu className="w-4 h-4 text-zinc-500" />
                  <span className="text-xs font-mono text-zinc-500 uppercase">SYS_SIMULATOR_v3.6</span>
                </div>
              </div>

              {/* Interactive State Toggle Area */}
              <div className="my-8 grid md:grid-cols-2 gap-8 items-start">
                
                {/* Visualizer comparison side */}
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">
                      Active Process Profile
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isNeovogentActive ? 'auto' : 'manual'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-base text-zinc-700 font-light leading-relaxed"
                      >
                        {isNeovogentActive ? (
                          <span className="text-blue-300 flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                            <span className="min-w-0 break-words">{selectedSpec.solutionLabel}</span>
                          </span>
                        ) : (
                          <span className="text-red-300/90 flex items-start gap-2">
                            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                            <span className="min-w-0 break-words">{selectedSpec.chaosLabel}</span>
                          </span>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Staged live telemetry logs */}
                  <div className="bg-black/5 rounded-xl p-4 border border-zinc-900/10 font-mono text-xs flex flex-col gap-2.5">
                    <span className="text-[10px] font-bold text-zinc-500 tracking-wider">LIVE TELEMETRY STREAM:</span>
                    <div className="flex flex-col gap-1.5 min-h-[90px]">
                      {(isNeovogentActive ? selectedSpec.autoLogs : selectedSpec.chaosLogs).map((line, idx) => (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          key={line}
                          className="flex items-start gap-2"
                        >
                          <span className={`shrink-0 ${isNeovogentActive ? 'text-blue-500' : 'text-red-500'}`}>►</span>
                          <span className={`min-w-0 break-words ${isNeovogentActive ? 'text-zinc-700' : 'text-zinc-600'}`}>{line}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* KPI metrics gauge */}
                <div className="flex flex-col gap-6">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
                    Efficiency Audit Comparison
                  </span>

                  <div className="flex flex-col gap-4">
                    {selectedSpec.metrics.map((metric) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div key={metric.label} className="bg-black/5 border border-zinc-900/10 rounded-xl p-4 flex flex-col">
                          <div className="flex items-center gap-2 mb-2 text-xs text-zinc-600">
                            <MetricIcon className="w-3.5 h-3.5" />
                            <span>{metric.label}</span>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mt-1">
                            <div className="flex flex-col min-w-0">
                              <span className="text-[10px] text-zinc-500 uppercase">Legacy Way</span>
                              <span className="text-sm font-semibold text-zinc-600 font-mono italic break-words">{metric.manual}</span>
                            </div>

                            <div className="hidden sm:block w-8 h-[1px] bg-zinc-100 shrink-0" />

                            <div className="flex flex-col min-w-0 sm:text-right">
                              <span className="text-[10px] text-blue-400 uppercase font-semibold">Neovogent AI</span>
                              <span className="text-base font-bold text-blue-300 font-mono text-glow break-words">{metric.auto}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Bottom control feedback */}
              <div className="border-t border-zinc-900/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-zinc-500 leading-relaxed text-center sm:text-left">
                  {isNeovogentActive ? (
                    "Neovogent's AI processes this entire department in parallel, eliminating operational delays."
                  ) : (
                    <>
                      <span className="sm:hidden">Toggle the switch above to see how Neovogent handles this department.</span>
                      <span className="hidden sm:inline">Toggle the online switch on the left to see how Neovogent handles this department.</span>
                    </>
                  )}
                </p>

                <button
                  onClick={() => setIsNeovogentActive(true)}
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 h-11 sm:h-10 px-5 text-xs font-semibold rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 transition-all hover:bg-blue-600 hover:text-zinc-900 active:scale-95"
                >
                  <span>Automate Department</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
