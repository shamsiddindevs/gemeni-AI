import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-[#030712] font-sans overflow-hidden">
      
      {/* 1. ORQA FON RASMI VA GRADIENTLAR */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://uzspace.uz/assets/home-BOwlTi-i.webp"
          alt="Space Observatory"
          className="w-full h-full object-cover object-center"
        />
        {/* Yozuvlar yaxshi o'qilishi uchun qoraytiruvchi gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050b14]/90"></div>
      </div>

      {/* 2. NAVBAR (Yuqori menyu) */}
      <nav className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-[1600px] mx-auto px-6 py-8 flex justify-between items-center text-[10px] md:text-xs text-white font-medium uppercase tracking-[0.15em]">
          
          {/* Chap tomon menyulari */}
          <div className="hidden xl:flex gap-8 items-center">
            <a href="#about" className="hover:text-gray-400 transition-colors">About Agency</a>
            <a href="#activity" className="hover:text-gray-400 transition-colors">Activity</a>
            <a href="#events" className="hover:text-gray-400 transition-colors">Events</a>
            <a href="#partners" className="hover:text-gray-400 transition-colors">Partners</a>
            <a href="#education" className="hover:text-gray-400 transition-colors">Education</a>
          </div>

          {/* Markaziy Logotip (Aylana dizayni bilan) */}
          <div className="flex justify-center items-center relative cursor-pointer group">
            <span className="tracking-[0.3em] text-sm md:text-base font-normal z-10">
              UZCOSMOS
            </span>
            {/* Logotip orqasidagi dekorativ aylana */}
            <div className="absolute w-[42px] h-[42px] border border-white/30 rounded-full left-[18px] group-hover:scale-110 transition-transform duration-500"></div>
          </div>

          {/* O'ng tomon menyulari */}
          <div className="hidden xl:flex gap-8 items-center">
            <a href="#smc" className="hover:text-gray-400 transition-colors">SMC</a>
            <a href="#gov" className="hover:text-gray-400 transition-colors">GOV.UZ</a>
            <a href="#old" className="hover:text-gray-400 transition-colors">Old Version</a>
            <button className="flex items-center gap-2 hover:text-gray-400 transition-colors">
              {/* Globus ikonka */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              EN
            </button>
          </div>

          {/* Mobil menyu tugmasi */}
          <button className="xl:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18M3 6h18M3 18h18" /></svg>
          </button>
        </div>
      </nav>

      {/* 3. ASOSIY QISM (Matnlar va tugmalar) */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex flex-col justify-end pb-12 md:pb-20">
        
        {/* Sarlavha qismi */}
        <div className="flex items-start mb-12 md:mb-20 relative">
          {/* Sarlavha yonidagi vertikal nozik chiziq */}
          <div className="w-[1px] h-[120px] bg-white/40 mr-6 mt-4 hidden md:block"></div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium text-white uppercase leading-[1.05] tracking-tight">
            Developing<br />
            The Space Industry<br />
            In Uzbekistan
          </h1>
        </div>

        {/* Pastki yozuvlar va Kontakt tugmasi */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          
          {/* Chap pastki qismdagi iqtibos (Quote) */}
          <div className="relative flex items-center pl-2 lg:mb-4">
            {/* Orqa fondagi katta qo'shtirnoq belgisi */}
            <span className="absolute -left-6 -top-10 text-8xl font-serif text-white/5 select-none pointer-events-none">
              "
            </span>
            <p className="text-[#5c7da6] uppercase tracking-widest text-xs font-medium italic relative z-10">
              Through discovery to the stars
            </p>
          </div>

          {/* O'ng pastki qism (Ma'lumot va Tugma) */}
          <div className="max-w-[480px] w-full flex flex-col lg:items-start text-left lg:text-left">
            <p className="text-sm md:text-base text-gray-200 font-light leading-relaxed mb-6">
              The Space Research and Technology Agency under the Ministry of Digital Technologies of the Republic of Uzbekistan
            </p>
            <button className="w-full bg-white text-black py-4 px-8 text-xs uppercase tracking-[0.2em] font-bold hover:bg-gray-200 transition-colors duration-300">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}