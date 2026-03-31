export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Claude</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Anthropic</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">评测</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Claude 3.5 Sonnet：Anthropic的稳步前进</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-12-08</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </div>

      <p>Claude 3.5 Sonnet在编程和推理任务上表现出色。</p>

      <h2>核心改进</h2>

      <ul>
          <li>**编程能力**：在HumanEval上达到92%准确率</li>
          <li>**推理能力**：数学和科学问题显著提升</li>
          <li>**速度**：比Opus更快，成本更低</li>
          <li>**Artifacts**：交互式内容生成</li>
        </ul>

      <h2>与竞品对比</h2>

      <ul>
          <li>编程：优于GPT-4o，接近o1</li>
          <li>创意写作：保持领先优势</li>
          <li>长上下文：200K窗口稳定可靠</li>
        </ul>

      <h2>安全特性</h2>

      <p>Anthropic继续强调AI安全，Constitutional AI训练让模型更加可靠。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-12-08
      </p>
    </article>
  );
}
