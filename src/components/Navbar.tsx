import { motion } from "framer-motion"
import logo from "@/assets/images/mirano-bg-text.webp"
import { Button } from "./ui/button"
import Header from "./Header"
import { useSelector } from "react-redux"
import type { RootState } from "@/app/store"

const Navbar = () => {
  const cartCount = useSelector(
    (state: RootState) => state.cart.items.length
  )


  return (
    <div className="pt-4 sm:pt-6 md:pt-10 relative">
      {/* Navbar */}
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
          border border-white/10
          flex items-center justify-between
        "
      >
        {/* Shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
        />

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="
            w-14 h-14
            sm:w-16 sm:h-16
            md:w-20 md:h-20
            object-contain
          "
        />

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Cart */}
          <div
            className="
              relative
              w-10 h-10
              sm:w-12 sm:h-12
              md:w-14 md:h-14
              border border-white/20
              rounded-xl
              flex items-center justify-center
              cursor-pointer
              hover:shadow-lg
              hover:shadow-orange-400/40
              transition
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="
                w-5 h-5
                sm:w-6 sm:h-6
              "
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
              className="
                absolute -top-2 -right-2
                bg-orange-500 text-white
                text-[10px] sm:text-xs
                w-4 h-4 sm:w-5 sm:h-5
                rounded-full
                flex items-center justify-center
                shadow-md
              "
            >
              {cartCount}
            </motion.span>
          </div>

          {/* Button */}
          <Button variant='button'
            className=" cursor-pointer
              h-10 sm:h-11 md:h-14
              px-4 sm:px-5 md:px-6
              text-sm sm:text-base md:text-xl
              text-white
              border border-white/20
              hover:bg-orange-500
              hover:shadow-orange-600/60
              transition-all
            "
          >
            Register
          </Button>
        </div>
      </div>

      {/* Header */}
      <div className="pt-6 sm:pt-8 md:pt-10">
        <Header />
      </div>
    </div>
  )
}

export default Navbar
