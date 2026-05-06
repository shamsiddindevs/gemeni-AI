export default function Events() {
  return (
    <section className="py-20 bg-[#070b14]">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl text-gray-400 font-light mb-16 uppercase tracking-widest">
          Key <span className="text-white font-medium">Events</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center mb-16 border-b border-white/10 pb-16">
          <div className="w-full md:w-1/2">
            <img src="/images/event.jpg" alt="UN ESCAP Project" className="w-full h-auto object-cover opacity-90" />
          </div>
          <div className="w-full md:w-1/2 text-white">
            <p className="text-xs text-gray-400 mb-2">29.04.2024</p>
            <h3 className="text-2xl font-medium mb-4 uppercase">UN ESCAP project: monitoring of salinized lands</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
              Satellite imaging, GIS and AI to detect salinity and improve agriculture in the SC fields in Jizzakh.
            </p>
          </div>
        </div>

        {/* Vaqt chizig'i (Timeline) */}
        <div className="relative flex justify-between items-center px-4">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10 -z-10"></div>
          {['2021', '2022', '2023', '2024', '2025'].map((year, index) => (
            <div key={year} className="flex flex-col items-center gap-4 bg-[#070b14] px-4">
              <div className={`w-2 h-2 rounded-full ${year === '2025' ? 'bg-white' : 'bg-gray-600'}`}></div>
              <span className={`text-sm ${year === '2025' ? 'text-white font-bold' : 'text-gray-500'}`}>{year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}