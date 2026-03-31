"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Post() {
  const { t } = useLanguage();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("AI Coding", "AI编程")}
          </span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Cursor</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("DevTools", "开发工具")}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t("AI Coding Assistants 2026: From Copilot to Architect", "AI编程助手2026：从Copilot到架构师")}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-03-05</span>
          <span>•</span>
          <span>9 min read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        {t(
          "AI coding tools like Cursor and Windsurf are transforming software development workflows. This article shares my experience using AI coding assistants in real projects.",
          "Cursor和Windsurf等AI编程工具正在改变软件开发流程。本文分享我在实际项目中使用AI编程助手的经验与教训。"
        )}
      </p>

      <h2>{t("Tool Evolution", "工具演进")}</h2>

      <p>
        {t(
          "From GitHub Copilot's code completion to Cursor's Agent mode, AI coding assistants' capabilities are rapidly improving.",
          "从GitHub Copilot的代码补全，到Cursor的Agent模式，AI编程助手的能力在飞速提升。"
        )}
      </p>

      <h2>{t("Practical Applications", "实际应用")}</h2>

      <ul>
        <li>
          <strong>{t("Code Generation", "代码生成")}</strong>: {t("Generating complete features from natural language descriptions", "根据自然语言描述生成完整功能")}
        </li>
        <li>
          <strong>{t("Refactoring Suggestions", "重构建议")}</strong>: {t("Identifying code smells and providing refactoring solutions", "识别代码坏味道并提供重构方案")}
        </li>
        <li>
          <strong>{t("Bug Fixing", "Bug修复")}</strong>: {t("Automatically locating and fixing issues in code", "自动定位和修复代码中的问题")}
        </li>
        <li>
          <strong>{t("Documentation Generation", "文档生成")}</strong>: {t("Automatically generating comments and documentation for code", "自动为代码生成注释和文档")}
        </li>
      </ul>

      <h2>{t("Best Practices", "最佳实践")}</h2>

      <ol>
        <li>{t("Clear requirement descriptions", "明确需求描述")}</li>
        <li>{t("Verify generated results step by step", "分步骤验证生成结果")}</li>
        <li>{t("Maintain code review habits", "保持代码审查习惯")}</li>
        <li>{t("Continuously learn new tool features", "持续学习工具新功能")}</li>
      </ol>

      <hr />
      
      <p className="text-sm text-slate-500">
        {t("Author: Jie Zhu | Published on 2026-03-05", "本文作者：Jie Zhu | 发布于 2026-03-05")}
      </p>
    </article>
  );
}
