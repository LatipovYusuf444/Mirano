import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Mahsulotlar uchun namunaviy ma'lumotlar
const products = [
  {
    id: 1,
    name: "Premium Paxta Matosi",
    price: "120,000",
    image: "src/assets/svg/paxta.jpg",
    category: "Natural Cotton"
  },
  {
    id: 2,
    name: "Eshon Shoh Shoyisi",
    price: "450,000",
    image: "src/assets/svg/paxta1.jpg",
    category: "Silk Collection"
  },
  {
    id: 3,
    name: "Modern Stretch Denim",
    price: "185,000",
    image: "src/assets/svg/paxta2.jpg",
    category: "Denim"
  },
  {
    id: 4,
    name: "Klassik Zig'ir Matosi",
    price: "95,000",
    image: "src/assets/svg/paxta3.jpg",
    category: "Linen"
  },
  {
    id: 5,
    name: "Modern Stretch Denim",
    price: "185,000",
    image: "src/assets/svg/paxta1.jpg",
    category: "Denim"
  },
    {
    id: 5,
    name: "Modern Stretch Denim",
    price: "185,000",
    image: "src/assets/svg/paxta1.jpg",
    category: "Denim"
  },
  {
    id: 6,
    name: "Eshon Shoh Shoyisi",
    price: "450,000",
    image: "src/assets/svg/paxta2.jpg",
    category: "Silk Collection"
  },
  {
    id: 7,
    name: "Eshon Shoh Shoyisi",
    price: "130,000",
    image: "src/assets/svg/paxta3.jpg",
    category: "Silk Collection"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const CatalogPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="pt-32 md:pt-40 px-6">
        <div className="max-w-[1200px] mx-auto">

          {/* Sarlavha qismi */}
          <div className="flex  justify-between items-end mb-12 mt-10">
            <motion.div
              className="
    w-full max-w-[700px] h-auto p-8 
    relative overflow-hidden
    bg-white/10 backdrop-blur-md 
    border border-white/20 
    rounded-3xl shadow-2xl
  "
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Shisha ustidagi yaltiroq nur effekti */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/10 blur-3xl rounded-full"></div>

              <div className="relative z-10">
                <h2 className="text-xl uppercase tracking-[0.3em] text-orange-400 font-bold mb-3 drop-shadow-md">
                  Eksklyuziv Matolar
                </h2>
                <h1 className="text-4xl md:text-5xl font-extrabold italic text-white leading-tight drop-shadow-lg">
                  Bizning <span className="text-orange-500/90">Kolleksiya</span>
                </h1>
              </div>
            </motion.div>
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="
    cursor-pointer 
    h-10 sm:h-11 md:h-14 
    w-64 
    px-4 sm:px-5 md:px-6 
    text-sm sm:text-base md:text-xl 
    text-white 
    /* Glass effekt qismi */
    bg-white/10 
    backdrop-blur-md 
    border border-white/20 
    rounded-2xl
    /* Hover va animatsiya */
    hover:bg-orange-500/40 
    hover:border-orange-400/50 
    hover:shadow-[0_0_20px_rgba(255,165,0,0.3)]
    transition-all duration-300
    group kotta
  "
            >
              <span className="group-hover:-translate-x-2 transition-transform duration-300 mr-2">
                ←
              </span>
              Orqaga qaytish
            </Button>
          </div>

          {/* Mahsulotlar Gridi */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5"
              >
                {/* Rasm qismi */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-6 rounded-xl">
                      Savatga qo'shish
                    </Button>
                  </div>
                </div>

                {/* Ma'lumot qismi */}
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{product.category}</p>
                  <h3 className="text-lg text-white font-semibold mb-2 group-hover:text-orange-400 transition-colors">{product.name}</h3>
                  <p className="text-xl font-bold text-white">{product.price} <span className="text-sm font-normal text-gray-400">UZS / metr</span></p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div >
  );
};

export default CatalogPage;
