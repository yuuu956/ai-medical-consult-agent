function HeroSection() {
    return (
      <section>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          安全、克制、非诊断型医疗 AI
        </div>
  
        <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
          AI 医疗问诊 Agent
          <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            就医前辅助助手
          </span>
        </h1>
  
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          通过多轮问答完成症状收集、风险判断、科室推荐和就医建议。
          系统不做诊断，不替代医生，而是帮助用户更安全、更清晰地准备就医。
        </p>
  
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#demo"
            className="rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-500/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            开始体验
          </a>
  
          <a
            href="#risk"
            className="rounded-2xl border border-slate-200 bg-white/80 px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
          >
            查看 Risk Control
          </a>
        </div>
  
        <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
          <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
            <p className="text-3xl font-black text-blue-600">4</p>
            <p className="mt-1 text-sm text-slate-500">核心流程</p>
          </div>
  
          <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
            <p className="text-3xl font-black text-emerald-600">0</p>
            <p className="mt-1 text-sm text-slate-500">诊断输出</p>
          </div>
  
          <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
            <p className="text-3xl font-black text-cyan-600">Safe</p>
            <p className="mt-1 text-sm text-slate-500">风险控制</p>
          </div>
        </div>
      </section>
    )
  }
  
  export default HeroSection