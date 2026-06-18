import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 bg-transparent overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
        <div className="w-full h-full max-w-4xl mx-auto bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0,rgba(0,0,0,0)_60%)] mix-blend-multiply" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-medium text-zinc-900 mb-8 leading-tight">
            The businesses gaining an advantage today aren't working harder. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-indigo-500 font-semibold italic text-glow">
              They are building smarter systems.
            </span>
          </h2>
          
          <p className="text-xl text-zinc-600 font-light mb-12">
            Ready to meet your AI department?
          </p>
          
          <button className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-10 font-medium text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.8)] border border-blue-400/50">
            <span className="mr-3 text-xl font-display font-semibold">Book your free strategy call</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
              <div className="relative h-full w-8 bg-zinc-100/10" />
            </div>
          </button>
        </motion.div>
      </div>
      
      {/* Footer minimal */}
      <div className="absolute bottom-6 left-0 right-0 text-center flex flex-col items-center">
         <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Neovogent AI. All rights reserved.</p>
      </div>
    </section>
  );
}
