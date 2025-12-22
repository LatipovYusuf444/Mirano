import Navbar from '@/components/Navbar'
import bgfon from "@/assets/images/bg-textile-100.webp"
const Home = () => {
  return (
    <div>
      <div className="h-screen bg-cover bg-center sm:"
        style={{ backgroundImage: `url(${bgfon})` }}>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
