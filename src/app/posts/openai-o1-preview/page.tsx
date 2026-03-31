export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">o1</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">推理</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">OpenAI</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">OpenAI o1-preview：推理模型的首秀</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-09-20</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </div>

      <p>OpenAI发布o1-preview，通过强化学习增强推理能力。</p>

      <h2>核心创新</h2>

      <ul>
          <li>**思维链**：显式展示推理过程</li>
          <li>**强化学习**：用结果奖励训练推理</li>
          <li>**计算扩展**：推理时间越长效果越好</li>
          <li>**自我纠正**：能发现错误并修正</li>
        </ul>

      <h2>性能表现</h2>

      <ul>
          <li>数学竞赛：AIME 83%准确率</li>
          <li>代码竞赛：Codeforces 89%分位</li>
          <li>科学问题：PhD级别问题表现优异</li>
        </ul>

      <h2>局限</h2>

      <ul>
          <li>成本高：推理时间是普通模型的10-100倍</li>
          <li>通用性：在某些简单任务上不如GPT-4o</li>
          <li>透明度：思维链可能被隐藏</li>
        </ul>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-09-20
      </p>
    </article>
  );
}
