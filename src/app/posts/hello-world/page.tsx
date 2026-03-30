export default function HelloWorldPost() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>Hello World</h1>
      <time className="text-gray-500">2026-03-30</time>
      
      <p>欢迎来到我的博客！这是我的第一篇文章。</p>
      
      <h2>关于这个博客</h2>
      <p>
        这个博客使用 <strong>Next.js</strong> 和 <strong>Tailwind CSS</strong> 构建，
        部署在 Vercel 上。我会在这里分享技术文章、生活感悟和各种有趣的东西。
      </p>
      
      <h2>技术栈</h2>
      <ul>
        <li>Next.js 15 - React 框架</li>
        <li>Tailwind CSS - 样式</li>
        <li>TypeScript - 类型安全</li>
        <li>Vercel - 部署托管</li>
      </ul>
      
      <p>感谢你的访问，期待与你交流！</p>
    </article>
  );
}
