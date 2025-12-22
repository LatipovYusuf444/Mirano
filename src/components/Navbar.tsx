import { motion, type Variants } from "framer-motion";
import { useSelector } from "react-redux";
// O'zingizning store yo'lingizni tekshiring, odatda @/app/store bo'ladi
import type { RootState } from "../app/store";
import logo from "@/assets/images/mirano-bg-text.webp";
import { Button } from "./ui/button";

// Framer Motion variantlari - turlari aniqlashtirildi
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
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

// --- Header Komponenti ---
const Header = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-weaving-process-of-a-fabric-on-a-loom-14734-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </motion.div>

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
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
          >
            Yangi Kolleksiya
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Sifatli <span className="text-orange-400">Textil</span> San'ati
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-10 text-gray-200"
            variants={itemVariants}
          >
            Bizning matolarimiz zamonaviy texnologiyalar va an'anaviy to'quv uslublari uyg'unligida yaratiladi.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants as any}
          >
            <motion.button
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Katalogga o'tish
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Biz haqimizda
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// --- Asosiy Navbar va Header birlashmasi ---
const HeroSection = () => {
  // TypeScript xatosi bo'lmasligi uchun RootState turini aniq ko'rsatamiz
  const cartCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <div className="relative w-full">
      <nav className="absolute top-0 left-0 w-full z-50 pt-4 sm:pt-6 md:pt-10">
        <div
          className="
            w-[92%] sm:w-[95%] md:w-full
            max-w-[1100px]
            mx-auto
            px-3 sm:px-4 md:px-6
            py-2 sm:py-3
            rounded-2xl sm:rounded-3xl
            relative overflow-hidden
            bg-white/10 backdrop-blur-md
            border border-white/20
            flex items-center justify-between
          "
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          />

          <motion.img
            src={logo}
            alt="Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain relative z-10"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />

          <motion.div
            className="flex items-center gap-2 sm:gap-3 md:gap-4 relative z-10"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <motion.div
              className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border border-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-orange-400/40 transition"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 165, 0, 0.6)" }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>

              <motion.span
                key={cartCount}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-md"
              >
                {cartCount}
              </motion.span>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outline"
                className="cursor-pointer h-10 sm:h-11 md:h-14 px-4 sm:px-5 md:px-6 text-sm sm:text-base md:text-xl text-white border-white/20 bg-transparent hover:bg-orange-500 transition-all"
              >
                Register
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </nav>

      <Header />
    </div>
  );
};

export default HeroSection;
