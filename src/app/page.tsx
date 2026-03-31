import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
}

const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello World - 欢迎来到我的博客",
    date: "2026-03-30",
    excerpt: "这是我的第一篇博客文章。在这里，我将分享关于AI、机器学习、软件工程的技术文章，以及个人的学习心得和生活感悟。",
    tags: ["随笔", "介绍"],
    readTime: "2 min",
  },
  {
    slug: "llm-inference-optimization",
    title: "大语言模型推理优化实践",
    date: "2026-03-28",
    excerpt: "在Amazon AGI团队工作中积累的LLM推理优化经验，包括模型量化、KV Cache优化、Continuous Batching等技术。",
    tags: ["LLM", "推理优化", "AI"],
    readTime: "8 min",
  },
  {
    slug: "test-time-scaling",
    title: "Test-Time Scaling：让大模型更聪明",
    excerpt: "介绍我们团队在ICLR 2026发表的工作Plan-and-Budget，探讨如何在推理阶段通过计算资源分配提升模型表现。",
    date: "2026-03-25",
    tags: ["论文解读", "Test-Time Optimization", "LLM"],
    readTime: "6 min",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
          探索技术与思考
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          分享AI、机器学习、软件工程的技术文章，以及个人的学习心得
        </p>
      </section>

      {/* Tags Filter */}
      <section className="flex flex-wrap justify-center gap-2">
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 cursor-pointer">
          全部
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          AI
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          LLM
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          推理优化
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          论文解读
        </span>
        <span className="tag px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          随笔
        </span>
      </section>

      {/* Posts List */}
      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="w-1 h-8 rounded-full bg-gradient-to-b from-blue-500 to-purple-500"></span>
          最新文章
        </h2>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="card-hover group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300"
                  >
                    <Tag size={12} className="inline mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link href={`/posts/${post.slug}`}>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                
                <Link 
                  href={`/posts/${post.slug}`}
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                >
                  阅读更多
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter / Subscribe Section */}
      <section className="gradient-border">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">订阅更新</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            有新文章发布时，第一时间通知你
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="输入你的邮箱"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
              订阅
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
