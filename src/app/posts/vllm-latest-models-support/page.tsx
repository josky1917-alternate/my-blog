"use client";

import { useLanguage } from "../../context/LanguageContext";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PostPage() {
  const { t } = useLanguage();

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        {t("Back to Home", "返回首页")}
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            VLLM
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
            Model Support
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
            DeepSeek
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          {t(
            "VLLM and the Latest Models: DeepSeek V4, Llama 4, and Beyond",
            "VLLM与最新模型：DeepSeek V4、Llama 4及更多"
          )}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>June 24, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{t("12 min read", "12分钟阅读")}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-6">
          {t(
            "As large language models evolve at breakneck speed, inference engines must adapt quickly to support new architectures. VLLM has established itself as the go-to solution for serving cutting-edge models. This article explores how VLLM supports the latest models, with deep dives into DeepSeek V4 Pro, Llama 4, and the technical innovations enabling these integrations.",
            "随着大语言模型以惊人的速度发展，推理引擎必须快速适应以支持新架构。VLLM已成为服务尖端模型的首选解决方案。本文探讨VLLM如何支持最新模型，深入分析DeepSeek V4 Pro、Llama 4以及支持这些集成的技术创新。"
          )}
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("The Challenge: Supporting Diverse Model Architectures", "挑战：支持多样化的模型架构")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "Modern LLMs are far from monolithic. They employ various architectural innovations: Mixture of Experts (MoE), hybrid attention mechanisms, multimodal capabilities, and specialized quantization schemes. Each requires specific optimizations in the inference engine.",
            "现代LLM远非单一。它们采用各种架构创新：专家混合（MoE）、混合注意力机制、多模态能力和专门的量化方案。每个都需要推理引擎中的特定优化。"
          )}
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
          <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
            {t("Why Model Support is Complex", "为什么模型支持很复杂")}
          </h4>
          <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200 text-sm">
            <li>{t("Different attention implementations (standard, sliding window, sparse)", "不同的注意力实现（标准、滑动窗口、稀疏）")}</li>
            <li>{t("MoE architectures with varying expert routing strategies", "具有不同专家路由策略的MoE架构")}</li>
            <li>{t("Multimodal fusion techniques (early, late, intermediate)", "多模态融合技术（早期、晚期、中间）")}</li>
            <li>{t("Custom positional encodings (RoPE, ALiBi, etc.)", "自定义位置编码（RoPE、ALiBi等）")}</li>
            <li>{t("Specialized quantization requirements (AWQ, GPTQ, FP8)", "专门的量化要求（AWQ、GPTQ、FP8）")}</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("DeepSeek V4 Pro: A Technical Deep Dive", "DeepSeek V4 Pro：技术深度解析")}
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("What is DeepSeek V4 Pro?", "什么是DeepSeek V4 Pro？")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "DeepSeek V4 Pro represents a significant advancement in LLM architecture. Released in April 2026, it introduces several innovations that push the boundaries of efficient long-context modeling.",
            "DeepSeek V4 Pro代表了LLM架构的重大进步。于2026年4月发布，它引入了几项创新，推动了高效长上下文建模的边界。"
          )}
        </p>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">
            {t("DeepSeek V4 Pro Key Specifications", "DeepSeek V4 Pro关键规格")}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-slate-900 dark:text-white mb-2">{t("Architecture", "架构")}</h5>
              <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>{t("Mixture of Experts (MoE)", "专家混合（MoE）")}</li>
                <li>{t("Hybrid attention mechanism", "混合注意力机制")}</li>
                <li>{t("Up to 1 million token context", "高达100万token上下文")}</li>
                <li>{t("Sparse attention for long contexts", "长上下文稀疏注意力")}</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900 dark:text-white mb-2">{t("Efficiency Features", "效率特性")}</h5>
              <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>{t("Dynamic expert routing", "动态专家路由")}</li>
                <li>{t("Layer-wise sparsity patterns", "逐层稀疏模式")}</li>
                <li>{t("Optimized KV cache management", "优化的KV缓存管理")}</li>
                <li>{t("Quantization-aware training", "量化感知训练")}</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Hybrid Attention Architecture", "混合注意力架构")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "DeepSeek V4 Pro's most distinctive feature is its hybrid attention mechanism. Unlike standard transformers that use full attention throughout, DeepSeek V4 Pro employs different attention strategies at different layers and for different context ranges.",
            "DeepSeek V4 Pro最独特的特性是其混合注意力机制。与在整个过程中使用全注意力的标准transformer不同，DeepSeek V4 Pro在不同的层和不同的上下文范围采用不同的注意力策略。"
          )}
        </p>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
          <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">
            {t("Hybrid Attention Strategy", "混合注意力策略")}
          </h4>
          <ul className="list-disc list-inside space-y-2 text-green-800 dark:text-green-200 text-sm">
            <li>
              <strong>{t("Local Attention", "局部注意力")}:</strong> {t("Sliding window attention for nearby tokens (4K window). Captures local patterns efficiently.", "邻近token的滑动窗口注意力（4K窗口）。高效捕获局部模式。")}
            </li>
            <li>
              <strong>{t("Sparse Global Attention", "稀疏全局注意力")}:</strong> {t("Sparse attention patterns for long-range dependencies. Reduces O(n²) complexity.", "长距离依赖的稀疏注意力模式。降低O(n²)复杂度。")}
            </li>
            <li>
              <strong>{t("Full Attention Layers", "全注意力层")}:</strong> {t("Selected layers use full attention for critical reasoning steps.", "选定的层使用全注意力进行关键推理步骤。")}
            </li>
          </ul>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <pre className="text-xs overflow-x-auto">
{`
DeepSeek V4 Pro Attention Pattern:

Layer 0-3:   [Local] → [Local] → [Local] → [Local]
Layer 4-7:   [Local] → [Sparse] → [Local] → [Sparse]
Layer 8-11:  [Sparse] → [Full] → [Sparse] → [Full]
Layer 12-15: [Local] → [Sparse] → [Local] → [Sparse]
Layer 16-19: [Local] → [Local] → [Local] → [Local]

Where:
- Local: Sliding window (4K tokens)
- Sparse: Sparse global attention
- Full: Standard full attention

This pattern:
- Reduces computation by ~60% for 128K context
- Maintains performance on long-context tasks
- Enables 1M token context with reasonable latency
`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("How VLLM Supports DeepSeek V4 Pro", "VLLM如何支持DeepSeek V4 Pro")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "VLLM announced support for DeepSeek V4 on April 24, 2026. The implementation required several architectural adaptations to handle the hybrid attention and MoE components efficiently.",
            "VLLM于2026年4月24日宣布支持DeepSeek V4。该实现需要几个架构适配来高效处理混合注意力和MoE组件。"
          )}
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-2">1. {t("Hybrid Attention Kernels", "混合注意力内核")}</h4>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              {t("VLLM implemented custom CUDA kernels that can switch between local, sparse, and full attention patterns within the same model execution. This avoids the overhead of multiple kernel launches.", 
              "VLLM实现了自定义CUDA内核，可以在同一模型执行中在局部、稀疏和全注意力模式之间切换。这避免了多次内核启动的开销。")}
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
            <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">2. {t("MoE Expert Routing Optimization", "MoE专家路由优化")}</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {t("Dynamic expert routing requires efficient memory management. VLLM's PagedAttention was extended to handle non-uniform expert activation patterns, loading only active experts into GPU memory.", 
              "动态专家路由需要高效的内存管理。VLLM的PagedAttention被扩展以处理非均匀专家激活模式，仅将活跃专家加载到GPU内存中。")}
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4">
            <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-2">3. {t("Long Context KV Cache Management", "长上下文KV缓存管理")}</h4>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              {t("For 1M token contexts, VLLM implements hierarchical KV cache eviction strategies. Less frequently accessed tokens are offloaded to CPU memory while keeping hot tokens on GPU.", 
              "对于100万token上下文，VLLM实现了分层KV缓存驱逐策略。访问频率较低的token被卸载到CPU内存，同时保持热token在GPU上。")}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Llama 4: Day-Zero Support", "Llama 4：首日支持")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "Meta's Llama 4 release in April 2025 marked a significant milestone for open-source AI. VLLM provided "Day 0" support, enabling immediate inference of Llama 4 models including Scout and Maverick variants.",
            "Meta于2025年4月发布的Llama 4标志着开源AI的重要里程碑。VLLM提供了"首日"支持，实现了Llama 4模型（包括Scout和Maverick变体）的即时推理。"
          )}
        </p>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Llama 4 Architecture Highlights", "Llama 4架构亮点")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Llama 4 Scout</h4>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>{t("17B active parameters, 16 experts", "170亿活跃参数，16个专家")}</li>
              <li>{t("10M context window", "1000万上下文窗口")}</li>
              <li>{t("Multimodal (text + image)", "多模态（文本+图像）")}</li>
              <li>{t("Efficient for deployment", "适合部署的高效模型")}</li>
            </ul>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Llama 4 Maverick</h4>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>{t("17B active parameters, 128 experts", "170亿活跃参数，128个专家")}</li>
              <li>{t("1M context window", "100万上下文窗口")}</li>
              <li>{t("Higher reasoning capabilities", "更强的推理能力")}</li>
              <li>{t("Dense MoE architecture", "密集MoE架构")}</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("VLLM Optimizations for Llama 4", "VLLM对Llama 4的优化")}
        </h3>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
          <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">
            {t("Key Optimizations", "关键优化")}
          </h4>
          <ul className="list-disc list-inside space-y-2 text-green-800 dark:text-green-200 text-sm">
            <li>
              <strong>{t("FP8 Quantization Support", "FP8量化支持")}:</strong> {t("Native FP8 inference for Llama 4, reducing memory by 50% with minimal accuracy loss", "Llama 4的原生FP8推理，内存减少50%，精度损失最小")}
            </li>
            <li>
              <strong>{t("Expert Parallelism", "专家并行")}:</strong> {t("Efficient distribution of MoE experts across multiple GPUs", "跨多个GPU高效分布MoE专家")}
            </li>
            <li>
              <strong>{t("Multimodal Pipeline", "多模态流水线")}:</strong> {t("Optimized vision encoder integration for image understanding", "图像理解的优化视觉编码器集成")}
            </li>
            <li>
              <strong>{t("10M Context Optimization", "1000万上下文优化")}:</strong> {t("Hierarchical KV cache for extremely long contexts", "极长上下文的分层KV缓存")}
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("VLLM's Model Support Strategy", "VLLM的模型支持策略")}
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("The Modular Architecture Approach", "模块化架构方法")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "VLLM's ability to quickly support new models stems from its modular architecture. Rather than hardcoding model-specific logic, VLLM provides a flexible framework that can adapt to various architectures.",
            "VLLM快速支持新模型的能力源于其模块化架构。VLLM不是硬编码模型特定逻辑，而是提供了一个可以适应各种架构的灵活框架。"
          )}
        </p>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <pre className="text-xs overflow-x-auto">
{`
VLLM Model Support Architecture:

┌─────────────────────────────────────────────────────────┐
│                    Model Registry                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐ │
│  │   Config    │  │   Attention │  │   MoE Routing   │ │
│  │   Parser    │  │   Selector  │  │   Handler       │ │
│  └──────┬──────┘  └──────┬──────┘  └────────┬────────┘ │
└─────────┼────────────────┼──────────────────┼──────────┘
          │                │                  │
          └────────────────┴──────────────────┘
                           │
                    ┌──────┴──────┐
                    │  Pluggable  │
                    │  Backends   │
                    └──────┬──────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
    ┌─────▼─────┐   ┌─────▼─────┐   ┌─────▼─────┐
    │  Flash    │   │   XFormers│   │  Custom   │
    │  Attention│   │           │   │  Kernels  │
    └───────────┘   └───────────┘   └───────────┘

Benefits:
- New models only need config file
- Attention patterns are pluggable
- MoE architectures are modular
- Automatic kernel selection
`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Currently Supported Model Types (2025)", "当前支持的模型类型（2025）")}
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Category", "类别")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Models", "模型")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Special Features", "特殊特性")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Dense LLMs", "密集LLM")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Llama 2/3, GPT-2, Mistral</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Standard attention", "标准注意力")}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("MoE Models", "MoE模型")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">DeepSeek V4, Llama 4, Mixtral</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Expert parallelism", "专家并行")}</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Long Context", "长上下文")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">DeepSeek V4, Llama 4 Scout</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("1M+ tokens", "100万+token")}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Multimodal", "多模态")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Llama 4, CLIP variants</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Vision + Text", "视觉+文本")}</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Hybrid Attention", "混合注意力")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">DeepSeek V4 Pro</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Sparse + Dense", "稀疏+密集")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Practical: Running DeepSeek V4 with VLLM", "实践：使用VLLM运行DeepSeek V4")}
        </h2>

        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto mb-6">
          <pre className="text-sm text-slate-100">
{`# Install latest VLLM
pip install vllm --upgrade

# Run DeepSeek V4 Pro with VLLM
python -m vllm.entrypoints.openai.api_server \\
    --model deepseek-ai/DeepSeek-V4-Pro \\
    --tensor-parallel-size 8 \\
    --pipeline-parallel-size 2 \\
    --max-model-len 1048576 \\
    --quantization fp8 \\
    --kv-cache-dtype fp8

# Key parameters:
# --tensor-parallel-size 8: Use 8 GPUs for tensor parallelism
# --pipeline-parallel-size 2: Use 2 pipeline stages
# --max-model-len 1048576: Support 1M token context
# --quantization fp8: Use FP8 quantization
# --kv-cache-dtype fp8: FP8 KV cache for memory efficiency

# Client request
import openai

client = openai.OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="dummy"
)

response = client.chat.completions.create(
    model="deepseek-ai/DeepSeek-V4-Pro",
    messages=[{
        "role": "user",
        "content": "Summarize this 500K token document..."
    }],
    max_tokens=4096
)`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Future Directions", "未来方向")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "As models continue to evolve, VLLM is preparing for several emerging trends:",
            "随着模型继续演进，VLLM正在为几个新兴趋势做准备："
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">{t("State Space Models", "状态空间模型")}</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {t("Integration of Mamba and similar architectures for ultra-long contexts beyond 1M tokens.", 
              "集成Mamba和类似架构，支持超过100万token的超长上下文。")}
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
            <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">{t("Multi-Modal Expansion", "多模态扩展")}</h4>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              {t("Native support for video, audio, and structured data alongside text and images.", 
              "原生支持视频、音频和结构化数据，以及文本和图像。")}
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
            <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">{t("Dynamic Sparsity", "动态稀疏性")}</h4>
            <p className="text-sm text-green-800 dark:text-green-200">
              {t("Runtime selection of model components based on input complexity.", 
              "基于输入复杂度运行时选择模型组件。")}
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded">
            <h4 className="font-semibold text-amber-900 dark:text-amber-300 mb-2">{t("Edge Deployment", "边缘部署")}</h4>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              {t("Optimized kernels for mobile and edge devices with limited compute.", 
              "针对计算有限的移动和边缘设备的优化内核。")}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Conclusion", "结论")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "VLLM's rapid adaptation to support cutting-edge models like DeepSeek V4 Pro and Llama 4 demonstrates the power of its modular, extensible architecture. By providing Day-0 support for new architectures and continuously optimizing for emerging patterns, VLLM has established itself as the essential infrastructure for LLM deployment.",
            "VLLM对支持DeepSeek V4 Pro和Llama 4等尖端模型的快速适应展示了其模块化、可扩展架构的强大功能。通过为新架构提供首日支持并持续优化新兴模式，VLLM已确立自己作为LLM部署必要基础设施的地位。"
          )}
        </p>

        <p className="leading-relaxed">
          {t(
            "For practitioners, understanding how VLLM supports diverse architectures helps in selecting the right deployment strategy and optimizing for specific model characteristics. As the field continues to evolve, VLLM's commitment to rapid model support ensures that the latest innovations are always within reach.",
            "对于从业者来说，理解VLLM如何支持多样化架构有助于选择正确的部署策略并针对特定模型特征进行优化。随着领域继续演进，VLLM对快速模型支持的承诺确保最新的创新始终触手可及。"
          )}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <Tag size={18} className="text-slate-600 dark:text-slate-400" />
          <span className="font-medium text-slate-900 dark:text-white">
            {t("Tags", "标签")}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {["VLLM", "DeepSeek V4", "Llama 4", "MoE", "Model Serving", "LLM Inference", "Hybrid Attention"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </article>
  );
}
