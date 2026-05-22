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
            Multimodal AI
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
            Document Processing
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
            Optimization
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          {t(
            "Multimodal Document Intelligence: Preprocessing and Inference Optimization Strategies",
            "多模态文档智能：预处理与推理优化策略"
          )}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>May 21, 2026</span>
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
            "As Vision-Language Models (VLMs) mature, document processing has evolved from simple OCR to holistic multimodal understanding. This article explores the architecture, preprocessing pipelines, and optimization strategies that enable modern multimodal AI systems to efficiently process complex documents at scale.",
            "随着视觉语言模型（VLM）的成熟，文档处理已从简单的OCR演变为整体多模态理解。本文探讨了使现代多模态AI系统能够高效大规模处理复杂文档的架构、预处理流程和优化策略。"
          )}
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("The Evolution: From OCR to Vision-Language Models", "演变：从OCR到视觉语言模型")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "Traditional document processing relied on Optical Character Recognition (OCR) followed by text-based NLP. This pipeline had significant limitations: it couldn't understand visual layouts, charts, handwriting, or the spatial relationships between elements.",
            "传统的文档处理依赖于光学字符识别（OCR），然后是基于文本的NLP。这种流程有显著的局限性：它无法理解视觉布局、图表、手写内容或元素之间的空间关系。"
          )}
        </p>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-slate-900 dark:text-white mb-4">
            {t("Traditional vs. Multimodal Approach", "传统与多模态方法对比")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">{t("Traditional OCR Pipeline", "传统OCR流程")}</h4>
              <ol className="list-decimal list-inside text-sm space-y-1 text-red-700 dark:text-red-200">
                <li>{t("Image preprocessing (denoising, binarization)", "图像预处理（去噪、二值化）")}</li>
                <li>{t("Text extraction via OCR", "通过OCR提取文本")}</li>
                <li>{t("Layout analysis (separate module)", "布局分析（独立模块）")}</li>
                <li>{t("Text-only NLP processing", "纯文本NLP处理")}</li>
                <li>{t("Post-processing and validation", "后处理和验证")}</li>
              </ol>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">{t("Multimodal VLM Pipeline", "多模态VLM流程")}</h4>
              <ol className="list-decimal list-inside text-sm space-y-1 text-green-700 dark:text-green-200">
                <li>{t("Unified document encoding", "统一文档编码")}</li>
                <li>{t("Vision-language joint embedding", "视觉语言联合嵌入")}</li>
                <li>{t("Holistic understanding (text + layout + images)", "整体理解（文本+布局+图像）")}</li>
                <li>{t("Structured output generation", "结构化输出生成")}</li>
                <li>{t("End-to-end optimization", "端到端优化")}</li>
              </ol>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Document Preprocessing Architecture", "文档预处理架构")}
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          1. {t("Input Normalization and Enhancement", "输入归一化与增强")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Before feeding documents into VLMs, preprocessing must standardize inputs while preserving critical information. This stage addresses variations in scan quality, lighting, resolution, and document types.",
            "在将文档输入VLM之前，预处理必须标准化输入同时保留关键信息。这个阶段处理扫描质量、光照、分辨率和文档类型的变化。"
          )}
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
          <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
            {t("Key Preprocessing Steps", "关键预处理步骤")}
          </h4>
          <ul className="list-disc list-inside space-y-1 text-blue-800 dark:text-blue-200 text-sm">
            <li><strong>{t("Dewarping and Deskewing", "去变形和去倾斜")}:</strong> {t("Correct perspective distortions from camera captures or curved scans", "校正相机拍摄或弯曲扫描的透视变形")}</li>
            <li><strong>{t("Resolution Standardization", "分辨率标准化")}:</strong> {t("Scale to optimal input size (typically 224x224 to 1024x1024 depending on model)", "缩放到最佳输入大小（通常224x224到1024x1024，取决于模型）")}</li>
            <li><strong>{t("Contrast Enhancement", "对比度增强")}:</strong> {t("Adaptive histogram equalization for faded or low-contrast documents", "自适应直方图均衡化用于褪色或低对比度文档")}</li>
            <li><strong>{t("Noise Reduction", "降噪")}:</strong> {t("Remove scan artifacts, moiré patterns, and compression artifacts", "去除扫描伪影、莫尔条纹和压缩伪影")}</li>
            <li><strong>{t("Binarization (Optional)", "二值化（可选）")}:</strong> {t("For text-heavy documents where color information is irrelevant", "对于颜色信息不重要的文本密集型文档")}</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          2. {t("Document Layout Analysis", "文档布局分析")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Modern VLMs incorporate layout understanding directly, but preprocessing can enhance performance by identifying document regions (headers, footers, tables, figures) and their relationships.",
            "现代VLM直接整合了布局理解，但预处理可以通过识别文档区域（页眉、页脚、表格、图形）及其关系来增强性能。"
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded text-center">
            <div className="text-3xl mb-2">📄</div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{t("Text Regions", "文本区域")}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">{t("Paragraphs, headings, lists, captions", "段落、标题、列表、说明")}</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded text-center">
            <div className="text-3xl mb-2">📊</div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{t("Structured Data", "结构化数据")}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">{t("Tables, forms, code blocks, equations", "表格、表单、代码块、公式")}</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded text-center">
            <div className="text-3xl mb-2">🖼️</div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{t("Visual Elements", "视觉元素")}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">{t("Images, charts, diagrams, signatures", "图像、图表、示意图、签名")}</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          3. {t("Multi-Page Document Handling", "多页文档处理")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Long documents present unique challenges for VLMs due to context window limitations. Modern approaches use sliding windows with overlap, hierarchical attention, or document-level understanding models.",
            "长文档由于上下文窗口限制给VLM带来独特挑战。现代方法使用带有重叠的滑动窗口、分层注意力或文档级理解模型。"
          )}
        </p>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
          <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-2">
            {t("Strategies for Long Documents", "长文档策略")}
          </h4>
          <ul className="list-disc list-inside space-y-1 text-purple-800 dark:text-purple-200 text-sm">
            <li><strong>{t("Sliding Window with Overlap", "带重叠的滑动窗口")}:</strong> {t("Process pages in overlapping chunks to maintain cross-page context", "以重叠块处理页面以保持跨页上下文")}</li>
            <li><strong>{t("Hierarchical Encoding", "分层编码")}:</strong> {t("First encode individual pages, then aggregate for document-level understanding", "首先编码单个页面，然后聚合以获得文档级理解")}</li>
            <li><strong>{t("Cross-Page Attention", "跨页注意力")}:</strong> {t("Models like Docopilot use specialized architectures for multi-page dependencies", "Docopilot等模型使用专门架构处理多页依赖关系")}</li>
            <li><strong>{t("Selective Processing", "选择性处理")}:</strong> {t("Identify and process only relevant pages based on query or document structure", "基于查询或文档结构识别并仅处理相关页面")}</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Vision-Language Model Architectures for Documents", "面向文档的视觉语言模型架构")}
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Vision Encoder Design", "视觉编码器设计")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "The vision encoder transforms document images into embeddings that the language model can process. For document understanding, specialized architectures have emerged:",
            "视觉编码器将文档图像转换为语言模型可以处理的嵌入。对于文档理解，已经出现了专门的架构："
          )}
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Architecture", "架构")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Strengths", "优势")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Use Cases", "用例")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">ViT (Vision Transformer)</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Global context, scalable", "全局上下文，可扩展")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("General document understanding", "通用文档理解")}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">CNN + Transformer Hybrid</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Local feature preservation", "局部特征保留")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Dense text, tables", "密集文本、表格")}</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">DocFormer / LayoutLM</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Layout-aware embeddings", "布局感知嵌入")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Structured documents", "结构化文档")}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Donut / Nougat</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("End-to-end, no OCR", "端到端，无需OCR")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Academic papers, forms", "学术论文、表单")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Vision-Language Projector", "视觉语言投影器")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "The projector bridges vision and language modalities, converting visual tokens into the language model's embedding space. Efficient designs minimize parameters while maximizing information transfer.",
            "投影器桥接视觉和语言模态，将视觉token转换为语言模型的嵌入空间。高效的设计在最大化信息传输的同时最小化参数。"
          )}
        </p>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
          <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">
            {t("Projection Strategies", "投影策略")}
          </h4>
          <ul className="list-disc list-inside space-y-1 text-green-800 dark:text-green-200 text-sm">
            <li><strong>{t("Linear Projection", "线性投影")}:</strong> {t("Simple MLP, minimal overhead (~1-2% of total parameters)", "简单MLP，最小开销（约总参数的1-2%）")}</li>
            <li><strong>{t("Q-Former / Perceiver", "Q-Former / Perceiver")}:</strong> {t("Learned queries compress visual information efficiently", "学习查询高效压缩视觉信息")}</li>
            <li><strong>{t("Cross-Attention", "交叉注意力")}:</strong> {t("Dynamic interaction between vision and language features", "视觉和语言特征之间的动态交互")}</li>
            <li><strong>{t("Token Compression", "Token压缩")}:</strong> {t("Reduce visual tokens from thousands to hundreds (e.g., 576 → 144)", "将视觉token从数千减少到数百（例如576→144）")}</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Inference Optimization Strategies", "推理优化策略")}
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          1. {t("Vision Token Compression", "视觉Token压缩")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "High-resolution document images generate thousands of vision tokens, creating computational bottlenecks. Compression techniques reduce this burden while preserving critical information.",
            "高分辨率文档图像生成数千个视觉token，造成计算瓶颈。压缩技术在保留关键信息的同时减少这一负担。"
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">{t("Spatial Downsampling", "空间下采样")}</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {t("Merge adjacent visual tokens (2x2 or 3x3 pooling) to reduce sequence length by 4-9x. Maintains spatial structure while significantly reducing compute.", 
              "合并相邻视觉token（2x2或3x3池化）将序列长度减少4-9倍。在显著减少计算的同时保持空间结构。")}
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
            <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">{t("Learned Compression", "学习压缩")}</h4>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              {t("Trainable compression modules (e.g., Q-Former) learn to extract only document-relevant features, achieving 10-20x token reduction with minimal accuracy loss.", 
              "可训练压缩模块（如Q-Former）学习仅提取文档相关特征，实现10-20倍token减少，精度损失最小。")}
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          2. {t("Quantization for Multimodal Models", "多模态模型量化")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Quantization reduces memory footprint and increases throughput, but multimodal models require special consideration due to their heterogeneous components.",
            "量化减少内存占用并提高吞吐量，但由于多模态模型的异构组件，需要特别考虑。"
          )}
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Component", "组件")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Quantization Approach", "量化方法")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Impact", "影响")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Vision Encoder", "视觉编码器")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("INT8 or FP8, layer-wise calibration", "INT8或FP8，逐层校准")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Minimal visual quality loss", "视觉质量损失最小")}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Projector", "投影器")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("INT8 or BF16", "INT8或BF16")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Sensitive, careful calibration needed", "敏感，需要仔细校准")}</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Language Model", "语言模型")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("AWQ, GPTQ, or FP8", "AWQ、GPTQ或FP8")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Well-established techniques", "成熟的技术")}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("KV Cache", "KV缓存")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("FP8 or INT8 quantization", "FP8或INT8量化")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("50% memory reduction", "内存减少50%")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          3. {t("Inference Engine Optimizations", "推理引擎优化")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Modern inference engines like vLLM and SGLang implement sophisticated optimizations for multimodal workloads:",
            "现代推理引擎如vLLM和SGLang为多模态工作负载实现了复杂的优化："
          )}
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
          <h4 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">
            {t("Key Engine Optimizations", "关键引擎优化")}
          </h4>
          <ul className="list-disc list-inside space-y-1 text-yellow-800 dark:text-yellow-200 text-sm">
            <li><strong>{t("CPU-GPU Pipeline Decoupling", "CPU-GPU流水线解耦")}:</strong> {t("Separate CPU-intensive preprocessing (image decoding, resizing) from GPU inference to prevent kernel stalls", "将CPU密集型预处理（图像解码、调整大小）与GPU推理分离，防止内核停滞")}</li>
            <li><strong>{t("Vision-Text Parallel Execution", "视觉-文本并行执行")}:</strong> {t("Process vision and language encoders in parallel where possible", "尽可能并行处理视觉和语言编码器")}</li>
            <li><strong>{t("Continuous Batching", "连续批处理")}:</strong> {t("Dynamic batching of incoming requests maximizes GPU utilization across heterogeneous document types", "对传入请求的动态批处理最大化跨异构文档类型的GPU利用率")}</li>
            <li><strong>{t("Prefix Caching", "前缀缓存")}:</strong> {t("Cache vision embeddings for repeated document queries", "为重复文档查询缓存视觉嵌入")}</li>
            <li><strong>{t("Speculative Decoding", "推测解码")}:</strong> {t("Draft model accelerates token generation for long-form document outputs", "草稿模型加速长文档输出的token生成")}</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          4. {t("Adaptive Resource Allocation", "自适应资源分配")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Not all documents require the same computational effort. Adaptive systems adjust processing based on document complexity:",
            "并非所有文档都需要相同的计算量。自适应系统根据文档复杂度调整处理："
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">Low</div>
            <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">{t("Simple Text", "简单文本")}</h4>
            <p className="text-xs text-green-800 dark:text-green-200">{t("Standard resolution, single page", "标准分辨率，单页")}</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded text-center">
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">Medium</div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">{t("Mixed Content", "混合内容")}</h4>
            <p className="text-xs text-yellow-800 dark:text-yellow-200">{t("Tables, charts, multi-page", "表格、图表、多页")}</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">High</div>
            <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">{t("Complex Layouts", "复杂布局")}</h4>
            <p className="text-xs text-red-800 dark:text-red-200">{t("Technical docs, scanned PDFs", "技术文档、扫描PDF")}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Production Deployment Considerations", "生产部署考虑因素")}
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Latency vs. Throughput Trade-offs", "延迟与吞吐量权衡")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Document processing workloads vary widely in their requirements. Real-time applications (chat with document) prioritize low latency, while batch processing prioritizes throughput.",
            "文档处理工作负载在需求上差异很大。实时应用（与文档聊天）优先考虑低延迟，而批处理优先考虑吞吐量。"
          )}
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Scenario", "场景")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Optimization Focus", "优化重点")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Recommended Configuration", "推荐配置")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Real-time Chat", "实时聊天")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Low latency", "低延迟")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Smaller model, aggressive caching, single-GPU", "较小模型、积极缓存、单GPU")}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Batch Processing", "批处理")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("High throughput", "高吞吐量")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Max batch size, tensor parallelism, multi-GPU", "最大批大小、张量并行、多GPU")}</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("API Service", "API服务")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Balanced", "平衡")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Dynamic batching, auto-scaling, request prioritization", "动态批处理、自动扩展、请求优先级")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Hardware Selection", "硬件选择")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Multimodal document processing has unique hardware requirements beyond standard LLM inference:",
            "多模态文档处理除了标准LLM推理外还有独特的硬件要求："
          )}
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
          <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
            {t("Hardware Recommendations", "硬件建议")}
          </h4>
          <ul className="list-disc list-inside space-y-1 text-blue-800 dark:text-blue-200 text-sm">
            <li><strong>{t("GPU Memory", "GPU内存")}:</strong> {t("24GB+ for 7B models with high-res images; 80GB for 70B models", "24GB+用于7B模型和高分辨率图像；70B模型需要80GB")}</li>
            <li><strong>{t("Tensor Cores", "张量核心")}:</strong> {t("FP8/INT8 support essential (Ampere/Ada/Hopper)", "FP8/INT8支持必不可少（Ampere/Ada/Hopper）")}</li>
            <li><strong>{t("CPU", "CPU")}:</strong> {t("High single-core performance for preprocessing; 32+ cores for parallel decoding", "高单核性能用于预处理；32+核心用于并行解码")}</li>
            <li><strong>{t("Storage", "存储")}:</strong> {t("Fast NVMe for document caching; consider document database for metadata", "快速NVMe用于文档缓存；考虑文档数据库用于元数据")}</li>
            <li><strong>{t("Network", "网络")}:</strong> {t("10Gbps+ for distributed inference; RDMA for multi-node setups", "10Gbps+用于分布式推理；RDMA用于多节点设置")}</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Future Directions", "未来方向")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "The field of multimodal document intelligence is rapidly evolving. Key trends to watch:",
            "多模态文档智能领域正在快速发展。值得关注的关键趋势："
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{t("Native Multimodal Architectures", "原生多模态架构")}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t("Models like Gemini 2.0 and GPT-4o process text, images, and audio in a unified architecture, eliminating the need for separate vision encoders and enabling more efficient inference.", 
              "像Gemini 2.0和GPT-4o这样的模型在统一架构中处理文本、图像和音频，消除了对单独视觉编码器的需求，实现了更高效的推理。")}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{t("Edge Deployment", "边缘部署")}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t("Quantized VLMs running on mobile devices and edge servers for privacy-sensitive document processing without cloud dependency.", 
              "在移动设备和边缘服务器上运行的量化VLM，用于隐私敏感的文档处理，无需依赖云。")}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{t("Self-Learning Systems", "自学习系统")}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t("Adaptive systems that improve document understanding based on user feedback and domain-specific patterns without full retraining.", 
              "基于用户反馈和领域特定模式改进文档理解的自适应系统，无需完全重新训练。")}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{t("Specialized Hardware", "专用硬件")}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t("TPUs, AWS Inferentia, and other AI accelerators optimized for vision-language workloads with dedicated vision processing units.", 
              "针对视觉语言工作负载优化的TPU、AWS Inferentia和其他AI加速器，配备专用视觉处理单元。")}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Conclusion", "结论")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "Multimodal document intelligence represents a paradigm shift in how we process and understand documents. By combining vision and language understanding in unified models, we achieve unprecedented accuracy in extracting information from complex documents.",
            "多模态文档智能代表了处理和理解文档方式的范式转变。通过在统一模型中结合视觉和语言理解，我们在从复杂文档中提取信息方面实现了前所未有的准确性。"
          )}
        </p>

        <p className="leading-relaxed mb-4">
          {t(
            "However, this power comes with significant computational costs. Successful deployment requires careful attention to preprocessing pipelines, vision token compression, quantization strategies, and inference engine optimizations. The techniques discussed in this article—from spatial downsampling to adaptive resource allocation—provide a roadmap for building efficient, scalable multimodal document processing systems.",
            "然而，这种能力伴随着显著的计算成本。成功的部署需要仔细关注预处理流程、视觉token压缩、量化策略和推理引擎优化。本文讨论的技术——从空间下采样到自适应资源分配——为构建高效、可扩展的多模态文档处理系统提供了路线图。"
          )}
        </p>

        <p className="leading-relaxed">
          {t(
            "As models continue to shrink in size while growing in capability, and as specialized hardware becomes more accessible, we can expect multimodal document AI to become ubiquitous across industries—from automated invoice processing to intelligent legal document analysis.",
            "随着模型在能力增长的同时规模缩小，以及专用硬件变得更加可访问，我们可以预期多模态文档AI将在各个行业普及——从自动发票处理到智能法律文档分析。"
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
          {["Multimodal AI", "Vision-Language Models", "Document Processing", "VLM", "Inference Optimization", "OCR", "Quantization", "Deep Learning", "Production ML"].map(
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
