"use client";

import { useLanguage } from "../../context/LanguageContext";
export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">GPT-4o</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">语音</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">多模态</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">GPT-4o 原生音频：语音交互的新高度</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-10-15</span>
          <span>•</span>
          <span>7 min read</span>
        </div>
      </div>

      <p>GPT-4o的原生音频能力让语音交互更加自然。</p>

      <h2>技术突破</h2>

      <ul>
          <li>**端到端**：文本和音频统一处理</li>
          <li>**低延迟**：平均320ms响应时间</li>
          <li>**情感表达**：能理解和表达情感</li>
          <li>**多语言**：实时翻译能力</li>
        </ul>

      <h2>应用场景</h2>

      <ul>
          <li>实时口语练习</li>
          <li>客户服务</li>
          <li>辅助阅读</li>
          <li>实时翻译</li>
        </ul>

      <h2>与TTS+ASR对比</h2>

      <p>原生音频避免了级联错误，理解和生成更加一致。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-10-15
      </p>
    </article>
  );
}
