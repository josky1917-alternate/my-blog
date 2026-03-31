export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Llama</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Meta</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">开源</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Meta Llama 3.2：开源多模态的新选择</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-11-05</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </div>

      <p>Llama 3.2增加了视觉能力，支持端侧部署。</p>

      <h2>模型规格</h2>

      <ul>
          <li>**1B/3B**：端侧优化版本</li>
          <li>**11B/90B**：多模态版本</li>
          <li>**上下文**：128K token</li>
          <li>**多语言**：支持8种语言</li>
        </ul>

      <h2>性能表现</h2>

      <ul>
          <li>视觉理解：接近GPT-4V水平</li>
          <li>文本能力：比Llama 3.1提升10%</li>
          <li>端侧性能：3B版本可在手机上流畅运行</li>
        </ul>

      <h2>开源意义</h2>

      <p>Meta继续推动开源AI发展，为社区提供了强大的多模态基础模型。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-11-05
      </p>
    </article>
  );
}
