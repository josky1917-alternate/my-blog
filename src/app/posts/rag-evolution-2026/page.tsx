export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">RAG</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">知识图谱</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">检索</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">RAG技术进化：从向量检索到知识图谱</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-01-25</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </div>

      <p>传统RAG面临上下文长度和检索精度的挑战。</p>

      <h2>RAG的演进</h2>

      <ul>
          <li>**基础RAG**：简单向量检索+提示增强</li>
          <li>**Advanced RAG**：查询重写、重排序、混合检索</li>
          <li>**GraphRAG**：结合知识图谱的检索</li>
          <li>**Self-RAG**：模型自主决定何时检索</li>
        </ul>

      <h2>GraphRAG的优势</h2>

      <ul>
          <li>更好的关系推理</li>
          <li>可解释性更强</li>
          <li>支持复杂查询</li>
          <li>知识可更新</li>
        </ul>

      <h2>实践建议</h2>

      <p>根据应用场景选择合适的RAG架构，简单场景用向量检索，复杂知识推理用GraphRAG。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2026-01-25
      </p>
    </article>
  );
}
