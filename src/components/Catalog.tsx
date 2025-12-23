import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import { Button } from "@/components/ui/button";

const Catalog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Premium Paxta Matosi", price: "120,000", image: "/src/assets/svg/paxta.jpg", category: "Natural Cotton" },
    { id: 2, name: "Eshon Shoh Shoyisi", price: "450,000", image: "/src/assets/svg/paxta1.jpg", category: "Silk Collection" },
    { id: 3, name: "Premium Paxta Matosi", price: "120,000", image: "/src/assets/svg/paxta.jpg", category: "Natural Cotton" },
    { id: 4, name: "Eshon Shoh Shoyisi", price: "450,000", image: "/src/assets/svg/paxta1.jpg", category: "Silk Collection" },
    { id: 1, name: "Premium Paxta Matosi", price: "120,000", image: "/src/assets/svg/paxta.jpg", category: "Natural Cotton" },
    { id: 2, name: "Eshon Shoh Shoyisi", price: "450,000", image: "/src/assets/svg/paxta1.jpg", category: "Silk Collection" },
    { id: 3, name: "Premium Paxta Matosi", price: "120,000", image: "/src/assets/svg/paxta.jpg", category: "Natural Cotton" },
    { id: 4, name: "Eshon Shoh Shoyisi", price: "450,000", image: "/src/assets/svg/paxta1.jpg", category: "Silk Collection" },
    { id: 1, name: "Premium Paxta Matosi", price: "120,000", image: "/src/assets/svg/paxta.jpg", category: "Natural Cotton" },
    { id: 2, name: "Eshon Shoh Shoyisi", price: "450,000", image: "/src/assets/svg/paxta1.jpg", category: "Silk Collection" },
    { id: 3, name: "Premium Paxta Matosi", price: "120,000", image: "/src/assets/svg/paxta.jpg", category: "Natural Cotton" },
    { id: 4, name: "Eshon Shoh Shoyisi", price: "450,000", image: "/src/assets/svg/paxta1.jpg", category: "Silk Collection" },
    { id: 1, name: "Premium Paxta Matosi", price: "120,000", image: "/src/assets/svg/paxta.jpg", category: "Natural Cotton" },
    { id: 2, name: "Eshon Shoh Shoyisi", price: "450,000", image: "/src/assets/svg/paxta1.jpg", category: "Silk Collection" },
    { id: 3, name: "Premium Paxta Matosi", price: "120,000", image: "/src/assets/svg/paxta.jpg", category: "Natural Cotton" },
    { id: 4, name: "Eshon Shoh Shoyisi", price: "450,000", image: "/src/assets/svg/paxta1.jpg", category: "Silk Collection" },
    { id: 1, name: "Premium Paxta Matosi", price: "120,000", image: "/src/assets/svg/paxta.jpg", category: "Natural Cotton" },
    { id: 2, name: "Eshon Shoh Shoyisi", price: "450,000", image: "/src/assets/svg/paxta1.jpg", category: "Silk Collection" },
    { id: 3, name: "Premium Paxta Matosi", price: "120,000", image: "/src/assets/svg/paxta.jpg", category: "Natural Cotton" },
    { id: 4, name: "Eshon Shoh Shoyisi", price: "450,000", image: "/src/assets/svg/paxta1.jpg", category: "Silk Collection" },
    { id: 1, name: "Premium Paxta Matosi", price: "120,000", image: "/src/assets/svg/paxta.jpg", category: "Natural Cotton" },
    { id: 2, name: "Eshon Shoh Shoyisi", price: "450,000", image: "/src/assets/svg/paxta1.jpg", category: "Silk Collection" },
    { id: 3, name: "Premium Paxta Matosi", price: "120,000", image: "/src/assets/svg/paxta.jpg", category: "Natural Cotton" },
    { id: 4, name: "Eshon Shoh Shoyisi", price: "450,000", image: "/src/assets/svg/paxta1.jpg", category: "Silk Collection" },
    // ... mahsulotlar ro'yxati
  ];

  return (
    <div className="pt-32 md:pt-44 px-6 pb-20 min-h-screen">
      <div className="">
        {/* Sarlavha va Orqaga qaytish tugmasi */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl pl-2 md:text-5xl font-bold text-white italic">
              Mahsulotlar <span className="text-orange-500">Katalogi</span>
            </h1>
            <p className="text-gray-400 pl-2 tracking-widest uppercase text-sm">Sifatli matolar olami</p>
          </motion.div>

          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="
              h-12 md:h-14 px-8 
              bg-white/5 backdrop-blur-md 
              border border-white/10 
              text-white font-semibold 
              rounded-2xl hover:bg-orange-500 
              hover:border-orange-500 
              transition-all duration-300 group
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
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 p-4 transition-all hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <Button
                    onClick={() => dispatch(addToCart({ id: product.id, name: product.name, price: product.price, image: product.image }))}
                    className="w-full bg-orange-600 hover:bg-orange-500 font-bold py-6 rounded-xl shadow-lg"
                  >
                    Savatga qo'shish
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-white font-semibold group-hover:text-orange-400 transition-colors">{product.name}</h3>
                <p className="text-orange-400 font-bold mt-1">{product.price} UZS</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Catalog;
