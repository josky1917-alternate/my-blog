export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Gemini</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">评测</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">多模态</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Gemini 2 Pro 深度评测：Google的反击</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2026-03-18</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </div>

      <p>Google Gemini 2 Pro正式发布，在多模态理解和长上下文方面表现突出。</p>

      <h2>姗姗来迟的反击</h2>

      <p>在OpenAI和Anthropic连续发布重磅产品的2025年，Google似乎一直处于追赶状态。但Gemini 2 Pro的发布证明，Google依然是AI领域不可忽视的力量。</p>

      <h2>核心能力提升</h2>

      <ul>
          <li>**原生多模态**：从训练阶段就融合文本、图像、音频和视频理解</li>
          <li>**超长上下文**：支持200万token的上下文窗口</li>
          <li>**推理能力**：在数学和代码任务上接近o3水平</li>
          <li>**实时信息**：深度集成Google搜索</li>
        </ul>

      <h2>实际测试对比</h2>

      <ul>
          <li>代码生成：与GPT-5相当</li>
          <li>文档理解：200页技术文档摘要准确率超95%</li>
          <li>多语言：中文理解能力优于竞争对手</li>
          <li>成本：API价格比GPT-5低约30%</li>
        </ul>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2026-03-18
      </p>
    </article>
  );
}
