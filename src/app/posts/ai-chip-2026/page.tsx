"use client";

import { useLanguage } from "../../context/LanguageContext";
export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">AI芯片</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">TPU</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">硬件</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">AI芯片2026：英伟达之外的选择</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-01-12</span>
          <span>•</span>
          <span>9 min read</span>
        </div>
      </div>

      <p>Google TPU v6、AMD MI350、Amazon Trainium3相继发布。</p>

      <h2>主流AI芯片对比</h2>

      <ul>
          <li>**NVIDIA B200**：训练性能最强，生态最完善</li>
          <li>**Google TPU v6**：推理效率高，与TensorFlow深度集成</li>
          <li>**AMD MI350**：性价比优势，ROCm生态逐步成熟</li>
          <li>**Amazon Trainium3**：云端优化，与AWS服务集成</li>
        </ul>

      <h2>选型建议</h2>

      <ul>
          <li>训练大规模模型：NVIDIA仍是首选</li>
          <li>云端推理：考虑TPU或Trainium的成本优势</li>
          <li>预算有限：AMD是不错的替代方案</li>
        </ul>

      <h2>未来趋势</h2>

      <p>专用AI芯片将越来越多，针对特定工作负载的优化将成为关键。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2026-01-12
      </p>
    </article>
  );
}
