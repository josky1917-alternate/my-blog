"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  titleZh: string;
  date: string;
  excerpt: string;
  excerptZh: string;
  tags: string[];
  readTime: string;
}

const posts: Post[] = [
  {
    slug: "claude-opus-47-issues",
    title: "Claude Opus 4.7: A Serious Performance Regression?",
    titleZh: "Claude Opus 4.7：严重的性能倒退？",
    date: "2025-04-19",
    excerpt: "Claude Opus 4.7, released by Anthropic on April 16, 2025, has been met with widespread user complaints about performance degradation, hallucinations, and increased costs. This article analyzes the reported issues and their implications for AI reliability.",
    excerptZh: "Anthropic于2025年4月16日发布的Claude Opus 4.7遭遇了广泛的用户投诉，涉及性能退化、幻觉和成本增加。本文分析了报告的问题及其对AI可靠性的影响。",
    tags: ["Anthropic", "Claude", "Performance Issues"],
    readTime: "10 min",
  },
  {
    slug: "llm-landscape-april-2025",
    title: "LLM Landscape in April 2025: GPT-4o Takes Over, Meta Releases Llama 4",
    titleZh: "2025年4月LLM动态：GPT-4o全面接管，Meta发布Llama 4",
    date: "2025-04-10",
    excerpt: "April 2025 marks a pivotal month in the large language model industry. OpenAI begins phasing out GPT-4 in favor of GPT-4o, Meta launches the highly anticipated Llama 4 family, and Google pushes forward with Gemini 2.5.",
    excerptZh: "2025年4月是大语言模型行业的关键月份。OpenAI开始逐步淘汰GPT-4，转而采用GPT-4o；Meta发布了备受期待的Llama 4系列；Google则推进了Gemini 2.5的发展。",
    tags: ["LLM", "OpenAI", "Meta", "Google", "Industry News"],
    readTime: "8 min",
  },
  {
    slug: "claude-code-source-leak-2026",
    title: "Claude Code Source Code Leak: Anatomy of a $2.5 Billion Mistake",
    titleZh: "Claude Code 源代码泄露：一场价值25亿美元的错误解剖",
    date: "2026-03-31",
    excerpt: "On March 31, 2026, Anthropic's Claude Code suffered a catastrophic source code leak. Approximately 512,000 lines of TypeScript code were exposed. This article examines the incident's timeline, technical details, and far-reaching implications.",
    excerptZh: "2026年3月31日，Anthropic的Claude Code遭遇了灾难性的源代码泄露。约51.2万行TypeScript代码被暴露。本文深入剖析这一事件的时间线、技术细节以及深远影响。",
    tags: ["Breaking News", "Security", "Anthropic"],
    readTime: "15 min",
  },
  {
    slug: "ai-agent-2026-trends",
    title: "AI Agent 2026: From Tools to Colleagues",
    titleZh: "AI Agent 2026：从工具到同事的进化",
    date: "2026-03-25",
    excerpt: "With the release of Claude 4 and GPT-5, AI Agents are evolving from simple task executors to true intelligent colleagues. This article explores the impact on software engineering.",
    excerptZh: "随着Claude 4和GPT-5的发布，AI Agent正在从简单的任务执行者进化为真正的智能同事。本文探讨这一转变对软件工程的影响。",
    tags: ["AI Agent", "Trends", "Claude"],
    readTime: "7 min",
  },
  {
    slug: "gemini-2-pro-analysis",
    title: "Gemini 2 Pro Deep Dive: Google's Comeback",
    titleZh: "Gemini 2 Pro 深度评测：Google的反击",
    date: "2026-03-18",
    excerpt: "Google Gemini 2 Pro is officially released, excelling in multimodal understanding and long context. This article compares its performance with GPT-5 and Claude 4.",
    excerptZh: "Google Gemini 2 Pro正式发布，在多模态理解和长上下文方面表现突出。本文对比测试了其与GPT-5和Claude 4的性能差异。",
    tags: ["Gemini", "Review", "Multimodal"],
    readTime: "8 min",
  },
  {
    slug: "llm-reasoning-breakthrough",
    title: "LLM Reasoning: Breakthroughs and Limitations",
    titleZh: "大模型推理能力的突破与局限",
    date: "2026-03-10",
    excerpt: "OpenAI's o3 model reaches new heights in mathematical reasoning, but common-sense reasoning still falls short. This article analyzes the boundaries of current LLM reasoning capabilities.",
    excerptZh: "OpenAI的o3模型在数学推理上达到新高度，但常识推理仍有不足。本文分析当前LLM推理能力的边界和未来方向。",
    tags: ["Reasoning", "o3", "OpenAI"],
    readTime: "6 min",
  },
  {
    slug: "ai-coding-2026",
    title: "AI Coding Assistants 2026: From Copilot to Architect",
    titleZh: "AI编程助手2026：从Copilot到架构师",
    date: "2026-03-05",
    excerpt: "AI coding tools like Cursor and Windsurf are transforming software development workflows. This article shares my experience using AI coding assistants in real projects.",
    excerptZh: "Cursor和Windsurf等AI编程工具正在改变软件开发流程。本文分享我在实际项目中使用AI编程助手的经验与教训。",
    tags: ["AI Coding", "Cursor", "DevTools"],
    readTime: "9 min",
  },
  {
    slug: "deepseek-r2-review",
    title: "DeepSeek R2: The Rise of Chinese LLMs",
    titleZh: "DeepSeek R2 技术解读：国产大模型的崛起",
    date: "2026-02-28",
    excerpt: "DeepSeek R2 has gained attention for its exceptional cost-performance ratio. This article analyzes its MoE architecture, training strategies, and performance in real-world scenarios.",
    excerptZh: "DeepSeek R2以极高的性价比引发关注。本文深入分析其MoE架构、训练策略和在实际业务场景中的表现。",
    tags: ["DeepSeek", "MoE", "Chinese LLM"],
    readTime: "10 min",
  },
  {
    slug: "multimodal-llm-2026",
    title: "Multimodal LLMs: Vision and Language Fusion",
    titleZh: "多模态大模型：视觉与语言的融合",
    date: "2026-02-20",
    excerpt: "Breakthroughs in image understanding by GPT-5o and Gemini Ultra are enabling new multimodal applications. This article explores multimodal LLMs in e-commerce and content creation.",
    excerptZh: "GPT-5o和Gemini Ultra在图像理解上的突破让多模态应用成为可能。本文探讨多模态LLM在电商和内容创作中的应用。",
    tags: ["Multimodal", "GPT-5o", "Applications"],
    readTime: "7 min",
  },
  {
    slug: "llm-safety-alignment",
    title: "LLM Safety Alignment: Beyond RLHF",
    titleZh: "大模型安全对齐：RLHF之后的路",
    date: "2026-02-14",
    excerpt: "As model capabilities grow, safety alignment becomes increasingly important. This article discusses Constitutional AI, RLAIF, and other new approaches.",
    excerptZh: "随着模型能力增强，安全对齐变得愈发重要。本文讨论Constitutional AI、RLAIF等新方法及其局限性。",
    tags: ["Safety", "Alignment", "RLHF"],
    readTime: "8 min",
  },
  {
    slug: "edge-llm-deployment",
    title: "Edge LLM Deployment Practices",
    titleZh: "边缘端大模型部署实践",
    date: "2026-02-08",
    excerpt: "With Apple Intelligence and Android Gemini advancing, on-device LLMs are becoming mainstream. This article shares experience deploying LLMs on resource-constrained devices.",
    excerptZh: "随着Apple Intelligence和Android Gemini的推进，端侧LLM成为热点。本文分享在资源受限设备上部署LLM的经验。",
    tags: ["Edge Computing", "Mobile", "Deployment"],
    readTime: "9 min",
  },
  {
    slug: "ai-regulation-2026",
    title: "AI Regulation 2026: Global Policy Trends",
    titleZh: "AI监管2026：全球政策走向分析",
    date: "2026-02-01",
    excerpt: "The EU AI Act is fully implemented, and US AI executive orders continue to evolve. This article analyzes AI regulatory trends across major economies.",
    excerptZh: "欧盟AI法案全面实施，美国AI行政令持续更新。本文梳理全球主要经济体的AI监管趋势及其对行业的影响。",
    tags: ["Policy", "Regulation", "AI Act"],
    readTime: "6 min",
  },
  {
    slug: "rag-evolution-2026",
    title: "RAG Evolution: From Vector Search to Knowledge Graphs",
    titleZh: "RAG技术进化：从向量检索到知识图谱",
    date: "2026-01-25",
    excerpt: "Traditional RAG faces challenges in context length and retrieval accuracy. This article introduces GraphRAG, Self-RAG, and their applications in enterprise knowledge bases.",
    excerptZh: "传统RAG面临上下文长度和检索精度的挑战。本文介绍GraphRAG、Self-RAG等新技术及其在企业知识库中的应用。",
    tags: ["RAG", "Knowledge Graph", "Retrieval"],
    readTime: "8 min",
  },
  {
    slug: "llm-economics-2026",
    title: "LLM Economics: After the Token Price War",
    titleZh: "大模型经济学：Token价格战之后",
    date: "2026-01-18",
    excerpt: "The 2025 token price war significantly reduced LLM API costs. This article analyzes the evolution of LLM business models and future monetization paths.",
    excerptZh: "2025年的Token价格战让LLM API成本大幅下降。本文分析大模型商业模式的演变和未来的盈利路径。",
    tags: ["Business Model", "Cost", "API"],
    readTime: "7 min",
  },
  {
    slug: "ai-chip-2026",
    title: "AI Chips 2026: Beyond NVIDIA",
    titleZh: "AI芯片2026：英伟达之外的选择",
    date: "2026-01-12",
    excerpt: "Google TPU v6, AMD MI350, and Amazon Trainium3 have been released. This article compares the advantages and trade-offs of different AI chips.",
    excerptZh: "Google TPU v6、AMD MI350、Amazon Trainium3相继发布。本文对比分析不同AI芯片的优劣势和适用场景。",
    tags: ["AI Chips", "TPU", "Hardware"],
    readTime: "9 min",
  },
  {
    slug: "llm-test-time-scaling-2025",
    title: "Test-Time Scaling: The Most Important Trend of 2025",
    titleZh: "Test-Time Scaling：2025年最重要的技术趋势",
    date: "2025-12-28",
    excerpt: "OpenAI's o1 and o3 series proved the effectiveness of test-time compute scaling. This article reviews the development of this technical approach.",
    excerptZh: "OpenAI o1和o3系列证明了测试时计算扩展的有效性。本文回顾这一技术路线的发展并展望未来。",
    tags: ["Test-Time Scaling", "o1", "Trends"],
    readTime: "8 min",
  },
  {
    slug: "openai-12-days",
    title: "OpenAI 12 Days of Shipmas: A Review",
    titleZh: "OpenAI 12天发布会回顾与思考",
    date: "2025-12-20",
    excerpt: "OpenAI's 12 consecutive days of releases brought o3, official Sora, and more. This article analyzes the impact of each announcement on the industry.",
    excerptZh: "OpenAI的12天连续发布带来了o3、Sora正式版等重要更新。本文逐一分析这些发布对行业的影响。",
    tags: ["OpenAI", "o3", "Sora"],
    readTime: "10 min",
  },
  {
    slug: "google-willow-quantum",
    title: "Google Willow: AI Meets Quantum Computing",
    titleZh: "Google Willow量子芯片：AI与量子计算的结合",
    date: "2025-12-15",
    excerpt: "Google released the Willow quantum chip with breakthroughs in quantum error correction. This article explores the potential impact of quantum computing on AI.",
    excerptZh: "Google发布Willow量子芯片，在量子纠错上取得突破。本文探讨量子计算对AI训练和未来计算的潜在影响。",
    tags: ["Quantum", "Willow", "Google"],
    readTime: "7 min",
  },
  {
    slug: "claude-3.5-sonnet-analysis",
    title: "Claude 3.5 Sonnet: Anthropic's Steady Progress",
    titleZh: "Claude 3.5 Sonnet：Anthropic的稳步前进",
    date: "2025-12-08",
    excerpt: "Claude 3.5 Sonnet excels in coding and reasoning tasks. This article analyzes its technical features and compares it with GPT-4o.",
    excerptZh: "Claude 3.5 Sonnet在编程和推理任务上表现出色。本文深入分析其技术特点和与GPT-4o的对比。",
    tags: ["Claude", "Anthropic", "Review"],
    readTime: "8 min",
  },
  {
    slug: "sora-official-release",
    title: "Sora Official Release: Video Generation Enters a New Era",
    titleZh: "Sora正式版发布：视频生成进入新纪元",
    date: "2025-12-02",
    excerpt: "OpenAI officially released the Sora video generation model. This article tests its generation quality, controllability, and impact on creative industries.",
    excerptZh: "OpenAI正式发布Sora视频生成模型。本文测试了其生成质量、可控性，并探讨对创意产业的影响。",
    tags: ["Sora", "Video Generation", "OpenAI"],
    readTime: "9 min",
  },
  {
    slug: "llm-long-context",
    title: "Long Context LLMs: From 128K to Infinity",
    titleZh: "长上下文大模型：从128K到无限",
    date: "2025-11-25",
    excerpt: "Gemini 1.5 Pro supports 2M token context, Claude 3.5 supports 200K. This article explores long context technology and applications.",
    excerptZh: "Gemini 1.5 Pro支持200万token上下文，Claude 3.5支持20万。本文探讨长上下文技术的实现和应用场景。",
    tags: ["Long Context", "Gemini", "Claude"],
    readTime: "7 min",
  },
  {
    slug: "ai-scientific-discovery",
    title: "AI for Science: Beyond AlphaFold",
    titleZh: "AI for Science：AlphaFold之后的突破",
    date: "2025-11-18",
    excerpt: "AI continues to break through in materials discovery, drug design, and mathematical proofs. This article reviews 2025's major advances in AI for Science.",
    excerptZh: "AI在材料发现、药物设计、数学证明等领域持续突破。本文梳理2025年AI for Science的重要进展。",
    tags: ["AI4Science", "AlphaFold", "Research"],
    readTime: "8 min",
  },
  {
    slug: "nvidia-blackwell-analysis",
    title: "NVIDIA Blackwell: The New Standard for AI Training",
    titleZh: "NVIDIA Blackwell架构解析：AI训练的新标杆",
    date: "2025-11-12",
    excerpt: "NVIDIA released the Blackwell architecture with FP4 precision and 2nd gen Transformer Engine. This article analyzes its impact on large model training.",
    excerptZh: "NVIDIA发布Blackwell架构，FP4精度和第二代Transformer引擎引人注目。本文分析其对大模型训练的影响。",
    tags: ["NVIDIA", "Blackwell", "GPU"],
    readTime: "9 min",
  },
  {
    slug: "meta-llama-3.2-review",
    title: "Meta Llama 3.2: Open Source Multimodal Choice",
    titleZh: "Meta Llama 3.2：开源多模态的新选择",
    date: "2025-11-05",
    excerpt: "Llama 3.2 adds vision capabilities and on-device deployment. This article reviews its performance and explores open source model business models.",
    excerptZh: "Llama 3.2增加了视觉能力，支持端侧部署。本文评测其性能并探讨开源模型的商业模式。",
    tags: ["Llama", "Meta", "Open Source"],
    readTime: "8 min",
  },
  {
    slug: "apple-intelligence-review",
    title: "Apple Intelligence: Privacy-First AI",
    titleZh: "Apple Intelligence 体验：隐私优先的AI",
    date: "2025-10-28",
    excerpt: "iOS 18.1 brings Apple Intelligence features. This article tests the experience on iPhone and Mac, analyzing the pros and cons of on-device AI.",
    excerptZh: "iOS 18.1正式版带来Apple Intelligence功能。本文实测其在iPhone和Mac上的体验，分析端侧AI的优缺点。",
    tags: ["Apple", "On-Device AI", "Privacy"],
    readTime: "7 min",
  },
  {
    slug: "nobel-prize-ai-2024",
    title: "Nobel Prize and AI: Lessons from Hinton and AlphaFold",
    titleZh: "诺贝尔奖与AI：Hinton和AlphaFold的启示",
    date: "2025-10-20",
    excerpt: "The 2024 Nobel Prizes in Physics and Chemistry were awarded to AI-related research. This article discusses the significance of this milestone.",
    excerptZh: "2024年诺贝尔物理学奖和化学奖都授予了AI相关研究。本文讨论这一里程碑事件的意义和对AI研究的影响。",
    tags: ["Nobel Prize", "Hinton", "AlphaFold"],
    readTime: "6 min",
  },
  {
    slug: "gpt-4o-audio-analysis",
    title: "GPT-4o Native Audio: New Heights in Voice Interaction",
    titleZh: "GPT-4o 原生音频：语音交互的新高度",
    date: "2025-10-15",
    excerpt: "GPT-4o's native audio capabilities make voice interaction more natural. This article tests its performance in real-time conversation and emotional expression.",
    excerptZh: "GPT-4o的原生音频能力让语音交互更加自然。本文测试其在实时对话、情感表达等方面的表现。",
    tags: ["GPT-4o", "Voice", "Multimodal"],
    readTime: "7 min",
  },
  {
    slug: "ai-agent-autonomous",
    title: "Autonomous AI Agents: From AutoGPT to Practical Use",
    titleZh: "自主AI Agent：从AutoGPT到实用化",
    date: "2025-10-08",
    excerpt: "After the AutoGPT hype, a new generation of more practical Agent frameworks has emerged. This article analyzes the evolution of this field.",
    excerptZh: "早期AI Agent项目如AutoGPT hype过后，新一代更实用的Agent框架涌现。本文分析这一领域的演进。",
    tags: ["AI Agent", "AutoGPT", "Automation"],
    readTime: "8 min",
  },
  {
    slug: "llm-fine-tuning-2025",
    title: "LLM Fine-tuning 2025: New Methods Beyond LoRA",
    titleZh: "大模型微调2025：LoRA之后的新方法",
    date: "2025-09-28",
    excerpt: "DoRA, PiSSA and other new fine-tuning methods surpass LoRA in efficiency and effectiveness. This article compares various fine-tuning techniques.",
    excerptZh: "DoRA、PiSSA等新微调方法在效率和效果上超越LoRA。本文对比测试各种微调技术的适用场景。",
    tags: ["Fine-tuning", "LoRA", "DoRA"],
    readTime: "9 min",
  },
  {
    slug: "openai-o1-preview",
    title: "OpenAI o1-preview: The Debut of Reasoning Models",
    titleZh: "OpenAI o1-preview：推理模型的首秀",
    date: "2025-09-20",
    excerpt: "OpenAI released o1-preview, enhancing reasoning capabilities through reinforcement learning. This article tests its performance on math, coding, and science problems.",
    excerptZh: "OpenAI发布o1-preview，通过强化学习增强推理能力。本文测试其在数学、编程、科学问题上的表现。",
    tags: ["o1", "Reasoning", "OpenAI"],
    readTime: "8 min",
  },
  {
    slug: "mistral-large-2-review",
    title: "Mistral Large 2: Europe's AI Pride",
    titleZh: "Mistral Large 2：欧洲AI的骄傲",
    date: "2025-09-12",
    excerpt: "Mistral released Large 2, excelling in multilingual and coding capabilities. This article reviews and compares it with Llama 3.1.",
    excerptZh: "Mistral发布Large 2模型，在多语言和代码能力上表现出色。本文评测并与Llama 3.1对比。",
    tags: ["Mistral", "Europe", "Review"],
    readTime: "7 min",
  },
  {
    slug: "ai-infrastructure-2025",
    title: "AI Infrastructure 2025: From Training to Inference Optimization",
    titleZh: "AI基础设施2025：从训练到推理的优化",
    date: "2025-09-05",
    excerpt: "As model scales grow, AI infrastructure faces new challenges. This article discusses training cluster optimization and inference service architecture.",
    excerptZh: "随着模型规模增长，AI基础设施面临新挑战。本文讨论训练集群优化、推理服务架构等话题。",
    tags: ["Infrastructure", "Systems", "Optimization"],
    readTime: "10 min",
  },
  {
    slug: "llm-hallucination-mitigation",
    title: "LLM Hallucination Mitigation: Progress and Limitations",
    titleZh: "大模型幻觉缓解：技术进展与局限",
    date: "2025-08-28",
    excerpt: "Hallucination remains a major issue for LLMs. This article reviews retrieval augmentation, fact-checking, and confidence estimation methods.",
    excerptZh: "幻觉仍是LLM的主要问题之一。本文梳理检索增强、事实核查、置信度估计等缓解方法的效果。",
    tags: ["Hallucination", "RAG", "Reliability"],
    readTime: "8 min",
  },
  {
    slug: "hello-world",
    title: "Hello World - Welcome to My Blog",
    titleZh: "Hello World - 欢迎来到我的博客",
    date: "2025-03-28",
    excerpt: "This is my first blog post. Here, I will share technical articles about AI, machine learning, and software engineering, as well as personal learning insights.",
    excerptZh: "这是我的第一篇博客文章。在这里，我将分享关于AI、机器学习、软件工程的技术文章，以及个人的学习心得和生活感悟。",
    tags: ["Essay", "Introduction"],
    readTime: "2 min",
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
          {t("Exploring Tech & Thoughts", "探索技术与思考")}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {t(
            "Sharing insights on AI, Machine Learning, and Software Engineering",
            "分享AI、机器学习、软件工程的技术文章，以及个人的学习心得"
          )}
        </p>
      </section>

      {/* Tags Filter */}
      <section className="flex flex-wrap justify-center gap-2">
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 cursor-pointer">
          All
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          AI
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          LLM
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          Inference
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          Paper Review
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          Essay
        </span>
      </section>

      {/* Posts List */}
      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="w-1 h-8 rounded-full bg-gradient-to-b from-blue-500 to-purple-500"></span>
          Latest Posts
        </h2>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="card-hover group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300"
                  >
                    <Tag size={12} className="inline mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link href={`/posts/${post.slug}`}>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t(post.title, post.titleZh)}
                </h3>
              </Link>
              
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                {t(post.excerpt, post.excerptZh)}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                
                <Link 
                  href={`/posts/${post.slug}`}
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                >
                  Read more
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter / Subscribe Section */}
      <section className="gradient-border">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Get notified when new articles are published
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
