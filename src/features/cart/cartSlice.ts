import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "@/types/product"

interface CartState {
  items: Product[]
  totalQuantity: number
  totalPrice: number
}

const loadCart = (): CartState => {
  const data = localStorage.getItem("cart")
  return data
    ? JSON.parse(data)
    : { items: [], totalQuantity: 0, totalPrice: 0 }
}

const initialState: CartState = loadCart()

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<Product, "quantity">>) => {
      const item = state.items.find(i => i.id === action.payload.id)

      if (item) {
        item.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }

      state.totalQuantity += 1
      state.totalPrice += action.payload.price
      localStorage.setItem("cart", JSON.stringify(state))
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.id === action.payload)
      if (!item) return

      state.totalQuantity -= item.quantity
      state.totalPrice -= item.price * item.quantity
      state.items = state.items.filter(i => i.id !== action.payload)

      localStorage.setItem("cart", JSON.stringify(state))
    },

    increaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.id === action.payload)
      if (!item) return

      item.quantity += 1
      state.totalQuantity += 1
      state.totalPrice += item.price
      localStorage.setItem("cart", JSON.stringify(state))
    },

    decreaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.id === action.payload)
      if (!item || item.quantity === 1) return

      item.quantity -= 1
      state.totalQuantity -= 1
      state.totalPrice -= item.price
      localStorage.setItem("cart", JSON.stringify(state))
    },

    clearCart: (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalPrice = 0
      localStorage.removeItem("cart")
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
