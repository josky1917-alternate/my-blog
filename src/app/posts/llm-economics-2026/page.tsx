export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">商业模式</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">成本</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">API</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">大模型经济学：Token价格战之后</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-01-18</span>
          <span>•</span>
          <span>7 min read</span>
        </div>
      </div>

      <p>2025年的Token价格战让LLM API成本大幅下降。</p>

      <h2>价格战回顾</h2>

      <p>从2024到2025年，主流模型的API价格下降了10-100倍。</p>

      <h2>新的商业模式</h2>

      <ul>
          <li>**订阅制**：固定月费无限使用</li>
          <li>**分层定价**：按功能和使用量分级</li>
          <li>**企业定制**：私有化部署+定制服务</li>
          <li>**效果付费**：按业务价值收费</li>
        </ul>

      <h2>成本优化策略</h2>

      <ul>
          <li>提示词优化</li>
          <li>缓存策略</li>
          <li>模型路由</li>
          <li>批处理</li>
        </ul>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2026-01-18
      </p>
    </article>
  );
}
