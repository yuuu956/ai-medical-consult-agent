import streamlit as st


st.set_page_config(
    page_title="AI 医疗问诊 Agent（非诊断）",
    page_icon="🩺",
    layout="centered"
)


st.title("🩺 AI 医疗问诊 Agent（非诊断）")

st.warning(
    "安全提醒：本系统不是医生，不提供医学诊断，不能替代专业医生意见。"
    "如出现胸痛、呼吸困难、意识异常、大量出血等紧急情况，请立即前往急诊或拨打当地急救电话。"
)

st.markdown("""
## 项目说明

这是一个就医前辅助问诊 Demo。

它可以帮助用户：

1. 收集症状信息
2. 初步识别风险信号
3. 推荐可能适合的就诊科室
4. 给出非诊断性质的就医建议
""")

st.divider()

st.subheader("请输入你的主要症状")

user_input = st.text_area(
    label="症状描述",
    placeholder="例如：我咳嗽三天了，还有点发烧，喉咙痛。",
    height=150
)

if st.button("开始分析"):
    if not user_input.strip():
        st.error("请先输入你的症状描述。")
    else:
        st.success("已收到你的症状描述。下一步会接入症状结构化和风险判断。")

        st.markdown("### 你输入的内容")
        st.write(user_input)

st.divider()

st.caption("本项目仅用于 AI Agent 产品 Demo，不构成任何医学建议或诊断。")