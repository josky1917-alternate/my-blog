"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function TestTimeScalingPost() {
  const { t } = useLanguage();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Paper Review", "论文解读")}
          </span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Test-Time Optimization", "测试时优化")}
          </span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">LLM</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t("Test-Time Scaling: Making LLMs Smarter", "Test-Time Scaling：让大模型更聪明")}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-03-25</span>
          <span>•</span>
          <span>6 min read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        {t(
          "Introducing our team's work Plan-and-Budget published at ICLR 2026, exploring how to improve model performance through compute resource allocation during inference.",
          "介绍我们团队在 ICLR 2026 发表的工作 Plan-and-Budget，探讨如何在推理阶段通过计算资源分配提升模型表现。"
        )}
      </p>

      <h2>{t("Background", "背景")}</h2>
      <p>
        {t(
          "In recent years, Large Language Models have made significant progress on various tasks. However, a key question remains: How can we make models 'think' more thoroughly during inference?",
          "近年来，大语言模型在各类任务上取得了显著进展。然而，一个关键问题始终存在：如何让模型在推理时「思考」得更充分？"
        )}
      </p>
      <p>
        {t(
          "Test-Time Scaling offers a new approach: rather than continuously increasing model size, allocate more compute resources during inference to generate more candidate answers and verify them.",
          "Test-Time Scaling（测试时扩展）提供了一种新思路：与其不断增大模型规模，不如在推理阶段分配更多计算资源，让模型生成更多候选答案并进行验证。"
        )}
      </p>

      <h2>{t("Limitations of Existing Methods", "现有方法的局限")}</h2>
      <p>
        {t(
          "Current Test-Time Scaling methods face two main problems:",
          "当前的 Test-Time Scaling 方法主要面临两个问题："
        )}
      </p>
      <ol>
        <li>
          <strong>{t("Inefficiency", "效率低下")}</strong>: {t("Simply increasing sampling quantity leads to significant computational waste, as many generated answers are low quality.", "简单地增加采样数量会导致大量计算浪费，因为很多生成的答案质量很低。")}
        </li>
        <li>
          <strong>{t("Lack of Planning", "缺乏规划")}</strong>: {t("Existing methods don't dynamically adjust compute budget based on problem difficulty, using the same resources for simple and hard problems.", "现有方法没有根据问题的难度动态调整计算预算，简单问题和困难问题使用相同的计算资源。")}
        </li>
      </ol>

      <h2>{t("Our Approach: Plan-and-Budget", "我们的方法：Plan-and-Budget")}</h2>
      <p>
        {t(
          "In our ICLR 2026 paper, we propose the Plan-and-Budget framework. The core idea is:",
          "在 ICLR 2026 的论文中，我们提出了 Plan-and-Budget 框架，核心思想是："
        )}
      </p>
      <blockquote>
        {t("Plan the compute budget allocation strategy before generating answers.", "在生成答案之前，先规划计算预算的分配策略。")}
      </blockquote>

      <h3>{t("Core Components", "核心组件")}</h3>
      <ul>
        <li>
          <strong>Planner</strong>: {t("Predicts required compute budget based on problem characteristics", "根据问题特征预测所需的计算预算")}
        </li>
        <li>
          <strong>Budget Allocator</strong>: {t("Allocates total budget among different reasoning paths", "将总预算分配给不同的推理路径")}
        </li>
        <li>
          <strong>Verifier</strong>: {t("Evaluates candidate answer quality and terminates low-quality paths early", "评估候选答案的质量，提前终止低质量路径")}
        </li>
      </ul>

      <h2>{t("Experimental Results", "实验结果")}</h2>
      <p>
        {t(
          "On multiple reasoning benchmarks, Plan-and-Budget achieved compared to baseline methods:",
          "在多个推理基准测试上，Plan-and-Budget 相比基线方法实现了："
        )}
      </p>
      <ul>
        <li>{t("Accuracy improvement of 15-25%", "准确率提升 15-25%")}</li>
        <li>{t("Compute cost reduction of 30-50%", "计算成本降低 30-50%")}</li>
        <li>{t("Under the same budget, significantly outperforms simple Best-of-N sampling", "在相同预算下，性能显著优于简单的 Best-of-N 采样")}</li>
      </ul>

      <h2>{t("Practical Applications", "实际应用")}</h2>
      <p>
        {t(
          "This technology has been applied in multiple Amazon products, including:",
          "这项技术在 Amazon 的多个产品中得到了应用，包括："
        )}
      </p>
      <ul>
        <li>{t("Code generation assistants", "代码生成助手")}</li>
        <li>{t("Mathematical problem solving", "数学问题求解")}</li>
        <li>{t("Complex reasoning tasks", "复杂推理任务")}</li>
      </ul>

      <h2>{t("Summary and Outlook", "总结与展望")}</h2>
      <p>
        {t(
          "Test-Time Scaling represents a new direction for LLM optimization. As model scale growth slows, how to use compute resources more intelligently during inference will become a key research direction.",
          "Test-Time Scaling 代表了 LLM 优化的新方向。随着模型规模增长趋缓，如何在推理阶段更智能地使用计算资源将成为关键研究方向。"
        )}
      </p>
      <p>
        {t(
          "Our research shows that through reasonable planning and budget allocation, model performance can be significantly improved without increasing model parameters. This provides new ideas for future LLM development.",
          "我们的研究表明，通过合理的规划和预算分配，可以在不增加模型参数的情况下显著提升模型性能。这为未来 LLM 的发展提供了新的思路。"
        )}
      </p>

      <hr />
      
      <p className="text-sm text-slate-500">
        {t("Paper: Lin et al., \"Plan and Budget: Effective and Efficient Test-Time Scaling on Large Language Model Reasoning\", ICLR 2026", "论文：Lin et al., \"Plan and Budget: Effective and Efficient Test-Time Scaling on Large Language Model Reasoning\", ICLR 2026")}
      </p>
    </article>
  );
}
