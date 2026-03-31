"use client";

import { useLanguage } from "../../context/LanguageContext";
export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">推理</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">o3</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">OpenAI</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">大模型推理能力的突破与局限</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-03-10</span>
          <span>•</span>
          <span>6 min read</span>
        </div>
      </div>

      <p>OpenAI的o3模型在数学推理上达到新高度，但常识推理仍有不足。</p>

      <h2>o3的突破</h2>

      <p>在AIME数学竞赛中，o3达到了惊人的96.7%准确率。这标志着大模型在形式化推理上的重大进步。</p>

      <h2>局限依然存在</h2>

      <ul>
          <li>**常识推理**：在需要日常知识推理的任务上表现不佳</li>
          <li>**因果理解**：难以理解复杂的因果关系  </li>
          <li>**物理直觉**：缺乏对物理世界的基本理解</li>
        </ul>

      <h2>未来方向</h2>

      <p>我们需要新的训练方法，让模型不仅学会模式匹配，还能真正理解问题的本质。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2026-03-10
      </p>
    </article>
  );
}
