import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Heart, 
  User, 
  Sparkles, 
  ArrowLeft, 
  Instagram, 
  Github, 
  Linkedin,
  MapPin,
  Calendar,
  Star,
  Zap,
  Flame,
  Globe,
  Infinity as InfinityIcon,
  Coffee,
  Code,
  Clock,
  Image as ImageIcon,
  ChevronRight,
  Sun,
  Moon,
  Quote
} from 'lucide-react';

// --- Types ---
interface Friend {
  id: string;
  name: string;
  nickname: string;
  role: string;
  bio: string;
  ghibliImg: string;
  normalImg: string;
  color: string;
  secondaryColor: string;
  hobbies: string[];
  stats: { label: string; value: any; icon: any }[];
  socials: { platform: string; link: string; icon: React.ReactNode }[];
  gallery: string[];
}

// --- Data ---
const FRIENDS: Friend[] = [
  {
    id: '1',
    name: 'MUHAMMAD WASIF',
    nickname: 'THE MAJOR',
    role: 'Data Scientist',
    bio: 'The strategic mind of the group. Wasif combines analytical precision with a visionary outlook, leading the way in every data-driven adventure.',
    ghibliImg: '/images/wasif_ghibli.png', 
    normalImg: '/images/wasif_normal.jpeg',
    color: '#FF3E3E',
    secondaryColor: '#FFD700',
    hobbies: ['Data Modeling', 'Strategic Planning', 'Tech Exploration'],
    stats: [
      { label: 'Strategy', value: '98%', icon: Zap },
      { label: 'Leadership', value: '100%', icon: Heart },
      { label: 'Coffee', value: 'High', icon: Coffee }
    ],
    socials: [
      { platform: 'Instagram', link: 'https://instagram.com/wasif', icon: <Instagram size={20} /> },
      { platform: 'LinkedIn', link: 'https://linkedin.com/in/wasif', icon: <Linkedin size={20} /> },
      { platform: 'GitHub', link: 'https://github.com/wasif', icon: <Github size={20} /> }
    ],
    gallery: [
      'https://picsum.photos/seed/wasif1/800/1000',
      'https://picsum.photos/seed/wasif2/800/1000',
      'https://picsum.photos/seed/wasif3/800/1000',
      'https://picsum.photos/seed/wasif4/800/1000'
    ]
  },
  {
    id: '2',
    name: 'SHEROZ',
    nickname: '1 VS 1 PAGLU',
    role: 'Data Scientist',
    bio: 'The competitive spirit. Sheroz is always ready for a challenge, whether it\'s optimizing a complex algorithm or a high-stakes 1v1.',
    ghibliImg: '/images/sheroz_ghibli.png',
    normalImg: '/images/sheroz_normal.jpeg',
    color: '#00F5FF',
    secondaryColor: '#00FF88',
    hobbies: ['Competitive Gaming', 'Machine Learning', 'Problem Solving'],
    stats: [
      { label: 'Skill', value: '99%', icon: Zap },
      { label: 'Focus', value: '95%', icon: Heart },
      { label: 'Energy', value: 'Max', icon: Coffee }
    ],
    socials: [
      { platform: 'Instagram', link: 'https://instagram.com/sheroz', icon: <Instagram size={20} /> },
      { platform: 'LinkedIn', link: 'https://linkedin.com/in/sheroz', icon: <Linkedin size={20} /> },
      { platform: 'GitHub', link: 'https://github.com/sheroz', icon: <Github size={20} /> }
    ],
    gallery: [
      'https://picsum.photos/seed/sheroz1/800/1000',
      'https://picsum.photos/seed/sheroz2/800/1000',
      'https://picsum.photos/seed/sheroz3/800/1000',
      'https://picsum.photos/seed/sheroz4/800/1000'
    ]
  },
  {
    id: '3',
    name: 'MUHAMMAD ZEESHAN',
    nickname: 'THE GYM GUY',
    role: 'Data Scientist',
    bio: 'Strength in both body and mind. Zeeshan balances intense workouts with deep data analysis, proving that discipline is the key to success.',
    ghibliImg: '/images/zeeshan_ghibli.png',
    normalImg: '/images/zeeshan_normal.jpeg',
    color: '#BF00FF',
    secondaryColor: '#FF00FF',
    hobbies: ['Bodybuilding', 'Neural Networks', 'Nutrition'],
    stats: [
      { label: 'Strength', value: '100%', icon: Zap },
      { label: 'Discipline', value: '98%', icon: Heart },
      { label: 'Protein', value: 'Infinite', icon: Coffee }
    ],
    socials: [
      { platform: 'Instagram', link: 'https://instagram.com/zeeshan', icon: <Instagram size={20} /> },
      { platform: 'LinkedIn', link: 'https://linkedin.com/in/zeeshan', icon: <Linkedin size={20} /> },
      { platform: 'GitHub', link: 'https://github.com/zeeshan', icon: <Github size={20} /> }
    ],
    gallery: [
      'https://picsum.photos/seed/zeeshan1/800/1000',
      'https://picsum.photos/seed/zeeshan2/800/1000',
      'https://picsum.photos/seed/zeeshan3/800/1000',
      'https://picsum.photos/seed/zeeshan4/800/1000'
    ]
  },
  {
    id: '4',
    name: 'KHIZER CHEEMA',
    nickname: 'THE SILENT AURA',
    role: 'Data Scientist',
    bio: 'The calm in the storm. Khizer possesses a quiet confidence and a powerful presence, letting his work and his aura speak for themselves.',
    ghibliImg: '/images/khizer_ghibli.png',
    normalImg: '/images/khizer_normal.jpeg',
    color: '#FF8A00',
    secondaryColor: '#FF4D00',
    hobbies: ['Meditation', 'Data Visualization', 'Philosophy'],
    stats: [
      { label: 'Aura', value: '100%', icon: Zap },
      { label: 'Calm', value: '100%', icon: Heart },
      { label: 'Wisdom', value: 'High', icon: Coffee }
    ],
    socials: [
      { platform: 'Instagram', link: 'https://instagram.com/khizer', icon: <Instagram size={20} /> },
      { platform: 'LinkedIn', link: 'https://linkedin.com/in/khizer', icon: <Linkedin size={20} /> },
      { platform: 'GitHub', link: 'https://github.com/khizer', icon: <Github size={20} /> }
    ],
    gallery: [
      'https://picsum.photos/seed/khizer1/800/1000',
      'https://picsum.photos/seed/khizer2/800/1000',
      'https://picsum.photos/seed/khizer3/800/1000',
      'https://picsum.photos/seed/khizer4/800/1000'
    ]
  }
];

const GROUP_GALLERY = [
  'https://picsum.photos/seed/group1/1200/800',
  'https://picsum.photos/seed/group2/1200/800',
  'https://picsum.photos/seed/group3/1200/800',
  'https://picsum.photos/seed/group4/1200/800',
  'https://picsum.photos/seed/group5/1200/800',
  'https://picsum.photos/seed/group6/1200/800',
];

// --- Components ---

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  loading = "eager", 
  isMotion = false,
  ...props 
}: { 
  src: string; 
  alt?: string; 
  className?: string; 
  loading?: "lazy" | "eager";
  isMotion?: boolean;
  [key: string]: any;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ImageComponent = isMotion ? motion.img : 'img';

  if (isMotion) {
    // Parent controls opacity via motion props — don't add our own fade
    return (
      <ImageComponent
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`${className} object-cover`}
        {...props}
      />
    );
  }

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 bg-white/5 flex items-center justify-center pointer-events-none z-10">
          <div className="w-8 h-8 border-2 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`${className} object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  );
};

const NoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

const GlitchText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span 
        className="absolute top-0 left-0 -z-10 text-red-500 opacity-70"
        animate={{ x: [0, -2, 2, 0], y: [0, 1, -1, 0] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
      >
        {text}
      </motion.span>
      <motion.span 
        className="absolute top-0 left-0 -z-20 text-blue-500 opacity-70"
        animate={{ x: [0, 2, -2, 0], y: [0, -1, 1, 0] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror", delay: 0.1 }}
      >
        {text}
      </motion.span>
    </div>
  );
};

const TimeCounter = ({ theme }: { theme: 'dark' | 'light' }) => {
  const [time, setTime] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2025-09-15T00:00:00');
    
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      if (diff < 0) return;

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      
      const years = Math.floor(days / 365);
      const remainingDays = days % 365;
      const months = Math.floor(remainingDays / 30);
      const finalDays = remainingDays % 30;
      const weeks = Math.floor(finalDays / 7);
      const actualDays = finalDays % 7;

      setTime({
        years,
        months,
        weeks,
        days: actualDays,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="flex items-baseline gap-1 font-mono">
        <span className={`text-3xl md:text-4xl font-black transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{time.years}</span>
        <span className={`text-[10px] mr-2 transition-colors ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Y</span>
        <span className={`text-3xl md:text-4xl font-black transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{time.months}</span>
        <span className={`text-[10px] mr-2 transition-colors ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>M</span>
        <span className={`text-3xl md:text-4xl font-black transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{time.weeks}</span>
        <span className={`text-[10px] mr-2 transition-colors ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>W</span>
        <span className={`text-3xl md:text-4xl font-black transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{time.days}</span>
        <span className={`text-[10px] transition-colors ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>D</span>
      </div>
      <div className="font-mono text-[10px] text-orange-500/60 mt-1 tracking-widest">
        {String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

const InfinitySymbol = ({ theme }: { theme: 'dark' | 'light' }) => (
  <div className="relative flex items-center justify-center h-12">
    <motion.div 
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8]
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full"
    />
    <InfinityIcon size={56} className={`relative z-10 transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`} strokeWidth={3} />
  </div>
);

const SocialHoverMenu = ({ icon: Icon, label, theme }: { icon: any; label: string; theme: 'dark' | 'light' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className={`transition-colors cursor-pointer ${theme === 'dark' ? 'text-white/20 hover:text-white' : 'text-black/20 hover:text-black'}`}
        whileHover={{ scale: 1.2, rotate: 10 }}
      >
        <Icon size={32} />
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 p-4 bg-[#0a0a0a] border border-white/10 rounded-2xl backdrop-blur-xl min-w-[200px] z-[200] shadow-2xl"
          >
            <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4 text-center">
              {label} PROFILES
            </p>
            <div className="space-y-2">
              {FRIENDS.map((friend) => {
                const social = friend.socials.find(s => s.platform === label);
                if (!social) return null;
                return (
                  <a 
                    key={friend.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors group"
                  >
                    <span className="text-xs font-bold">{friend.name}</span>
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a0a0a] border-r border-b border-white/10 rotate-45 -mt-2" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GalleryModal = ({ images, title, onClose, theme }: { images: string[]; title: string; onClose: () => void; theme: 'dark' | 'light' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-[300] backdrop-blur-xl p-6 md:p-20 overflow-y-auto transition-colors duration-700 ${theme === 'dark' ? 'bg-black/95 text-white' : 'bg-white/95 text-black'}`}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-orange-500 mb-2">Visual Archive</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic italic">{title}</h2>
          </div>
          <button 
            onClick={onClose}
            className={`w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-all ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}
          >
            <ArrowLeft size={32} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`aspect-[4/5] rounded-3xl overflow-hidden border group transition-colors ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}
            >
        <OptimizedImage 
          src={img} 
          alt={`Gallery image ${i}`}
          className="w-full h-full group-hover:scale-110 transition-transform duration-700" 
        />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const QuotesSection = ({ theme }: { theme: 'dark' | 'light' }) => {
  const [index, setIndex] = useState(0);
  const quotes = [
    { text: "A friend is like a mirror, you see your own reflection in them.", author: "Imam Ali (R.A)" },
    { text: "Be careful of your friends, for they are the ones who will be with you in the hereafter.", author: "Prophet Muhammad (S.A.W)" },
    { text: "The best of friends is the one who helps you to remember Allah.", author: "Imam Al-Ghazali" },
    { text: "A true friend is one who sees a fault, gives you advice and who defends you in your absence.", author: "Ali ibn Abi Talib (R.A)" },
    { text: "If you want to know a person's character, look at their friends.", author: "Imam Shafi'i" },
    { text: "Set your life on fire. Seek those who fan your flames.", author: "Rumi" },
    { text: "Words are a pretext. It is the inner bond that draws one person to another, not words.", author: "Rumi" },
    { text: "A friend is one who is a friend in both worlds.", author: "Saadi Shirazi" },
    { text: "The most helpless person is the one who cannot find a friend, and even more helpless is the one who finds a friend and then loses them.", author: "Imam Ali (R.A)" },
    { text: "A sincere friend is a spiritual brother.", author: "Imam Al-Ghazali" },
    { text: "The beauty of a friend is in their character, not their face.", author: "Sheikh Saadi" },
    { text: "Do not sit with the lazy, for they will make you lazy too. Seek the company of the wise.", author: "Ibn Hazm" },
    { text: "A friend is someone who knows all about you and still loves you for the sake of Allah.", author: "Ibn Qayyim" },
    { text: "The best companion is the one who makes you better.", author: "Hasan al-Basri" },
    { text: "There is no better gift than a righteous friend.", author: "Umar ibn al-Khattab (R.A)" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`py-20 px-6 text-center transition-colors duration-500 ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Quote size={40} className="mx-auto mb-8 text-orange-500 opacity-50" />
          <p className={`text-2xl md:text-4xl font-light italic leading-snug mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            "{quotes[index].text}"
          </p>
          <p className={`text-sm font-black uppercase tracking-[0.5em] ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
            — {quotes[index].author}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const LoadingScreen = ({ progress }: { progress: number }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050505] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <Flame className="text-orange-500" size={120} />
        </motion.div>
        <motion.div 
          className="absolute inset-0 bg-orange-500 blur-3xl opacity-20"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      
      <motion.div 
        className="mt-12 overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter whitespace-nowrap">
          POWERING <span className="text-orange-500">UP</span>
        </h1>
      </motion.div>

      <div className="mt-8 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-orange-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      <p className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
        Loading crew... {Math.round(progress)}%
      </p>
    </motion.div>
  );
};

const FriendCard = ({ friend, onClick, theme }: { friend: Friend; onClick: () => void; theme: 'dark' | 'light' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layoutId={`card-${friend.id}`}
      className={`relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] cursor-pointer group shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${theme === 'dark' ? 'bg-[#111]' : 'bg-[#eee]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 0.98, rotate: isHovered ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ghibli Image (Base) */}
      <OptimizedImage 
        src={friend.ghibliImg} 
        alt={`${friend.name} Ghibli`}
        className="absolute inset-0 h-full w-full group-hover:scale-110 transition-transform duration-1000"
      />
      
      {/* Normal Image (Overlay on Hover) */}
      <OptimizedImage 
        isMotion
        src={friend.normalImg} 
        alt={`${friend.name} Normal`}
        className="absolute inset-0 h-full w-full"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 1.1 }}
        transition={{ duration: 0.6, ease: "circOut" }}
      />

      {/* Dynamic Border */}
      <div 
        className="absolute inset-0 border-[12px] border-transparent group-hover:border-white/10 transition-all duration-500 rounded-[2rem]"
        style={{ borderColor: isHovered ? `${friend.color}22` : 'transparent' }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 text-white w-full">
        <motion.div
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Zap size={14} className="text-yellow-400" />
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/60">
              {friend.nickname}
            </p>
          </div>
          <h3 className="text-3xl md:text-4xl font-black uppercase italic leading-[0.8] tracking-tighter mb-4">
            {friend.name.split(' ')[0]}
            {friend.name.split(' ').length > 1 && (
              <>
                <br/>
                <span style={{ color: friend.color }}>{friend.name.split(' ').slice(1).join(' ')}</span>
              </>
            )}
          </h3>
          <div 
            className="h-1.5 w-12 transition-all duration-500 rounded-full" 
            style={{ backgroundColor: friend.color, width: isHovered ? '100%' : '48px' }}
          />
        </motion.div>
      </div>

      {/* Badge */}
      <div className="absolute top-6 left-6 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest">
        {friend.role}
      </div>
    </motion.div>
  );
};

const PortfolioView = ({ friend, onBack, theme }: { friend: Friend; onBack: () => void; theme: 'dark' | 'light' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showGallery, setShowGallery] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <motion.div 
      ref={containerRef}
      className={`fixed inset-0 z-[150] overflow-y-auto overflow-x-hidden transition-colors duration-700 ${theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-[#f5f5f5] text-black'}`}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 120 }}
    >
      <NoiseOverlay />

      <AnimatePresence>
        {showGallery && (
          <GalleryModal 
            images={friend.gallery} 
            title={`${friend.name.split(' ')[0]}'s Archive`} 
            onClose={() => setShowGallery(false)} 
            theme={theme}
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative h-screen w-full flex items-end">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <OptimizedImage 
            isMotion
            layoutId={`card-${friend.id}`}
            src={friend.normalImg} 
            alt={friend.name}
            loading="eager"
            className="h-full w-full"
          />
          <div className={`absolute inset-0 transition-colors duration-700 ${theme === 'dark' ? 'bg-gradient-to-b from-black/40 via-transparent to-[#050505]' : 'bg-gradient-to-b from-white/40 via-transparent to-[#f5f5f5]'}`} />
        </motion.div>
        
        <motion.button
          onClick={onBack}
          className={`fixed top-8 left-8 z-[160] p-4 rounded-full hover:scale-110 transition-all shadow-2xl ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeft size={24} />
        </motion.button>

        <div className="relative z-10 w-full p-8 md:p-20">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`h-[2px] w-20 transition-colors ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} />
              <span className="text-sm font-black uppercase tracking-[0.5em]">{friend.role}</span>
            </div>
            <h1 className="text-[18vw] md:text-[15vw] font-black uppercase italic leading-[0.75] tracking-tighter mb-8 mix-blend-difference">
              {friend.name.split(' ')[0]}
              {friend.name.split(' ').length > 1 && (
                <>
                  <br/>
                  <span style={{ color: friend.color }}>{friend.name.split(' ').slice(1).join(' ')}</span>
                </>
              )}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-20 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Bio */}
          <div className="lg:col-span-8 space-y-24">
            <section>
              <div className="flex items-center gap-4 mb-12">
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${theme === 'dark' ? 'border-white/20' : 'border-black/20'}`}>
                  <User size={20} />
                </div>
                <h2 className={`text-xs font-black uppercase tracking-[0.4em] transition-colors ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>The Narrative</h2>
              </div>
              <p className={`text-4xl md:text-6xl font-light leading-[1.1] tracking-tight transition-colors ${theme === 'dark' ? 'text-white/90' : 'text-black/90'}`}>
                <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-medium italic`}>"{friend.nickname}"</span> — {friend.bio}
              </p>

              <motion.button
                onClick={() => setShowGallery(true)}
                className={`mt-12 flex items-center gap-4 px-10 py-5 rounded-full hover:scale-105 transition-all group ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ImageIcon size={24} className="group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-black uppercase tracking-widest">Personal Gallery</span>
              </motion.button>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {friend.stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className={`text-[10px] uppercase tracking-[0.5em] mb-4 transition-colors ${theme === 'dark' ? 'text-white/30 group-hover:text-white' : 'text-black/30 group-hover:text-black'}`}>
                    {stat.label}
                  </p>
                  <div className="relative">
                    <p className="text-6xl font-black italic tracking-tighter">{stat.value}</p>
                    <div 
                      className={`absolute -bottom-2 left-0 h-1 w-full overflow-hidden transition-colors ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}
                    >
                      <motion.div 
                        className="h-full"
                        style={{ backgroundColor: friend.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </section>

            <section>
              <div className="flex items-center gap-4 mb-12">
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${theme === 'dark' ? 'border-white/20' : 'border-black/20'}`}>
                  <Sparkles size={20} />
                </div>
                <h2 className={`text-xs font-black uppercase tracking-[0.4em] transition-colors ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Core Passions</h2>
              </div>
              <div className="flex flex-wrap gap-6">
                {friend.hobbies.map((hobby, i) => (
                  <motion.div 
                    key={i} 
                    className={`px-10 py-5 rounded-2xl border text-2xl font-bold transition-all cursor-default ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white hover:text-black' : 'bg-black/5 border-black/10 hover:bg-black hover:text-white'}`}
                    whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                  >
                    {hobby}
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-4 space-y-20">
            <div className={`p-10 rounded-[2.5rem] border space-y-12 backdrop-blur-xl transition-colors ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className={`text-[10px] uppercase tracking-[0.3em] mb-1 transition-colors ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Base Location</p>
                    <p className="text-xl font-bold">Earth, Sector 7</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className={`text-[10px] uppercase tracking-[0.3em] mb-1 transition-colors ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Origin Story</p>
                    <p className="text-xl font-bold">Circa 2018</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className={`text-[10px] uppercase tracking-[0.3em] mb-1 transition-colors ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Status</p>
                    <p className="text-xl font-bold">Active / Online</p>
                  </div>
                </div>
              </div>

              <div className={`pt-12 border-t transition-colors ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
                <h2 className={`text-[10px] font-black uppercase tracking-[0.5em] mb-8 transition-colors ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Digital Footprint</h2>
                <div className="grid grid-cols-3 gap-4">
                  {friend.socials.map((social, i) => (
                    <motion.a 
                      key={i} 
                      href={social.link} 
                      className={`aspect-square rounded-2xl border flex items-center justify-center transition-all ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white hover:text-black' : 'bg-black/5 border-black/10 hover:bg-black hover:text-white'}`}
                      whileHover={{ y: -5 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden group">
              <OptimizedImage 
                src={friend.ghibliImg} 
                alt="Ghibli Mode"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-black uppercase tracking-[1em] rotate-90 text-white">Ghibli Mode</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-40 text-center border-t border-white/5">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart className="mx-auto text-red-500 mb-8" size={60} fill="currentColor" />
        </motion.div>
        <p className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white/20">
          BONDED BY <span className="text-white">BLOOD</span> & <span className="text-white">CODE</span>
        </p>
      </footer>
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [showGroupGallery, setShowGroupGallery] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  useEffect(() => {
    // Collect all images to preload (ghibli + normal for each friend)
    const imageSrcs = FRIENDS.flatMap(f => [f.ghibliImg, f.normalImg]);
    const total = imageSrcs.length;
    let loaded = 0;
    const startTime = Date.now();

    const tryFinish = () => {
      setLoadProgress(100);
      // Ensure loading screen shows for at least 2s even if images load fast
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 2000 - elapsed);
      setTimeout(() => setLoading(false), remaining + 400);
    };

    if (total === 0) { tryFinish(); return; }

    imageSrcs.forEach(src => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / total) * 100));
        if (loaded === total) tryFinish();
      };
      img.src = src;
    });

    // Safety fallback — never get stuck more than 6s
    const fallback = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(fallback);
  }, []);

  const toggleTheme = () => {
    setIsThemeChanging(true);
    setTimeout(() => {
      setTheme(prev => prev === 'dark' ? 'light' : 'dark');
      setTimeout(() => setIsThemeChanging(false), 500);
    }, 300);
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden transition-colors duration-700 ${theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-[#f5f5f5] text-black'}`}>
      <NoiseOverlay />
      
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" progress={loadProgress} />}
      </AnimatePresence>

      {/* Theme Transition Overlay */}
      <AnimatePresence>
        {isThemeChanging && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 4, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "circIn" }}
            className={`fixed inset-0 z-[500] pointer-events-none rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
            style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
          />
        )}
      </AnimatePresence>

      {/* Theme Toggle */}
      {!loading && (
        <motion.button
          onClick={toggleTheme}
          className={`fixed top-8 right-8 z-[200] px-6 py-3 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center gap-3 shadow-2xl transition-all duration-500 ${theme === 'dark' ? 'bg-white text-black hover:bg-orange-500 hover:text-white' : 'bg-black text-white hover:bg-orange-500 hover:text-black'}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          {theme === 'dark' ? 'light up' : 'dark knight'}
        </motion.button>
      )}

      <AnimatePresence>
        {showGroupGallery && (
          <GalleryModal 
            images={GROUP_GALLERY} 
            title="Collective Archive" 
            onClose={() => setShowGroupGallery(false)} 
            theme={theme}
          />
        )}
      </AnimatePresence>

      {!loading && (
        <main className="relative">
          {/* Background Atmosphere */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <motion.div 
              className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-orange-500/10 blur-[150px] rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                x: [0, 50, 0],
                y: [0, 30, 0]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 blur-[150px] rounded-full"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.15, 0.1],
                x: [0, -50, 0],
                y: [0, -30, 0]
              }}
              transition={{ duration: 12, repeat: Infinity }}
            />
          </div>

          {/* Header */}
          <header className="relative z-10 pt-32 pb-20 px-6 md:px-20 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ x: -100, opacity: 0, skewX: -10 }}
                  animate={{ x: 0, opacity: 1, skewX: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      className="h-[2px] bg-orange-500"
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                    <span className="text-xs font-black uppercase tracking-[0.6em] text-orange-500">The Collective</span>
                  </div>
                  <h1 className={`text-[18vw] lg:text-[12vw] font-black uppercase italic leading-[0.75] tracking-tighter transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    MAJOR &<br/>
                    <GlitchText 
                      text="FRIENDS" 
                      className={`text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500 ${theme === 'dark' ? 'from-white to-white/30' : 'from-black to-black/30'}`} 
                    />
                  </h1>
                </motion.div>
              </div>
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="space-y-8"
                >
                  <p className={`text-xl md:text-2xl font-light leading-snug border-l-2 pl-8 transition-colors ${theme === 'dark' ? 'text-white/60 border-white/10' : 'text-black/60 border-black/10'}`}>
                    A high-octane tribute to the souls who define our reality. 
                    Not just friends, but architects of a shared universe.
                  </p>
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex -space-x-4">
                      {FRIENDS.map((f, i) => (
                        <motion.div 
                          key={i} 
                          className={`w-12 h-12 rounded-full border-2 overflow-hidden transition-colors ${theme === 'dark' ? 'border-[#050505]' : 'border-[#f5f5f5]'}`}
                          whileHover={{ zIndex: 10, scale: 1.2 }}
                        >
                          <OptimizedImage src={f.normalImg} alt={f.name} className="w-full h-full" />
                        </motion.div>
                      ))}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}>4 Active Members</span>
                    
                    <motion.button
                      onClick={() => setShowGroupGallery(true)}
                      className={`flex items-center gap-3 px-6 py-3 border rounded-full transition-all group ${theme === 'dark' ? 'bg-white/5 hover:bg-white hover:text-black border-white/10' : 'bg-black/5 hover:bg-black hover:text-white border-black/10'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ImageIcon size={16} className="group-hover:rotate-12 transition-transform" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Group Gallery</span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </header>

          {/* Friends Grid */}
          <section className="relative z-10 px-6 md:px-20 pb-0 max-w-[1600px] mx-auto mb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-0">
              {FRIENDS.map((friend, i) => (
                <motion.div
                  key={friend.id}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 + (i * 0.15), duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <FriendCard 
                    friend={friend} 
                    theme={theme}
                    onClick={() => setSelectedFriend(friend)} 
                  />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Quotes Section */}
          <QuotesSection theme={theme} />

          {/* Stats Bar */}
          <div className={`relative z-10 border-y transition-colors duration-500 ${theme === 'dark' ? 'bg-black border-white/10' : 'bg-white border-black/10'}`}>
            <div className={`max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x transition-colors duration-500 ${theme === 'dark' ? 'divide-white/10' : 'divide-black/10'}`}>
              {[
                { label: "Total Memories", value: <InfinitySymbol theme={theme} />, icon: Star },
                { label: "Favorite Cafe", value: "BHOLA CAFE", icon: Coffee },
                { label: "Institute", value: "DATA SCIENCE", icon: Code },
                { label: "Years Strong", value: <TimeCounter theme={theme} />, icon: Clock }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className={`p-12 flex flex-col justify-between group transition-colors ${theme === 'dark' ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <p className={`text-[10px] font-black uppercase tracking-[0.4em] transition-colors ${theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}>{stat.label}</p>
                    <stat.icon size={14} className="text-orange-500/50 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <div className="relative">
                    <div className={`text-3xl md:text-4xl font-black italic tracking-tighter transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {stat.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Large Decorative Text */}
          <div className={`relative z-0 pointer-events-none select-none overflow-hidden py-20 transition-opacity duration-500 ${theme === 'dark' ? 'opacity-[0.02]' : 'opacity-[0.05]'}`}>
            <motion.h2 
              className={`text-[30vw] font-black uppercase italic tracking-tighter whitespace-nowrap leading-none transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              FRIENDSHIP • FOREVER • BONDED • CREW • 
            </motion.h2>
          </div>

          {/* Footer */}
          <footer className={`relative z-10 py-40 px-6 text-center transition-colors duration-500 ${theme === 'dark' ? 'bg-gradient-to-t from-orange-500/5 to-transparent' : 'bg-gradient-to-t from-orange-500/10 to-transparent'}`}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center transition-colors ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>
                <Star size={40} fill="currentColor" />
              </div>
            </motion.div>
            <h3 className={`text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              STAY <span className="text-orange-500">CONNECTED</span>
            </h3>
            <div className="flex justify-center gap-12 mb-16">
              <SocialHoverMenu icon={Instagram} label="Instagram" theme={theme} />
              <SocialHoverMenu icon={Linkedin} label="LinkedIn" theme={theme} />
              <SocialHoverMenu icon={Github} label="GitHub" theme={theme} />
            </div>
            <div className={`h-[1px] w-20 mx-auto mb-8 transition-colors ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`} />
            <p className={`text-[10px] font-black uppercase tracking-[1em] transition-colors ${theme === 'dark' ? 'text-white/20' : 'text-black/20'}`}>© 2026 MAJOR & FRIENDS COLLECTIVE</p>
          </footer>
        </main>
      )}

      {/* Portfolio Overlay */}
      <AnimatePresence>
        {selectedFriend && (
          <PortfolioView 
            friend={selectedFriend} 
            theme={theme}
            onBack={() => setSelectedFriend(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
