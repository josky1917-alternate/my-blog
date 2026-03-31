export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">量子计算</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Willow</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Google</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Google Willow量子芯片：AI与量子计算的结合</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-12-15</span>
          <span>•</span>
          <span>7 min read</span>
        </div>
      </div>

      <p>Google发布Willow量子芯片，在量子纠错上取得突破。</p>

      <h2>Willow的突破</h2>

      <ul>
          <li>105个物理量子比特</li>
          <li> below threshold量子纠错</li>
          <li>实时纠错能力</li>
          <li>5分钟完成传统超算10^25年的计算</li>
        </ul>

      <h2>对AI的潜在影响</h2>

      <ul>
          <li>量子机器学习算法</li>
          <li>优化问题求解</li>
          <li>量子神经网络</li>
          <li>药物发现加速</li>
        </ul>

      <h2>现实展望</h2>

      <p>实用化量子计算仍需10年以上，但Willow证明了可行路径。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-12-15
      </p>
    </article>
  );
}
