export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">政策</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">监管</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">AI法案</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">AI监管2026：全球政策走向分析</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-02-01</span>
          <span>•</span>
          <span>6 min read</span>
        </div>
      </div>

      <p>欧盟AI法案全面实施，美国AI行政令持续更新。</p>

      <h2>主要监管框架</h2>

      <ul>
          <li>**欧盟AI法案**：风险分级管理，高风险AI需合规认证</li>
          <li>**美国AI行政令**：侧重国家安全和大模型监管</li>
          <li>**中国算法推荐规定**：强调透明度和用户权益</li>
          <li>**英国AI白皮书**：创新友好的监管方式</li>
        </ul>

      <h2>对企业的影响</h2>

      <ul>
          <li>合规成本增加</li>
          <li>模型文档化要求</li>
          <li>审计和透明度义务</li>
          <li>跨境数据流动限制</li>
        </ul>

      <h2>应对策略</h2>

      <p>建立AI治理委员会，制定内部AI伦理准则，投资可解释AI技术。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2026-02-01
      </p>
    </article>
  );
}
