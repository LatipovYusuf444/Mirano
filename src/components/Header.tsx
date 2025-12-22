import { Button } from "./ui/button"

const Header = () => {
  return (
    <div className="flex flex-col mx-auto w-full px-4 pt-5 mt-20 md:mt-10">
      <div className="rounded-3xl w-72 h-22 md:w-[880px] md:h-54 sm:h-28 p-5 bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
        <h1 className="text-xl sm:text-4xl md:text-7xl kotta text-white leading-tight">
          Jahon darajasidagi <br /> Texnik <span className="text-orange-400 kotta">to'qimachilik</span>
        </h1>
      </div>
      <div className="
  w-full 
  md:w-[800px] 
  h-16 
  md:h-28 
  mt-5 
  bg-white/10 
  backdrop-blur-md 
  border 
  border-white/10 
  rounded-3xl 
  p-5 
  shadow-md
">
        <p className="text-[9px] sm:text-[16px] md:text-[20px] text-white">
          Marino Textile ko‘p yillardan buyon tekstil bozorida yuqori sifatli matolar va tayyor <br />
          <span className="text-orange-400 kotta">
            mahsulotlar yetkazib beruvchi ishonchli hamkor hisoblanadi.
          </span>
        </p>
      </div>
      <Button
        className="border h-14 w- sm:h-16 w-52 text-[14px] md:w-78 text-white kotta mt-8 md:mt-10 flex items-center justify-center gap-2
                   bg-white/10 backdrop-blur-md border border-white/10 shadow-lg"
        variant="button"
      >
        To'liq ma'lumot olish
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-up-right-icon"
        >
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </Button>
    </div>
  )
}

export default Header
