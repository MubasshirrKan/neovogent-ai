import { motion } from 'motion/react';
import { TrendingDown, ArrowRight, ShieldCheck, Wallet } from 'lucide-react';

export default function SaveMoney() {
  const stats = [
    { label: "Operational Costs", prefix: "Up to", value: "40%", icon: TrendingDown, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Efficiency Gain", prefix: "Up to", value: "3x", icon: ArrowRight, color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { label: "Error Reduction", prefix: "Up to", value: "99%", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10" }
  ];

  return (
    <section className="relative py-32 bg-space-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-24 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-blue-100"
          >
            <Wallet className="w-10 h-10 text-blue-600" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-zinc-900 tracking-tight leading-tight mb-6">
            Save your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600 font-semibold italic">money.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-zinc-500 font-light font-display max-w-2xl mx-auto">
            Stop feeding the overhead monster. Reinvest those resources into <span className="font-medium text-zinc-900">infinite growth.</span>
          </p>
        </motion.div>

        {/* Floating animated cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-10 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="glass-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6 shadow-sm border border-black/5 group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="flex flex-col items-center justify-center mb-1">
                <div className="h-6 flex items-end justify-center mb-1">
                  {stat.prefix && (
                    <span className="text-sm font-display font-medium text-zinc-400 uppercase tracking-wider">
                      {stat.prefix}
                    </span>
                  )}
                </div>
                <div className="text-5xl md:text-6xl font-condensed tracking-wider text-zinc-900 leading-none">
                  {stat.value}
                </div>
              </div>
              <div className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
