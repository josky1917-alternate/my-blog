"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Post() {
  const { t } = useLanguage();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">DeepSeek</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">MoE</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Chinese LLM", "国产模型")}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t("DeepSeek R2: The Rise of Chinese LLMs", "DeepSeek R2 技术解读：国产大模型的崛起")}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-02-28</span>
          <span>•</span>
          <span>10 min read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        {t(
          "DeepSeek R2 has gained attention for its exceptional cost-performance ratio. This article analyzes its MoE architecture, training strategies, and performance in real-world scenarios.",
          "DeepSeek R2以极高的性价比引发关注。本文深入分析其MoE架构、训练策略和在实际业务场景中的表现。"
        )}
      </p>

      <h2>{t("Stunning Cost-Performance Ratio", "惊艳的性价比")}</h2>
      <p>
        {t(
          "DeepSeek R2's release caused a sensation in the AI community. This model approaches GPT-4 level performance on multiple benchmarks, but inference costs are only 1/10th.",
          "DeepSeek R2的发布在AI圈引起轰动。这款模型在多项基准测试中接近GPT-4水平，但推理成本仅为1/10。"
        )}
      </p>

      <h2>{t("Technical Architecture Analysis", "技术架构解析")}</h2>
      <ul>
        <li>
          <strong>MoE {t("Architecture", "架构")}</strong>: {t("671B total parameters, 37B activated parameters using sparse design", "采用671B总参数、37B激活参数的稀疏设计")}
        </li>
        <li>
          <strong>{t("Training Efficiency", "训练效率")}</strong>: {t("Using innovative load balancing strategies to significantly reduce training costs", "使用创新的负载均衡策略，大幅降低训练成本")}
        </li>
        <li>
          <strong>{t("Multi-Token Prediction", "多Token预测")}</strong>: {t("Predicting multiple tokens per position to accelerate inference", "每个位置预测多个token，加速推理")}
        </li>
        <li>
          <strong>FP8 {t("Training", "训练")}</strong>: {t("First successful application of FP8 precision training at large scale", "首次在大规模模型上成功应用FP8精度训练")}
        </li>
      </ul>

      <h2>{t("Actual Performance Testing", "实际性能测试")}</h2>
      <p>
        {t("In our internal testing, DeepSeek R2 performed excellently:", "在我们的内部测试中，DeepSeek R2表现出色：")}
      </p>
      <ul>
        <li>{t("Code Generation: Approaching Claude 3.5 Sonnet level", "代码生成：接近Claude 3.5 Sonnet水平")}</li>
        <li>{t("Chinese Understanding: Surpassing GPT-4 on multiple Chinese benchmarks", "中文理解：在多个中文基准上超越GPT-4")}</li>
        <li>{t("Math Reasoning: 85% AIME accuracy", "数学推理：AIME准确率达到85%")}</li>
        <li>{t("Inference Speed: 3-5x faster than equivalent models", "推理速度：比同等性能模型快3-5倍")}</li>
      </ul>

      <h2>{t("Significance of Open Source Strategy", "开源策略的意义")}</h2>
      <p>
        {t(
          "DeepSeek's choice to open-source R2 has profound implications for the industry. It not only lowers the barrier to AI applications but also promotes the democratization of global AI technology.",
          "DeepSeek选择开源R2，这一决策对行业产生深远影响。它不仅降低了AI应用的门槛，也推动了全球AI技术的民主化进程。"
        )}
      </p>

      <h2>{t("Limitations and Challenges", "局限与挑战")}</h2>
      <p>
        {t(
          "Despite impressive performance, DeepSeek R2 still has room for improvement: multimodal capabilities are relatively weak, creative writing is not as good as Claude, and there is room for improvement in certain safety evaluations.",
          "尽管表现出色，DeepSeek R2仍有改进空间：多模态能力较弱，创意写作不如Claude，在某些安全评测上也有待加强。"
        )}
      </p>

      <h2>{t("Conclusion", "结语")}</h2>
      <p>
        {t(
          "DeepSeek R2 proves the technical strength of Chinese large models. Its success is not only a technical breakthrough but also an important sign of the maturity of China's AI industry.",
          "DeepSeek R2证明了国产大模型的技术实力。它的成功不仅是技术突破，更是中国AI产业走向成熟的重要标志。"
        )}
      </p>

      <hr />
      
      <p className="text-sm text-slate-500">
        {t("Author: Jie Zhu | Published on 2026-02-28", "本文作者：Jie Zhu | 发布于 2026-02-28")}
      </p>
    </article>
  );
}
