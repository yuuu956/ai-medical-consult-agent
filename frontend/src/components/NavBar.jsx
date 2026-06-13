function NavBar() {
    return (
      <nav className="flex items-center justify-between rounded-3xl border border-white/70 bg-white/70 px-6 py-4 shadow-sm backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-500/30">
            🩺
          </div>
  
          <div>
            <p className="text-lg font-bold">MediAgent</p>
            <p className="text-xs text-slate-500">AI 医疗问诊 Agent</p>
          </div>
        </div>
  
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#workflow" className="hover:text-blue-600">
            问诊流程
          </a>
          <a href="#risk" className="hover:text-blue-600">
            Risk Control
          </a>
          <a href="#demo" className="hover:text-blue-600">
            Demo
          </a>
        </div>
  
        <button className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20">
          非诊断 Demo
        </button>
      </nav>
    )
  }
  
  export default NavBar