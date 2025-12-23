import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CatalogPage from "./components/Catalog"; // Fayl nomi Catalog.tsx bo'lsa
import bgfon from "@/assets/images/bg-textile-100.webp";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen w-full relative"
        style={{
          backgroundImage: `url(${bgfon})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <Navbar />
        <main className="relative z-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<CatalogPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
