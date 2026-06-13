const workflowSteps = [
    {
      id: '01',
      title: '症状收集',
      description: '收集主要症状、持续时间、严重程度、伴随症状。',
    },
    {
      id: '02',
      title: '风险判断',
      description: '识别胸痛、呼吸困难、意识异常等高风险信号。',
    },
    {
      id: '03',
      title: '科室推荐',
      description: '根据症状方向推荐可能适合的就诊科室。',
    },
    {
      id: '04',
      title: '就医建议',
      description: '输出安全、保守、非诊断性质的行动建议。',
    },
  ]
  
  function WorkflowSection() {
    return (
      <section id="workflow" className="py-10">
        <div className="mb-8 text-center">
          <p className="font-semibold text-blue-600">Workflow</p>
          <h2 className="mt-2 text-3xl font-black text-slate-950">
            核心问诊流程
          </h2>
        </div>
  
        <div className="grid gap-5 md:grid-cols-4">
          {workflowSteps.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-white/80 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-black text-blue-600">{item.id}</p>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default WorkflowSection