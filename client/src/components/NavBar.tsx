import React from 'react'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
     <nav className="z-50 flex items-center justify-between w-full py-4 px-4 md:px-16 lg:px-24 xl:px-32 backdrop-blur border-b text-white border-slate-800">
        <a href="https://prebuiltui.com">
             <h1 className='size-6 text-white'><img src="data:image/jpeg;base64,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" alt="" />entron</h1>
          </a>

          <div className="hidden text-gray-500 md:flex items-center gap-8 transition duration-500">
            <a href="#home" className="hover:text-slate-300 transition">Home</a>
            <a href="#myprojects" className="hover:text-slate-300 transition">MyProjects</a>
            <a href="#community" className="hover:text-slate-300 transition">Community</a>
            <a href="#pricing" className="hover:text-slate-300 transition">Pricing</a>
          </div>

          <div className="hidden md:block space-x-3">
            <button className="active:scale-95 hover:bg-indigo-600/20 transition px-4 py-2 border border-indigo-600 rounded-md">
              Sign in
            </button>
            <button className="px-6 py-2 bg-indigo-600 active:scale-95 hover:bg-indigo-700 transition rounded-md">
              Get started
            </button>
          </div>

          <button id="open-menu" className="md:hidden active:scale-90 transition" onClick={() => setMenuOpen(true)} >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
          </button>
        </nav>
          {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-[100] bg-black/60 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300">
            <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
            <a href="#resources" onClick={() => setMenuOpen(false)}>Resources</a>
            <a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            
            <button className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex" onClick={() => setMenuOpen(false)} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        )}
        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png" className="absolute inset-0 -z-10 size-full opacity" alt="" />
 
    </>
  )
}

export default NavBar
