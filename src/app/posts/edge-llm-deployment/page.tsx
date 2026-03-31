"use client";

import { useLanguage } from "../../context/LanguageContext";
export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">边缘计算</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">移动端</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">部署</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">边缘端大模型部署实践</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-02-08</span>
          <span>•</span>
          <span>9 min read</span>
        </div>
      </div>

      <p>随着Apple Intelligence和Android Gemini的推进，端侧LLM成为热点。</p>

      <h2>端侧AI的优势</h2>

      <ul>
          <li>**隐私保护**：数据不出设备</li>
          <li>**低延迟**：无需网络请求</li>
          <li>**离线可用**：不依赖网络连接</li>
          <li>**成本控制**：减少云端API调用</li>
        </ul>

      <h2>技术挑战</h2>

      <ul>
          <li>**模型压缩**：量化、剪枝、蒸馏</li>
          <li>**内存优化**：模型分片、动态加载</li>
          <li>**功耗控制**：平衡性能与电池寿命</li>
          <li>**硬件适配**：不同芯片的优化</li>
        </ul>

      <h2>实践案例</h2>

      <p>我们在移动端部署了7B参数的模型，通过INT4量化和LoRA适配，在保持90%性能的同时，推理延迟控制在500ms以内。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2026-02-08
      </p>
    </article>
  );
}
