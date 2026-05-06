export default function Partners() {
  // Logotiplar ro'yxati
  const partners = ['ri', 'GEOMATICS', 'TUA', 'Synspective', 'SPACEX', 'SATELLOGIC', 'SFA'];

  return (
    <section className="py-20 bg-[#070b14]">
      <div className="max-w-[1400px] mx-auto px-6 border-y border-white/10 py-10">
        <h2 className="text-center text-2xl md:text-3xl text-gray-400 font-light mb-12 uppercase tracking-widest">
          Our <span className="text-white font-medium">Partners</span>
        </h2>

        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-8 opacity-60 grayscale">
          {partners.map((partner, index) => (
            <div key={index} className="flex-1 flex justify-center border-r border-white/10 last:border-0 p-4">
               {/* Haqiqiy loyihada bu yerda img tag bo'ladi */}
               <span className="text-white font-bold uppercase text-xs tracking-widest">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}