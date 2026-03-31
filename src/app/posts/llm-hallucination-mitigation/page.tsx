"use client";

import { useLanguage } from "../../context/LanguageContext";
export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">幻觉</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">RAG</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">可靠性</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">大模型幻觉缓解：技术进展与局限</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-08-28</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </div>

      <p>幻觉仍是LLM的主要问题之一。</p>

      <h2>幻觉类型</h2>

      <ul>
          <li>**事实性幻觉**：编造不存在的事实</li>
          <li>**忠实性幻觉**：与输入不一致</li>
          <li>**上下文幻觉**：忽略上下文信息</li>
        </ul>

      <h2>缓解方法</h2>

      <ul>
          <li>**RAG**：检索增强生成</li>
          <li>**事实核查**：外部知识库验证</li>
          <li>**置信度估计**：模型自知不确定性</li>
          <li>**多模型验证**：多个模型交叉验证</li>
        </ul>

      <h2>评估挑战</h2>

      <ul>
          <li>幻觉检测本身困难</li>
          <li>评估标准不统一</li>
          <li>领域特异性强</li>
          <li>人工标注成本高</li>
        </ul>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-08-28
      </p>
    </article>
  );
}
