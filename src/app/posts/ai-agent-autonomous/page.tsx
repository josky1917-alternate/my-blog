export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">AI Agent</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">AutoGPT</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">自动化</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">自主AI Agent：从AutoGPT到实用化</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-10-08</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </div>

      <p>早期AI Agent项目如AutoGPT hype过后，新一代更实用的Agent框架涌现。</p>

      <h2>AutoGPT的教训</h2>

      <ul>
          <li>无限循环问题</li>
          <li>成本失控</li>
          <li>可靠性差</li>
          <li>难以落地</li>
        </ul>

      <h2>新一代Agent特点</h2>

      <ul>
          <li>**有限范围**：专注特定任务</li>
          <li>**人机协作**：关键决策人工确认</li>
          <li>**工具限制**：预定义工具集</li>
          <li>**可观测性**：全程可监控</li>
        </ul>

      <h2>实用案例</h2>

      <ul>
          <li>代码审查Agent</li>
          <li>数据标注Agent</li>
          <li>客服助手Agent</li>
          <li>测试生成Agent</li>
        </ul>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-10-08
      </p>
    </article>
  );
}
