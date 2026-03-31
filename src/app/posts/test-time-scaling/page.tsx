export default function TestTimeScalingPost() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">论文解读</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Test-Time Optimization</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">LLM</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Test-Time Scaling：让大模型更聪明</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-03-25</span>
          <span>•</span>
          <span>6 min read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        介绍我们团队在 ICLR 2026 发表的工作 Plan-and-Budget，探讨如何在推理阶段通过计算资源分配提升模型表现。
      </p>

      <h2>背景</h2>
      <p>
        近年来，大语言模型在各类任务上取得了显著进展。然而，一个关键问题始终存在：
        <strong>如何让模型在推理时"思考"得更充分？</strong>
      </p>
      <p>
        Test-Time Scaling（测试时扩展）提供了一种新思路：与其不断增大模型规模，
        不如在推理阶段分配更多计算资源，让模型生成更多候选答案并进行验证。
      </p>

      <h2>现有方法的局限</h2>
      <p>
        当前的 Test-Time Scaling 方法主要面临两个问题：
      </p>
      <ol>
        <li>
          <strong>效率低下</strong>：简单地增加采样数量会导致大量计算浪费，
          因为很多生成的答案质量很低。
        </li>
        <li>
          <strong>缺乏规划</strong>：现有方法没有根据问题的难度动态调整计算预算，
          简单问题和困难问题使用相同的计算资源。
        </li>
      </ol>

      <h2>我们的方法：Plan-and-Budget</h2>
      <p>
        在 ICLR 2026 的论文中，我们提出了 <strong>Plan-and-Budget</strong> 框架，
        核心思想是：
      </p>
      <blockquote>
        在生成答案之前，先规划计算预算的分配策略。
      </blockquote>

      <h3>核心组件</h3>
      <ul>
        <li>
          <strong>Planner</strong>：根据问题特征预测所需的计算预算
        </li>
        <li>
          <strong>Budget Allocator</strong>：将总预算分配给不同的推理路径
        </li>
        <li>
          <strong>Verifier</strong>：评估候选答案的质量，提前终止低质量路径
        </li>
      </ul>

      <h2>实验结果</h2>
      <p>
        在多个推理基准测试上，Plan-and-Budget 相比基线方法实现了：
      </p>
      <ul>
        <li>准确率提升 <strong>15-25%</strong></li>
        <li>计算成本降低 <strong>30-50%</strong></li>
        <li>在相同预算下，性能显著优于简单的 Best-of-N 采样</li>
      </ul>

      <h2>实际应用</h2>
      <p>
        这项技术在 Amazon 的多个产品中得到了应用，包括：
      </p>
      <ul>
        <li>代码生成助手</li>
        <li>数学问题求解</li>
        <li>复杂推理任务</li>
      </ul>

      <h2>总结与展望</h2>
      <p>
        Test-Time Scaling 代表了 LLM 优化的新方向。随着模型规模增长趋缓，
        如何在推理阶段更智能地使用计算资源将成为关键研究方向。
      </p>
      <p>
        我们的研究表明，通过合理的规划和预算分配，可以在不增加模型参数的情况下
        显著提升模型性能。这为未来 LLM 的发展提供了新的思路。
      </p>

      <hr />
      
      <p className="text-sm text-slate-500">
        论文：Lin et al., &quot;Plan and Budget: Effective and Efficient Test-Time Scaling on Large Language Model Reasoning&quot;, ICLR 2026
      </p>
    </article>
  );
}
