export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">DeepSeek</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">MoE</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">国产模型</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">DeepSeek R2 技术解读：国产大模型的崛起</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-02-28</span>
          <span>•</span>
          <span>10 min read</span>
        </div>
      </div>

      <p>DeepSeek R2以极高的性价比引发关注。</p>

      <h2>惊艳的性价比</h2>

      <p>DeepSeek R2在多项基准测试中接近GPT-4水平，但推理成本仅为1/10。</p>

      <h2>技术架构解析</h2>

      <ul>
          <li>**MoE架构**：671B总参数、37B激活参数</li>
          <li>**训练效率**：创新的负载均衡策略</li>
          <li>**多Token预测**：每个位置预测多个token</li>
          <li>**FP8训练**：首次在大规模模型上成功应用</li>
        </ul>

      <h2>实际性能测试</h2>

      <ul>
          <li>代码生成：接近Claude 3.5 Sonnet</li>
          <li>中文理解：超越GPT-4</li>
          <li>数学推理：AIME准确率85%</li>
          <li>推理速度：比同等模型快3-5倍</li>
        </ul>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2026-02-28
      </p>
    </article>
  );
}
