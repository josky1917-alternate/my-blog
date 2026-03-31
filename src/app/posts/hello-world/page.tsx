"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function HelloWorldPost() {
  const { t } = useLanguage();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Essay", "随笔")}
          </span>
          <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
            {t("Introduction", "介绍")}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t("Hello World - Welcome to My Blog", "Hello World - 欢迎来到我的博客")}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>2025-03-28</span>
          <span>•</span>
          <span>2 min read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        {t(
          "This is my first blog post. Here, I will share technical articles about AI, machine learning, and software engineering, as well as personal learning insights.",
          "这是我的第一篇博客文章。在这里，我将分享关于 AI、机器学习、软件工程的技术文章，以及个人的学习心得和生活感悟。"
        )}
      </p>

      <h2>{t("About This Blog", "关于这个博客")}</h2>
      <p>
        {t(
          "This blog is built with Next.js and Tailwind CSS, deployed on Vercel. The reasons for choosing this tech stack are:",
          "这个博客使用 Next.js 和 Tailwind CSS 构建，部署在 Vercel 上。选择这个技术栈的原因是："
        )}
      </p>
      <ul>
        <li>
          <strong>Next.js</strong> - {t("Excellent React framework supporting static generation and SSR", "优秀的 React 框架，支持静态生成和服务器端渲染")}
        </li>
        <li>
          <strong>Tailwind CSS</strong> - {t("Atomic CSS for rapidly building modern interfaces", "原子化 CSS，快速构建现代化界面")}
        </li>
        <li>
          <strong>Vercel</strong> - {t("Seamless deployment with global CDN acceleration", "无缝部署，全球 CDN 加速")}
        </li>
      </ul>

      <h2>{t("What Will I Write?", "我会写什么？")}</h2>
      <p>
        {t(
          "As a Machine Learning Engineer at Amazon, my daily work involves cutting-edge technology. I plan to share the following content here:",
          "作为 Amazon 的机器学习工程师，我的日常工作涉及大量前沿技术。我计划在这里分享以下内容："
        )}
      </p>
      <ul>
        <li>🤖 {t("Large Language Model (LLM) technology and practices", "大语言模型（LLM）相关技术和实践")}</li>
        <li>⚡ {t("Model inference optimization and deployment experience", "模型推理优化和部署经验")}</li>
        <li>📊 {t("Machine learning systems engineering", "机器学习系统工程")}</li>
        <li>🔬 {t("Paper reviews and research insights", "论文解读和研究心得")}</li>
        <li>💡 {t("Software engineering best practices", "软件工程最佳实践")}</li>
        <li>🌟 {t("Personal growth and learning notes", "个人成长和学习笔记")}</li>
      </ul>

      <h2>{t("About Me", "关于我")}</h2>
      <p>
        {t(
          "I am Jie Zhu, currently working at Amazon AGI Customization Service team, focusing on large language model training and optimization. Previously, I worked at Amazon's People Experience Technology and Alexa Audio Voice Experience Growth teams.",
          "我是 Jie Zhu，目前在 Amazon AGI Customization Service 团队工作，专注于大语言模型的训练和优化。在此之前，我曾在 Amazon 的多个团队工作，包括 People Experience Technology 和 Alexa Audio Voice Experience Growth。"
        )}
      </p>
      <p>
        {t(
          "I hold an M.Eng. in Computer Engineering from Virginia Tech. If you're interested in LLMs, inference optimization, or ML systems, feel free to reach out via email or social media!",
          "我拥有 Virginia Tech 的计算机工程硕士学位，研究方向是机器学习。如果你对 LLM、推理优化或者机器学习系统感兴趣，欢迎通过邮件或社交媒体与我交流！"
        )}
      </p>

      <h2>{t("Subscribe", "订阅更新")}</h2>
      <p>
        {t(
          "If you're interested in my articles, you can follow me through:",
          "如果你对我的文章感兴趣，可以通过以下方式关注我："
        )}
      </p>
      <ul>
        <li>📧 {t("Email subscription (bottom of page)", "订阅邮件通知（页面底部）")}</li>
        <li>🐦 {t("Follow my social media links", "关注我的社交媒体链接")}</li>
        <li>⭐ {t("Bookmark this blog", "收藏这个博客")}</li>
      </ul>

      <p>
        {t("Thanks for visiting, looking forward to connecting with you!", "感谢你的访问，期待与你交流！")}
      </p>

      <hr />
      
      <p className="text-sm text-slate-500">
        {t("Author: Jie Zhu | Published on 2025-03-28", "本文作者：Jie Zhu | 发布于 2025-03-28")}
      </p>
    </article>
  );
}
