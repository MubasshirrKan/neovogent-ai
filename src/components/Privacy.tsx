import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { 
  LockKeyhole, 
  Unlock, 
  ShieldAlert, 
  ShieldCheck, 
  HardDrive, 
  CloudRain, 
  ArrowRightLeft, 
  Fingerprint, 
  RefreshCw, 
  AlertCircle,
  Database,
  Cpu,
  EyeOff
} from 'lucide-react';

type SecurityMode = 'public-cloud' | 'neovogent-local';

interface LeakVector {
  id: string;
  name: string;
  size: string;
  source: string;
  destination: string;
  status: 'leak-risk' | 'fully-shielded';
}

const leakVectors: LeakVector[] = [
  { id: '1', name: 'Sweden Transport Tender Proposal.pdf', size: '14.2 MB', source: 'Local Drive', destination: 'Public LLM Servers', status: 'leak-risk' },
  { id: '2', name: 'Q3 Financial Ledger & Audits.xlsx', size: '4.8 MB', source: 'Accounting', destination: 'Third-party API Logs', status: 'leak-risk' },
  { id: '3', name: 'Employee Contract Term Sheets.zip', size: '22.1 MB', source: 'HR Vet Desk', destination: 'Unencrypted CDN Storage', status: 'leak-risk' },
];

export default function Privacy() {
  const [activeMode, setActiveMode] = useState<SecurityMode>('neovogent-local');
  const [hasScanned, setHasScanned] = useState(false);

  return (
    <section className="py-32 relative bg-transparent overflow-hidden border-t border-b border-zinc-900/10">
      {/* Background radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(59,130,246,0.03),transparent)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] bg-blue-500/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading with an Awwwards-style layout */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-6"
          >
            <LockKeyhole className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Sovereign Architecture</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-semibold text-zinc-900 leading-none tracking-tight mb-8">
            Unlike public AI tools. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-500 text-glow">
              Your sensitive data never leaves.
            </span>
          </h2>
          
          <p className="text-xl text-zinc-600 font-light leading-relaxed">
            Neovogent specialized assistants live directly in your private environment. High confidentiality means zero risk of proprietary business intelligence leaking to public AI training loops.
          </p>
        </div>

        {/* Interactive Interactive Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Selector + Industry Pill Board */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 min-w-0">
            
            <div className="glass-card p-8 bg-zinc-50/80 border-zinc-200 flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Choose Data Routing Mode
              </span>

              {/* Mode Buttons */}
              <div className="grid grid-cols-2 gap-3 bg-black/5 p-1.5 rounded-2xl border border-zinc-900/10">
                <button
                  onClick={() => setActiveMode('public-cloud')}
                  className={`py-3 px-4 rounded-xl text-xs font-display font-medium transition-all duration-300 flex flex-col items-center gap-1.5 ${
                    activeMode === 'public-cloud'
                      ? 'bg-red-50 border border-red-200 text-red-600 shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                      : 'text-zinc-500 hover:text-zinc-700 border border-transparent'
                  }`}
                >
                  <Unlock className="w-4 h-4 text-red-500" />
                  <span>Public AI Tools</span>
                </button>

                <button
                  onClick={() => setActiveMode('neovogent-local')}
                  className={`py-3 px-4 rounded-xl text-xs font-display font-medium transition-all duration-300 flex flex-col items-center gap-1.5 ${
                    activeMode === 'neovogent-local'
                      ? 'bg-blue-50 border border-blue-200 text-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.15)] shadow-inner'
                      : 'text-zinc-500 hover:text-zinc-700 border border-transparent'
                  }`}
                >
                  <LockKeyhole className="w-4 h-4 text-blue-500" />
                  <span>Neovogent Local</span>
                </button>
              </div>

              {/* Dynamic Explanation block */}
              <div className="min-h-[140px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeMode === 'neovogent-local' ? (
                    <motion.div
                      key="local"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2.5 text-blue-400 font-semibold text-sm">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Sovereign Perimeter Confirmed</span>
                      </div>
                      <p className="text-sm text-zinc-600 font-light leading-relaxed">
                        Data flows strictly internally inside your local memory buffer. The host computer acts as an insulated vault, running optimized model execution without cloud endpoints.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="public"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2.5 text-red-400 font-semibold text-sm">
                        <ShieldAlert className="w-4 h-4 animate-bounce" />
                        <span>Critical Exposure Path Active</span>
                      </div>
                      <p className="text-sm text-zinc-600 font-light leading-relaxed">
                        Sensitive inputs, customer reports, contracts, and transport itineraries are routed directly through public internet backbones. They are cached on remote cloud logs and used for feedback reinforcement.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Shield list */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 bg-black/20 border-zinc-900/10 flex flex-col justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 block mb-3">Model Location</span>
                <span className="text-sm font-display font-medium text-zinc-900 block">
                  {activeMode === 'neovogent-local' ? 'On-Device Resident' : 'External Web API'}
                </span>
              </div>
              <div className="glass-card p-6 bg-black/20 border-zinc-900/10 flex flex-col justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 block mb-3">Leakage Probability</span>
                <span className={`text-sm font-display font-medium block font-mono ${activeMode === 'neovogent-local' ? 'text-blue-400 text-glow' : 'text-red-400'}`}>
                  {activeMode === 'neovogent-local' ? '0.00% Absolute' : 'High / Public Logs'}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Immersive visual safe/radar map */}
          <div className="lg:col-span-7 min-w-0">
            <div className="glass-card h-full min-h-[500px] flex flex-col justify-between p-6 md:p-8 border border-zinc-900/10 shadow-[2xl] bg-black/40 relative">
              <div className="glass-glow opacity-30 pointer-events-none" />

              {/* Safe status metrics header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-900/10 pb-6">
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    activeMode === 'neovogent-local'
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                      : 'bg-red-500/10 text-red-400 border-red-500/30'
                  }`}>
                    {activeMode === 'neovogent-local' ? <Fingerprint className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-medium text-zinc-900 text-base">
                      {activeMode === 'neovogent-local' ? 'Neovogent Isolation Vault' : 'Public Telemetry Monitor'}
                    </h3>
                    <p className="text-xs text-zinc-500">Security & Ledger Verification Stream</p>
                  </div>
                </div>

                <button
                  onClick={() => setHasScanned(!hasScanned)}
                  className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-900/10 hover:border-zinc-900/10 bg-zinc-100/5 font-mono text-[10px] text-zinc-600 hover:text-zinc-900 transition-all active:scale-95"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>REFRESH AUDIT</span>
                </button>
              </div>

              {/* Data sovereignty flow visualizer */}
              <div className="relative py-12 flex flex-col items-center justify-center flex-grow">
                
                {/* Visual Representation */}
                <div className="w-full max-w-md relative flex flex-col gap-6">
                  {leakVectors.map((vector) => {
                    const isLeaked = activeMode === 'public-cloud';
                    return (
                      <div 
                        key={vector.id}
                        className={`relative rounded-xl p-4 border transition-all duration-500 flex items-center justify-between gap-4 ${
                          isLeaked 
                            ? 'bg-red-100 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.05)]' 
                            : 'bg-blue-50 border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.05)]'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <Database className={`w-4 h-4 shrink-0 ${isLeaked ? 'text-red-600' : 'text-blue-600'}`} />
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-zinc-900 truncate">{vector.name}</p>
                            <p className="text-[10px] text-zinc-500 font-mono">{vector.size}</p>
                          </div>
                        </div>

                        {/* Routing Graphic */}
                        <div className="hidden sm:flex items-center gap-2">
                          <span className="text-[10px] text-zinc-500 font-mono">{vector.source}</span>
                          <ArrowRightLeft className={`w-3.5 h-3.5 ${isLeaked ? 'text-red-400 animate-pulse' : 'text-blue-400'}`} />
                          <span className={`text-[10px] font-mono font-semibold ${isLeaked ? 'text-red-400' : 'text-blue-300'}`}>
                            {isLeaked ? 'External Servers' : 'Local Sandbox'}
                          </span>
                        </div>

                        {/* Lock / Danger Indicator */}
                        <div className={`p-1.5 rounded-lg border shrink-0 ${
                          isLeaked 
                            ? 'bg-red-500/10 text-red-400 border-red-500/20' 
                            : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        }`}>
                          {isLeaked ? (
                            <AlertCircle className="w-4 h-4 animate-pulse" />
                          ) : (
                            <LockKeyhole className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Firewall visual safe-ring */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className={`w-[80%] aspect-square rounded-full border-2 border-dashed border-spacing-4 animate-[spin_40s_linear_infinite] ${
                    activeMode === 'neovogent-local' ? 'border-blue-500/40' : 'border-red-500/40'
                  }`} />
                </div>

              </div>

              {/* Status Footer inside visualizer */}
              <div className="border-t border-zinc-900/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-600">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  <span>SECURE_LOCAL_ISOLATION: ACTIVE</span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-zinc-500">Security Score:</span>
                  <span className={`font-mono font-bold ${activeMode === 'neovogent-local' ? 'text-blue-300 font-semibold' : 'text-red-400 animate-pulse'}`}>
                    {activeMode === 'neovogent-local' ? '100 / 100 Sovereign' : '23 / 100 Exposed'}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
