import { motion } from 'motion/react';

const clients = [
  { name: 'Mitsubishi Motors', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Mitsubishi_motors_new_logo.svg' },
  { name: 'Transdev Sverige', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Transdev_Logo.svg' },
  { name: 'GIZ', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Deutsche_Gesellschaft_f%C3%BCr_Internationale_Zusammenarbeit_Logo.svg' },
  { name: 'CEMS-Global', logo: 'https://cems-global.oss-ap-southeast-1.aliyuncs.com/img%20%281%29/logo-white.webp' },
  { name: 'Destino', logo: 'https://destino.jp/wordpress/wp-content/themes/destino/img/header/logo-link.png' },
  { name: 'EUCAPS', logo: 'https://pages.eucaps.com/hubfs/eucaps-logo-2.svg' },
  { name: 'Clira', logo: 'https://www.google.com/s2/favicons?domain=clira.io&sz=256' },
  { name: 'Tututor.AI', logo: 'https://www.tututor.ai/images/basic/logoprincipal1.png' },
  { name: 'Padel Mates', logo: 'https://www.google.com/s2/favicons?domain=padelmates.se&sz=256' },
  { name: 'ExamBinary', logo: 'https://www.google.com/s2/favicons?domain=exambinary.com&sz=256' },
  { name: 'Priority Auto Transport', logo: 'https://priorityautotrans.com/wp-content/uploads/2023/10/Priority-04-e1698071765667-1024x288.jpeg' },
  { name: 'Centre Point Postal', logo: 'https://centrepointpostal.ca/wp-content/uploads/2025/08/cp_logo.png' },
];

export default function Clients() {
  return (
    <section className="py-24 bg-transparent border-y border-zinc-900/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h3 className="text-sm uppercase tracking-widest text-blue-300/80 font-medium mb-4">
          Working around the clock for
        </h3>
        <p className="text-3xl md:text-4xl font-display text-zinc-900 text-glow font-medium">Businesses gaining an unfair advantage.</p>
      </div>

      <div className="relative flex overflow-x-hidden group mt-10">
        <div className="absolute top-0 left-0 bottom-0 w-32 z-10 bg-gradient-to-r from-space-900 to-transparent" />
        <div className="absolute top-0 right-0 bottom-0 w-32 z-10 bg-gradient-to-l from-space-900 to-transparent" />

        {/* Marquee Animation */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center py-4"
        >
           {/* Double the array for seamless looping */}
           {[...clients, ...clients].map((client, i) => (
             <div 
               key={`${client.name}-${i}`} 
               className="flex items-center gap-12 mx-12"
             >
                <div className="flex flex-col items-center justify-center min-w-[170px] max-w-[240px] gap-4">
                  <div className="h-20 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm font-display font-medium text-zinc-500 whitespace-nowrap">{client.name}</span>
                </div>
             </div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
