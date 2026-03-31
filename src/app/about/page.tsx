import Link from "next/link";
import { Github, Linkedin, BookOpen, ExternalLink, Mail, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Profile Section */}
      <section className="text-center py-8">
        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6">
          <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-2xl font-bold text-slate-500">
            JZ
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2 gradient-text">关于我</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
          Jie Zhu | Software & ML Engineer @ Amazon
        </p>
        <div className="flex justify-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            Boston, MA
          </span>
          <a href="mailto:jiezwork@gmail.com" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <Mail size={14} />
            jiezwork@gmail.com
          </a>
        </div>
      </section>

      {/* Bio */}
      <section className="gradient-border">
        <div className="p-8">
          <h2 className="text-xl font-bold mb-4">简介</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            我是 Amazon 的软件工程师（机器学习方向），目前就职于 Amazon AGI Customization Service 团队，
            专注于大语言模型（LLM）的训练技术和推理优化。
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            在此之前，我曾在 Amazon People Experience Technology 团队开发全球最大的 HCM 系统，
            以及在 Alexa Audio Voice Experience Growth 团队构建语音 AI 基础设施。
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            我拥有 Virginia Tech 的计算机工程硕士学位（机器学习方向）和华中科技大学的微电子硕士学位。
            我的研究兴趣包括大语言模型、推理部署优化、测试时优化（Test-Time Optimization）等。
          </p>
        </div>
      </section>

      {/* Links */}
      <section>
        <h2 className="text-xl font-bold mb-6">链接</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a 
            href="https://jiezhu-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
              <ExternalLink size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">个人主页</h3>
              <p className="text-sm text-slate-500">查看我的完整简历和项目</p>
            </div>
          </a>

          <a 
            href="https://github.com/josky1917"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white">
              <Github size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">GitHub</h3>
              <p className="text-sm text-slate-500">查看我的开源项目</p>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/jie-zhu-3991111a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white">
              <Linkedin size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">LinkedIn</h3>
              <p className="text-sm text-slate-500">职业社交网络</p>
            </div>
          </a>

          <a 
            href="https://scholar.google.com/citations?user=Nu5RCmcAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Google Scholar</h3>
              <p className="text-sm text-slate-500">查看我的学术论文</p>
            </div>
          </a>
        </div>
      </section>

      {/* Research Interests */}
      <section>
        <h2 className="text-xl font-bold mb-6">研究方向</h2>
        <div className="flex flex-wrap gap-3">
          {["Large Language Models", "Inference Optimization", "Test-Time Optimization", "Machine Learning Systems", "Generative AI"].map((topic) => (
            <span 
              key={topic}
              className="tag px-4 py-2 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center py-8">
        <h2 className="text-xl font-bold mb-4">联系我</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          欢迎通过邮件或社交媒体与我交流
        </p>
        <a 
          href="mailto:jiezwork@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
        >
          <Mail size={20} />
          发送邮件
        </a>
      </section>
    </div>
  );
}
