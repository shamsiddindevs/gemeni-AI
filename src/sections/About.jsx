export default function About() {
  return (
    <section id="about" className="py-24 bg-[#070b14] relative overflow-hidden">
      {/* Orqa fondagi dumaloq chiziqlar va globus grafikasi */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full flex items-center justify-center">
        <div className="w-[400px] h-[400px] border border-white/10 rounded-full"></div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        {/* Chapdagi vizual qism uchun bo'sh joy qoldiramiz */}
        <div className="w-full md:w-1/3"></div>
        
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-6 uppercase tracking-widest">
            About <span className="text-white font-medium">The Agency</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed">
            At Uzcosmos, we are working on developing the national space industry and introducing modern <span className="text-white font-medium">technologies</span>, building <span className="text-white font-medium">international partnerships</span>, training specialists, and using satellite solutions for the sustainable development of the country.
          </p>
        </div>
      </div>
    </section>
  );
}