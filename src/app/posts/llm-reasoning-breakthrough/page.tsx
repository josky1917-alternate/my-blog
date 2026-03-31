"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Post() {
  const { t } = useLanguage();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Reasoning", "推理")}
          </span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">o3</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">OpenAI</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t("LLM Reasoning: Breakthroughs and Limitations", "大模型推理能力的突破与局限")}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-03-10</span>
          <span>•</span>
          <span>6 min read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        {t(
          "OpenAI's o3 model reaches new heights in mathematical reasoning, but common-sense reasoning still falls short. This article analyzes the boundaries of current LLM reasoning capabilities.",
          "OpenAI的o3模型在数学推理上达到新高度，但常识推理仍有不足。本文分析当前LLM推理能力的边界和未来方向。"
        )}
      </p>

      <h2>{t("o3's Breakthrough", "o3的突破")}</h2>

      <p>
        {t(
          "On the AIME math competition, o3 achieved an astonishing 96.7% accuracy rate. This marks a major advancement in formal reasoning for large models.",
          "在AIME数学竞赛中，o3达到了惊人的96.7%准确率。这标志着大模型在形式化推理上的重大进步。"
        )}
      </p>

      <h2>{t("Limitations Still Exist", "局限依然存在")}</h2>

      <ul>
        <li>
          <strong>{t("Common-sense Reasoning", "常识推理")}</strong>: {t("Poor performance on tasks requiring everyday knowledge reasoning", "在需要日常知识推理的任务上表现不佳")}
        </li>
        <li>
          <strong>{t("Causal Understanding", "因果理解")}</strong>: {t("Difficulty understanding complex causal relationships", "难以理解复杂的因果关系")}
        </li>
        <li>
          <strong>{t("Physical Intuition", "物理直觉")}</strong>: {t("Lack of basic understanding of the physical world", "缺乏对物理世界的基本理解")}
        </li>
      </ul>

      <h2>{t("Future Directions", "未来方向")}</h2>

      <p>
        {t(
          "We need new training methods that enable models to truly understand problems rather than just pattern matching.",
          "我们需要新的训练方法，让模型不仅学会模式匹配，还能真正理解问题的本质。"
        )}
      </p>

      <hr />
      
      <p className="text-sm text-slate-500">
        {t("Author: Jie Zhu | Published on 2026-03-10", "本文作者：Jie Zhu | 发布于 2026-03-10")}
      </p>
    </article>
  );
}
