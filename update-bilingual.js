const fs = require('fs');
const path = require('path');

// Article data with bilingual content
const articles = [
  {
    slug: "ai-agent-2026-trends",
    title: "AI Agent 2026: From Tools to Colleagues",
    titleZh: "AI Agent 2026：从工具到同事的进化",
    date: "2026-03-25",
    tags: ["AI Agent", "Trends", "Claude"],
    readTime: "7 min",
    content: `With the release of Claude 4 and GPT-5, AI Agents are evolving from simple task executors to true intelligent colleagues.`,
    contentZh: `随着Claude 4和GPT-5的发布，AI Agent正在从简单的任务执行者进化为真正的智能同事。`,
    sections: [
      {
        h2: "From Tools to Colleagues",
        h2Zh: "从工具到同事的演进",
        paragraphs: [
          `In early 2025, AI Agents were mainly proof-of-concept and experimental projects. But by 2026, with the release of Claude 4 and GPT-5, we witnessed a real breakthrough—AI Agents began to possess long-term memory, autonomous planning, and complex collaboration capabilities.`,
          `2025年初，AI Agent还主要是概念验证和实验性项目。但到了2026年，随着Claude 4和GPT-5的发布，我们见证了真正的突破——AI Agent开始具备长期记忆、自主规划和复杂协作能力。`
        ]
      },
      {
        h2: "Key Capability Breakthroughs",
        h2Zh: "关键能力突破",
        paragraphs: [],
        list: [
          [`Long-term Context Understanding`, `长期上下文理解`, `Supporting millions of tokens of context window, allowing Agents to remember conversations and decisions from months ago.`],
          [`Multi-step Planning and Execution`, `多步规划与执行`, `No longer one-time responses, but able to formulate multi-step plans and execute continuously.`],
          [`Tool Use Automation`, `工具使用自动化`, `Seamlessly integrating various APIs, databases, and development tools.`],
          [`Team Collaboration`, `团队协作`, `Multiple Agents can collaborate to complete complex projects.`]
        ]
      },
      {
        h2: "Impact on Software Engineering",
        h2Zh: "对软件工程的影响",
        paragraphs: [
          `As an engineer working at Amazon, I have witnessed this transformation firsthand. Our development workflows are being reshaped:`,
          `作为在Amazon工作的工程师，我亲眼见证了这一转变。我们的开发流程正在被重塑：`
        ],
        list: [
          [`Code review Agents can find potential issues missed by human reviewers.`, `代码审查Agent能发现人类审查员遗漏的潜在问题。`],
          [`Testing Agents can automatically generate comprehensive test cases.`, `测试Agent能自动生成全面的测试用例。`],
          [`Documentation Agents can keep technical docs synchronized with code updates.`, `文档Agent能保持技术文档与代码的同步更新。`]
        ]
      },
      {
        h2: "Future Outlook",
        h2Zh: "未来展望",
        paragraphs: [
          `The evolution of AI Agents will not stop. I predict that by 2027, every software engineer will have multiple AI colleagues who can not only execute instructions but also proactively make suggestions, predict problems, and optimize autonomously.`,
          `AI Agent的进化不会停止。我预测到2027年，每个软件工程师都会有多个AI同事，它们不仅能执行指令，还能主动提出建议、预测问题并自主优化。`,
          `This is both a challenge and an opportunity. We need to learn how to collaborate effectively with AI Agents, define clear boundaries and responsibilities, while maintaining human engineers' creativity and judgment.`,
          `这既是挑战也是机遇。我们需要学会如何与AI Agent有效协作，定义清晰的边界和责任，同时保持人类工程师的创造力和判断力。`
        ]
      }
    ]
  },
  {
    slug: "gemini-2-pro-analysis",
    title: "Gemini 2 Pro Deep Dive: Google's Comeback",
    titleZh: "Gemini 2 Pro 深度评测：Google的反击",
    date: "2026-03-18",
    tags: ["Gemini", "Review", "Multimodal"],
    readTime: "8 min",
    content: `Google Gemini 2 Pro is officially released, excelling in multimodal understanding and long context.`,
    contentZh: `Google Gemini 2 Pro正式发布，在多模态理解和长上下文方面表现突出。`,
    sections: [
      {
        h2: "The Long-Awaited Comeback",
        h2Zh: "姗姗来迟的反击",
        paragraphs: [
          `Throughout 2025, as OpenAI and Anthropic released blockbuster products one after another, Google seemed to be in a constant state of catching up. But the release of Gemini 2 Pro proves that Google remains a force to be reckoned with in the AI field.`,
          `在OpenAI和Anthropic连续发布重磅产品的2025年，Google似乎一直处于追赶状态。但Gemini 2 Pro的发布证明，Google依然是AI领域不可忽视的力量。`
        ]
      },
      {
        h2: "Core Capability Improvements",
        h2Zh: "核心能力提升",
        paragraphs: [],
        list: [
          [`Native Multimodal`, `原生多模态`, `Fusing text, image, audio, and video understanding from the training stage.`],
          [`Ultra-Long Context`, `超长上下文`, `Supporting 2 million token context window, capable of processing entire books.`],
          [`Reasoning Capability`, `推理能力`, `Approaching o3 level in math and code tasks.`],
          [`Real-time Information`, `实时信息`, `Deep integration with Google Search.`]
        ]
      },
      {
        h2: "Practical Testing Comparison",
        h2Zh: "实际测试对比",
        paragraphs: [
          `I tested Gemini 2 Pro's performance in actual projects:`,
          `我在实际项目中测试了Gemini 2 Pro的表现：`
        ],
        list: [
          [`Code Generation: Comparable to GPT-5, excellent in Python and JavaScript.`, `代码生成：与GPT-5相当，在Python和JavaScript上表现优异。`],
          [`Document Understanding: 200-page technical document summarization accuracy exceeds 95%.`, `文档理解：200页技术文档的摘要准确率超过95%。`],
          [`Multilingual: Chinese understanding capability significantly better than competitors.`, `多语言：中文理解能力明显优于竞争对手。`],
          [`Cost: API price about 30% lower than GPT-5.`, `成本：API价格比GPT-5低约30%。`]
        ]
      },
      {
        h2: "Conclusion",
        h2Zh: "结论",
        paragraphs: [
          `Gemini 2 Pro marks Google's strong return to the AI race. For users who need to process large amounts of documents and value multimodal capabilities, this is a highly competitive choice. Google's ecosystem integration is also its unique advantage.`,
          `Gemini 2 Pro标志着Google在AI竞赛中的强势回归。对于需要处理大量文档、重视多模态能力的用户来说，这是一个极具竞争力的选择。Google的生态系统整合也是其独特优势。`
        ]
      }
    ]
  },
  {
    slug: "llm-reasoning-breakthrough",
    title: "LLM Reasoning: Breakthroughs and Limitations",
    titleZh: "大模型推理能力的突破与局限",
    date: "2026-03-10",
    tags: ["Reasoning", "o3", "OpenAI"],
    readTime: "6 min",
    content: `OpenAI's o3 model reaches new heights in mathematical reasoning, but common-sense reasoning still falls short.`,
    contentZh: `OpenAI的o3模型在数学推理上达到新高度，但常识推理仍有不足。`,
    sections: [
      {
        h2: "o3's Breakthrough",
        h2Zh: "o3的突破",
        paragraphs: [
          `On the AIME math competition, o3 achieved an astonishing 96.7% accuracy rate. This marks a major advancement in formal reasoning for large models.`,
          `在AIME数学竞赛中，o3达到了惊人的96.7%准确率。这标志着大模型在形式化推理上的重大进步。`
        ]
      },
      {
        h2: "Limitations Still Exist",
        h2Zh: "局限依然存在",
        paragraphs: [],
        list: [
          [`Common-sense Reasoning`, `常识推理`, `Poor performance on tasks requiring everyday knowledge reasoning.`],
          [`Causal Understanding`, `因果理解`, `Difficulty understanding complex causal relationships.`],
          [`Physical Intuition`, `物理直觉`, `Lack of basic understanding of the physical world.`]
        ]
      },
      {
        h2: "Future Directions",
        h2Zh: "未来方向",
        paragraphs: [
          `We need new training methods that enable models to truly understand problems rather than just pattern matching.`,
          `我们需要新的训练方法，让模型不仅学会模式匹配，还能真正理解问题的本质。`
        ]
      }
    ]
  }
];

function generateArticleComponent(article) {
  let sectionsHtml = '';
  
  article.sections.forEach(section => {
    sectionsHtml += `
      <h2>{t("${section.h2}", "${section.h2Zh}")}</h2>\n`;
    
    if (section.paragraphs && section.paragraphs.length > 0) {
      for (let i = 0; i < section.paragraphs.length; i += 2) {
        const en = section.paragraphs[i];
        const zh = section.paragraphs[i + 1] || en;
        sectionsHtml += `      <p>{t("${en}", "${zh}")}</p>\n`;
      }
    }
    
    if (section.list && section.list.length > 0) {
      sectionsHtml += `      <ul>\n`;
      section.list.forEach(item => {
        sectionsHtml += `        <li>\n          <strong>{t("${item[0]}", "${item[1]}")}</strong>: {t("${item[2]}", "${item[3] || item[2]}")}\n        </li>\n`;
      });
      sectionsHtml += `      </ul>\n`;
    }
  });

  return `"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Post() {
  const { t } = useLanguage();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          ${article.tags.map(tag => `<span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">${tag}</span>`).join('\n          ')}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t("${article.title}", "${article.titleZh}")}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span>${article.date}</span>
          <span>•</span>
          <span>${article.readTime} read</span>
        </div>
      </div>

      <p className="lead text-lg text-slate-600 dark:text-slate-400">
        {t("${article.content}", "${article.contentZh}")}
      </p>

      ${sectionsHtml}
      <hr />
      
      <p className="text-sm text-slate-500">
        {t("Author: Jie Zhu | Published on ${article.date}", "本文作者：Jie Zhu | 发布于 ${article.date}")}
      </p>
    </article>
  );
}
`;
}

// Generate files
articles.forEach(article => {
  const dir = path.join(__dirname, 'src', 'app', 'posts', article.slug);
  if (fs.existsSync(dir)) {
    const content = generateArticleComponent(article);
    fs.writeFileSync(path.join(dir, 'page.tsx'), content);
    console.log(`Updated: ${article.slug}`);
  }
});

console.log('Done updating articles with bilingual support!');
