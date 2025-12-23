import { useState } from "react"; // 1. State qo'shamiz
import { motion, type Variants } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../app/store";
import logo from "@/assets/images/mirano-bg-text.webp";
import { Button } from "./ui/button";
import CartModal from "./CartModal";
// import CartModal from "./CartModal"; // 2. Modalni import qilamiz

// ... variants kodlari o'sha-o'sha qoladi

const Navbar = () => {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false); // 3. Modal holati
  const cartCount = useSelector((state: RootState) => state.cart?.items?.length || 0);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 pt-4 sm:pt-6 md:pt-10">
        <div className="w-[92%] sm:w-[95%] md:w-full max-w-[1100px] mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-2xl sm:rounded-3xl relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between">

          {/* Logo */}
          <motion.img
            src={logo}
            alt="Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain relative z-10 cursor-pointer"
            onClick={() => navigate("/")}
          // ... animatsiyalar
          />

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 relative z-10">
            {/* Savat belgisi - BOSILGANDA MODAL OCHILADI */}
            <motion.div
              onClick={() => setIsCartOpen(true)} // 4. Click hodisasi
              className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border border-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-orange-400/40 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5 sm:w-6 sm:h-6">
                <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>

              <motion.span
                key={cartCount}
                className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            </motion.div>

            <Button variant="outline" className="h-10 text-white border-white/20 bg-transparent hover:bg-orange-500 transition-all">
              Register
            </Button>
          </div>
        </div>
      </nav>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
