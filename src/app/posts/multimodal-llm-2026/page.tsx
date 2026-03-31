"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Post() {
  const { t } = useLanguage();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Multimodal", "多模态")}
          </span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">GPT-5o</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Applications", "应用")}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t("Multimodal LLMs: Vision and Language Fusion", "多模态大模型：视觉与语言的融合")}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-02-20</span>
          <span>•</span>
          <span>7 min read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        {t(
          "Breakthroughs in image understanding by GPT-5o and Gemini Ultra are enabling new multimodal applications. This article explores multimodal LLMs in e-commerce and content creation.",
          "GPT-5o和Gemini Ultra在图像理解上的突破让多模态应用成为可能。本文探讨多模态LLM在电商和内容创作中的应用。"
        )}
      </p>

      <h2>{t("Evolution of Multimodal AI", "多模态的进化")}</h2>
      <p>
        {t(
          "From simple image descriptions to complex visual reasoning, multimodal LLMs are rapidly evolving. The integration of vision and language opens up unprecedented possibilities.",
          "从简单的图像描述到复杂的视觉推理，多模态LLM正在快速进化。视觉与语言的融合开辟了前所未有的可能性。"
        )}
      </p>

      <h2>{t("Application Scenarios", "应用场景")}</h2>
      <ul>
        <li>
          <strong>{t("E-commerce", "电商")}</strong>: {t("Automatic product descriptions, visual search, and personalized recommendations", "自动商品描述、视觉搜索和个性化推荐")}
        </li>
        <li>
          <strong>{t("Content Creation", "内容创作")}</strong>: {t("Mixed text-image layouts, video script generation, and automated editing", "图文混排、视频脚本生成和自动编辑")}
        </li>
        <li>
          <strong>{t("Education", "教育")}</strong>: {t("Visual problem solving, interactive teaching materials, and accessibility tools", "图像题目解答、可视化教学材料和辅助工具")}
        </li>
        <li>
          <strong>{t("Healthcare", "医疗")}</strong>: {t("Medical image analysis assistance and diagnostic support", "医学影像分析辅助和诊断支持")}
        </li>
      </ul>

      <h2>{t("Technical Challenges", "技术挑战")}</h2>
      <ul>
        <li>{t("Modal alignment accuracy", "模态对齐的精度")}</li>
        <li>{t("Training data diversity", "训练数据的多样性")}</li>
        <li>{t("Inference cost control", "推理成本的控制")}</li>
        <li>{t("Real-time processing requirements", "实时处理的需求")}</li>
      </ul>

      <h2>{t("Future Outlook", "未来展望")}</h2>
      <p>
        {t(
          "Multimodal LLMs will become the standard interface for AI applications. The ability to understand and generate across multiple modalities will enable more natural human-computer interaction.",
          "多模态LLM将成为AI应用的标准接口。跨多种模态理解和生成的能力将实现更自然的人机交互。"
        )}
      </p>

      <hr />
      
      <p className="text-sm text-slate-500">
        {t("Author: Jie Zhu | Published on 2026-02-20", "本文作者：Jie Zhu | 发布于 2026-02-20")}
      </p>
    </article>
  );
}
