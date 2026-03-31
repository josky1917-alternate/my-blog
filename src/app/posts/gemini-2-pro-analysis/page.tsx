"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Post() {
  const { t } = useLanguage();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Gemini</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Review", "评测")}
          </span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Multimodal", "多模态")}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t("Gemini 2 Pro Deep Dive: Google's Comeback", "Gemini 2 Pro 深度评测：Google的反击")}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-03-18</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        {t(
          "Google Gemini 2 Pro is officially released, excelling in multimodal understanding and long context. This article compares its performance with GPT-5 and Claude 4.",
          "Google Gemini 2 Pro正式发布，在多模态理解和长上下文方面表现突出。本文对比测试了其与GPT-5和Claude 4的性能差异。"
        )}
      </p>

      <h2>{t("The Long-Awaited Comeback", "姗姗来迟的反击")}</h2>

      <p>
        {t(
          "Throughout 2025, as OpenAI and Anthropic released blockbuster products one after another, Google seemed to be in a constant state of catching up. But the release of Gemini 2 Pro proves that Google remains a force to be reckoned with in the AI field.",
          "在OpenAI和Anthropic连续发布重磅产品的2025年，Google似乎一直处于追赶状态。但Gemini 2 Pro的发布证明，Google依然是AI领域不可忽视的力量。"
        )}
      </p>

      <h2>{t("Core Capability Improvements", "核心能力提升")}</h2>

      <ul>
        <li>
          <strong>{t("Native Multimodal", "原生多模态")}</strong>: {t("Fusing text, image, audio, and video understanding from the training stage", "从训练阶段就融合文本、图像、音频和视频理解")}
        </li>
        <li>
          <strong>{t("Ultra-Long Context", "超长上下文")}</strong>: {t("Supporting 2 million token context window", "支持200万token的上下文窗口")}
        </li>
        <li>
          <strong>{t("Reasoning Capability", "推理能力")}</strong>: {t("Approaching o3 level in math and code tasks", "在数学和代码任务上接近o3水平")}
        </li>
        <li>
          <strong>{t("Real-time Information", "实时信息")}</strong>: {t("Deep integration with Google Search", "深度集成Google搜索")}
        </li>
      </ul>

      <h2>{t("Practical Testing Comparison", "实际测试对比")}</h2>

      <ul>
        <li>{t("Code Generation: Comparable to GPT-5", "代码生成：与GPT-5相当")}</li>
        <li>{t("Document Understanding: 200-page technical document summarization accuracy exceeds 95%", "文档理解：200页技术文档摘要准确率超95%")}</li>
        <li>{t("Multilingual: Chinese understanding capability significantly better than competitors", "多语言：中文理解能力优于竞争对手")}</li>
        <li>{t("Cost: API price about 30% lower than GPT-5", "成本：API价格比GPT-5低约30%")}</li>
      </ul>

      <h2>{t("Conclusion", "结论")}</h2>

      <p>
        {t(
          "Gemini 2 Pro marks Google's strong return to the AI race. For users who need to process large amounts of documents and value multimodal capabilities, this is a highly competitive choice.",
          "Gemini 2 Pro标志着Google在AI竞赛中的强势回归。对于需要处理大量文档、重视多模态能力的用户来说，这是一个极具竞争力的选择。"
        )}
      </p>

      <hr />
      
      <p className="text-sm text-slate-500">
        {t("Author: Jie Zhu | Published on 2026-03-18", "本文作者：Jie Zhu | 发布于 2026-03-18")}
      </p>
    </article>
  );
}
