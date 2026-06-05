import { useState } from 'react'

function analyzeSymptom(text) {
  const input = text.trim()

  if (!input) {
    return {
      riskLevel: '待判断',
      riskColor: 'text-slate-300',
      department: '待推荐',
      reason: '请先输入症状描述。',
      advice: '输入症状后，系统会根据规则进行非诊断性质的风险判断。',
    }
  }

  const emergencyKeywords = [
    '胸痛',
    '呼吸困难',
    '喘不上气',
    '意识模糊',
    '昏迷',
    '大量出血',
    '抽搐',
    '口眼歪斜',
    '肢体无力',
    '剧烈头痛',
  ]

  const highRiskKeywords = [
    '高烧',
    '高热',
    '持续高热',
    '39',
    '40',
    '呕血',
    '黑便',
    '剧烈腹痛',
    '严重过敏',
  ]

  const mediumRiskKeywords = [
    '发烧',
    '发热',
    '咳嗽',
    '头痛',
    '腹痛',
    '腹泻',
    '呕吐',
    '皮疹',
    '心悸',
  ]

  const hasEmergency = emergencyKeywords.some((word) => input.includes(word))
  const hasHighRisk = highRiskKeywords.some((word) => input.includes(word))
  const hasMediumRisk = mediumRiskKeywords.some((word) => input.includes(word))

  let riskLevel = 'Low'
  let riskColor = 'text-emerald-300'
  let reason = '暂未识别到明显高风险关键词。'
  let advice = '建议继续观察症状变化。如症状加重、持续不缓解，或出现新的明显不适，应及时线下就医。'

  if (hasEmergency) {
    riskLevel = 'Emergency'
    riskColor = 'text-red-300'
    reason = '识别到可能需要紧急处理的高风险症状。'
    advice = '建议立即前往急诊，或根据当地情况拨打急救电话。'
  } else if (hasHighRisk) {
    riskLevel = 'High'
    riskColor = 'text-orange-300'
    reason = '识别到较高风险症状，需要尽快线下就医。'
    advice = '建议尽快前往医院就诊，由医生结合体格检查和必要检查进一步判断。'
  } else if (hasMediumRisk) {
    riskLevel = 'Medium'
    riskColor = 'text-amber-300'
    reason = '识别到常见不适症状，建议结合持续时间、严重程度和伴随症状进一步判断。'
    advice = '建议关注症状变化。如持续加重、反复发作或伴随其他明显不适，应及时就医。'
  }

  let department = '全科 / 普通内科'

  if (
    input.includes('咳嗽') ||
    input.includes('发烧') ||
    input.includes('发热') ||
    input.includes('喉咙') ||
    input.includes('呼吸')
  ) {
    department = '呼吸内科'
  }

  if (
    input.includes('腹痛') ||
    input.includes('腹泻') ||
    input.includes('呕吐') ||
    input.includes('胃痛')
  ) {
    department = '消化内科'
  }

  if (input.includes('胸痛') || input.includes('心悸')) {
    department = hasEmergency ? '急诊科 / 心内科' : '心内科'
  }

  if (
    input.includes('头痛') ||
    input.includes('头晕') ||
    input.includes('抽搐') ||
    input.includes('意识') ||
    input.includes('肢体无力')
  ) {
    department = hasEmergency ? '急诊科 / 神经内科' : '神经内科'
  }

  if (
    input.includes('皮疹') ||
    input.includes('过敏') ||
    input.includes('瘙痒')
  ) {
    department = '皮肤科'
  }

  if (
    input.includes('鼻塞') ||
    input.includes('流鼻涕') ||
    input.includes('耳痛') ||
    input.includes('咽痛')
  ) {
    department = '耳鼻喉科'
  }

  if (hasEmergency) {
    department = department.includes('急诊科') ? department : `急诊科 / ${department}`
  }

  return {
    riskLevel,
    riskColor,
    department,
    reason,
    advice,
  }
}

function App() {
  const [symptom, setSymptom] = useState('')
  const [result, setResult] = useState(analyzeSymptom(''))

  return (
    <div className="min-h-screen bg-[#eef6ff] text-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-200/60 blur-3xl" />
        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-blue-300/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-6">
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

        <main className="grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
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
        </main>

        <section id="workflow" className="py-10">
          <div className="mb-8 text-center">
            <p className="font-semibold text-blue-600">Workflow</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              核心问诊流程
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              ['01', '症状收集', '收集主要症状、持续时间、严重程度、伴随症状。'],
              ['02', '风险判断', '识别胸痛、呼吸困难、意识异常等高风险信号。'],
              ['03', '科室推荐', '根据症状方向推荐可能适合的就诊科室。'],
              ['04', '就医建议', '输出安全、保守、非诊断性质的行动建议。'],
            ].map((item) => (
              <div
                key={item[0]}
                className="rounded-3xl border border-white/80 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-black text-blue-600">{item[0]}</p>
                <h3 className="mt-4 text-xl font-bold">{item[1]}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item[2]}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="demo" className="grid gap-6 py-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-xl shadow-blue-900/5 backdrop-blur">
            <p className="font-semibold text-blue-600">Consultation Demo</p>
            <h2 className="mt-2 text-3xl font-black">输入你的症状</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              这里暂时是前端规则版 Demo。系统会根据关键词进行非诊断性质的风险判断和科室推荐。
            </p>

            <textarea
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
              className="mt-6 h-40 w-full resize-none rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="例如：我咳嗽三天了，还有点发烧，喉咙痛。"
            />

            <button
              onClick={() => setResult(analyzeSymptom(symptom))}
              className="mt-5 w-full rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700"
            >
              开始风险判断
            </button>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-slate-950 p-7 text-white shadow-xl shadow-slate-900/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-cyan-300">Result Preview</p>
                <h2 className="mt-2 text-3xl font-black">问诊结果预览</h2>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-2 text-sm text-cyan-200">
                非诊断
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm text-slate-400">症状总结</p>
                <p className="mt-2 text-slate-100">
                  {symptom ? symptom : '等待用户输入症状描述。'}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-sm text-slate-400">风险等级</p>
                  <p className={`mt-2 text-2xl font-black ${result.riskColor}`}>
                    {result.riskLevel}
                  </p>
                </div>

                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-sm text-slate-400">推荐科室</p>
                  <p className="mt-2 text-2xl font-black text-cyan-300">
                    {result.department}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm text-slate-400">判断原因</p>
                <p className="mt-2 text-slate-100">{result.reason}</p>
              </div>

              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm text-slate-400">就医建议</p>
                <p className="mt-2 text-slate-100">{result.advice}</p>
              </div>

              <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-5">
                <p className="font-semibold text-red-200">安全提醒</p>
                <p className="mt-2 text-sm leading-6 text-red-100/90">
                  本系统不提供医学诊断，不能替代医生意见。如出现胸痛、呼吸困难、意识异常、大量出血等紧急情况，请立即前往急诊或拨打当地急救电话。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="risk" className="py-12">
          <div className="rounded-[2rem] border border-white/80 bg-white/85 p-8 shadow-xl shadow-blue-900/5 backdrop-blur">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-semibold text-red-500">Risk Control</p>
                <h2 className="mt-2 text-3xl font-black">医疗 AI 安全边界</h2>
                <p className="mt-4 leading-7 text-slate-500">
                  这个项目重点不是“猜疾病”，而是展示医疗场景中 AI Agent
                  如何控制风险、保持克制，并在高风险情况下优先建议线下就医。
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  '不做疾病诊断',
                  '不替代医生判断',
                  '不推荐处方药剂量',
                  '高风险症状优先提醒急诊',
                  '输出必须包含安全声明',
                  '不确定情况保守处理',
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      ✓
                    </span>
                    <span className="font-medium text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-slate-500">
          AI 医疗问诊 Agent Demo · 非诊断 · For Product Portfolio
        </footer>
      </div>
    </div>
  )
}

export default App