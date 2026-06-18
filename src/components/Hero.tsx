import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Navbar from './Navbar';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-[#05050a]"
    >
      <Navbar />

      {/* 1. Base Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://res.cloudinary.com/dyalnmjj5/image/upload/v1781753497/hf_20260611_093053_99fa61cb-8a54-4472-b779-abb146547d15_mpqb6i.png"
          alt="Space background"
          className="w-full h-full object-cover object-left [@media(min-aspect-ratio:1/1)]:object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 2. Text behind cutout */}
      <motion.div
         className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
         style={{ y: textY }}
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center scale-y-[1.4] md:scale-y-[1.6]">
          <h1 className="text-[24vw] md:text-[20vw] font-condensed text-white tracking-normal leading-none text-center uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            NEOVOGENT
          </h1>
        </div>
      </motion.div>

      {/* 3. Cutout Image */}
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-none flex items-center justify-center [@media(min-aspect-ratio:1/1)]:block">
        <img
          src="https://res.cloudinary.com/dyalnmjj5/image/upload/v1781753695/edited-photo_afnhvx.png"
          alt="Space Cutout"
          className="w-[96%] max-w-lg object-contain [@media(min-aspect-ratio:1/1)]:w-full [@media(min-aspect-ratio:1/1)]:h-full [@media(min-aspect-ratio:1/1)]:max-w-none [@media(min-aspect-ratio:1/1)]:object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      

      {/* 5. Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"
        />
      </motion.div>

    </section>
  );
}
