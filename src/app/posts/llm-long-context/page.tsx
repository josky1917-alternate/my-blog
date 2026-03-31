export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">长上下文</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Gemini</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Claude</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">长上下文大模型：从128K到无限</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-11-25</span>
          <span>•</span>
          <span>7 min read</span>
        </div>
      </div>

      <p>Gemini 1.5 Pro支持200万token上下文，Claude 3.5支持20万。</p>

      <h2>技术实现</h2>

      <ul>
          <li>**Ring Attention**：环形注意力机制</li>
          <li>**稀疏注意力**：只关注相关部分</li>
          <li>**分层处理**：粗粒度到细粒度</li>
          <li>**内存优化**：KV Cache压缩</li>
        </ul>

      <h2>应用场景</h2>

      <ul>
          <li>整本书籍分析</li>
          <li>大规模代码库理解</li>
          <li>长期对话记忆</li>
          <li>多文档对比</li>
        </ul>

      <h2>挑战</h2>

      <ul>
          <li>注意力稀释</li>
          <li>计算成本</li>
          <li>检索精度</li>
          <li>位置编码</li>
        </ul>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-11-25
      </p>
    </article>
  );
}
