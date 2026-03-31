export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">多模态</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">GPT-5o</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">应用</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">多模态大模型：视觉与语言的融合</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-02-20</span>
          <span>•</span>
          <span>7 min read</span>
        </div>
      </div>

      <p>GPT-5o和Gemini Ultra在图像理解上的突破让多模态应用成为可能。</p>

      <h2>多模态的进化</h2>

      <p>从简单的图像描述到复杂的视觉推理，多模态LLM正在快速进化。</p>

      <h2>应用场景</h2>

      <ul>
          <li>**电商**：自动商品描述、视觉搜索</li>
          <li>**内容创作**：图文混排、视频脚本生成</li>
          <li>**教育**：图像题目解答、可视化教学</li>
          <li>**医疗**：医学影像分析辅助</li>
        </ul>

      <h2>技术挑战</h2>

      <ul>
          <li>模态对齐的精度</li>
          <li>训练数据的多样性</li>
          <li>推理成本的控制</li>
        </ul>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2026-02-20
      </p>
    </article>
  );
}
