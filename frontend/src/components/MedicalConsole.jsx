function MedicalConsole() {
    return (
      <section className="relative">
        <div className="absolute -right-5 -top-5 rounded-3xl bg-white px-5 py-4 shadow-xl">
          <p className="text-sm font-semibold text-slate-700">Risk Alert</p>
          <p className="mt-1 text-xs text-red-500">
            胸痛 / 呼吸困难 / 意识异常
          </p>
        </div>
  
        <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-2xl shadow-blue-900/10 backdrop-blur">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-6 text-white">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-blue-100">Medical AI Console</p>
                <h2 className="mt-2 text-2xl font-bold">智能问诊工作台</h2>
              </div>
  
              <div className="rounded-2xl bg-white/20 p-3 text-3xl">💙</div>
            </div>
  
            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
                <p className="text-sm text-blue-100">症状输入</p>
                <p className="mt-2 text-lg font-semibold">
                  咳嗽 3 天，伴随低热和喉咙痛
                </p>
              </div>
  
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
                  <p className="text-sm text-blue-100">风险等级</p>
                  <p className="mt-2 text-xl font-bold">Medium</p>
                </div>
  
                <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
                  <p className="text-sm text-blue-100">推荐科室</p>
                  <p className="mt-2 text-xl font-bold">呼吸内科</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-5 grid grid-cols-4 gap-3 text-center text-xs font-medium text-slate-600">
            <div className="rounded-2xl bg-blue-50 p-3">症状收集</div>
            <div className="rounded-2xl bg-cyan-50 p-3">风险判断</div>
            <div className="rounded-2xl bg-emerald-50 p-3">科室推荐</div>
            <div className="rounded-2xl bg-amber-50 p-3">就医建议</div>
          </div>
        </div>
      </section>
    )
  }
  
  export default MedicalConsole