import { useDispatch } from "react-redux"
import { addToCart } from "@/features/cart/cartSlice"
import { Button } from "@/components/ui/button"

interface Props {
  id: string
  title: string
  price: number
  image?: string
}

const ProductCard = ({ id, title, price, image }: Props) => {
  const dispatch = useDispatch()

  return (
    <div className="border rounded-2xl p-4 hover:shadow-lg transition">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover rounded-xl mb-3"
        />
      )}

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-orange-400 text-xl font-bold mt-1">
        ${price}
      </p>

      <Button
        className="w-full mt-4 bg-orange-500 hover:bg-orange-600"
        onClick={() =>
          dispatch(
            addToCart({
              id: Number(id), // 'string'ni 'number'ga o'tkazamiz
              name: title,    // Slice 'name' kutmoqda, unga 'title'ni beramiz
              price: String(price), // 'number'ni 'string'ga o'tkazamiz
              image: image || "",   // 'undefined' bo'lmasligi uchun
            })
          )
        }
      >
        Add to cart
      </Button>
    </div>
  )
}

export default ProductCard
