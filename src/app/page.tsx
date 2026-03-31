import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
}

const posts: Post[] = [
  {
    slug: "ai-agent-2026-trends",
    title: "AI Agent 2026：从工具到同事的进化",
    date: "2026-03-25",
    excerpt: "随着Claude 4和GPT-5的发布，AI Agent正在从简单的任务执行者进化为真正的智能同事。本文探讨这一转变对软件工程的影响。",
    tags: ["AI Agent", "趋势", "Claude"],
    readTime: "7 min",
  },
  {
    slug: "gemini-2-pro-analysis",
    title: "Gemini 2 Pro 深度评测：Google的反击",
    date: "2026-03-18",
    excerpt: "Google Gemini 2 Pro正式发布，在多模态理解和长上下文方面表现突出。本文对比测试了其与GPT-5和Claude 4的性能差异。",
    tags: ["Gemini", "评测", "多模态"],
    readTime: "8 min",
  },
  {
    slug: "llm-reasoning-breakthrough",
    title: "大模型推理能力的突破与局限",
    date: "2026-03-10",
    excerpt: "OpenAI的o3模型在数学推理上达到新高度，但常识推理仍有不足。本文分析当前LLM推理能力的边界和未来方向。",
    tags: ["推理", "o3", "OpenAI"],
    readTime: "6 min",
  },
  {
    slug: "ai-coding-2026",
    title: "AI编程助手2026：从Copilot到架构师",
    date: "2026-03-05",
    excerpt: "Cursor和Windsurf等AI编程工具正在改变软件开发流程。本文分享我在实际项目中使用AI编程助手的经验与教训。",
    tags: ["AI编程", "Cursor", "开发工具"],
    readTime: "9 min",
  },
  {
    slug: "deepseek-r2-review",
    title: "DeepSeek R2 技术解读：国产大模型的崛起",
    date: "2026-02-28",
    excerpt: "DeepSeek R2以极高的性价比引发关注。本文深入分析其MoE架构、训练策略和在实际业务场景中的表现。",
    tags: ["DeepSeek", "MoE", "国产模型"],
    readTime: "10 min",
  },
  {
    slug: "multimodal-llm-2026",
    title: "多模态大模型：视觉与语言的融合",
    date: "2026-02-20",
    excerpt: "GPT-5o和Gemini Ultra在图像理解上的突破让多模态应用成为可能。本文探讨多模态LLM在电商和内容创作中的应用。",
    tags: ["多模态", "GPT-5o", "应用"],
    readTime: "7 min",
  },
  {
    slug: "llm-safety-alignment",
    title: "大模型安全对齐：RLHF之后的路",
    date: "2026-02-14",
    excerpt: "随着模型能力增强，安全对齐变得愈发重要。本文讨论Constitutional AI、RLAIF等新方法及其局限性。",
    tags: ["安全", "对齐", "RLHF"],
    readTime: "8 min",
  },
  {
    slug: "edge-llm-deployment",
    title: "边缘端大模型部署实践",
    date: "2026-02-08",
    excerpt: "随着Apple Intelligence和Android Gemini的推进，端侧LLM成为热点。本文分享在资源受限设备上部署LLM的经验。",
    tags: ["边缘计算", "移动端", "部署"],
    readTime: "9 min",
  },
  {
    slug: "ai-regulation-2026",
    title: "AI监管2026：全球政策走向分析",
    date: "2026-02-01",
    excerpt: "欧盟AI法案全面实施，美国AI行政令持续更新。本文梳理全球主要经济体的AI监管趋势及其对行业的影响。",
    tags: ["政策", "监管", "AI法案"],
    readTime: "6 min",
  },
  {
    slug: "rag-evolution-2026",
    title: "RAG技术进化：从向量检索到知识图谱",
    date: "2026-01-25",
    excerpt: "传统RAG面临上下文长度和检索精度的挑战。本文介绍GraphRAG、Self-RAG等新技术及其在企业知识库中的应用。",
    tags: ["RAG", "知识图谱", "检索"],
    readTime: "8 min",
  },
  {
    slug: "llm-economics-2026",
    title: "大模型经济学：Token价格战之后",
    date: "2026-01-18",
    excerpt: "2025年的Token价格战让LLM API成本大幅下降。本文分析大模型商业模式的演变和未来的盈利路径。",
    tags: ["商业模式", "成本", "API"],
    readTime: "7 min",
  },
  {
    slug: "ai-chip-2026",
    title: "AI芯片2026：英伟达之外的选择",
    date: "2026-01-12",
    excerpt: "Google TPU v6、AMD MI350、Amazon Trainium3相继发布。本文对比分析不同AI芯片的优劣势和适用场景。",
    tags: ["AI芯片", "TPU", "硬件"],
    readTime: "9 min",
  },
  {
    slug: "llm-test-time-scaling-2025",
    title: "Test-Time Scaling：2025年最重要的技术趋势",
    date: "2025-12-28",
    excerpt: "OpenAI o1和o3系列证明了测试时计算扩展的有效性。本文回顾这一技术路线的发展并展望未来。",
    tags: ["Test-Time Scaling", "o1", "趋势"],
    readTime: "8 min",
  },
  {
    slug: "openai-12-days",
    title: "OpenAI 12天发布会回顾与思考",
    date: "2025-12-20",
    excerpt: "OpenAI的12天连续发布带来了o3、Sora正式版等重要更新。本文逐一分析这些发布对行业的影响。",
    tags: ["OpenAI", "o3", "Sora"],
    readTime: "10 min",
  },
  {
    slug: "google-willow-quantum",
    title: "Google Willow量子芯片：AI与量子计算的结合",
    date: "2025-12-15",
    excerpt: "Google发布Willow量子芯片，在量子纠错上取得突破。本文探讨量子计算对AI训练和未来计算的潜在影响。",
    tags: ["量子计算", "Willow", "Google"],
    readTime: "7 min",
  },
  {
    slug: "claude-3.5-sonnet-analysis",
    title: "Claude 3.5 Sonnet：Anthropic的稳步前进",
    date: "2025-12-08",
    excerpt: "Claude 3.5 Sonnet在编程和推理任务上表现出色。本文深入分析其技术特点和与GPT-4o的对比。",
    tags: ["Claude", "Anthropic", "评测"],
    readTime: "8 min",
  },
  {
    slug: "sora-official-release",
    title: "Sora正式版发布：视频生成进入新纪元",
    date: "2025-12-02",
    excerpt: "OpenAI正式发布Sora视频生成模型。本文测试了其生成质量、可控性，并探讨对创意产业的影响。",
    tags: ["Sora", "视频生成", "OpenAI"],
    readTime: "9 min",
  },
  {
    slug: "llm-long-context",
    title: "长上下文大模型：从128K到无限",
    date: "2025-11-25",
    excerpt: "Gemini 1.5 Pro支持200万token上下文，Claude 3.5支持20万。本文探讨长上下文技术的实现和应用场景。",
    tags: ["长上下文", "Gemini", "Claude"],
    readTime: "7 min",
  },
  {
    slug: "ai-scientific-discovery",
    title: "AI for Science：AlphaFold之后的突破",
    date: "2025-11-18",
    excerpt: "AI在材料发现、药物设计、数学证明等领域持续突破。本文梳理2025年AI for Science的重要进展。",
    tags: ["AI4Science", "AlphaFold", "科研"],
    readTime: "8 min",
  },
  {
    slug: "nvidia-blackwell-analysis",
    title: "NVIDIA Blackwell架构解析：AI训练的新标杆",
    date: "2025-11-12",
    excerpt: "NVIDIA发布Blackwell架构，FP4精度和第二代Transformer引擎引人注目。本文分析其对大模型训练的影响。",
    tags: ["NVIDIA", "Blackwell", "GPU"],
    readTime: "9 min",
  },
  {
    slug: "meta-llama-3.2-review",
    title: "Meta Llama 3.2：开源多模态的新选择",
    date: "2025-11-05",
    excerpt: "Llama 3.2增加了视觉能力，支持端侧部署。本文评测其性能并探讨开源模型的商业模式。",
    tags: ["Llama", "Meta", "开源"],
    readTime: "8 min",
  },
  {
    slug: "apple-intelligence-review",
    title: "Apple Intelligence 体验：隐私优先的AI",
    date: "2025-10-28",
    excerpt: "iOS 18.1正式版带来Apple Intelligence功能。本文实测其在iPhone和Mac上的体验，分析端侧AI的优缺点。",
    tags: ["Apple", "端侧AI", "隐私"],
    readTime: "7 min",
  },
  {
    slug: "nobel-prize-ai-2024",
    title: "诺贝尔奖与AI：Hinton和AlphaFold的启示",
    date: "2025-10-20",
    excerpt: "2024年诺贝尔物理学奖和化学奖都授予了AI相关研究。本文讨论这一里程碑事件的意义和对AI研究的影响。",
    tags: ["诺贝尔奖", "Hinton", "AlphaFold"],
    readTime: "6 min",
  },
  {
    slug: "gpt-4o-audio-analysis",
    title: "GPT-4o 原生音频：语音交互的新高度",
    date: "2025-10-15",
    excerpt: "GPT-4o的原生音频能力让语音交互更加自然。本文测试其在实时对话、情感表达等方面的表现。",
    tags: ["GPT-4o", "语音", "多模态"],
    readTime: "7 min",
  },
  {
    slug: "ai-agent-autonomous",
    title: "自主AI Agent：从AutoGPT到实用化",
    date: "2025-10-08",
    excerpt: "早期AI Agent项目如AutoGPT hype过后，新一代更实用的Agent框架涌现。本文分析这一领域的演进。",
    tags: ["AI Agent", "AutoGPT", "自动化"],
    readTime: "8 min",
  },
  {
    slug: "llm-fine-tuning-2025",
    title: "大模型微调2025：LoRA之后的新方法",
    date: "2025-09-28",
    excerpt: "DoRA、PiSSA等新微调方法在效率和效果上超越LoRA。本文对比测试各种微调技术的适用场景。",
    tags: ["微调", "LoRA", "DoRA"],
    readTime: "9 min",
  },
  {
    slug: "openai-o1-preview",
    title: "OpenAI o1-preview：推理模型的首秀",
    date: "2025-09-20",
    excerpt: "OpenAI发布o1-preview，通过强化学习增强推理能力。本文测试其在数学、编程、科学问题上的表现。",
    tags: ["o1", "推理", "OpenAI"],
    readTime: "8 min",
  },
  {
    slug: "mistral-large-2-review",
    title: "Mistral Large 2：欧洲AI的骄傲",
    date: "2025-09-12",
    excerpt: "Mistral发布Large 2模型，在多语言和代码能力上表现出色。本文评测并与Llama 3.1对比。",
    tags: ["Mistral", "欧洲", "评测"],
    readTime: "7 min",
  },
  {
    slug: "ai-infrastructure-2025",
    title: "AI基础设施2025：从训练到推理的优化",
    date: "2025-09-05",
    excerpt: "随着模型规模增长，AI基础设施面临新挑战。本文讨论训练集群优化、推理服务架构等话题。",
    tags: ["基础设施", "系统", "优化"],
    readTime: "10 min",
  },
  {
    slug: "llm-hallucination-mitigation",
    title: "大模型幻觉缓解：技术进展与局限",
    date: "2025-08-28",
    excerpt: "幻觉仍是LLM的主要问题之一。本文梳理检索增强、事实核查、置信度估计等缓解方法的效果。",
    tags: ["幻觉", "RAG", "可靠性"],
    readTime: "8 min",
  },
  {
    slug: "hello-world",
    title: "Hello World - 欢迎来到我的博客",
    date: "2025-03-28",
    excerpt: "这是我的第一篇博客文章。在这里，我将分享关于AI、机器学习、软件工程的技术文章，以及个人的学习心得和生活感悟。",
    tags: ["随笔", "介绍"],
    readTime: "2 min",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
          探索技术与思考
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          分享AI、机器学习、软件工程的技术文章，以及个人的学习心得
        </p>
      </section>

      {/* Tags Filter */}
      <section className="flex flex-wrap justify-center gap-2">
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 cursor-pointer">
          全部
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          AI
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          LLM
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          推理优化
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          论文解读
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          随笔
        </span>
      </section>

      {/* Posts List */}
      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="w-1 h-8 rounded-full bg-gradient-to-b from-blue-500 to-purple-500"></span>
          最新文章
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
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                {post.excerpt}
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
                  阅读更多
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
          <h2 className="text-2xl font-bold mb-4">订阅更新</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            有新文章发布时，第一时间通知你
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="输入你的邮箱"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
              订阅
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
