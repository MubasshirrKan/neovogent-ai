import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const desktopThumbnailUrl = "https://res.cloudinary.com/dyalnmjj5/image/upload/v1781802770/ChatGPT_Image_Jun_18_2026_11_12_09_PM_sirmfa.png";
const mobileThumbnailUrl = "https://res.cloudinary.com/dyalnmjj5/image/upload/v1781813646/2286122f-5425-4480-90df-4c074c7dc26b_g6disi.png";

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const thumbnailUrl = isMobile ? mobileThumbnailUrl : desktopThumbnailUrl;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative w-full py-10 sm:py-24 md:py-32 flex items-center justify-center overflow-hidden bg-space-900"
    >
      <div className="w-full px-0 sm:container sm:mx-auto sm:px-6">
        <motion.div
          style={{ originY: 0.5, originX: 0.5, scale, opacity }}
          className={`relative w-full ${isMobile && !isPlaying ? 'aspect-[3/4]' : 'aspect-video'} transition-[aspect-ratio] duration-500 ease-in-out rounded-none sm:rounded-3xl md:rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.1)] border-0 sm:border border-zinc-900/10 cursor-pointer group`}
          onClick={togglePlay}
        >
          <div className="absolute inset-0 bg-space-900 animate-pulse" />
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dyalnmjj5/video/upload/v1781754063/neovogentaiH.265_ujflyp.mp4"
            poster={thumbnailUrl}
            playsInline
            controls={isPlaying}
            onEnded={() => setIsPlaying(false)}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            className="absolute inset-0 w-full h-full object-cover relative z-10"
          />
          
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 pointer-events-none z-20 ${isPlaying ? 'opacity-0' : 'opacity-100'}`} 
            style={{backgroundImage: `url(${thumbnailUrl})`}} 
          />
          
          <AnimatePresence>
            {!isPlaying && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-30 flex items-center justify-center bg-black/20 transition-all duration-500 group-hover:bg-black/10"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-[0_0_30px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-8 h-8 md:w-12 md:h-12 text-white ml-2 opacity-100" fill="currentColor" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
