"use client";

import { useLanguage } from "../../context/LanguageContext";
export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Mistral</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">欧洲</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">评测</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Mistral Large 2：欧洲AI的骄傲</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-09-12</span>
          <span>•</span>
          <span>7 min read</span>
        </div>
      </div>

      <p>Mistral发布Large 2模型，在多语言和代码能力上表现出色。</p>

      <h2>模型特点</h2>

      <ul>
          <li>**参数规模**：123B总参数</li>
          <li>**上下文**：128K token</li>
          <li>**多语言**：支持数十种语言</li>
          <li>**代码**：支持80+编程语言</li>
        </ul>

      <h2>性能对比</h2>

      <ul>
          <li>接近GPT-4水平</li>
          <li>代码能力突出</li>
          <li>欧洲语言优势明显</li>
          <li>成本比GPT-4低50%</li>
        </ul>

      <h2>商业模式</h2>

      <p>Mistral提供开源和商业双轨策略，满足不同用户需求。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-09-12
      </p>
    </article>
  );
}
