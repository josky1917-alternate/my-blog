import type { Bilingual } from "./summer-2026";

type Step = { title: Bilingual; detail: Bilingual };
export type ArticleFigure = {
  afterSection: number;
  title: Bilingual;
  caption: Bilingual;
  sources: number[];
} & (
  | { kind: "flow"; steps: Step[] }
  | { kind: "lanes"; lanes: { label: Bilingual; steps: Step[] }[] }
);
export interface ArticleVisuals {
  scene: Bilingual;
  takeaway: Bilingual;
  figure: ArticleFigure;
  cards: Step[];
}
const b = (en: string, zh: string): Bilingual => ({ en, zh });
const step = (en: string, zh: string, detailEn: string, detailZh: string): Step => ({ title: b(en, zh), detail: b(detailEn, detailZh) });

export const articleVisuals: Record<string, ArticleVisuals> = {
  "hy3-open-agent-deployment": {
    scene: b("Think of an MoE as a workshop with many specialists. A particular job calls only some of them to the bench, but the others still need somewhere to keep their tools. That is why 'active parameters' and the memory bill tell different stories.", "想象一家有许多老师傅的工坊：接到一件活，只需要几位师傅上手，但其他人的工具和工作台并不会凭空消失。MoE的“激活参数”和显存账单，说的正是两件不同的事。"),
    takeaway: b("A small active slice can reduce computation without making the full model small to store.", "每次参与计算的部分可以很小，整套模型的存储负担却未必小。"),
    figure: {
      kind: "flow", afterSection: 1,
      title: b("A token's trip through an MoE layer", "一个token如何经过MoE层"),
      steps: [
        step("Token arrives", "token到达", "A representation enters the layer", "输入表示进入这一层"),
        step("Router selects", "路由器选择", "Choose a subset of experts", "挑选部分专家参与计算"),
        step("Experts compute", "专家计算", "Selected experts do the work", "由选中的专家处理"),
        step("Combine outputs", "合并输出", "Continue to the next layer", "整合结果并传给下一层")
      ],
      caption: b("Conceptual routing diagram, not a complete Hy3 architecture. Unselected expert weights still need a storage or placement strategy; the boxes do not indicate parameter proportions.", "MoE路由概念图，并非Hy3完整架构。未被选中的专家权重仍需安排存储位置；方框大小不代表参数占比。"), sources: [1, 2]
    },
    cards: [step("Compute budget", "计算账", "How much work does each token activate?", "每个token实际调用多少计算？"), step("Memory budget", "内存账", "Where do weights, caches, and buffers live?", "权重、缓存和缓冲放在哪里？"), step("Task budget", "任务账", "How many attempts produce an accepted result?", "几次尝试才能交付合格结果？")]
  },
  "solar-open2-long-context-agents": {
    scene: b("Give an assistant a suitcase full of meeting notes, emails, and code. A bigger suitcase helps carry them all, but it does not guarantee the assistant finds the promise made on page three. Long context is capacity; using it well is a separate skill.", "把会议纪要、邮件和代码装满一个行李箱，再交给助手。箱子越大，带得越多，但助手未必还记得第三页里的一句承诺。长上下文解决“装得下”，有效利用上下文还需要另一种能力。"),
    takeaway: b("Test whether an agent retrieves the right evidence, not only whether its history fits.", "别只问历史记录能否装下，还要问关键证据能否找回来。"),
    figure: {
      kind: "flow", afterSection: 1,
      title: b("From a large context to a grounded answer", "从长上下文到有依据的答案"),
      steps: [step("Work history", "工作历史", "Documents, tools, earlier constraints", "文档、工具结果、早期约束"), step("Hybrid processing", "混合处理", "Linear and softmax attention layers", "线性与softmax注意力层"), step("Find evidence", "找回证据", "Retrieve the detail the task needs", "定位任务真正需要的细节"), step("Check the result", "核验结果", "Compare the artifact with the sources", "将产物与原始资料核对")],
      caption: b("A reading guide linking the report's hybrid-attention design to an application workflow. Evidence retrieval and artifact checking are evaluation goals here, not additional architectural modules claimed by the paper.", "把报告中的混合注意力与应用流程联系起来的阅读示意。图中的证据查找和产物核验是评估目标，并非声称论文额外设计了这些架构模块。"), sources: [1, 2]
    },
    cards: [step("Can it fit?", "装得下吗？", "Context capacity sets the input limit.", "上下文容量决定输入上限。"), step("Can it remember?", "找得回吗？", "Test early constraints amid distractors.", "在干扰信息中测试早期约束。"), step("Can it prove it?", "验得准吗？", "Check the final artifact independently.", "独立检查最终交付物。")]
  },
  "lfm25-small-local-agents": {
    scene: b("Imagine a laptop tidying your files while you work: reading a document, choosing a folder, and asking before moving it. The interesting question is not whether a small model can chat. It is whether it can follow that little workflow without losing its place.", "想象电脑在你工作时帮忙整理文件：读一份文档、选一个文件夹，移动前再确认一下。小模型能不能聊天并不是最有趣的问题；它能不能把这条小工作流稳稳走完，才更接近真正的使用体验。"),
    takeaway: b("A local agent earns its place by doing one bounded job reliably, not by matching every cloud-model skill.", "先把一件范围明确的小事做好，本地Agent就有了价值。"),
    figure: {
      kind: "flow", afterSection: 1,
      title: b("How a small model learns to use tools", "小模型如何学会使用工具"),
      steps: [step("SFT", "监督微调", "Learn response and tool-use patterns", "学习回答与工具调用模式"), step("Specialist teachers", "领域教师", "Develop focused domain skills", "分别加强不同领域能力"), step("On-policy distillation", "在线策略蒸馏", "Guide the student's own attempts", "指导学生自身的尝试轨迹"), step("Agentic RL", "Agent强化学习", "Practice in multi-turn environments", "在多轮环境中练习执行")],
      caption: b("Simplified outline of the release's post-training recipe. This shows training stages, not operations performed for every user request; it is not a benchmark chart.", "根据发布资料简化的后训练流程。图中展示的是训练阶段，不是每次用户请求都要执行的步骤，也不表示性能高低。"), sources: [1]
    },
    cards: [step("A modest first job", "从小事开始", "Try document classification before broad automation.", "先做文档分类，再扩大自动化范围。"), step("A real device test", "在真机上测", "Watch heat, memory, and foreground responsiveness.", "关注温度、内存与前台响应。"), step("A clear boundary", "把边界讲清", "Local weights do not make external tools local.", "权重在本地，不等于外部工具也在本地。")]
  },
  "glm53-post-training-environments": {
    scene: b("Training a coding agent is a little like teaching someone to cook. A recipe is useful, but a working kitchen and a reliable taste test matter too. If the oven is broken or the judge rewards an empty plate, practice teaches the wrong lesson.", "训练代码Agent有点像教人做饭：菜谱很重要，但厨房要能正常运转，试吃标准也要靠谱。烤箱坏了，或者端个空盘子也能得高分，练得越勤也可能越跑偏。"),
    takeaway: b("Scaling post-training requires better places to practice and better ways to judge the result.", "扩展后训练，也是在扩展练习场和验收标准。"),
    figure: {
      kind: "flow", afterSection: 1,
      title: b("A trustworthy environment–action–reward loop", "可信的环境—行动—奖励循环"),
      steps: [step("Reset a task", "重置任务", "Start from a reproducible environment", "从可复现环境开始"), step("Agent acts", "Agent行动", "Inspect, edit, run, and recover", "检查、修改、运行与恢复"), step("Inspect state", "检查状态", "Read what actually changed", "读取实际发生的变化"), step("Verify & reward", "验证并奖励", "Score completion; reset for the next attempt", "按完成情况评分，再重置尝试")],
      caption: b("Conceptual training loop based on the article's environment discussion. Verifiers must distinguish valid solutions, no-ops, and unsolved states. The arrows describe a workflow, not measured speed or success rates.", "围绕文中环境设计讨论绘制的训练循环。验证器要区分正确解、空操作与未解决状态；箭头表示流程，不表示实测速度或成功率。"), sources: [1]
    },
    cards: [step("Working kitchen", "厨房要能用", "A broken environment is not a model failure.", "环境故障不能全算成模型失败。"), step("Independent taste test", "试吃要独立", "The explanation is not the acceptance test.", "模型的解释不是验收标准。"), step("Same exam paper", "考卷要一致", "Keep baselines and budgets comparable.", "基线模型与预算需要可比。")]
  },
  "fable51-enterprise-agent-evaluation": {
    scene: b("Hiring an assistant involves more than an interview score. You also ask how they handle a stalled task, where they keep documents, and what the finished work costs. An enterprise model upgrade deserves the same sort of whole-job review.", "请一位助手，不能只看面试分数：事情卡住了怎么办、文件放在哪里、完成一项工作要花多少，都会影响合作体验。企业升级模型时，也值得按同样的方式看完整工作过程。"),
    takeaway: b("The model is one part of the system you are paying for and trusting with data.", "你付费并交付数据的是整套系统，模型只是其中一环。"),
    figure: {
      kind: "lanes", afterSection: 1,
      title: b("Two views of the same agent", "从两条线看同一个Agent"),
      lanes: [
        { label: b("The work", "工作线"), steps: [step("Request", "接到需求", "Define acceptance criteria", "明确验收条件"), step("Execute", "执行任务", "Use tools and recover", "调用工具并处理故障"), step("Accept", "验收交付", "Verify the final artifact", "验证最终产物")] },
        { label: b("The operating bill", "运行线"), steps: [step("Context", "输入上下文", "Cached and uncached input", "缓存与非缓存输入"), step("Run", "运行过程", "Outputs, tools, retries", "输出、工具与重试"), step("Account", "核算结果", "Cost and data handling", "完整成本与数据流向")] }
      ],
      caption: b("An editorial evaluation map, not an Anthropic architecture diagram. Read the two lanes together: an accepted artifact still has an operating cost and a data-handling path.", "作者绘制的评估框架，不是Anthropic产品架构图。两条线需要一起看：即使产物验收通过，也仍有运行成本和数据处理链路。"), sources: [1, 3]
    },
    cards: [step("Can it do the job?", "事情做对了吗？", "Check independent acceptance tests.", "查看独立验收测试。"), step("What did it cost?", "总共花了多少？", "Count retries and tools as well as tokens.", "除token外，还要计入重试和工具。"), step("Where did data go?", "数据去了哪里？", "Trace the actual configured path.", "核对真实配置的数据流向。")]
  },
  "gemini38-live-voice-agents": {
    scene: b("You ask a voice assistant for a table at seven, then say 'Actually, make it eight' while it is still searching. It can sound perfectly natural and still book the wrong time. That tiny exchange captures the hard part of voice agents: conversation keeps moving while work is unfinished.", "你让语音助手订七点的座位，查询还没结束，又补一句“改成八点吧”。助手可能说得非常自然，最后却订错了时间。这段小对话，正好揭示语音Agent的难点：工作还没完成，对话已经向前走了。"),
    takeaway: b("An acknowledgment is progress in the conversation, not proof that an external action succeeded.", "一句“好的，正在处理”代表对话有进展，不代表外部操作已经成功。"),
    figure: {
      kind: "lanes", afterSection: 1,
      title: b("One conversation, two clocks", "一次交互，两条时间线"),
      lanes: [
        { label: b("Conversation clock", "对话时钟"), steps: [step("Hear request", "听到需求", "A table at seven", "订七点的座位"), step("Hear correction", "听到改口", "Actually, make it eight", "改成八点吧"), step("Report outcome", "播报结果", "Speak only the confirmed state", "只播报已确认的状态")] },
        { label: b("Execution clock", "执行时钟"), steps: [step("Search pending", "查询进行中", "Original request still in flight", "旧请求还没有返回"), step("Reconcile intent", "核对新意图", "Discard or update stale results", "丢弃或更新过期结果"), step("Commit action", "提交操作", "Confirm the current request", "确认当前请求后再执行")] }
      ],
      caption: b("Illustrative booking example, not a latency measurement or a Google API trace. Columns show related stages, not equal time intervals; the implementation must reconcile late tool results with the user's current intent.", "订位场景示意，并非延迟测试或Google API调用记录。列表示相关阶段，不代表等长时间；实现时需要把晚到的工具结果与用户当前意图核对。"), sources: []
    },
    cards: [step("Stop speaking", "停止播音", "Silence the current audio output.", "停止当前音频输出。"), step("Stop thinking", "终止生成", "End the active model turn.", "结束模型当前这一轮生成。"), step("Cancel the action", "取消操作", "Reconcile external state separately.", "单独核对并处理外部状态。")]
  },
  "aws-inferentia-trainium-vs-nvidia-gpu": {
    scene: b("Think of a restaurant: training is the kitchen developing and refining a recipe; inference is the service repeatedly preparing orders from it. Both need good equipment, but their busy hours and bottlenecks differ. The analogy helps explain the chip names—while remembering that Trainium can also serve inference.", "把AI系统想成一家餐厅：训练像后厨反复试菜、改进配方，推理像按照成熟配方持续出餐。两者都需要好设备，但繁忙时段和瓶颈不同。这个类比有助于理解芯片定位，同时别忘了：Trainium也能承担推理任务。"),
    takeaway: b("Choose a whole hardware-and-software path, not a chip name or a peak-FLOPS headline.", "选型选的是完整软硬件路径，不只是芯片名字或峰值算力。"),
    figure: {
      kind: "lanes", afterSection: 3,
      title: b("One model, two deployment paths", "同一个模型，两条部署路径"),
      lanes: [
        { label: b("AWS custom silicon", "AWS自研芯片"), steps: [step("Model code", "模型代码", "Check model and operator support", "核对模型与算子支持"), step("AWS Neuron", "AWS Neuron", "Compiler, runtime, libraries, NKI", "编译器、运行时、库与NKI"), step("Inf / Trn systems", "Inf / Trn系统", "Inferentia or Trainium hardware", "Inferentia或Trainium硬件")] },
        { label: b("NVIDIA GPU", "英伟达GPU"), steps: [step("Model code", "模型代码", "Check GPU and software versions", "核对GPU及软件版本"), step("CUDA ecosystem", "CUDA生态", "Libraries, kernels, serving tools", "计算库、kernel与推理工具"), step("GPU systems", "GPU系统", "Cloud or on-premises hardware", "云端或本地硬件")] }
      ],
      caption: b("Simplified software-to-hardware map based on the cited platform documentation. Equal-sized boxes do not imply equal performance. Moving model weights is not the same as porting CUDA-specific kernels to Neuron.", "根据官方平台资料简化的软硬件路径图。方框大小不代表性能相等；迁移模型权重，也不等于CUDA专用kernel已经适配Neuron。"), sources: [5, 7, 8]
    },
    cards: [step("The recipe", "先看配方", "Does the exact model run correctly?", "具体模型能否正确运行？"), step("The rush hour", "再看高峰", "Can it meet real latency and throughput targets?", "能否满足真实延迟与吞吐目标？"), step("The whole bill", "最后算总账", "Include porting, operations, and capacity.", "计入迁移、运维与容量成本。")]
  }
};
