"use client";

import { useLanguage } from "../../context/LanguageContext";
export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">AI4Science</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">AlphaFold</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">科研</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">AI for Science：AlphaFold之后的突破</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-11-18</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </div>

      <p>AI在材料发现、药物设计、数学证明等领域持续突破。</p>

      <h2>2025年重要进展</h2>

      <ul>
          <li>**材料发现**：GNoME发现220万种新材料</li>
          <li>**天气预报**：GraphCast精度超越传统方法</li>
          <li>**数学证明**：AI辅助证明组合数学定理</li>
          <li>**药物设计**：AlphaFold 3预测分子相互作用</li>
        </ul>

      <h2>方法论转变</h2>

      <ul>
          <li>从假设驱动到数据驱动</li>
          <li>从实验筛选到计算预测</li>
          <li>从单一学科到跨学科融合</li>
        </ul>

      <h2>未来展望</h2>

      <p>AI将成为科学家的标准工具，加速科学发现进程。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-11-18
      </p>
    </article>
  );
}
