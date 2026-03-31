"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function LLMInferencePost() {
  const { t } = useLanguage();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">LLM</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Inference Optimization", "推理优化")}
          </span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">AI</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t("LLM Inference Optimization Practices", "大语言模型推理优化实践")}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-03-28</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        {t(
          "LLM inference optimization experience accumulated at Amazon AGI team, including model quantization, KV Cache optimization, Continuous Batching, and other core technologies.",
          "在 Amazon AGI 团队工作中积累的 LLM 推理优化经验，包括模型量化、KV Cache 优化、Continuous Batching 等核心技术。"
        )}
      </p>

      <h2>{t("Why Inference Optimization?", "为什么需要推理优化？")}</h2>
      <p>
        {t(
          "With the rapid development of Large Language Models (LLMs) and increasing model sizes, inference costs have skyrocketed. When deploying LLMs in production, we need to find the optimal balance between latency, throughput, and cost.",
          "随着大语言模型（LLM）的快速发展，模型规模不断增大，推理成本也随之飙升。在生产环境中部署 LLM 时，我们需要在延迟、吞吐量和成本之间找到最佳平衡点。"
        )}
      </p>

      <h2>{t("Core Technologies", "核心技术")}</h2>
      
      <h3>1. {t("Model Quantization", "模型量化")}</h3>
      <p>
        {t(
          "Quantization is one of the most effective methods to reduce model memory footprint and computational costs. By converting weights from FP32/FP16 to INT8 or even INT4, we can significantly reduce model size and accelerate inference.",
          "量化是降低模型内存占用和计算成本的最有效方法之一。通过将权重从 FP32/FP16 转换为 INT8 甚至 INT4，可以显著减少模型大小并加速推理。"
        )}
      </p>
      <pre><code>{`# AWQ Quantization Example
from awq import AutoAWQForCausalLM
from transformers import AutoTokenizer

model_path = "meta-llama/Llama-2-7b"
quant_path = "llama-2-7b-awq"

# Load model
model = AutoAWQForCausalLM.from_pretrained(model_path)
tokenizer = AutoTokenizer.from_pretrained(model_path)

# Quantize
model.quantize(tokenizer, quant_config={"zero_point": True, "q_group_size": 128})
model.save_quantized(quant_path)`}</code></pre>

      <h3>2. {t("KV Cache Optimization", "KV Cache 优化")}</h3>
      <p>
        {t(
          "In autoregressive generation, KV Cache is the main source of memory consumption. Optimization strategies include:",
          "在自回归生成过程中，KV Cache 是内存占用的主要来源。优化策略包括："
        )}
      </p>
      <ul>
        <li>
          <strong>{t("PagedAttention", "分页注意力")}</strong>: {t("Dividing KV Cache into fixed-size blocks to reduce memory fragmentation", "将 KV Cache 分成固定大小的块，减少内存碎片")}
        </li>
        <li>
          <strong>{t("Dynamic Allocation", "动态分配")}</strong>: {t("Allocating memory dynamically based on sequence length to avoid pre-allocation waste", "根据序列长度动态分配内存，避免预分配造成的浪费")}
        </li>
        <li>
          <strong>{t("Shared Cache", "共享缓存")}</strong>: {t("Sharing prefix KV Cache among parallel requests", "在并行请求间共享前缀的 KV Cache")}
        </li>
      </ul>

      <h3>3. {t("Continuous Batching", "Continuous Batching")}</h3>
      <p>
        {t(
          "Traditional static batching requires waiting for all requests to reach maximum length before returning, resulting in low GPU utilization. Continuous Batching (or In-flight Batching) allows dynamically adding new requests during batch processing, significantly improving throughput.",
          "传统的静态批处理需要等待所有请求达到最大长度才能返回，造成 GPU 利用率低下。Continuous Batching（或称为 In-flight Batching）允许在批次处理过程中动态添加新请求，显著提高吞吐量。"
        )}
      </p>

      <h2>{t("Performance Comparison", "性能对比")}</h2>
      <p>
        {t(
          "In our production environment, by comprehensively applying the above optimization techniques, we achieved:",
          "在我们的生产环境中，通过综合应用上述优化技术，实现了："
        )}
      </p>
      <ul>
        <li>{t("Latency reduced by 40%", "延迟降低 40%")}</li>
        <li>{t("Throughput improved by 3x", "吞吐量提升 3x")}</li>
        <li>{t("Cost reduced by 60%", "成本降低 60%")}</li>
      </ul>

      <h2>{t("Conclusion", "总结")}</h2>
      <p>
        {t(
          "LLM inference optimization is a systematic engineering task that requires considering algorithm, system, and hardware layers. In practice, choose appropriate optimization strategy combinations based on specific scenarios.",
          "LLM 推理优化是一个系统工程，需要综合考虑算法、系统和硬件多个层面。在实际应用中，建议根据具体场景选择合适的优化策略组合。"
        )}
      </p>

      <hr />
      
      <p className="text-sm text-slate-500">
        {t("Author: Jie Zhu | Published on 2026-03-28", "本文作者：Jie Zhu | 发布于 2026-03-28")}
      </p>
    </article>
  );
}
