# 开发日志

## 2026-06-05

### 今日目标

从 0 到 1 搭建一个 AI 医疗问诊 Agent Demo，并在 GitHub 上记录完整实现过程。

---

### 已完成内容

1. 创建项目文件夹

项目名称：

```text
ai-medical-consult-agent
````

2. 初始化 Git 仓库

使用命令：

```bash
git init
```

3. 创建基础目录结构

当前项目结构：

```text
ai-medical-consult-agent/
├── app/
├── docs/
│   ├── devlog.md
│   └── product-design.md
├── README.md
└── .gitignore
```

4. 编写 `.gitignore`

用于忽略 Python 缓存、虚拟环境、环境变量文件和编辑器配置。

5. 编写 `README.md`

明确项目定位：

> AI 医疗问诊 Agent（非诊断）

核心流程：

```text
症状收集 → 风险判断 → 科室推荐 → 就医建议
```

6. 编写产品设计文档

完成 `docs/product-design.md`，明确了：

* 项目背景
* 产品定位
* 目标用户
* 非目标场景
* MVP 功能范围
* 用户使用流程
* Risk Control 设计
* 示例输出格式
* 后续扩展方向

---

### 当前项目定位

本项目不是医疗诊断系统，而是一个就医前辅助问诊 Agent。

它的价值在于：

1. 帮助用户整理症状
2. 帮助用户识别明显风险
3. 帮助用户选择可能合适的科室
4. 给出安全、保守、非诊断性质的就医建议
5. 展示医疗 AI 场景下的 Risk Control 设计

---

### Risk Control 原则

医疗类 AI 项目必须优先保证安全边界。

当前确定的安全原则包括：

1. 不做诊断
2. 不替代医生
3. 不推荐处方药
4. 不给出药物剂量
5. 遇到高风险症状时建议及时就医
6. 遇到急症信号时建议急诊或拨打当地急救电话
7. 对不确定情况保持保守

---

### 下一步计划

下一步开始搭建 Python 项目结构：

1. 创建主程序文件
2. 创建配置文件
3. 创建依赖文件
4. 准备 Streamlit 页面
5. 提交第一次 Git commit

---

## 2026-06-05：前端技术路线调整与规则版 Risk Control

### 本阶段调整

原计划使用 Streamlit 快速搭建 Demo 页面，但在实际预览后发现：

1. 页面美观度不足
2. 产品展示感较弱
3. 不适合用于作品集或项目展示

因此项目技术路线调整为：

```text
React + Vite + Tailwind CSS 前端页面
后续再接入 Python / FastAPI / OpenAI API 后端