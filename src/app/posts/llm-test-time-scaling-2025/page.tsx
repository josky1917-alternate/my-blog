"use client";

import { useLanguage } from "../../context/LanguageContext";
export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Test-Time Scaling</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">o1</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">趋势</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Test-Time Scaling：2025年最重要的技术趋势</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-12-28</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </div>

      <p>OpenAI o1和o3系列证明了测试时计算扩展的有效性。</p>

      <h2>什么是Test-Time Scaling</h2>

      <p>在推理阶段投入更多计算资源，让模型生成更多候选答案并进行验证。</p>

      <h2>关键技术</h2>

      <ul>
          <li>**Chain-of-Thought**：显式推理过程</li>
          <li>**Self-Consistency**：多路径采样投票</li>
          <li>**Verifier模型**：评估答案质量</li>
          <li>**MCTS**：蒙特卡洛树搜索</li>
        </ul>

      <h2>应用前景</h2>

      <p>这一技术路线将改变大模型的优化方向，从单纯扩大模型规模转向更智能的推理策略。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-12-28
      </p>
    </article>
  );
}
