"use client";

import { useLanguage } from "../../context/LanguageContext";
export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">微调</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">LoRA</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">DoRA</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">大模型微调2025：LoRA之后的新方法</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-09-28</span>
          <span>•</span>
          <span>9 min read</span>
        </div>
      </div>

      <p>DoRA、PiSSA等新微调方法在效率和效果上超越LoRA。</p>

      <h2>微调方法演进</h2>

      <ul>
          <li>**Full Fine-tuning**：效果最好但成本最高</li>
          <li>**LoRA**：低秩适配，参数效率高</li>
          <li>**DoRA**：权重分解低秩适配</li>
          <li>**PiSSA**：主奇异值和奇异向量适配</li>
          <li>**QLoRA**：量化+LoRA，内存友好</li>
        </ul>

      <h2>方法对比</h2>

      <p>在相同计算预算下，DoRA和PiSSA通常比LoRA效果更好，尤其在数学推理任务上。</p>

      <h2>实践建议</h2>

      <ul>
          <li>数据量小：用DoRA或PiSSA</li>
          <li>内存受限：用QLoRA</li>
          <li>追求极致效果：Full Fine-tuning</li>
        </ul>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-09-28
      </p>
    </article>
  );
}
