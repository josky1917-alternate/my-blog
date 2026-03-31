"use client";

import { useLanguage } from "../../context/LanguageContext";
export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">诺贝尔奖</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Hinton</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">AlphaFold</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">诺贝尔奖与AI：Hinton和AlphaFold的启示</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-10-20</span>
          <span>•</span>
          <span>6 min read</span>
        </div>
      </div>

      <p>2024年诺贝尔物理学奖和化学奖都授予了AI相关研究。</p>

      <h2>获奖工作</h2>

      <ul>
          <li>**物理学奖**：Hinton和Hopfield的神经网络基础</li>
          <li>**化学奖**：AlphaFold蛋白质结构预测</li>
        </ul>

      <h2>意义解读</h2>

      <p>这标志着AI从计算机科学走向自然科学的核心领域。</p>

      <h2>对AI研究的启示</h2>

      <ul>
          <li>基础研究的重要性</li>
          <li>跨学科合作的价值</li>
          <li>长期投入的必要性</li>
          <li>科学和社会影响并重</li>
        </ul>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-10-20
      </p>
    </article>
  );
}
