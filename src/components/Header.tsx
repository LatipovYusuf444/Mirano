const Header = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* 1. Video foni */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover shadow-inner"
        >
          {/* Video manzilini o'zgartiring yoki test uchun quyidagi linkni ishlating */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-weaving-process-of-a-fabric-on-a-loom-14734-large.mp4"
            type="video/mp4"
          />
          Sizning brauzeringiz videoni qo'llab-quvvatlamaydi.
        </video>

        {/* 2. Overlay (Video ustidagi qatlam - matn ko'rinishi uchun) */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      {/* 3. Kontent qismi */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium tracking-widest uppercase bg-indigo-600 rounded-full animate-bounce">
            Yangi Kolleksiya
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Sifatli <span className="text-indigo-400">Textil</span> San'ati
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-200 leading-relaxed">
            Bizning matolarimiz zamonaviy texnologiyalar va an'anaviy to'quv uslublari
            uyg'unligida yaratiladi. Har bir tolada sifat va nafosat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              Katalogga o'tish
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              Biz haqimizda
            </button>
          </div>
        </div>
      </div>

      {/* 4. Pastga yo'naltiruvchi element (Scroll indicator) */}
     
    </section>
  )
}

export default Header
