"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Post() {
  const { t } = useLanguage();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Safety", "安全")}
          </span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Alignment", "对齐")}
          </span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">RLHF</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t("LLM Safety Alignment: Beyond RLHF", "大模型安全对齐：RLHF之后的路")}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-02-14</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        {t(
          "As model capabilities grow, safety alignment becomes increasingly important. This article discusses Constitutional AI, RLAIF, and other new approaches.",
          "随着模型能力增强，安全对齐变得愈发重要。本文讨论Constitutional AI、RLAIF等新方法及其局限性。"
        )}
      </p>

      <h2>{t("Limitations of RLHF", "RLHF的局限")}</h2>
      <p>
        {t(
          "Reinforcement Learning from Human Feedback, while effective, suffers from high feedback costs, annotator bias, and scalability issues.",
          "人类反馈强化学习虽然有效，但存在反馈成本高、标注者偏见和可扩展性问题。"
        )}
      </p>

      <h2>{t("New Method Exploration", "新方法探索")}</h2>
      <ul>
        <li>
          <strong>Constitutional AI</strong>: {t("Training models to follow predefined principles without human feedback", "让模型遵循预设原则，无需人类反馈")
          }
        </li>
        <li>
          <strong>RLAIF</strong>: {t("Using AI feedback instead of human feedback for scalable alignment", "用AI反馈替代人类反馈，实现可扩展的对齐")
          }
        </li>
        <li>
          <strong>DPO</strong>: {t("Direct Preference Optimization simplifies the training process", "直接偏好优化，简化训练流程")
          }
        </li>
        <li>
          <strong>{t("Self-Play", "自我对弈")}</strong>: {t("Models improve safety through playing against themselves", "模型通过与自己对弈提升安全性")
          }
        </li>
      </ul>

      <h2>{t("Practical Deployment Experience", "实际部署经验")}</h2>
      <p>
        {t(
          "At Amazon, we adopt a multi-layer defense strategy: input filtering, model-level safety alignment, and output review combined.",
          "在Amazon，我们采用多层防护策略：输入过滤、模型层安全对齐、输出审查相结合。"
        )}
      </p>

      <h2>{t("Future Challenges", "未来挑战")}</h2>
      <p>
        {t(
          "As models become more capable, ensuring they remain aligned with human values becomes more critical and challenging. We need continuous research and vigilance.",
          "随着模型能力增强，确保它们与人类价值观保持一致变得更加关键和具有挑战性。我们需要持续的研究和警惕。"
        )}
      </p>

      <hr />
      
      <p className="text-sm text-slate-500">
        {t("Author: Jie Zhu | Published on 2026-02-14", "本文作者：Jie Zhu | 发布于 2026-02-14")}
      </p>
    </article>
  );
}
