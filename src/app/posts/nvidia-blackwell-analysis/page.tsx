export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">NVIDIA</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Blackwell</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">GPU</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">NVIDIA Blackwell架构解析：AI训练的新标杆</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-11-12</span>
          <span>•</span>
          <span>9 min read</span>
        </div>
      </div>

      <p>NVIDIA发布Blackwell架构，FP4精度和第二代Transformer引擎引人注目。</p>

      <h2>架构亮点</h2>

      <ul>
          <li>**FP4精度**：训练吞吐量提升4倍</li>
          <li>**Transformer引擎**：第二代，支持更多模型类型</li>
          <li>**NVLink 6**：GPU间带宽1.8TB/s</li>
          <li>**解耦设计**：计算和内存独立扩展</li>
        </ul>

      <h2>性能提升</h2>

      <ul>
          <li>训练：比Hopper快4倍</li>
          <li>推理：比Hopper快25倍</li>
          <li>能效：提升25倍</li>
        </ul>

      <h2>软件生态</h2>

      <ul>
          <li>CUDA持续优化</li>
          <li>TensorRT更新</li>
          <li>NeMo框架增强</li>
          <li>与主流框架集成</li>
        </ul>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-11-12
      </p>
    </article>
  );
}
