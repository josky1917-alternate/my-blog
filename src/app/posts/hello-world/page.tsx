export default function HelloWorldPost() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">随笔</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">介绍</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hello World - 欢迎来到我的博客</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-03-28</span>
          <span>•</span>
          <span>2 min read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        这是我的第一篇博客文章。在这里，我将分享关于 AI、机器学习、软件工程的技术文章，以及个人的学习心得和生活感悟。
      </p>

      <h2>关于这个博客</h2>
      <p>
        这个博客使用 <strong>Next.js</strong> 和 <strong>Tailwind CSS</strong> 构建，
        部署在 Vercel 上。选择这个技术栈的原因是：
      </p>
      <ul>
        <li><strong>Next.js</strong> - 优秀的 React 框架，支持静态生成和服务器端渲染</li>
        <li><strong>Tailwind CSS</strong> - 原子化 CSS，快速构建现代化界面</li>
        <li><strong>Vercel</strong> - 无缝部署，全球 CDN 加速</li>
      </ul>

      <h2>我会写什么？</h2>
      <p>
        作为 Amazon 的机器学习工程师，我的日常工作涉及大量前沿技术。
        我计划在这里分享以下内容：
      </p>
      <ul>
        <li>🤖 大语言模型（LLM）相关技术和实践</li>
        <li>⚡ 模型推理优化和部署经验</li>
        <li>📊 机器学习系统工程</li>
        <li>🔬 论文解读和研究心得</li>
        <li>💡 软件工程最佳实践</li>
        <li>🌟 个人成长和学习笔记</li>
      </ul>

      <h2>关于我</h2>
      <p>
        我是 <strong>Jie Zhu</strong>，目前在 Amazon AGI Customization Service 团队工作，
        专注于大语言模型的训练和优化。在此之前，我曾在 Amazon 的多个团队工作，
        包括 People Experience Technology 和 Alexa Audio Voice Experience Growth。
      </p>
      <p>
        我拥有 Virginia Tech 的计算机工程硕士学位，研究方向是机器学习。
        如果你对 LLM、推理优化或者机器学习系统感兴趣，欢迎通过邮件或社交媒体与我交流！
      </p>

      <h2>订阅更新</h2>
      <p>
        如果你对我的文章感兴趣，可以通过以下方式关注我：
      </p>
      <ul>
        <li>📧 订阅邮件通知（页面底部）</li>
        <li>🐦 关注我的社交媒体链接</li>
        <li>⭐ 收藏这个博客</li>
      </ul>

      <p>
        感谢你的访问，期待与你交流！
      </p>

      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-03-28
      </p>
    </article>
  );
}
