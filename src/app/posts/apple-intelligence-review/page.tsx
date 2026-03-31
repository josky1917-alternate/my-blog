export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Apple</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">端侧AI</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">隐私</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Apple Intelligence 体验：隐私优先的AI</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-10-28</span>
          <span>•</span>
          <span>7 min read</span>
        </div>
      </div>

      <p>iOS 18.1正式版带来Apple Intelligence功能。</p>

      <h2>核心功能</h2>

      <ul>
          <li>**写作工具**：改写、校对、摘要</li>
          <li>**图像生成**：Genmoji和Image Playground</li>
          <li>**Siri升级**：更自然的对话</li>
          <li>**邮件智能**：优先级收件箱</li>
        </ul>

      <h2>隐私设计</h2>

      <ul>
          <li>**本地处理**：大部分任务在设备上完成</li>
          <li>**Private Cloud Compute**：云端处理也保护隐私</li>
          <li>**数据控制**：用户完全掌控自己的数据</li>
        </ul>

      <h2>与竞品对比</h2>

      <p>功能上不如ChatGPT全面，但隐私保护是明显优势。适合对隐私敏感的用户。</p>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-10-28
      </p>
    </article>
  );
}
