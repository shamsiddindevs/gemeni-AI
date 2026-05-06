export default function Footer() {
  return (
    <footer className="bg-[#070b14] pt-20 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 mb-16 flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* 3D Globus uchun vizual joy */}
        <div className="w-[300px] h-[300px] bg-[#0a1224] flex items-center justify-center relative border border-white/5 rounded-lg">
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white"></div>
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white"></div>
          
          <img src="/images/wireframe-globe.png" alt="Globe" className="w-4/5 h-4/5 object-contain opacity-80" />
        </div>

        {/* Kontakt ma'lumotlari */}
        <div className="text-white">
          <h2 className="text-2xl font-light uppercase tracking-widest mb-10">Contacts</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Email</p>
              <p className="text-lg font-light tracking-wide">INFO@UZSPACE.UZ</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Phone</p>
              <p className="text-lg font-light tracking-wide">+998 55 502-50-22</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Address</p>
              <p className="text-lg font-light tracking-wide uppercase">4 Muminov Street, Tashkent</p>
            </div>
          </div>
        </div>
      </div>

      {/* Eng pastki qism */}
      <div className="border-t border-white/10 py-6 px-6 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500">
        <p>© 2024 UZCOSMOS. All rights reserved.</p>
        
        <div className="flex gap-4 mt-4 md:mt-0 items-center">
          <a href="#" className="hover:text-white">TWITTER</a>
          <a href="#" className="hover:text-white">TELEGRAM</a>
          <a href="#" className="hover:text-white">YOUTUBE</a>
          <div className="flex gap-1 ml-4 items-end opacity-50">
             {/* Uznet stat counter mockup */}
             <div className="w-1.5 h-2 bg-green-500"></div>
             <div className="w-1.5 h-3 bg-green-500"></div>
             <div className="w-1.5 h-4 bg-orange-500"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}