export type Bilingual = { en: string; zh: string };
export interface ResearchPost {
  slug: string;
  date: string;
  title: string;
  titleZh: string;
  excerpt: string;
  excerptZh: string;
  tags: string[];
  readTime: string;
  sections: {
    heading: Bilingual;
    paragraphs: Bilingual[];
    table?: { headers: Bilingual[]; rows: Bilingual[][]; caption?: Bilingual };
    code?: { title: Bilingual; language: string; value: string; caption: Bilingual }[];
    sources?: number[];
  }[];
  sources: { title: string; url: string; date: string }[];
}

export const summerPosts: ResearchPost[] = [
  {
    slug: "hy3-open-agent-deployment", date: "2026-07-08",
    title: "Hy3: What an Open Agent Model Means for Production Inference",
    titleZh: "Hy3发布：开放Agent模型背后的推理部署账本",
    excerpt: "Tencent's July 6 release brings a 295B MoE to agent workloads. A closer look at active parameters, memory costs, and task-level reliability.",
    excerptZh: "从腾讯7月6日发布的Hy3出发，拆解MoE激活参数、显存成本与Agent任务可靠性，讨论如何评估生产部署价值。",
    tags: ["Hy3", "MoE", "Inference", "Agents"], readTime: "6 min",
    sections: [
      { heading: { en: "The release: a model built around work", zh: "新闻焦点：模型开始围绕实际工作迭代" }, paragraphs: [
        { en: "Tencent officially released Hy3 on July 6. The announcement describes a hybrid fast-and-slow-thinking MoE with 295 billion total parameters, 21 billion active parameters, and a context window of up to 256K tokens. It also announces Apache 2.0 availability and integration into Tencent products. These are release specifications, not evidence that every workflow becomes cheaper.", zh: "腾讯于7月6日正式发布Hy3。官方公告给出的核心规格是混合快慢思考、MoE架构、295B总参数、21B激活参数，以及最高256K上下文；同时宣布采用Apache 2.0许可，并接入旗下多款产品。这些是发布规格，不能直接推导出所有业务的成本都会下降。" },
        { en: "The accompanying model card emphasizes tool-call stability, recovery from errors, and retaining user constraints across multiple turns. That focus matters: a useful agent must preserve the original goal after inspecting files, calling tools, and encountering failures. A single polished answer is a weak proxy for that behavior.", zh: "配套模型卡强调工具调用稳定性、错误恢复，以及多轮交互中保留用户约束的能力。这比单轮答案是否漂亮更接近Agent的真实要求：读取文件、调用工具、遇到错误之后，模型仍应记住用户最初要完成什么。" }
      ], sources: [1, 2] },
      { heading: { en: "Why 21B active does not mean 21B of memory", zh: "技术拆解：21B激活参数不等于21B显存占用" }, paragraphs: [
        { en: "In a sparse MoE, a token uses only a subset of experts. This can reduce arithmetic relative to a dense model of the same total size. It does not remove the inactive experts from storage. Deployment still needs a strategy for keeping, distributing, or moving those weights, and routing introduces communication work.", zh: "稀疏MoE让每个token只经过部分专家，因此相对于同等总参数规模的稠密模型，计算量可能更低。但没有被当前token选中的专家依然需要存储；部署系统仍要决定这些权重放在哪里、如何分片，以及是否需要搬运。专家路由也会带来通信开销。" },
        { en: "As a rough engineering estimate, 295B parameters at two bytes per parameter require about 590 GB for weights alone. This decimal estimate excludes caches, activations, runtime buffers, and implementation details. Quantization changes the weight term; longer prompts and more concurrent sessions change the rest. Capacity planning should therefore start with a memory budget, not an active-parameter headline.", zh: "做一个粗略的工程估算：若295B参数按每参数2字节存储，仅权重约需590GB（十进制）。这个估算不包含KV缓存、激活、运行时缓冲，也没有展开具体实现。量化改变的是权重这一项，长提示词和更多并发会增加其他部分。因此容量规划应从完整内存账本开始，而不是只看激活参数。" }
      ] },
      { heading: { en: "Evaluate completed work rather than isolated calls", zh: "评测重点：完成一次工作到底要付出多少" }, paragraphs: [
        { en: "For a coding workflow, I would compare models on the same repository snapshots, tool schemas, network rules, and hidden acceptance tests. Record tool errors, retries, input and output tokens, elapsed time, and whether the final patch actually passes. A model that uses fewer tokens per call can still be expensive if it repeatedly loses context.", zh: "对代码任务，我会固定仓库快照、工具定义、网络规则和隐藏验收测试，再比较模型。除了最终是否通过，还应记录工具错误、重试次数、输入输出token和总耗时。每次调用更省token的模型，如果反复丢失上下文，完成整项工作仍可能更贵。" },
        { en: "A useful metric is total operating cost divided by accepted tasks, counting failed runs in the numerator. Pair it with a latency distribution and a manual audit of a sample of accepted outputs. This makes serving efficiency and reliability visible in the same decision, without assuming the vendor's benchmark mix matches a private workload.", zh: "一个实用指标是：总运行成本除以验收通过的任务数，并把失败运行的成本计入分子。再配合延迟分布和通过样本的人工抽查，才能把推理效率与可靠性放进同一个决策中，而不是默认厂商的评测任务恰好代表自己的业务。" }
      ] },
      { heading: { en: "Deployment takeaway", zh: "部署判断" }, paragraphs: [
        { en: "Hy3 is worth evaluating as an open deployment option, especially when control over weights and tool integration matters. I would first run a bounded pilot with a small task set, freeze the model and runtime revisions, and expand only after measuring task success and peak memory. The practical question is how reliably the whole system works under a fixed resource budget.", zh: "如果业务重视权重控制权和工具集成，Hy3值得进入候选清单。实际落地时，可以先用小规模、边界明确的任务集试运行，固定模型和推理框架版本，测清任务成功率与峰值内存，再决定是否扩大部署。最终要回答的是：在固定资源预算下，整套系统能多可靠地完成工作。" }
      ] }
    ],
    sources: [
      { title: "Tencent — Hy3 official release", date: "2026-07-06", url: "https://www.tencent.com/tencent-hunyuan-officially-releases-hy3-advancing-agent-capabilities-and-deeper-product-integration/" },
      { title: "Tencent — Hy3 model card", date: "Release documentation; living model card", url: "https://huggingface.co/tencent/Hy3" }
    ]
  },
  {
    slug: "solar-open2-long-context-agents", date: "2026-07-22",
    title: "Solar Open 2: Hybrid Attention and the Economics of Long-Horizon Agents",
    titleZh: "Solar Open 2技术报告：混合注意力如何支撑长程Agent",
    excerpt: "Reading the July 22 report through three questions: what to retain in context, how to combine specialist teachers, and how to verify real work.",
    excerptZh: "解读7月22日发布的技术报告：混合注意力、专家教师蒸馏，以及为什么长上下文并不自动等于可靠的长程执行。",
    tags: ["Solar Open 2", "Hybrid Attention", "Distillation", "Long Context"], readTime: "6 min",
    sections: [
      { heading: { en: "A same-day technical report", zh: "当期焦点：从聊天能力转向持续执行" }, paragraphs: [
        { en: "Upstage announced Solar Open 2 on July 22, and the first version of its technical report was submitted to arXiv that day. This article uses that v1 rather than the later revision. The report describes a 250B-total, 15B-active MoE designed for long-horizon agent tasks and a context window reaching one million tokens.", zh: "Upstage于7月22日发布Solar Open 2，技术报告的首版也于当日提交到arXiv。本文以v1为阅读依据，不把后续修订混入当天的讨论。报告介绍的是面向长程Agent任务的MoE模型，总参数250B、激活参数15B，上下文窗口达到100万token。" },
        { en: "The interesting part is the route to that capacity. The report combines a hybrid attention stack, value-focused data selection, and specialist-teacher consolidation. Read together, these choices address different bottlenecks: processing long histories, spending training compute effectively, and integrating skills needed for multi-step work.", zh: "值得关注的是实现这组能力的路径：混合注意力、强调单位token价值的数据选择，以及将领域教师能力整合到单一模型中。它们分别对应不同瓶颈：如何处理长历史、如何提高训练算力利用价值，以及如何组合多步骤工作所需的技能。" }
      ], sources: [1] },
      { heading: { en: "Hybrid attention is a resource tradeoff", zh: "技术拆解：混合注意力是在分配计算资源" }, paragraphs: [
        { en: "The v1 report interleaves one softmax-attention layer with every three linear-attention layers. It also describes a gated delta rule extended to negative eigenvalues. The architectural claim is specific; it should not be simplified into a claim that attention has become free or that any million-token input is equally useful.", zh: "v1报告描述的结构是：每三层线性注意力配合一层softmax注意力，并使用扩展到负特征值的gated delta rule。这个架构描述很具体，不能被简化成“注意力成本消失了”，更不能说明任意100万token输入都同样有效。" },
        { en: "My engineering reading is that context capacity and useful memory are separate properties. An agent may fit its entire history yet fail to retrieve an early requirement. I would test cross-file dependencies, constraints introduced early in a session, and distractor-heavy documents at several input lengths, while recording prefill time and peak memory.", zh: "从工程角度看，装得下与记得住是两回事。Agent可能容纳完整历史，却无法取回最早的一条需求。我会在不同输入长度下测试跨文件依赖、会话早期约束，以及混入大量干扰信息的文档，同时记录预填充耗时和峰值内存。" }
      ], sources: [1] },
      { heading: { en: "Specialists need to become one usable policy", zh: "训练思路：让领域专家最终成为一个可用策略" }, paragraphs: [
        { en: "The report trains twelve domain specialists and combines them with Multi-teacher On-Policy Distillation. In on-policy distillation, the student's own generated trajectory determines where supervision is applied. This is different from simply collecting polished teacher answers and treating them as a static instruction dataset.", zh: "报告训练了12个领域专家，再通过多教师在线策略蒸馏（Multi-teacher On-Policy Distillation）整合其能力。在线策略蒸馏关注学生按自身策略生成的轨迹，并在这些位置给予指导；这与只收集教师的漂亮答案、做成静态指令数据集存在区别。" },
        { en: "For a deployment team, the next question is skill interference. Does stronger coding preserve document extraction and tool formatting? Build a regression matrix across task families, including mixed tasks that require more than one skill. A higher average can hide a regression in the one workflow that generates most business value.", zh: "部署团队接下来要问的是技能之间是否干扰：代码能力增强后，文档提取和工具格式是否保持稳定？应按任务族建立回归矩阵，并加入需要多种技能协同的混合任务。平均分提高，可能掩盖最有业务价值的那条工作流发生退化。" }
      ], sources: [1] },
      { heading: { en: "A practical acceptance test", zh: "落地建议：把验收条件放到模型之外" }, paragraphs: [
        { en: "For a document agent, ask it to extract evidence, produce a structured artifact, and then verify that artifact against source records. Keep the verifier independent from the generated explanation. Evaluate missing evidence and conflicting instructions deliberately. Upstage's launch emphasizes checking changed state after tool use; that is a useful design direction, but a private acceptance test still has to establish whether it works for your data.", zh: "以文档Agent为例，可以要求它先提取证据、生成结构化产物，再将产物与原始记录核对。验证器应独立于模型的解释，并主动加入证据缺失和指令冲突的样本。Upstage的公告强调工具执行后读取变化状态来核验结果，这个方向值得借鉴，但是否适合自己的数据，仍需要私有验收集来判断。" }
      ], sources: [2] }
    ],
    sources: [
      { title: "Solar Open 2 Technical Report — v1", date: "2026-07-22", url: "https://arxiv.org/abs/2607.20062v1" },
      { title: "Upstage — Solar Open 2 launch", date: "2026-07-22", url: "https://www.upstage.ai/blog/en/solar-open-2" }
    ]
  },
  {
    slug: "lfm25-small-local-agents", date: "2026-08-05",
    title: "LFM2.5-2.6B: Small Models, Real Tools, and Local Agent Budgets",
    titleZh: "LFM2.5-2.6B发布：小模型能否撑起本地Agent",
    excerpt: "Liquid AI's August 4 release makes on-device agents a concrete engineering question. Examining its post-training recipe and what local inference really costs.",
    excerptZh: "围绕Liquid AI 8月4日的新模型，解读领域教师、在线蒸馏与Agent强化学习，并讨论端侧部署的真实成本和验收方法。",
    tags: ["LFM2.5", "Small Models", "On-Device AI", "Post-Training"], readTime: "6 min",
    sections: [
      { heading: { en: "The news: a compact agentic release", zh: "新闻焦点：面向端侧的Agent模型" }, paragraphs: [
        { en: "Liquid AI released LFM2.5-2.6B on August 4, together with base and post-trained checkpoints. The announcement targets local agents rather than only short chat answers. Its model card describes a text model with roughly 2.69B parameters, a 128K-class context window, and a hybrid backbone with short-convolution and grouped-query-attention blocks.", zh: "Liquid AI于8月4日发布LFM2.5-2.6B，同时提供基础模型和后训练版本。发布重点是本地Agent，而不只是简短聊天。模型卡描述的是一个约2.69B参数的文本模型，具有128K级上下文，骨干结合短卷积与分组查询注意力模块。" },
        { en: "This is a useful contrast to the large MoEs discussed in July: fitting useful behavior into a smaller model changes where computation can happen. It does not establish that the model can replace a frontier service on arbitrary tasks. Local deployment makes workload selection more important, not less.", zh: "它与七月讨论的大型MoE形成了有用的对照：把实用能力放进更小的模型，会改变计算能够发生的位置。但这不意味着它能在任意任务上替代前沿云端服务。选择适合的工作负载，反而因此变得更加重要。" }
      ], sources: [1, 2] },
      { heading: { en: "The post-training recipe is the main story", zh: "技术重点：后训练配方比参数量更值得研究" }, paragraphs: [
        { en: "The launch describes supervised fine-tuning, teacher specialization, Multi-Domain On-Policy Distillation, and agentic reinforcement learning. Domain-specific teachers supervise a student's own rollouts, followed by training in agent environments. The intended progression is from knowing response formats to navigating the states created by tool use.", zh: "公告介绍了监督微调、教师专业化、多领域在线策略蒸馏，以及Agent强化学习的组合。领域教师对学生自身生成的轨迹提供监督，随后在Agent环境中训练。其目标是从掌握回答格式，走向能够处理工具调用后不断变化的环境状态。" },
        { en: "The general lesson is that a small model needs experience with its own mistakes. A static demonstration may show a successful API call but never teach recovery from an empty result or malformed argument. When evaluating a candidate, include those intermediate failures explicitly, rather than testing only ideal examples.", zh: "这一思路的普遍启发是：小模型需要接触自身会犯的错误。一条静态示范也许展示了成功的API调用，却没有教会它如何处理空结果或参数错误。评估候选模型时，应把这些中间故障显式加入测试，而不是只测试理想路径。" }
      ], sources: [1] },
      { heading: { en: "Local inference has a different bill, not no bill", zh: "部署账本：本地推理改变成本结构，不会让成本消失" }, paragraphs: [
        { en: "Removing a per-token API fee leaves device purchase, energy, memory pressure, thermal throttling, and maintenance. For an always-on assistant, measure sustained throughput after the device warms up, time to first token under realistic prompt lengths, and interference with foreground applications. A short peak-speed demonstration is insufficient.", zh: "没有按token支付的API费用之后，仍然存在硬件购置、电力、内存压力、热降频和维护成本。对常驻助手，应测设备升温后的持续吞吐、真实提示长度下的首token延迟，以及它对前台应用的影响。短时间峰值速度不足以说明长期体验。" },
        { en: "Quantization also deserves task-level validation. A compact checkpoint that still writes fluent text may have become less reliable at exact tool names, argument types, or multi-turn state tracking. Compare a higher-precision reference with the intended deployment format on identical traces. Keep model quality and runtime performance as separate measurements.", zh: "量化也需要任务级验证。一个仍然能流畅写作的低精度模型，可能在精确工具名称、参数类型或多轮状态跟踪上已经变差。应使用相同轨迹，对比较高精度参考版本与实际部署格式，并把模型质量和运行时性能分别记录。" }
      ] },
      { heading: { en: "Start with a narrow local workflow", zh: "落地建议：从范围有限的本地工作流开始" }, paragraphs: [
        { en: "A sensible pilot is a local document organizer: classify a file, propose a structured action, and validate that action before applying it. Track incorrect tool calls and abstentions as well as successes. Only add a cloud fallback if the product requires it, and make that boundary visible to users; local weights alone do not guarantee that tools or telemetry keep all data on-device.", zh: "一个合适的试点是本地文档整理：分类文件、提出结构化操作，再验证操作是否符合要求。除了成功案例，也记录错误工具调用和无法完成的情况。只有产品需要时才加入云端回退，并让用户明确知道这条边界；模型权重在本地，并不保证工具和遥测也会把所有数据留在设备上。" }
      ] }
    ],
    sources: [
      { title: "Liquid AI — LFM2.5-2.6B launch and training recipe", date: "2026-08-04", url: "https://www.liquid.ai/blog/lfm2-5-2-6b" },
      { title: "Liquid AI — LFM2.5-2.6B model card", date: "Release documentation; living model card", url: "https://huggingface.co/LiquidAI/LFM2.5-2.6B" },
      { title: "LFM2 Technical Report — architecture background, not the August release", date: "2025-11-28", url: "https://arxiv.org/abs/2511.23404" }
    ]
  },
  {
    slug: "glm53-post-training-environments", date: "2026-08-19",
    title: "GLM-5.3: Scaling Post-Training Means Scaling Environments",
    titleZh: "GLM-5.3解读：后训练扩展的瓶颈正在转向环境与验证器",
    excerpt: "Z.ai's August 14 report keeps the base model fixed and scales post-training. Why executable environments and trustworthy rewards matter more than a headline score.",
    excerptZh: "解读Z.ai 8月14日公告：在基础模型不变的前提下扩展后训练，真正困难的环节是可执行环境、可靠奖励和长程任务评估。",
    tags: ["GLM-5.3", "Reinforcement Learning", "Evaluation", "Coding Agents"], readTime: "6 min",
    sections: [
      { heading: { en: "The news: gains without a new base model", zh: "新闻焦点：基础模型不变，后训练继续扩展" }, paragraphs: [
        { en: "Z.ai announced GLM-5.3 on August 14, attributing its gains over GLM-5.2 to post-training rather than a new base model. The announcement emphasizes more environments, a broader task mix, and more training compute on the existing stack. At this article's August 19 cutoff, public weights were still a future release: the launch promised them roughly two weeks later.", zh: "Z.ai于8月14日发布GLM-5.3，明确表示相对GLM-5.2的提升来自后训练，而不是更换基础模型。公告强调在已有技术栈上增加环境、扩展任务分布并投入更多训练计算。按本文8月19日的专题时点，公开权重仍属于后续计划：公告表示约两周后发布。" },
        { en: "One concrete vendor-reported comparison is Terminal-Bench 3.0, rising from 4.6 to 28.3. This is evidence about the stated evaluation setup, not a measurement of every coding job. Harness configuration and verification rules remain part of the result.", zh: "公告中的一个具体对比是Terminal-Bench 3.0从4.6提升至28.3。这是厂商在特定评测配置下报告的结果，不代表所有代码工作都取得同等提升。运行框架配置和验证规则依然是结果的一部分。" }
      ], sources: [1] },
      { heading: { en: "An environment is more than a prompt", zh: "技术拆解：训练环境不能只有一道提示词" }, paragraphs: [
        { en: "The report describes generating runnable environments with multi-step dependencies and hidden state, using judges to check solvability and verifiers to produce rewards. It also describes checking verifiers against oracle, no-op, and unsolved states. These checks address a central RL failure mode: a reward can be easy to obtain without the intended work being done.", zh: "报告介绍了带有多步依赖和隐藏状态的可运行环境，并用评判流程检查任务是否可解，再由验证器产生奖励。它还提到对验证器检查参考解、空操作和未解决状态。这些步骤针对强化学习中的关键风险：模型可能拿到奖励，却没有完成原本希望它完成的工作。" },
        { en: "My reading is that environment quality becomes a training asset. For a repository task, the reset must reproduce the same starting state, the dependency installation must work, and acceptance must depend on the resulting behavior. If a broken setup is labeled as model failure, the training signal rewards the wrong thing; if a superficial edit passes, it rewards a shortcut.", zh: "我的理解是，环境质量本身成为了训练资产。仓库任务需要可复现的初始状态、能够正常安装的依赖，以及依赖最终行为的验收条件。若环境坏了却被算成模型失败，训练信号就会偏离目标；若表面修改就能通过，奖励的则是捷径。" }
      ], sources: [1] },
      { heading: { en: "Separate improvement from evaluation drift", zh: "评测方法：区分模型提升与测试条件变化" }, paragraphs: [
        { en: "I would keep a fixed evaluation suite outside the environment-generation loop. Freeze tool versions, sampling budgets, time limits, and network access. If an infrastructure bug requires a change, rerun the relevant baselines under the corrected setup. Comparing a new model on repaired tasks against an old model on broken tasks cannot identify the source of a gain.", zh: "我会在环境生成流程之外保留一套固定评测，冻结工具版本、采样预算、时间限制和网络访问条件。若基础设施故障迫使测试发生变化，就在修正后的配置下重跑相关基线。新模型使用修好的任务、旧模型使用坏任务，这样的对比无法区分提升来自哪里。" },
        { en: "Also inspect failure categories: invalid actions, forgotten requirements, weak plans, and verifier mistakes need different remedies. Report accepted task completion alongside total attempts and cost. This is more informative than treating all failed episodes as one scalar penalty.", zh: "还应拆分失败类型：无效操作、遗忘要求、计划不合理和验证器误判，需要不同的改进手段。报告验收通过率时，同时给出总尝试次数和成本，比把所有失败轨迹压成一个惩罚值更有解释力。" }
      ] },
      { heading: { en: "Capability checks must follow post-training", zh: "后训练之后，需要重新评估能力边界" }, paragraphs: [
        { en: "Z.ai also reports stronger cybersecurity capabilities as post-training scales. That observation makes the unchanged base model an insufficient reason to reuse an old risk assessment. For enterprise agents, my recommendation is to repeat authorization-boundary tests after each model update, keep tool permissions narrow, and measure whether the agent stops when evidence or access is missing. Better persistence should not become permission to invent success.", zh: "Z.ai还报告了后训练扩展过程中增强的网络安全能力。这说明“基础模型没变”不足以成为沿用旧能力评估的理由。对企业Agent，我建议每次模型更新后重新测试授权边界，保持工具权限与任务范围相符，并检查证据或访问权限不足时是否能正确停止。更强的持续执行能力，不应变成编造成功的理由。" }
      ], sources: [1] }
    ],
    sources: [
      { title: "Z.ai — GLM-5.3 launch and evaluation methodology", date: "2026-08-14", url: "https://z.ai/blog/glm-5.3" }
    ]
  },
  {
    slug: "fable51-enterprise-agent-evaluation", date: "2026-09-02",
    title: "Claude Fable 5.1: Evaluate the Agent System, Not Just the Model",
    titleZh: "Claude Fable 5.1发布：企业Agent应如何评估能力、成本与数据边界",
    excerpt: "The September 1 announcements connect model capability, safeguards, caching, and enterprise data handling. A practical framework for evaluating the whole system.",
    excerptZh: "从9月1日的模型与企业防护公告出发，讨论为什么模型能力、缓存成本、执行框架和数据处理边界需要放在一起评估。",
    tags: ["Claude Fable 5.1", "Enterprise AI", "Agents", "Evaluation"], readTime: "6 min",
    sections: [
      { heading: { en: "The release is a system-level change", zh: "新闻焦点：发布的不只是一个模型名称" }, paragraphs: [
        { en: "Anthropic's September 1 announcements introduce Claude Fable 5.1 and Mythos 5.1 alongside Enterprise Frontier Safeguards. The model announcement describes Fable and Mythos as the same model with different safeguards and access policies: general availability for Fable, restricted programs for Mythos. Those access conditions matter when interpreting capability claims.", zh: "Anthropic在9月1日的公告中介绍Claude Fable 5.1、Mythos 5.1，以及Enterprise Frontier Safeguards。模型公告表示，Fable和Mythos是同一模型，但防护措施和访问政策不同：Fable普遍开放，Mythos通过受限项目提供。理解能力声明时，必须同时考虑这些访问条件。" },
        { en: "The announcement also discusses lower cache-read costs and estimates workload savings. A percentage reduction in typical spending is not a universal reduction in every token price. How much a deployment saves depends on reusable context, output length, and how many attempts are needed to finish the job.", zh: "公告还讨论了缓存读取费用下降及其带来的工作负载成本预估。典型任务支出降低某个百分比，并不等于所有token单价都按同样幅度下降。实际节省多少，取决于上下文复用、输出长度，以及完成工作所需的尝试次数。" }
      ], sources: [1, 2] },
      { heading: { en: "Reason about a complete task budget", zh: "成本分析：为完整任务建立预算" }, paragraphs: [
        { en: "For planning, split spend into uncached input, cached input, output, tool execution, and retries. Then divide by accepted tasks. This avoids two misleading comparisons: a cheap model that needs repeated repair, and a powerful model whose benchmark result assumes a much larger reasoning budget than the product can afford.", zh: "规划时，可以把支出拆成未缓存输入、缓存输入、输出、工具执行与重试，再除以验收通过的任务数。这样能避免两类误判：便宜模型因反复修补而变贵，以及强模型的评测成绩依赖产品根本承担不起的推理预算。" },
        { en: "A reasonable trial would use short, medium, and long repository tasks under the same wall-clock cap. Record accepted patches, regressions, review effort, and total cost. Keep the harness fixed when comparing model versions, then run a separate experiment for a harness upgrade. Otherwise model and orchestration improvements become impossible to distinguish.", zh: "一个合理的试验是，在相同总时间上限下运行短、中、长三类仓库任务，记录可接受补丁、回归、审阅投入和总成本。比较模型版本时固定执行框架，再单独测试框架升级。否则，模型提升和编排改进就会混在一起。" }
      ] },
      { heading: { en: "Data control requires reading the rollout conditions", zh: "数据边界：需要读清楚推出条件" }, paragraphs: [
        { en: "Anthropic describes EFS as storing data in customer-controlled cloud infrastructure, with a phased rollout beginning later in the fall and interim zero-data-retention access for eligible customers. This is a deployment plan with eligibility conditions, not proof that every account already has the same arrangement.", zh: "Anthropic把EFS描述为将数据存放于客户控制的云基础设施中，计划于秋季稍晚分阶段推出，并为符合条件的客户提供过渡期零数据保留访问。这是一项带有资格条件的部署计划，不能据此认为所有账户已经自动获得同样安排。" },
        { en: "For an enterprise integration, map where prompts, tool results, browser traces, logs, and generated artifacts travel. A model-provider setting covers only part of that path. The product team still needs to specify who can inspect records, how long each component retains them, and which tools can contact external systems.", zh: "企业集成应画清提示词、工具结果、浏览器轨迹、日志和生成产物的流向。模型提供方的某项设置，只覆盖这条链路的一部分。产品团队仍需明确谁能查看记录、各组件保留多久，以及哪些工具能够访问外部系统。" }
      ], sources: [3] },
      { heading: { en: "What I would put in the acceptance report", zh: "验收报告应该回答什么" }, paragraphs: [
        { en: "My acceptance report would separate capability, operational behavior, and data handling. Capability asks whether the output passes independent tests. Operational behavior asks whether the agent recovers from failures without losing constraints. Data handling asks whether the actual configured path matches the intended boundary. A model launch is a good reason to rerun this report; it cannot replace the report.", zh: "我会把验收报告分成能力、运行行为和数据处理三部分。能力回答产物是否通过独立测试；运行行为回答遇到故障后是否能恢复且保留约束；数据处理回答实际配置的链路是否符合预期边界。新模型发布是重跑这份报告的理由，不能替代报告本身。" }
      ] }
    ],
    sources: [
      { title: "Anthropic — Fable 5.1 and Mythos 5.1 announcement", date: "September 2026 launch", url: "https://www.anthropic.com/claude-fable-and-mythos-5-1" },
      { title: "Anthropic — Fable announcement chronology", date: "2026-09-01 entry", url: "https://www.anthropic.com/claude/fable" },
      { title: "Anthropic — Enterprise Frontier Safeguards", date: "2026-09-01", url: "https://www.anthropic.com/news/enterprise-frontier-safeguards" }
    ]
  },
  {
    slug: "gemini38-live-voice-agents", date: "2026-09-16",
    title: "Gemini 3.8 Live: Voice Agents Need Two Clocks",
    titleZh: "Gemini 3.8 Live发布：语音Agent需要同时管理对话与任务两条时间线",
    excerpt: "Google's September 15 launch brings live dialogue and deeper reasoning together. Why interruption, asynchronous tools, and state correctness matter as much as speech quality.",
    excerptZh: "结合9月15日公告与Audio模型卡，分析实时对话、后台工具执行和复杂推理如何协同，以及语音Agent应该如何评测。",
    tags: ["Gemini 3.8 Live", "Voice Agents", "Multimodal", "Real-Time AI"], readTime: "6 min",
    sections: [
      { heading: { en: "The news: dialogue while work continues", zh: "新闻焦点：一边对话，一边执行任务" }, paragraphs: [
        { en: "Google announced Gemini 3.8 Live and Live Extended Thinking on September 15. The launch distinguishes a model aimed at scalable live dialogue from a variant aimed at more complex reasoning. The accompanying Audio model card describes audio, image, video, and text inputs for the Live models, with text and audio outputs.", zh: "Google于9月15日发布Gemini 3.8 Live和Live Extended Thinking。公告区分了面向规模化实时对话的模型，以及面向更复杂推理的版本。配套Audio模型卡描述了Live模型的音频、图像、视频和文本输入，以及文本和音频输出。" },
        { en: "This retrospective focuses on the launch's dialogue and background-work design, not later benchmark updates. A voice assistant must acknowledge the user quickly while external work may take seconds or minutes. Smooth speech and successful task execution are different outcomes, and both need to be measured.", zh: "这篇回顾聚焦发布时的对话与后台执行设计，不引用后续更新的榜单数字。语音助手需要快速回应用户，而外部任务可能持续数秒甚至数分钟。说话流畅与任务完成是两种不同结果，需要分别测量。" }
      ], sources: [1, 2] },
      { heading: { en: "Two clocks: conversation and execution", zh: "架构分析：对话时钟与执行时钟" }, paragraphs: [
        { en: "I find it useful to model two clocks. The conversational clock tracks turn-taking, speech onset, pauses, and interruptions. The execution clock tracks tool requests, pending results, retries, and committed state. A quick acknowledgment belongs to the first clock; a confirmed booking belongs to the second. Confusing them creates false success messages.", zh: "一个有用的设计方法是把系统看成两条时间线。对话时钟管理轮次、开口延迟、停顿和打断；执行时钟管理工具请求、等待结果、重试和已经提交的状态。快速说一句“正在查询”属于前者，确认预订成功属于后者。混淆两者，就容易把进度口播误当成任务成功。" },
        { en: "For example, a user may change a requested time while a search is running. The system needs a request identifier and a version of the user's intent. When the old result returns, it should be reconciled with the current intent before being spoken or acted on. Faster generation alone does not solve this race.", zh: "例如，查询还在运行时，用户修改了希望预约的时间。系统需要为请求分配标识，并保存用户意图的版本。旧结果返回时，应先与当前意图核对，再决定是否播报或执行。单纯提高生成速度，解决不了这种竞态问题。" }
      ] },
      { heading: { en: "Interruption must have explicit semantics", zh: "交互设计：被打断之后，后台工作怎么办" }, paragraphs: [
        { en: "Stopping speech, cancelling a model turn, and cancelling an external action are separate operations. In a prototype, I would represent an action as proposed, pending, committed, failed, or cancelled. An interrupted response should never silently imply that a committed action was undone. Conversely, a cancelled task should not continue making changes merely because a tool call is already in flight.", zh: "停止播音、终止模型的一轮生成，以及取消外部操作，是三个不同动作。在原型中，可以把操作状态明确分为待确认、执行中、已提交、失败和已取消。回复被打断，不应让用户误以为已经提交的操作也被撤回；反过来，用户取消任务后，也不应仅因工具调用已经发出就继续悄悄修改状态。" },
        { en: "This suggests using idempotency keys for repeatable requests, explicit reconciliation after timeouts, and a visible action history when the product supports consequential changes. These are system-design recommendations, not claims that the model provides transaction guarantees by itself.", zh: "因此，对于可能重试的请求，应考虑幂等键；超时后需要状态核对；当产品涉及实际状态变化时，应提供可查看的操作记录。这些是系统设计建议，不能当成模型本身已经提供事务保证。" }
      ] },
      { heading: { en: "Build a voice-specific evaluation", zh: "评测方法：不要只测转写或回答正确率" }, paragraphs: [
        { en: "A useful test suite would include interruptions, background noise, corrections halfway through a tool call, slow dependencies, and a failed action after a confident acknowledgment. Measure response latency distributions, interruption recovery, factual consistency with tool state, and accepted end-to-end tasks. Human listeners should separately judge whether progress narration is helpful or distracting.", zh: "一套有用的测试应包含打断、背景噪声、工具调用中途改口、依赖服务缓慢，以及口头确认之后实际操作失败。指标应覆盖响应延迟分布、打断恢复、播报与工具状态的一致性，以及端到端任务验收率。还应让听众单独评价进度口播究竟有帮助，还是制造干扰。" },
        { en: "The model card is the right place to begin reading about evaluated capabilities and limitations; the application's own traces are where deployment quality must be established. For me, the key opportunity in live models is a better interaction loop, provided the system always knows the difference between saying it is working and proving the work is complete.", zh: "模型卡适合用来了解已评估的能力与局限，而应用自己的运行轨迹才是判断部署质量的依据。实时模型的重要机会在于改善交互循环，前提是系统始终分得清：说“正在处理”和证明“已经完成”之间的区别。" }
      ], sources: [2] }
    ],
    sources: [
      { title: "Google — Gemini 3.8 Live launch", date: "2026-09-15; page subsequently updated 2026-09-17", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/" },
      { title: "Google DeepMind — Gemini 3.8 Audio model card", date: "2026-09-15", url: "https://deepmind.google/models/model-cards/gemini-3-8-audio/" }
    ]
  }
];
