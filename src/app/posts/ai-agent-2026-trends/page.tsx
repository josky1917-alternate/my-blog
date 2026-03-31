"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Post() {
  const { t } = useLanguage();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">AI Agent</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Trends", "趋势")}
          </span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Claude</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t("AI Agent 2026: From Tools to Colleagues", "AI Agent 2026：从工具到同事的进化")}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-03-25</span>
          <span>•</span>
          <span>7 min read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        {t(
          "With the release of Claude 4 and GPT-5, AI Agents are evolving from simple task executors to true intelligent colleagues. This article explores the impact on software engineering.",
          "随着Claude 4和GPT-5的发布，AI Agent正在从简单的任务执行者进化为真正的智能同事。本文探讨这一转变对软件工程的影响。"
        )}
      </p>

      <h2>{t("Key Capability Breakthroughs", "关键能力突破")}</h2>

      <ul>
        <li>
          <strong>{t("Long-term Context Understanding", "长期上下文理解")}</strong>: {t("Supporting millions of tokens of context window", "支持数百万token的上下文窗口")}
        </li>
        <li>
          <strong>{t("Multi-step Planning and Execution", "多步规划与执行")}</strong>: {t("Able to formulate multi-step plans and execute continuously", "能制定多步骤计划并持续执行")}
        </li>
        <li>
          <strong>{t("Tool Use Automation", "工具使用自动化")}</strong>: {t("Seamlessly integrating various APIs and development tools", "无缝集成各种API和开发工具")}
        </li>
        <li>
          <strong>{t("Team Collaboration", "团队协作")}</strong>: {t("Multiple Agents can collaborate to complete complex projects", "多个Agent可以协作完成复杂项目")}
        </li>
      </ul>

      <h2>{t("Impact on Software Engineering", "对软件工程的影响")}</h2>

      <p>
        {t(
          "At Amazon, I have witnessed this transformation firsthand. Code review Agents can find issues missed by humans, and testing Agents can automatically generate comprehensive test cases.",
          "在Amazon，我亲眼见证了这一转变。代码审查Agent能发现人类遗漏的问题，测试Agent能自动生成全面的测试用例。"
        )}
      </p>

      <h2>{t("Future Outlook", "未来展望")}</h2>

      <p>
        {t(
          "By 2027, every software engineer will have multiple AI colleagues who can not only execute instructions but also proactively make suggestions.",
          "到2027年，每个软件工程师都会有多个AI同事，它们不仅能执行指令，还能主动提出建议。"
        )}
      </p>

      <hr />
      
      <p className="text-sm text-slate-500">
        {t("Author: Jie Zhu | Published on 2026-03-25", "本文作者：Jie Zhu | 发布于 2026-03-25")}
      </p>
    </article>
  );
}
