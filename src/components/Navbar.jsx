export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 py-5 flex justify-between items-center text-[10px] sm:text-xs text-white uppercase tracking-widest font-medium">
        
        {/* Chap tomon menyu */}
        <div className="hidden md:flex gap-6 items-center opacity-80">
          <a href="#about" className="hover:text-blue-400 transition">About Agency</a>
          <a href="#agency" className="hover:text-blue-400 transition">Agency</a>
          <a href="#events" className="hover:text-blue-400 transition">Events</a>
          <a href="#partners" className="hover:text-blue-400 transition">Partners</a>
          <a href="#education" className="hover:text-blue-400 transition">Education</a>
        </div>

        {/* Markaziy Logo */}
         <img width={120} src="https://uzspace.uz/assets/logo-CRIVdkzu.svg" alt="" />

        {/* O'ng tomon menyu */}
        <div className="hidden md:flex gap-6 items-center opacity-80">
          <a href="#faq" className="hover:text-blue-400 transition">FAQ</a>
          <a href="#gov" className="hover:text-blue-400 transition">GOV.UZ</a>
          <a href="#old" className="hover:text-blue-400 transition">Old Version</a>
          <button className="flex items-center gap-1 hover:text-blue-400 transition">
            <span>🌐 EN</span>
          </button>
        </div>

      </div>
    </nav>
  );
}