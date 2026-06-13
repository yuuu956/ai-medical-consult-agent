export function analyzeSymptom(text) {
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
      department = department.includes('急诊科')
        ? department
        : `急诊科 / ${department}`
    }
  
    return {
      riskLevel,
      riskColor,
      department,
      reason,
      advice,
    }
  }