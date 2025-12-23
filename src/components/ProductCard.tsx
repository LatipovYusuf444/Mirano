import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import { Button } from "@/components/ui/button";

interface Props {
  id: string | number;
  title: string;
  price: number | string;
  image?: string;
}

const ProductCard = ({ id, title, price, image }: Props) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: Number(id),
        name: title,
        price: String(price),
        image: image || "",
      })
    );
  };

  return (
    <div className="border border-white/10 rounded-2xl p-4 bg-[#1a1a1a]">
      {image && <img src={image} alt={title} className="h-40 w-full object-cover rounded-xl mb-3" />}
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-orange-400 font-bold mt-1">{price} UZS</p>

      <Button onClick={handleAdd} className="w-full mt-4 bg-orange-500 hover:bg-orange-600 font-bold text-white">
        Savatga qo'shish
      </Button>
    </div>
  );
};

export default ProductCard;
