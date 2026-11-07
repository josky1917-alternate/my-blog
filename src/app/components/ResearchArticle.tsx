"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import type { ResearchPost } from "../posts/_data/summer-2026";

export default function ResearchArticle({ post }: { post: ResearchPost }) {
  const { t } = useLanguage();
  return (
    <article className="max-w-4xl mx-auto">
      <Link href="/" className="inline-block mb-8 text-blue-600 dark:text-blue-400 hover:underline">
        ← {t("Back to Home", "返回首页")}
      </Link>
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => <span key={tag} className="tag px-3 py-1 rounded-full text-sm text-blue-700 dark:text-blue-300">{tag}</span>)}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">{t(post.title, post.titleZh)}</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Jie Zhu · <time dateTime={post.date}>{post.date}</time> · {post.readTime}
        </p>
      </header>
      <p className="text-lg leading-relaxed mb-10 text-slate-700 dark:text-slate-300">{t(post.excerpt, post.excerptZh)}</p>
      <div className="space-y-10">
        {post.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold mb-4">{t(section.heading.en, section.heading.zh)}</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-8">
              {section.paragraphs.map((paragraph, i) => <p key={i}>{t(paragraph.en, paragraph.zh)}</p>)}
            </div>
            {section.table && (
              <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                <table className="w-full min-w-[640px] text-sm text-left leading-6">
                  <caption className="sr-only">{t(section.heading.en, section.heading.zh)}</caption>
                  <thead className="bg-slate-100 dark:bg-slate-800">
                    <tr>{section.table.headers.map((header, i) => <th key={i} scope="col" className="px-4 py-3 font-semibold">{t(header.en, header.zh)}</th>)}</tr>
                  </thead>
                  <tbody>{section.table.rows.map((row, i) => (
                    <tr key={i} className="border-t border-slate-200 dark:border-slate-700">
                      {row.map((cell, j) => j === 0
                        ? <th key={j} scope="row" className="px-4 py-3 align-top font-medium">{t(cell.en, cell.zh)}</th>
                        : <td key={j} className="px-4 py-3 align-top text-slate-700 dark:text-slate-300">{t(cell.en, cell.zh)}</td>)}
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            )}
            {section.sources && <p className="mt-3 text-sm text-blue-600 dark:text-blue-400">
              {t("Sources: ", "来源：")}{section.sources.map(id => <a key={id} href={`#source-${id}`} className="mr-3 underline">[{id}]</a>)}
            </p>}
          </section>
        ))}
      </div>
      <section className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-semibold mb-4">{t("Primary sources", "一手资料")}</h2>
        <ol className="list-decimal pl-6 space-y-4 text-sm">
          {post.sources.map((source, i) => <li key={source.url} id={`source-${i + 1}`} className="scroll-mt-28 break-words">
            <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">{source.title}</a>
            <span className="block mt-1 text-slate-600 dark:text-slate-400">{source.date}</span>
          </li>)}
        </ol>
      </section>
    </article>
  );
}
