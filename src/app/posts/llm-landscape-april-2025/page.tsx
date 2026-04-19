"use client";

import { useLanguage } from "../context/LanguageContext";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PostPage() {
  const { t } = useLanguage();

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        {t("Back to Home", "返回首页")}
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            LLM
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
            Industry News
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
            April 2025
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          {t(
            "LLM Landscape in April 2025: GPT-4o Takes Over, Meta Releases Llama 4",
            "2025年4月LLM动态：GPT-4o全面接管，Meta发布Llama 4"
          )}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>April 10, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{t("8 min read", "8分钟阅读")}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-6">
          {t(
            "April 2025 marks a pivotal month in the large language model industry. OpenAI begins phasing out GPT-4 in favor of GPT-4o, Meta launches the highly anticipated Llama 4 family, and Google pushes forward with Gemini 2.5. Let's dive into the major developments shaping the AI landscape this month.",
            "2025年4月是大语言模型行业的关键月份。OpenAI开始逐步淘汰GPT-4，转而采用GPT-4o；Meta发布了备受期待的Llama 4系列；Google则推进了Gemini 2.5的发展。让我们深入了解本月塑造AI格局的重大进展。"
          )}
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("OpenAI: The GPT-4o Transition", "OpenAI：GPT-4o过渡")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "OpenAI announced that GPT-4 will be fully replaced by GPT-4o in the standard ChatGPT interface by April 30, 2025. While GPT-4 will remain accessible via API, the default user experience will shift to the more capable GPT-4o model.",
            "OpenAI宣布，GPT-4将在2025年4月30日前在标准ChatGPT界面中被GPT-4o完全取代。虽然GPT-4仍可通过API访问，但默认用户体验将转向更强大的GPT-4o模型。"
          )}
        </p>

        <p className="leading-relaxed mb-4">
          {t(
            "Earlier in February 2025, OpenAI launched GPT-4.5, described as its largest and most powerful model to date, with capabilities ten times greater than GPT-4. However, the real game-changer came in mid-April with the introduction of the GPT-4.1 series.",
            "早在2025年2月，OpenAI就推出了GPT-4.5，被描述为其迄今为止最大、最强大的模型，能力比GPT-4强十倍。然而，真正的游戏规则改变者是4月中旬推出的GPT-4.1系列。"
          )}
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
          <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
            {t("GPT-4.1 Series Highlights", "GPT-4.1系列亮点")}
          </h3>
          <ul className="list-disc list-inside space-y-1 text-blue-800 dark:text-blue-200">
            <li>{t("GPT-4.1, GPT-4.1 mini, and GPT-4.1 nano", "GPT-4.1、GPT-4.1 mini和GPT-4.1 nano")}</li>
            <li>{t("API-exclusive models with enhanced instruction-following", "API专用模型，增强指令遵循能力")}</li>
            <li>{t("Improved coding and deep comprehension capabilities", "改进的编程和深度理解能力")}</li>
            <li>{t("Performance improvements over GPT-4o and GPT-4.5", "相比GPT-4o和GPT-4.5的性能提升")}</li>
          </ul>
        </div>

        <p className="leading-relaxed mb-4">
          {t(
            "OpenAI also released the o3 and o4-mini reasoning models within ChatGPT, featuring the ability to integrate images into their reasoning processes, conduct web searches, run code, analyze files, and generate images within a single task flow.",
            "OpenAI还在ChatGPT中发布了o3和o4-mini推理模型，具备将图像整合到推理过程中的能力，可以在单一任务流中进行网络搜索、运行代码、分析文件和生成图像。"
          )}
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Meta: Llama 4 Family Arrives", "Meta：Llama 4系列到来")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "Meta made waves in the open-source AI community with the launch of the Llama 4 family on April 5, 2025. The release includes Llama 4 Maverick and Llama 4 Scout, both featuring a mixture of experts (MoE) architecture.",
            "Meta于2025年4月5日发布了Llama 4系列，在开源AI社区引起轰动。该版本包括Llama 4 Maverick和Llama 4 Scout，两者都采用了专家混合（MoE）架构。"
          )}
        </p>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
          <h3 className="font-bold text-green-900 dark:text-green-300 mb-2">
            {t("Llama 4 Key Features", "Llama 4主要特性")}
          </h3>
          <ul className="list-disc list-inside space-y-1 text-green-800 dark:text-green-200">
            <li>{t("Mixture of Experts (MoE) architecture", "专家混合（MoE）架构")}</li>
            <li>{t("Multimodal: accepts text and image input", "多模态：接受文本和图像输入")}</li>
            <li>{t("Multilingual: supports 12 languages", "多语言：支持12种语言")}</li>
            <li>{t("Open-source and freely available", "开源且免费可用")}</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Google: Gemini 2.5 and Beyond", "Google：Gemini 2.5及未来")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "Google released Gemini 2.5, optimized for enhanced reasoning and coding capabilities. The experimental Gemini 2.5 Pro model powers an agentic Deep Research tool for paid subscribers, while free users can access the experimental Gemini 2.0 Flash Thinking model.",
            "Google发布了Gemini 2.5，针对增强的推理和编程能力进行了优化。实验性的Gemini 2.5 Pro模型为付费订阅者提供代理式深度研究工具，而免费用户可以访问实验性的Gemini 2.0 Flash Thinking模型。"
          )}
        </p>

        <p className="leading-relaxed mb-4">
          {t(
            "Gemini Code Assist gained new \"agentic\" capabilities, allowing it to undertake complex programming tasks and assist developers in Android Studio. This positions Google as a serious contender in the AI-assisted development space.",
            "Gemini Code Assist获得了新的代理式能力，可以承担复杂的编程任务并在Android Studio中协助开发者。这使Google成为AI辅助开发领域的有力竞争者。"
          )}
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Anthropic: Claude Integrations", "Anthropic：Claude集成")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "Anthropic announced Integrations for Claude, enabling users to connect various applications and tools through the Model Context Protocol (MCP). This allows Claude to work with remote MCP servers across web and desktop applications, with initial integrations including platforms like Atlassian's Jira and Confluence, Zapier, and Cloudflare.",
            "Anthropic宣布了Claude的集成功能，使用户能够通过模型上下文协议（MCP）连接各种应用程序和工具。这使得Claude可以在Web和桌面应用程序中与远程MCP服务器协同工作，初始集成包括Atlassian的Jira和Confluence、Zapier和Cloudflare等平台。"
          )}
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Other Notable Releases", "其他值得关注的发布")}
        </h2>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li className="leading-relaxed">
            <strong>Amazon Nova Premier:</strong> {t("Became generally available in April 2025, positioning itself as a highly capable foundation model for complex tasks with multimodal input support.", "于2025年4月全面上市，定位为具有多模态输入支持的复杂任务高能力基础模型。")}
          </li>
          <li className="leading-relaxed">
            <strong>Google Gemma 2:</strong> {t("Designed for high-speed operations across diverse hardware platforms.", "专为跨多样化硬件平台的高速操作而设计。")}
          </li>
          <li className="leading-relaxed">
            <strong>JetBrains Mellum:</strong> {t("Open-sourced code completion LLM.", "开源的代码补全大语言模型。")}
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Looking Ahead", "展望未来")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "April 2025 demonstrates the rapid pace of innovation in the LLM space. With OpenAI consolidating around GPT-4o and GPT-4.1, Meta pushing open-source boundaries with Llama 4, and Google enhancing Gemini's capabilities, competition is driving significant improvements across the board.",
            "2025年4月展示了大语言模型领域创新的快速步伐。随着OpenAI围绕GPT-4o和GPT-4.1进行整合，Meta用Llama 4推动开源边界，Google增强Gemini的能力，竞争正在推动全面的重大改进。"
          )}
        </p>

        <p className="leading-relaxed">
          {t(
            "The trend toward multimodal capabilities, improved reasoning, and better tool integration suggests that LLMs are evolving from simple text generators to comprehensive AI assistants capable of handling complex, multi-step tasks across various domains.",
            "多模态能力、改进推理和更好工具集成的趋势表明，大语言模型正在从简单的文本生成器演变为能够处理跨各种领域的复杂多步骤任务的综合AI助手。"
          )}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <Tag size={18} className="text-slate-600 dark:text-slate-400" />
          <span className="font-medium text-slate-900 dark:text-white">
            {t("Tags", "标签")}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {["LLM", "OpenAI", "GPT-4o", "Meta", "Llama 4", "Google", "Gemini", "Anthropic", "Claude", "AI News"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </article>
  );
}
