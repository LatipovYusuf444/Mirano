import { useState } from "react";
import { motion} from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../app/store";
import logo from "@/assets/images/mirano-bg-text.webp";
import { Button } from "./ui/button";
import CartModal from "./CartModal";

const Navbar = () => {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Savatdagi barcha mahsulotlar sonini hisoblash
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 pt-4 sm:pt-6 md:pt-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative w-[92%] sm:w-[95%] md:w-full max-w-[1100px] mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-between shadow-2xl overflow-hidden"
        // Liquid Glass effektining asosi: bg-white/5 va backdrop-blur-xl
        >
          {/* --- LIQUID GLASS NUR EFFEKTI --- */}
          <motion.div
            className="absolute inset-0 w-[500px] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
            initial={{ x: "-150%", skewX: -20 }}
            animate={{ x: "250%", skewX: -20 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />

          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 sm:w-20 sm:h-20 object-contain cursor-pointer relative z-10"
            onClick={() => navigate("/")}
          />

          <div className="flex items-center gap-4 relative z-10">
            {/* Savat tugmasi */}
            <motion.div
              onClick={() => setIsCartOpen(true)}
              className="relative w-12 h-12 border border-white/15 rounded-xl flex items-center justify-center cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={totalCount > 0 ? { scale: [1, 1.2, 1] } : {}}
              key={totalCount}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>

              {totalCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg"
                >
                  {totalCount}
                </motion.span>
              )}
            </motion.div>

            {/* Register Button */}
            <Button variant="button"
              className="h-12 w-48 border border-white/20 hover:bg-orange-600 backdrop-blur-md text-white rounded-xl transition-all shadow-lg shadow-orange-600/20"
            >
              Register
            </Button>
          </div>
        </motion.div>
      </nav>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
