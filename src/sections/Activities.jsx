export default function Activities() {
  const activities = [
    { num: "01.", title: "State Policy and Strategy", desc: "We form a unified state policy and define strategic directions in the field of space research and technology.", size: "col-span-12 md:col-span-6", img: "/images/activity-1.jpg" },
    { num: "02.", title: "", desc: "", size: "col-span-12 md:col-span-2", img: "/images/activity-2.jpg" },
    { num: "03.", title: "", desc: "", size: "col-span-12 md:col-span-2", img: "/images/activity-3.jpg" },
    { num: "04.", title: "", desc: "", size: "col-span-12 md:col-span-2", img: "/images/activity-4.jpg" },
  ];

  return (
    <section className="py-20 bg-[#070b14]">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl text-gray-400 font-light mb-12 uppercase tracking-widest">
          Agency <span className="text-white font-medium">Activities</span>
        </h2>

        <div className="grid grid-cols-12 gap-2 h-auto md:h-[400px]">
          {activities.map((item, index) => (
            <div key={index} className={`${item.size} relative group overflow-hidden bg-slate-800 min-h-[300px] md:min-h-full`}>
              <img src={item.img} alt={`Activity ${item.num}`} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] to-transparent opacity-80"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-4xl font-light mb-2">{item.num}</h3>
                {item.title && <h4 className="text-lg font-medium mb-2">{item.title}</h4>}
                {item.desc && <p className="text-xs text-gray-300 line-clamp-2">{item.desc}</p>}
              </div>

              {/* O'ngga ko'rsatkich tugma (faqat 4-kartada ko'rinib turibdi dizaynda) */}
              {index === 3 && (
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-3 hover:bg-gray-200 transition">
                  →
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}