import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const buttonVariants: Variants = {
  initial: { scale: 1, opacity: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Video Fon */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-weaving-process-of-a-fabric-on-a-loom-14734-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </motion.div>

      {/* Kontent */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center text-white pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl mx-auto">
          <motion.span
            className="inline-block px-4 py-1 mb-4 text-sm font-medium tracking-widest uppercase bg-orange-600 rounded-full"
            variants={itemVariants}
          >
            Yangi Kolleksiya
          </motion.span>

          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" variants={itemVariants}>
            Sifatli <span className="text-orange-400">Textil</span> San'ati
          </motion.h1>

          <motion.p className="text-lg md:text-xl mb-10 text-gray-200" variants={itemVariants}>
            Bizning matolarimiz zamonaviy texnologiyalar va an'anaviy to'quv uslublari uyg'unligida yaratiladi.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={containerVariants as any}>
            <motion.button
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg transition-all cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => navigate("/catalog")}
            >
              Katalogga o'tish
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => navigate("/about")}
            >
              Biz haqimizda
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
