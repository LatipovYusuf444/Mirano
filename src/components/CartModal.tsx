import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cart/cartSlice"; 
import { Button } from "./ui/button";
import type { RootState } from "../app/store";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items); //

  const totalPrice = items.reduce((acc, item) => {
    const priceNum = parseInt(item.price.replace(/,/g, '')) || 0;
    return acc + (priceNum * item.quantity);
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="relative w-full max-w-md h-full bg-[#121212] border-l border-white/10 p-6 flex flex-col shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8 text-white">
              <h2 className="text-2xl font-bold italic">Savatcha</h2>
              <button onClick={onClose} className="hover:text-orange-500 text-2xl">✕</button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {items.length === 0 ? (
                <p className="text-gray-500 text-center mt-20">Savatchangiz bo'sh...</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white/5 p-3 rounded-xl border border-white/5 items-center">
                    <img src={item.image} className="w-16 h-16 object-cover rounded-lg" alt={item.name} />
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-sm">{item.name}</h4>
                      <p className="text-orange-400 text-xs font-bold">{item.price} UZS</p>
                      <p className="text-gray-500 text-[10px]">Soni: {item.quantity}</p>
                    </div>
                    <button 
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex justify-between mb-6">
                  <span className="text-gray-400">Jami summa:</span>
                  <span className="text-xl font-bold text-white">{totalPrice.toLocaleString()} UZS</span>
                </div>
                <div className="flex flex-col gap-3">
                  <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-6 rounded-xl shadow-lg shadow-orange-600/20">
                    Buyurtma berish
                  </Button>
                  <Button variant="ghost" onClick={() => dispatch(clearCart())} className="text-gray-500 hover:text-white">
                    Savatchani tozalash
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
