export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">OpenAI</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">o3</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Sora</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">OpenAI 12天发布会回顾与思考</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-12-20</span>
          <span>•</span>
          <span>10 min read</span>
        </div>
      </div>

      <p>OpenAI的12天连续发布带来了o3、Sora正式版等重要更新。</p>

      <h2>发布亮点</h2>

      <ul>
          <li>**o3/o3-mini**：推理能力大幅提升</li>
          <li>**Sora正式版**：视频生成质量惊艳</li>
          <li>**Canvas升级**：协作式写作和编程</li>
          <li>**Apple集成**：ChatGPT深度集成iOS</li>
        </ul>

      <h2>o3的突破</h2>

      <p>在ARC-AGI基准上达到87.5%，接近人类水平。这标志着AI在抽象推理上的重大进步。</p>

      <h2>行业影响</h2>

      <p>OpenAI通过密集发布巩固了领先地位，也给竞争对手带来巨大压力。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-12-20
      </p>
    </article>
  );
}
