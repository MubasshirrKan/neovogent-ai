import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ShieldCheck, Users, FileSignature, Sparkles, type LucideIcon } from 'lucide-react';

type Member = {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

const team: Member[] = [
  {
    name: 'Marcus',
    role: 'Compliance & Finance',
    description: 'Ensures trust and drives clarity. Marcus handles the numbers, mitigates risk, and keeps your operations perfectly aligned with regulations.',
    icon: ShieldCheck,
    color: 'text-blue-600',
  },
  {
    name: 'Sarah',
    role: 'HR & People Operations',
    description: 'Builds culture and empowers people. Sarah manages recruitment vetting, onboarding, and employee relations effortlessly.',
    icon: Users,
    color: 'text-blue-600',
  },
  {
    name: 'James',
    role: 'Bids, Proposals & Docs',
    description: 'Speeds up your growth cycle. James drafts winning proposals, manages complex documentation, and coordinates bids 24/7.',
    icon: FileSignature,
    color: 'text-indigo-600',
  },
];

export default function Departments() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start']
  });
  
  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="services" ref={scrollRef} className="py-32 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center max-w-3xl mx-auto mb-20 relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-zinc-900 mb-6">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 via-blue-500 to-indigo-600 text-glow">Neovogent</span>
          </h2>
          <p className="text-xl text-zinc-600 font-light">
            Your specialized AI department that works twice as much in a single day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <Card member={member} />
            </motion.div>
          ))}
        </div>

        {/* Custom AI Specialist Row */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="glass-card group"
        >
          <div className="glass-glow opacity-30 group-hover:opacity-70 transition-opacity duration-700" />
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-black/5 border border-zinc-900/10 flex items-center justify-center shadow-inner">
              <Sparkles className="w-8 h-8 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold text-zinc-900 mb-2">Need something unique?</h3>
              <p className="text-lg text-zinc-600 font-light">
                We can build <strong className="text-zinc-900 font-medium text-glow">custom AI specialists</strong> designed specifically for your unique business workflows and processes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ member }: { member: Member }) {
  return (
    <div className="glass-card h-full group hover:border-zinc-900/10 transition-all duration-500">
      <div className="glass-glow opacity-40 group-hover:opacity-80 transition-opacity duration-700 delay-100" />
      
      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="w-14 h-14 rounded-2xl bg-black/5 border border-zinc-900/10 mb-8 flex items-center justify-center shadow-[inset_0_0_12px_rgba(0,0,0,0.02)]">
          <member.icon className={`w-6 h-6 ${member.color}`} />
        </div>
        
        <h3 className="text-3xl font-display font-semibold text-zinc-900 mb-1 text-glow">{member.name}</h3>
        <p className="text-sm font-medium text-blue-600 mb-6 tracking-widest uppercase opacity-80">
          {member.role}
        </p>
        
        <p className="text-zinc-600 font-light leading-relaxed flex-grow">
          {member.description}
        </p>
      </div>
    </div>
  );
}
