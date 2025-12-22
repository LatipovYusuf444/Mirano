import { Product } from "@/types/"

export const products: Omit<Product, "quantity">[] = [
  {
    id: "mirano-1",
    title: "Mirano Cotton Fabric",
    price: 45,
    image: "/images/textile-1.webp",
  },
  {
    id: "mirano-2",
    title: "Premium Linen Textile",
    price: 60,
    image: "/images/textile-2.webp",
  },
  {
    id: "mirano-3",
    title: "Industrial Fabric Roll",
    price: 120,
    image: "/images/textile-3.webp",
  },
  {
    id: "mirano-4",
    title: "Soft Yarn Collection",
    price: 35,
    image: "/images/textile-4.webp",
  },
]
