const fs = require('fs');
const path = require('path');

const posts = [
  {
    slug: "ai-agent-2026-trends",
    title: "AI Agent 2026：从工具到同事的进化",
    date: "2026-03-25",
    tags: ["AI Agent", "趋势", "Claude"],
    readTime: "7 min",
    summary: "随着Claude 4和GPT-5的发布，AI Agent正在从简单的任务执行者进化为真正的智能同事。",
    content: `随着Claude 4和GPT-5的发布，我们见证了AI Agent的真正突破——从工具进化为智能同事。

## 关键能力突破

- **长期上下文理解**：支持数百万token的上下文窗口
- **多步规划与执行**：能制定多步骤计划并持续执行
- **工具使用自动化**：无缝集成各种API和开发工具
- **团队协作**：多个Agent可以协作完成复杂项目

## 对软件工程的影响

在Amazon，我亲眼见证了这一转变。代码审查Agent能发现人类遗漏的问题，测试Agent能自动生成全面的测试用例。

## 未来展望

到2027年，每个软件工程师都会有多个AI同事，它们不仅能执行指令，还能主动提出建议。`
  },
  {
    slug: "llm-reasoning-breakthrough",
    title: "大模型推理能力的突破与局限",
    date: "2026-03-10",
    tags: ["推理", "o3", "OpenAI"],
    readTime: "6 min",
    summary: "OpenAI的o3模型在数学推理上达到新高度，但常识推理仍有不足。",
    content: `OpenAI的o3模型在数学推理上达到新高度，但常识推理仍有不足。本文分析当前LLM推理能力的边界。

## o3的突破

在AIME数学竞赛中，o3达到了惊人的96.7%准确率。这标志着大模型在形式化推理上的重大进步。

## 局限依然存在

- **常识推理**：在需要日常知识推理的任务上表现不佳
- **因果理解**：难以理解复杂的因果关系
- **物理直觉**：缺乏对物理世界的基本理解

## 未来方向

我们需要新的训练方法，让模型不仅学会模式匹配，还能真正理解问题的本质。`
  },
  {
    slug: "ai-coding-2026",
    title: "AI编程助手2026：从Copilot到架构师",
    date: "2026-03-05",
    tags: ["AI编程", "Cursor", "开发工具"],
    readTime: "9 min",
    summary: "Cursor和Windsurf等AI编程工具正在改变软件开发流程。",
    content: `Cursor和Windsurf等AI编程工具正在改变软件开发流程。本文分享我在实际项目中的经验。

## 工具演进

从GitHub Copilot的代码补全，到Cursor的Agent模式，AI编程助手的能力在飞速提升。

## 实际应用

- **代码生成**：根据自然语言描述生成完整功能
- **重构建议**：识别代码坏味道并提供重构方案
- **Bug修复**：自动定位和修复代码中的问题
- **文档生成**：自动为代码生成注释和文档

## 最佳实践

1. 明确需求描述
2. 分步骤验证生成结果
3. 保持代码审查习惯
4. 持续学习工具新功能`
  }
];

posts.forEach(post => {
  const dir = path.join(__dirname, 'src', 'app', 'posts', post.slug);
  fs.mkdirSync(dir, { recursive: true });
  
  const content = `export default function Post() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          ${post.tags.map(tag => `<span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">${tag}</span>`).join('\n          ')}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">${post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>${post.date}</span>
          <span>•</span>
          <span>${post.readTime} read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        ${post.summary}
      </p>

      ${post.content.split('\n\n').map(p => {
        if (p.startsWith('##')) {
          return `<h2>${p.replace('## ', '')}</h2>`;
        } else if (p.startsWith('-')) {
          const items = p.split('\n').map(line => line.replace('- ', '')).filter(Boolean);
          return `<ul>\n          ${items.map(item => `<li>${item}</li>`).join('\n          ')}\n        </ul>`;
        } else if (p.match(/^\d\./)) {
          const items = p.split('\n').map(line => line.replace(/^\d\. /, '')).filter(Boolean);
          return `<ol>\n          ${items.map(item => `<li>${item}</li>`).join('\n          ')}\n        </ol>`;
        } else {
          return `<p>${p}</p>`;
        }
      }).join('\n\n      ')}

      <hr />
      
      <p className="text-sm text-slate-500">
        本文作者：Jie Zhu | 发布于 ${post.date}
      </p>
    </article>
  );
}
`;
  
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
  console.log(`Created: ${post.slug}`);
});

console.log('Done!');
