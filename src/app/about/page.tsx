"use client";

import { useLanguage } from "../context/LanguageContext";
import { BookOpen, ExternalLink, Mail, MapPin } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Profile Section */}
      <section className="text-center py-8">
        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6">
          <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-2xl font-bold text-slate-500">
            JZ
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2 gradient-text">{t("About Me", "关于我")}</h1>
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
          <h2 className="text-xl font-bold mb-4">{t("Bio", "简介")}</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            {t(
              "I am a Software Development Engineer (ML) at Amazon, currently working in the Amazon AGI Customization Service team, focusing on Large Language Model (LLM) training techniques and inference optimization.",
              "我是 Amazon 的软件工程师（机器学习方向），目前就职于 Amazon AGI Customization Service 团队，专注于大语言模型（LLM）的训练技术和推理优化。"
            )}
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            {t(
              "Previously, I worked at Amazon People Experience Technology team developing the world's largest HCM system, and at Alexa Audio Voice Experience Growth team building voice AI infrastructure.",
              "在此之前，我曾在 Amazon People Experience Technology 团队开发全球最大的 HCM 系统，以及在 Alexa Audio Voice Experience Growth 团队构建语音 AI 基础设施。"
            )}
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {t(
              "I hold an M.Eng. in Computer Engineering (Machine Learning) from Virginia Tech and an M.S. in Microelectronics from Huazhong University of Science and Technology. My research interests include Large Language Models, Inference Deployment Optimization, and Test-Time Optimization.",
              "我拥有 Virginia Tech 的计算机工程硕士学位（机器学习方向）和华中科技大学的微电子硕士学位。我的研究兴趣包括大语言模型、推理部署优化、测试时优化（Test-Time Optimization）等。"
            )}
          </p>
        </div>
      </section>

      {/* Links */}
      <section>
        <h2 className="text-xl font-bold mb-6">{t("Links", "链接")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a 
            href="https://portfolio.jiezstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
              <ExternalLink size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{t("Portfolio", "个人主页")}</h3>
              <p className="text-sm text-slate-500">{t("View my full resume and projects", "查看我的完整简历和项目")}</p>
            </div>
          </a>

          <a 
            href="https://github.com/josky1917"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">GitHub</h3>
              <p className="text-sm text-slate-500">{t("Check out my open source projects", "查看我的开源项目")}</p>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/jie-zhu-3991111a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">LinkedIn</h3>
              <p className="text-sm text-slate-500">{t("Professional network", "职业社交网络")}</p>
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
              <p className="text-sm text-slate-500">{t("View my academic publications", "查看我的学术论文")}</p>
            </div>
          </a>
        </div>
      </section>

      {/* Research Interests */}
      <section>
        <h2 className="text-xl font-bold mb-6">{t("Research Interests", "研究方向")}</h2>
        <div className="flex flex-wrap gap-3">
          {[
            t("Large Language Models", "大语言模型"),
            t("Inference Optimization", "推理优化"),
            t("Test-Time Optimization", "测试时优化"),
            t("ML Systems", "机器学习系统"),
            t("Generative AI", "生成式AI")
          ].map((topic) => (
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
        <h2 className="text-xl font-bold mb-4">{t("Contact Me", "联系我")}</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          {t("Feel free to reach out via email or social media", "欢迎通过邮件或社交媒体与我交流")}
        </p>
        <a 
          href="mailto:jiezwork@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
        >
          <Mail size={20} />
          {t("Send Email", "发送邮件")}
        </a>
      </section>
    </div>
  );
}
