const fs = require('fs');
const path = require('path');

const posts = [
  {
    slug: "ai-agent-2026-trends",
    title: "AI Agent 2026：从工具到同事的进化",
    date: "2026-03-25",
    tags: ["AI Agent", "趋势", "Claude"],
    readTime: "7 min",
    content: `随着Claude 4和GPT-5的发布，AI Agent正在从简单的任务执行者进化为真正的智能同事。

## 关键能力突破

- **长期上下文理解**：支持数百万token的上下文窗口
- **多步规划与执行**：能制定多步骤计划并持续执行  
- **工具使用自动化**：无缝集成各种API和开发工具
- **团队协作**：多个Agent可以协作完成复杂项目

## 对软件工程的影响

在Amazon，我亲眼见证了这一转变。代码审查Agent能发现人类遗漏的问题，测试Agent能自动生成全面的测试用例。

## 未来展望

到2027年，每个软件工程师都会有多个AI同事，它们不仅能执行指令，还能主动提出建议。`
  },
  {
    slug: "gemini-2-pro-analysis", 
    title: "Gemini 2 Pro 深度评测：Google的反击",
    date: "2026-03-18",
    tags: ["Gemini", "评测", "多模态"],
    readTime: "8 min",
    content: `Google Gemini 2 Pro正式发布，在多模态理解和长上下文方面表现突出。

## 姗姗来迟的反击

在OpenAI和Anthropic连续发布重磅产品的2025年，Google似乎一直处于追赶状态。但Gemini 2 Pro的发布证明，Google依然是AI领域不可忽视的力量。

## 核心能力提升

- **原生多模态**：从训练阶段就融合文本、图像、音频和视频理解
- **超长上下文**：支持200万token的上下文窗口
- **推理能力**：在数学和代码任务上接近o3水平
- **实时信息**：深度集成Google搜索

## 实际测试对比

- 代码生成：与GPT-5相当
- 文档理解：200页技术文档摘要准确率超95%
- 多语言：中文理解能力优于竞争对手
- 成本：API价格比GPT-5低约30%`
  },
  {
    slug: "llm-reasoning-breakthrough",
    title: "大模型推理能力的突破与局限", 
    date: "2026-03-10",
    tags: ["推理", "o3", "OpenAI"],
    readTime: "6 min",
    content: `OpenAI的o3模型在数学推理上达到新高度，但常识推理仍有不足。

## o3的突破

在AIME数学竞赛中，o3达到了惊人的96.7%准确率。这标志着大模型在形式化推理上的重大进步。

## 局限依然存在

- **常识推理**：在需要日常知识推理的任务上表现不佳
- **因果理解**：难以理解复杂的因果关系  
- **物理直觉**：缺乏对物理世界的基本理解

## 未来方向

我们需要新的训练方法，让模型不仅学会模式匹配，还能真正理解问题的本质。`
  },
  {
    slug: "ai-coding-2026",
    title: "AI编程助手2026：从Copilot到架构师",
    date: "2026-03-05", 
    tags: ["AI编程", "Cursor", "开发工具"],
    readTime: "9 min",
    content: `Cursor和Windsurf等AI编程工具正在改变软件开发流程。

## 工具演进

从GitHub Copilot的代码补全，到Cursor的Agent模式，AI编程助手的能力在飞速提升。

## 实际应用

- **代码生成**：根据自然语言描述生成完整功能
- **重构建议**：识别代码坏味道并提供重构方案
- **Bug修复**：自动定位和修复代码中的问题
- **文档生成**：自动为代码生成注释和文档

## 最佳实践

1. 明确需求描述
2. 分步骤验证生成结果
3. 保持代码审查习惯
4. 持续学习工具新功能`
  },
  {
    slug: "deepseek-r2-review",
    title: "DeepSeek R2 技术解读：国产大模型的崛起",
    date: "2026-02-28",
    tags: ["DeepSeek", "MoE", "国产模型"],
    readTime: "10 min", 
    content: `DeepSeek R2以极高的性价比引发关注。

## 惊艳的性价比

DeepSeek R2在多项基准测试中接近GPT-4水平，但推理成本仅为1/10。

## 技术架构解析

- **MoE架构**：671B总参数、37B激活参数
- **训练效率**：创新的负载均衡策略
- **多Token预测**：每个位置预测多个token
- **FP8训练**：首次在大规模模型上成功应用

## 实际性能测试

- 代码生成：接近Claude 3.5 Sonnet
- 中文理解：超越GPT-4
- 数学推理：AIME准确率85%
- 推理速度：比同等模型快3-5倍`
  },
  {
    slug: "multimodal-llm-2026",
    title: "多模态大模型：视觉与语言的融合",
    date: "2026-02-20",
    tags: ["多模态", "GPT-5o", "应用"],
    readTime: "7 min",
    content: `GPT-5o和Gemini Ultra在图像理解上的突破让多模态应用成为可能。

## 多模态的进化

从简单的图像描述到复杂的视觉推理，多模态LLM正在快速进化。

## 应用场景

- **电商**：自动商品描述、视觉搜索
- **内容创作**：图文混排、视频脚本生成
- **教育**：图像题目解答、可视化教学
- **医疗**：医学影像分析辅助

## 技术挑战

- 模态对齐的精度
- 训练数据的多样性
- 推理成本的控制`
  },
  {
    slug: "llm-safety-alignment",
    title: "大模型安全对齐：RLHF之后的路",
    date: "2026-02-14",
    tags: ["安全", "对齐", "RLHF"],
    readTime: "8 min",
    content: `随着模型能力增强，安全对齐变得愈发重要。

## RLHF的局限

人类反馈强化学习虽然有效，但存在反馈成本高、标注者偏见等问题。

## 新方法探索

- **Constitutional AI**：让模型遵循预设原则
- **RLAIF**：用AI反馈替代人类反馈
- **DPO**：直接偏好优化，简化训练流程
- **自我对弈**：模型通过与自己对弈提升安全性

## 实际部署经验

在Amazon，我们采用多层防护策略：输入过滤、模型层安全对齐、输出审查相结合。`
  },
  {
    slug: "edge-llm-deployment",
    title: "边缘端大模型部署实践",
    date: "2026-02-08",
    tags: ["边缘计算", "移动端", "部署"],
    readTime: "9 min",
    content: `随着Apple Intelligence和Android Gemini的推进，端侧LLM成为热点。

## 端侧AI的优势

- **隐私保护**：数据不出设备
- **低延迟**：无需网络请求
- **离线可用**：不依赖网络连接
- **成本控制**：减少云端API调用

## 技术挑战

- **模型压缩**：量化、剪枝、蒸馏
- **内存优化**：模型分片、动态加载
- **功耗控制**：平衡性能与电池寿命
- **硬件适配**：不同芯片的优化

## 实践案例

我们在移动端部署了7B参数的模型，通过INT4量化和LoRA适配，在保持90%性能的同时，推理延迟控制在500ms以内。`
  },
  {
    slug: "ai-regulation-2026",
    title: "AI监管2026：全球政策走向分析",
    date: "2026-02-01",
    tags: ["政策", "监管", "AI法案"],
    readTime: "6 min",
    content: `欧盟AI法案全面实施，美国AI行政令持续更新。

## 主要监管框架

- **欧盟AI法案**：风险分级管理，高风险AI需合规认证
- **美国AI行政令**：侧重国家安全和大模型监管
- **中国算法推荐规定**：强调透明度和用户权益
- **英国AI白皮书**：创新友好的监管方式

## 对企业的影响

- 合规成本增加
- 模型文档化要求
- 审计和透明度义务
- 跨境数据流动限制

## 应对策略

建立AI治理委员会，制定内部AI伦理准则，投资可解释AI技术。`
  },
  {
    slug: "rag-evolution-2026",
    title: "RAG技术进化：从向量检索到知识图谱",
    date: "2026-01-25",
    tags: ["RAG", "知识图谱", "检索"],
    readTime: "8 min",
    content: `传统RAG面临上下文长度和检索精度的挑战。

## RAG的演进

- **基础RAG**：简单向量检索+提示增强
- **Advanced RAG**：查询重写、重排序、混合检索
- **GraphRAG**：结合知识图谱的检索
- **Self-RAG**：模型自主决定何时检索

## GraphRAG的优势

- 更好的关系推理
- 可解释性更强
- 支持复杂查询
- 知识可更新

## 实践建议

根据应用场景选择合适的RAG架构，简单场景用向量检索，复杂知识推理用GraphRAG。`
  },
  {
    slug: "llm-economics-2026",
    title: "大模型经济学：Token价格战之后",
    date: "2026-01-18",
    tags: ["商业模式", "成本", "API"],
    readTime: "7 min",
    content: `2025年的Token价格战让LLM API成本大幅下降。

## 价格战回顾

从2024到2025年，主流模型的API价格下降了10-100倍。

## 新的商业模式

- **订阅制**：固定月费无限使用
- **分层定价**：按功能和使用量分级
- **企业定制**：私有化部署+定制服务
- **效果付费**：按业务价值收费

## 成本优化策略

- 提示词优化
- 缓存策略
- 模型路由
- 批处理`
  },
  {
    slug: "ai-chip-2026",
    title: "AI芯片2026：英伟达之外的选择",
    date: "2026-01-12",
    tags: ["AI芯片", "TPU", "硬件"],
    readTime: "9 min",
    content: `Google TPU v6、AMD MI350、Amazon Trainium3相继发布。

## 主流AI芯片对比

- **NVIDIA B200**：训练性能最强，生态最完善
- **Google TPU v6**：推理效率高，与TensorFlow深度集成
- **AMD MI350**：性价比优势，ROCm生态逐步成熟
- **Amazon Trainium3**：云端优化，与AWS服务集成

## 选型建议

- 训练大规模模型：NVIDIA仍是首选
- 云端推理：考虑TPU或Trainium的成本优势
- 预算有限：AMD是不错的替代方案

## 未来趋势

专用AI芯片将越来越多，针对特定工作负载的优化将成为关键。`
  },
  {
    slug: "llm-test-time-scaling-2025",
    title: "Test-Time Scaling：2025年最重要的技术趋势",
    date: "2025-12-28",
    tags: ["Test-Time Scaling", "o1", "趋势"],
    readTime: "8 min",
    content: `OpenAI o1和o3系列证明了测试时计算扩展的有效性。

## 什么是Test-Time Scaling

在推理阶段投入更多计算资源，让模型生成更多候选答案并进行验证。

## 关键技术

- **Chain-of-Thought**：显式推理过程
- **Self-Consistency**：多路径采样投票
- **Verifier模型**：评估答案质量
- **MCTS**：蒙特卡洛树搜索

## 应用前景

这一技术路线将改变大模型的优化方向，从单纯扩大模型规模转向更智能的推理策略。`
  },
  {
    slug: "openai-12-days",
    title: "OpenAI 12天发布会回顾与思考",
    date: "2025-12-20",
    tags: ["OpenAI", "o3", "Sora"],
    readTime: "10 min",
    content: `OpenAI的12天连续发布带来了o3、Sora正式版等重要更新。

## 发布亮点

- **o3/o3-mini**：推理能力大幅提升
- **Sora正式版**：视频生成质量惊艳
- **Canvas升级**：协作式写作和编程
- **Apple集成**：ChatGPT深度集成iOS

## o3的突破

在ARC-AGI基准上达到87.5%，接近人类水平。这标志着AI在抽象推理上的重大进步。

## 行业影响

OpenAI通过密集发布巩固了领先地位，也给竞争对手带来巨大压力。`
  },
  {
    slug: "google-willow-quantum",
    title: "Google Willow量子芯片：AI与量子计算的结合",
    date: "2025-12-15",
    tags: ["量子计算", "Willow", "Google"],
    readTime: "7 min",
    content: `Google发布Willow量子芯片，在量子纠错上取得突破。

## Willow的突破

- 105个物理量子比特
-  below threshold量子纠错
- 实时纠错能力
- 5分钟完成传统超算10^25年的计算

## 对AI的潜在影响

- 量子机器学习算法
- 优化问题求解
- 量子神经网络
- 药物发现加速

## 现实展望

实用化量子计算仍需10年以上，但Willow证明了可行路径。`
  },
  {
    slug: "claude-3.5-sonnet-analysis",
    title: "Claude 3.5 Sonnet：Anthropic的稳步前进",
    date: "2025-12-08",
    tags: ["Claude", "Anthropic", "评测"],
    readTime: "8 min",
    content: `Claude 3.5 Sonnet在编程和推理任务上表现出色。

## 核心改进

- **编程能力**：在HumanEval上达到92%准确率
- **推理能力**：数学和科学问题显著提升
- **速度**：比Opus更快，成本更低
- **Artifacts**：交互式内容生成

## 与竞品对比

- 编程：优于GPT-4o，接近o1
- 创意写作：保持领先优势
- 长上下文：200K窗口稳定可靠

## 安全特性

Anthropic继续强调AI安全，Constitutional AI训练让模型更加可靠。`
  },
  {
    slug: "sora-official-release",
    title: "Sora正式版发布：视频生成进入新纪元",
    date: "2025-12-02",
    tags: ["Sora", "视频生成", "OpenAI"],
    readTime: "9 min",
    content: `OpenAI正式发布Sora视频生成模型。

## 能力评估

- **时长**：最长60秒连续视频
- **分辨率**：最高1080p
- **物理一致性**：物体运动和光影更自然
- **文本理解**：复杂提示词执行准确

## 应用场景

- 广告创意
- 影视预演
- 教育内容
- 游戏资产

## 局限与担忧

- 生成时间仍较长
- 复杂场景仍有瑕疵
- 深度伪造风险
- 版权和伦理问题`
  },
  {
    slug: "llm-long-context",
    title: "长上下文大模型：从128K到无限",
    date: "2025-11-25",
    tags: ["长上下文", "Gemini", "Claude"],
    readTime: "7 min",
    content: `Gemini 1.5 Pro支持200万token上下文，Claude 3.5支持20万。

## 技术实现

- **Ring Attention**：环形注意力机制
- **稀疏注意力**：只关注相关部分
- **分层处理**：粗粒度到细粒度
- **内存优化**：KV Cache压缩

## 应用场景

- 整本书籍分析
- 大规模代码库理解
- 长期对话记忆
- 多文档对比

## 挑战

- 注意力稀释
- 计算成本
- 检索精度
- 位置编码`
  },
  {
    slug: "ai-scientific-discovery",
    title: "AI for Science：AlphaFold之后的突破",
    date: "2025-11-18",
    tags: ["AI4Science", "AlphaFold", "科研"],
    readTime: "8 min",
    content: `AI在材料发现、药物设计、数学证明等领域持续突破。

## 2025年重要进展

- **材料发现**：GNoME发现220万种新材料
- **天气预报**：GraphCast精度超越传统方法
- **数学证明**：AI辅助证明组合数学定理
- **药物设计**：AlphaFold 3预测分子相互作用

## 方法论转变

- 从假设驱动到数据驱动
- 从实验筛选到计算预测
- 从单一学科到跨学科融合

## 未来展望

AI将成为科学家的标准工具，加速科学发现进程。`
  },
  {
    slug: "nvidia-blackwell-analysis",
    title: "NVIDIA Blackwell架构解析：AI训练的新标杆",
    date: "2025-11-12",
    tags: ["NVIDIA", "Blackwell", "GPU"],
    readTime: "9 min",
    content: `NVIDIA发布Blackwell架构，FP4精度和第二代Transformer引擎引人注目。

## 架构亮点

- **FP4精度**：训练吞吐量提升4倍
- **Transformer引擎**：第二代，支持更多模型类型
- **NVLink 6**：GPU间带宽1.8TB/s
- **解耦设计**：计算和内存独立扩展

## 性能提升

- 训练：比Hopper快4倍
- 推理：比Hopper快25倍
- 能效：提升25倍

## 软件生态

- CUDA持续优化
- TensorRT更新
- NeMo框架增强
- 与主流框架集成`
  },
  {
    slug: "meta-llama-3.2-review",
    title: "Meta Llama 3.2：开源多模态的新选择",
    date: "2025-11-05",
    tags: ["Llama", "Meta", "开源"],
    readTime: "8 min",
    content: `Llama 3.2增加了视觉能力，支持端侧部署。

## 模型规格

- **1B/3B**：端侧优化版本
- **11B/90B**：多模态版本
- **上下文**：128K token
- **多语言**：支持8种语言

## 性能表现

- 视觉理解：接近GPT-4V水平
- 文本能力：比Llama 3.1提升10%
- 端侧性能：3B版本可在手机上流畅运行

## 开源意义

Meta继续推动开源AI发展，为社区提供了强大的多模态基础模型。`
  },
  {
    slug: "apple-intelligence-review",
    title: "Apple Intelligence 体验：隐私优先的AI",
    date: "2025-10-28",
    tags: ["Apple", "端侧AI", "隐私"],
    readTime: "7 min",
    content: `iOS 18.1正式版带来Apple Intelligence功能。

## 核心功能

- **写作工具**：改写、校对、摘要
- **图像生成**：Genmoji和Image Playground
- **Siri升级**：更自然的对话
- **邮件智能**：优先级收件箱

## 隐私设计

- **本地处理**：大部分任务在设备上完成
- **Private Cloud Compute**：云端处理也保护隐私
- **数据控制**：用户完全掌控自己的数据

## 与竞品对比

功能上不如ChatGPT全面，但隐私保护是明显优势。适合对隐私敏感的用户。`
  },
  {
    slug: "nobel-prize-ai-2024",
    title: "诺贝尔奖与AI：Hinton和AlphaFold的启示",
    date: "2025-10-20",
    tags: ["诺贝尔奖", "Hinton", "AlphaFold"],
    readTime: "6 min",
    content: `2024年诺贝尔物理学奖和化学奖都授予了AI相关研究。

## 获奖工作

- **物理学奖**：Hinton和Hopfield的神经网络基础
- **化学奖**：AlphaFold蛋白质结构预测

## 意义解读

这标志着AI从计算机科学走向自然科学的核心领域。

## 对AI研究的启示

- 基础研究的重要性
- 跨学科合作的价值
- 长期投入的必要性
- 科学和社会影响并重`
  },
  {
    slug: "gpt-4o-audio-analysis",
    title: "GPT-4o 原生音频：语音交互的新高度",
    date: "2025-10-15",
    tags: ["GPT-4o", "语音", "多模态"],
    readTime: "7 min",
    content: `GPT-4o的原生音频能力让语音交互更加自然。

## 技术突破

- **端到端**：文本和音频统一处理
- **低延迟**：平均320ms响应时间
- **情感表达**：能理解和表达情感
- **多语言**：实时翻译能力

## 应用场景

- 实时口语练习
- 客户服务
- 辅助阅读
- 实时翻译

## 与TTS+ASR对比

原生音频避免了级联错误，理解和生成更加一致。`
  },
  {
    slug: "ai-agent-autonomous",
    title: "自主AI Agent：从AutoGPT到实用化",
    date: "2025-10-08",
    tags: ["AI Agent", "AutoGPT", "自动化"],
    readTime: "8 min",
    content: `早期AI Agent项目如AutoGPT hype过后，新一代更实用的Agent框架涌现。

## AutoGPT的教训

- 无限循环问题
- 成本失控
- 可靠性差
- 难以落地

## 新一代Agent特点

- **有限范围**：专注特定任务
- **人机协作**：关键决策人工确认
- **工具限制**：预定义工具集
- **可观测性**：全程可监控

## 实用案例

- 代码审查Agent
- 数据标注Agent
- 客服助手Agent
- 测试生成Agent`
  },
  {
    slug: "llm-fine-tuning-2025",
    title: "大模型微调2025：LoRA之后的新方法",
    date: "2025-09-28",
    tags: ["微调", "LoRA", "DoRA"],
    readTime: "9 min",
    content: `DoRA、PiSSA等新微调方法在效率和效果上超越LoRA。

## 微调方法演进

- **Full Fine-tuning**：效果最好但成本最高
- **LoRA**：低秩适配，参数效率高
- **DoRA**：权重分解低秩适配
- **PiSSA**：主奇异值和奇异向量适配
- **QLoRA**：量化+LoRA，内存友好

## 方法对比

在相同计算预算下，DoRA和PiSSA通常比LoRA效果更好，尤其在数学推理任务上。

## 实践建议

- 数据量小：用DoRA或PiSSA
- 内存受限：用QLoRA
- 追求极致效果：Full Fine-tuning`
  },
  {
    slug: "openai-o1-preview",
    title: "OpenAI o1-preview：推理模型的首秀",
    date: "2025-09-20",
    tags: ["o1", "推理", "OpenAI"],
    readTime: "8 min",
    content: `OpenAI发布o1-preview，通过强化学习增强推理能力。

## 核心创新

- **思维链**：显式展示推理过程
- **强化学习**：用结果奖励训练推理
- **计算扩展**：推理时间越长效果越好
- **自我纠正**：能发现错误并修正

## 性能表现

- 数学竞赛：AIME 83%准确率
- 代码竞赛：Codeforces 89%分位
- 科学问题：PhD级别问题表现优异

## 局限

- 成本高：推理时间是普通模型的10-100倍
- 通用性：在某些简单任务上不如GPT-4o
- 透明度：思维链可能被隐藏`
  },
  {
    slug: "mistral-large-2-review",
    title: "Mistral Large 2：欧洲AI的骄傲",
    date: "2025-09-12",
    tags: ["Mistral", "欧洲", "评测"],
    readTime: "7 min",
    content: `Mistral发布Large 2模型，在多语言和代码能力上表现出色。

## 模型特点

- **参数规模**：123B总参数
- **上下文**：128K token
- **多语言**：支持数十种语言
- **代码**：支持80+编程语言

## 性能对比

- 接近GPT-4水平
- 代码能力突出
- 欧洲语言优势明显
- 成本比GPT-4低50%

## 商业模式

Mistral提供开源和商业双轨策略，满足不同用户需求。`
  },
  {
    slug: "ai-infrastructure-2025",
    title: "AI基础设施2025：从训练到推理的优化",
    date: "2025-09-05",
    tags: ["基础设施", "系统", "优化"],
    readTime: "10 min",
    content: `随着模型规模增长，AI基础设施面临新挑战。

## 训练基础设施

- **分布式训练**：3D并行策略
- **存储优化**：Checkpoint快速读写
- **故障恢复**：自动故障检测和恢复
- **资源调度**：动态资源分配

## 推理基础设施

- **服务框架**：vLLM、TensorRT-LLM、TGI
- **批处理**：Continuous Batching
- **缓存策略**：Prefix Caching
- **模型并行**：Tensor和Pipeline并行

## 成本优化

-  spot实例训练
-  混合精度推理
-  模型蒸馏
-  请求合并`
  },
  {
    slug: "llm-hallucination-mitigation",
    title: "大模型幻觉缓解：技术进展与局限",
    date: "2025-08-28",
    tags: ["幻觉", "RAG", "可靠性"],
    readTime: "8 min",
    content: `幻觉仍是LLM的主要问题之一。

## 幻觉类型

- **事实性幻觉**：编造不存在的事实
- **忠实性幻觉**：与输入不一致
- **上下文幻觉**：忽略上下文信息

## 缓解方法

- **RAG**：检索增强生成
- **事实核查**：外部知识库验证
- **置信度估计**：模型自知不确定性
- **多模型验证**：多个模型交叉验证

## 评估挑战

- 幻觉检测本身困难
- 评估标准不统一
- 领域特异性强
- 人工标注成本高`
  }
];

function generatePostContent(post) {
  const paragraphs = post.content.split('\n\n');
  let htmlContent = '';
  
  paragraphs.forEach(p => {
    if (p.startsWith('##')) {
      htmlContent += `<h2>${p.replace('## ', '')}</h2>\n\n      `;
    } else if (p.startsWith('-')) {
      const items = p.split('\n').map(line => line.replace('- ', '')).filter(Boolean);
      htmlContent += `<ul>\n          ${items.map(item => `<li>${item}</li>`).join('\n          ')}\n        </ul>\n\n      `;
    } else {
      htmlContent += `<p>${p}</p>\n\n      `;
    }
  });
  
  return `export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          ${post.tags.map(tag => `<span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">${tag}</span>`).join('\n          ')}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">${post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>${post.date}</span>
          <span>•</span>
          <span>${post.readTime} read</span>
        </div>
      </div>

      ${htmlContent}
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 ${post.date}
      </p>
    </article>
  );
}
`;
}

posts.forEach(post => {
  const dir = path.join(__dirname, 'src', 'app', 'posts', post.slug);
  fs.mkdirSync(dir, { recursive: true });
  
  const content = generatePostContent(post);
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
  console.log(`Created: ${post.slug}`);
});

console.log('All posts created!');
