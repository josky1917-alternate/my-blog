export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">Sora</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">视频生成</span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">OpenAI</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Sora正式版发布：视频生成进入新纪元</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-12-02</span>
          <span>•</span>
          <span>9 min read</span>
        </div>
      </div>

      <p>OpenAI正式发布Sora视频生成模型。</p>

      <h2>能力评估</h2>

      <ul>
          <li>**时长**：最长60秒连续视频</li>
          <li>**分辨率**：最高1080p</li>
          <li>**物理一致性**：物体运动和光影更自然</li>
          <li>**文本理解**：复杂提示词执行准确</li>
        </ul>

      <h2>应用场景</h2>

      <ul>
          <li>广告创意</li>
          <li>影视预演</li>
          <li>教育内容</li>
          <li>游戏资产</li>
        </ul>

      <h2>局限与担忧</h2>

      <ul>
          <li>生成时间仍较长</li>
          <li>复杂场景仍有瑕疵</li>
          <li>深度伪造风险</li>
          <li>版权和伦理问题</li>
        </ul>

      
      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 2025-12-02
      </p>
    </article>
  );
}
