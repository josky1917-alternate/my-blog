"use client";

import { useLanguage } from "../../context/LanguageContext";
export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">基础设施</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">系统</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">优化</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">AI基础设施2025：从训练到推理的优化</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-09-05</span>
          <span>•</span>
          <span>10 min read</span>
        </div>
      </div>

      <p>随着模型规模增长，AI基础设施面临新挑战。</p>

      <h2>训练基础设施</h2>

      <ul>
          <li>**分布式训练**：3D并行策略</li>
          <li>**存储优化**：Checkpoint快速读写</li>
          <li>**故障恢复**：自动故障检测和恢复</li>
          <li>**资源调度**：动态资源分配</li>
        </ul>

      <h2>推理基础设施</h2>

      <ul>
          <li>**服务框架**：vLLM、TensorRT-LLM、TGI</li>
          <li>**批处理**：Continuous Batching</li>
          <li>**缓存策略**：Prefix Caching</li>
          <li>**模型并行**：Tensor和Pipeline并行</li>
        </ul>

      <h2>成本优化</h2>

      <ul>
          <li> spot实例训练</li>
          <li> 混合精度推理</li>
          <li> 模型蒸馏</li>
          <li> 请求合并</li>
        </ul>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-09-05
      </p>
    </article>
  );
}
