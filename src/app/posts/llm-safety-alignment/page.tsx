export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">安全</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">对齐</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">RLHF</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">大模型安全对齐：RLHF之后的路</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-02-14</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </div>

      <p>随着模型能力增强，安全对齐变得愈发重要。</p>

      <h2>RLHF的局限</h2>

      <p>人类反馈强化学习虽然有效，但存在反馈成本高、标注者偏见等问题。</p>

      <h2>新方法探索</h2>

      <ul>
          <li>**Constitutional AI**：让模型遵循预设原则</li>
          <li>**RLAIF**：用AI反馈替代人类反馈</li>
          <li>**DPO**：直接偏好优化，简化训练流程</li>
          <li>**自我对弈**：模型通过与自己对弈提升安全性</li>
        </ul>

      <h2>实际部署经验</h2>

      <p>在Amazon，我们采用多层防护策略：输入过滤、模型层安全对齐、输出审查相结合。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2026-02-14
      </p>
    </article>
  );
}
