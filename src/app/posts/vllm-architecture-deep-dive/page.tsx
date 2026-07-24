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
            Architecture
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
            Deep Dive
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          {t(
            "VLLM Architecture Deep Dive: From V0 to V1 and Beyond",
            "VLLM架构深度解析：从V0到V1及未来"
          )}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>June 18, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{t("15 min read", "15分钟阅读")}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-6">
          {t(
            "VLLM has evolved from a research project into the industry standard for LLM inference. This article explores its core architectural principles, the revolutionary changes in V1, and the roadmap toward V2. Understanding these internals is crucial for anyone deploying large language models at scale.",
            "VLLM已从研究项目演变为LLM推理的行业标准。本文探讨其核心架构原则、V1中的革命性变化以及通往V2的路线图。对于任何大规模部署大语言模型的人来说，理解这些内部机制至关重要。"
          )}
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Part 1: Core Architectural Principles", "第一部分：核心架构原则")}
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("The Foundation: PagedAttention", "基础：PagedAttention")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "At the heart of VLLM lies PagedAttention, a memory management technique inspired by operating system virtual memory. Traditional LLM serving stores the Key-Value (KV) cache in contiguous memory blocks, leading to significant fragmentation and waste.",
            "VLLM的核心是PagedAttention，这是一种受操作系统虚拟内存启发的内存管理技术。传统的LLM服务将键值（KV）缓存存储在连续的内存块中，导致严重的碎片化和浪费。"
          )}
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
          <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
            {t("How PagedAttention Works", "PagedAttention如何工作")}
          </h4>
          <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200 text-sm">
            <li>{t("KV cache is divided into fixed-size blocks (like OS pages)", "KV缓存被划分为固定大小的块（如操作系统页面）")}</li>
            <li>{t("Blocks are stored non-contiguously in GPU memory", "块以非连续方式存储在GPU内存中")}</li>
            <li>{t("Dynamic allocation: blocks allocated on-demand as sequences grow", "动态分配：随着序列增长按需分配块")}</li>
            <li>{t("Memory sharing: copy-on-write for parallel sampling and beam search", "内存共享：并行采样和束搜索的写时复制")}</li>
          </ul>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <pre className="text-xs overflow-x-auto">
{`
Traditional KV Cache (Wasteful):
┌─────────────────────────────────────┐
│ Seq A: ████████████░░░░░░░░░░░░░░░ │  <- 40% waste
│ Seq B: ████████░░░░░░░░░░░░░░░░░░░ │  <- 60% waste
│ Seq C: ████████████████░░░░░░░░░░░ │  <- 50% waste
└─────────────────────────────────────┘

PagedAttention (Efficient):
Block Table:
Seq A: [Block 0] -> [Block 3] -> [Block 7]
Seq B: [Block 1] -> [Block 4]
Seq C: [Block 2] -> [Block 5] -> [Block 6] -> [Block 8]

Physical GPU Memory:
┌─────────────────────────────────────┐
│ [B0][B1][B2][B3][B4][B5][B6][B7][B8]│  <- Near 0% waste
└─────────────────────────────────────┘
`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Continuous Batching", "连续批处理")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "VLLM employs continuous (or in-flight) batching to maximize GPU utilization. Unlike static batching where all requests must complete before new ones start, VLLM dynamically adds and removes requests from batches.",
            "VLLM采用连续（或飞行中）批处理来最大化GPU利用率。与静态批处理不同（所有请求必须完成后新请求才能开始），VLLM动态地从批次中添加和移除请求。"
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
            <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2">{t("Static Batching", "静态批处理")}</h4>
            <p className="text-xs text-red-800 dark:text-red-200">
              {t("Wait for all requests to complete. Fast requests wait for slow ones. GPU idle time is significant.", 
              "等待所有请求完成。快请求等待慢请求。GPU空闲时间显著。")}
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
            <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">{t("Continuous Batching", "连续批处理")}</h4>
            <p className="text-xs text-green-800 dark:text-green-200">
              {t("New requests join immediately when others finish. GPU stays busy. Higher throughput.", 
              "其他请求完成时新请求立即加入。GPU保持忙碌。更高吞吐量。")}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Part 2: VLLM V0 Architecture", "第二部分：VLLM V0架构")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "The original VLLM architecture (V0) introduced the foundational concepts but had several limitations that V1 addressed. Understanding V0 helps appreciate the improvements in V1.",
            "原始VLLM架构（V0）引入了基础概念，但有一些V1解决的限制。理解V0有助于欣赏V1的改进。"
          )}
        </p>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("V0 Workflow", "V0工作流程")}
        </h3>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <pre className="text-xs overflow-x-auto">
{`
VLLM V0 Architecture:

┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  API Server │────▶│   Engine    │────▶│   Worker    │
│  (AsyncIO)  │     │  (Central)  │     │   (GPU)     │
└─────────────┘     └──────┬──────┘     └─────────────┘
                           │
                    ┌──────┴──────┐
                    │  Scheduler  │
                    │  (FCFS)     │
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │  Block      │
                    │  Manager    │
                    └─────────────┘

Limitations:
1. Synchronous scheduling - CPU waits for GPU
2. Complex tensor-parallel communication
3. Monolithic design
4. Limited CPU/GPU overlap
`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Part 3: VLLM V1 - The Major Rewrite", "第三部分：VLLM V1 - 重大重写")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "Released in January 2025, VLLM V1 marked a comprehensive re-architecture. The core components - scheduler, KV cache manager, worker, sampler, and API server - were rebuilt from scratch while retaining stable elements like model implementations.",
            "2025年1月发布的VLLM V1标志着全面的重新架构。核心组件——调度器、KV缓存管理器、工作器、采样器和API服务器——从头重建，同时保留了模型实现等稳定元素。"
          )}
        </p>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Key V1 Improvements", "V1关键改进")}
        </h3>

        <div className="space-y-4 my-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
            <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">1. {t("Multiprocessing Architecture", "多进程架构")}</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {t("V1 integrates multiprocessing deeply into AsyncLLM, creating isolated EngineCore execution loops. This allows CPU-intensive tasks (tokenization, multimodal processing) to overlap with GPU execution.", 
              "V1将多处理深度集成到AsyncLLM中，创建隔离的EngineCore执行循环。这允许CPU密集型任务（分词、多模态处理）与GPU执行重叠。")}
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
            <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">2. {t("Unified Scheduler", "统一调度器")}</h4>
            <p className="text-sm text-green-800 dark:text-green-200">
              {t("V1 treats prompt and output tokens uniformly. Uses dynamic token budgets per request, enabling chunked prefills, prefix caching, and speculative decoding without strict phase separation.", 
              "V1统一处理提示和输出token。对每个请求使用动态token预算，支持分块预填充、前缀缓存和推测解码，无需严格的阶段分离。")}
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-2">3. {t("Clean Tensor-Parallel Inference", "清晰的张量并行推理")}</h4>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              {t("V1 addresses V0's asymmetric tensor-parallel limitations by caching request states on workers and transmitting only incremental updates (diffs) at each step.", 
              "V1通过在worker上缓存请求状态并仅在每一步传输增量更新（差异）来解决V0的非对称张量并行限制。")}
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4">
            <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-2">4. {t("Async-First Design", "异步优先设计")}</h4>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              {t("CPU prepares inputs for step N+1 while GPU executes step N. This overlap maximizes GPU utilization and throughput.", 
              "CPU为第N+1步准备输入，同时GPU执行第N步。这种重叠最大化GPU利用率和吞吐量。")}
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("V1 Architecture Diagram", "V1架构图")}
        </h3>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <pre className="text-xs overflow-x-auto">
{`
VLLM V1 Architecture:

┌─────────────────────────────────────────────────────────┐
│                    API Server Process                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐ │
│  │   HTTP      │  │ Tokenizer   │  │ Input Processor │ │
│  │   Handler   │  │             │  │ (Multimodal)    │ │
│  └──────┬──────┘  └──────┬──────┘  └────────┬────────┘ │
└─────────┼────────────────┼──────────────────┼──────────┘
          │                │                  │
          └────────────────┴──────────────────┘
                           │
                    ┌──────┴──────┐
                    │  ZMQ Queue  │  <- Async communication
                    └──────┬──────┘
                           │
┌──────────────────────────┼──────────────────────────────┐
│              Engine Core Process                        │
│  ┌───────────────────────┼─────────────────────────┐   │
│  │                       ▼                         │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────┐ │   │
│  │  │  Scheduler  │  │  Block      │  │ Output  │ │   │
│  │  │  (Unified)  │  │  Manager    │  │ Proc    │ │   │
│  │  └──────┬──────┘  └─────────────┘  └────┬────┘ │   │
│  │         │                                │      │   │
│  └─────────┼────────────────────────────────┼──────┘   │
└────────────┼────────────────────────────────┼──────────┘
             │                                │
    ┌────────┴────────┐              ┌───────┴───────┐
    │  GPU Worker 0   │              │  GPU Worker N │
    │  ┌───────────┐  │              │  ┌───────────┐│
    │  │  Model    │  │              │  │  Model    ││
    │  │  Forward  │  │              │  │  Forward  ││
    │  └───────────┘  │              │  └───────────┘│
    └─────────────────┘              └───────────────┘

Key Features:
- CPU and GPU work in parallel
- Tensor-parallel with minimal communication
- Dynamic batching with chunked prefills
- Prefix caching support
`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("V1 Workflow Deep Dive", "V1工作流程深度解析")}
        </h3>

        <div className="space-y-4 my-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
            <div>
              <h5 className="font-semibold">{t("Request Arrival & Preprocessing", "请求到达与预处理")}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("API server receives HTTP request, tokenizes input, processes multimodal data (images, audio). All CPU-intensive work happens here.", 
                "API服务器接收HTTP请求，对输入进行分词，处理多模态数据（图像、音频）。所有CPU密集型工作在这里完成。")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
            <div>
              <h5 className="font-semibold">{t("Async Queue", "异步队列")}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("Preprocessed requests enter ZMQ queue for async handoff to EngineCore. API server immediately ready for next request.", 
                "预处理后的请求进入ZMQ队列，异步移交给EngineCore。API服务器立即准备好处理下一个请求。")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
            <div>
              <h5 className="font-semibold">{t("Unified Scheduling", "统一调度")}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("Scheduler treats prefills and decodes uniformly. Allocates dynamic token budgets. Supports FCFS, priority-based, and custom policies.", 
                "调度器统一处理预填充和解码。分配动态token预算。支持FCFS、基于优先级和自定义策略。")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
            <div>
              <h5 className="font-semibold">{t("GPU Execution", "GPU执行")}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("Workers execute model forward pass with PagedAttention. Tensor-parallel workers communicate via efficient all-reduce operations.", 
                "Worker使用PagedAttention执行模型前向传播。张量并行worker通过高效的全归约操作通信。")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</div>
            <div>
              <h5 className="font-semibold">{t("Streaming Response", "流式响应")}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("Generated tokens stream back to client. Completed sequences removed from batch, new sequences added dynamically.", 
                "生成的token流式返回给客户端。完成的序列从批次中移除，新序列动态添加。")}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Part 4: Toward V2 and Model Runner V2 (MRV2)", "第四部分：通往V2和Model Runner V2 (MRV2)")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "While V2 as a full release is still evolving, Model Runner V2 (MRV2) announced in March 2026 represents the next architectural evolution. It builds on V1's foundations with even more GPU-native execution.",
            "虽然V2作为完整版本仍在演进，但2026年3月宣布的Model Runner V2 (MRV2)代表了下一个架构演进。它在V1的基础上构建了更加GPU原生的执行。"
          )}
        </p>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("MRV2 Key Innovations", "MRV2关键创新")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{t("Persistent Batch V2", "持久批次V2")}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t("Moves bookkeeping from CPU to GPU. Input preparation becomes GPU-native, reducing CPU-GPU synchronization overhead.", 
              "将簿记从CPU移至GPU。输入准备变为GPU原生，减少CPU-GPU同步开销。")}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{t("Zero Synchronization", "零同步")}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t("Async-first design aims for zero sync between CPU and GPU across all models and features. Enables seamless speculative decoding.", 
              "异步优先设计旨在所有模型和功能上实现CPU和GPU之间的零同步。实现无缝推测解码。")}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{t("Hybrid Allocator", "混合分配器")}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t("Minimizes fragmentation, improves memory reuse. Different allocation/eviction algorithms for various KV cache architectures.", 
              "最小化碎片化，提高内存重用。针对各种KV缓存架构采用不同的分配/驱逐算法。")}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{t("Enhanced Speculative Decoding", "增强推测解码")}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t("Better CUDA Graph support, torch.compile integration, and suffix decoding for improved token generation speed.", 
              "更好的CUDA Graph支持、torch.compile集成和后缀解码，提高token生成速度。")}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Performance Comparison", "性能对比")}
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Feature", "特性")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">V0</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">V1</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">MRV2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("CPU-GPU Overlap", "CPU-GPU重叠")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Limited", "有限")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("High", "高")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Maximum", "最大")}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Scheduling", "调度")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Phase-separated", "阶段分离")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Unified", "统一")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("GPU-native", "GPU原生")}</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Tensor Parallel", "张量并行")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Complex", "复杂")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Clean", "清晰")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Optimized", "优化")}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Speculative Decode", "推测解码")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Basic", "基础")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Good", "良好")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Seamless", "无缝")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Conclusion", "结论")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "VLLM's evolution from V0 to V1 and toward V2 demonstrates the continuous innovation in LLM inference optimization. The shift from synchronous to async-first design, from CPU-centric to GPU-native execution, represents a fundamental rethinking of how to serve large language models efficiently.",
            "VLLM从V0到V1再到V2的演进展示了LLM推理优化的持续创新。从同步到异步优先设计、从CPU中心到GPU原生执行的转变，代表了对如何高效服务大语言模型的根本性重新思考。"
          )}
        </p>

        <p className="leading-relaxed">
          {t(
            "For practitioners, understanding these architectural details helps in optimizing deployments, debugging performance issues, and making informed decisions about model serving infrastructure. As models grow larger and more complex, the innovations in VLLM will only become more critical.",
            "对于从业者来说，理解这些架构细节有助于优化部署、调试性能问题，并就模型服务基础设施做出明智决策。随着模型变得越来越大和复杂，VLLM中的创新将变得更加关键。"
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
          {["VLLM", "LLM Inference", "Architecture", "PagedAttention", "GPU Optimization", "Deep Learning", "Model Serving"].map(
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
