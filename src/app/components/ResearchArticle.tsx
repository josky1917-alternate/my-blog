"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import type { ResearchPost } from "../posts/_data/summer-2026";
import { articleVisuals } from "../posts/_data/article-visuals";
import type { ArticleFigure, ArticleVisuals } from "../posts/_data/article-visuals";
import { ArrowDown, ArrowRight, Calendar, Clock, Lightbulb } from "lucide-react";

function Figure({ figure }: { figure: ArticleFigure }) {
  const { t } = useLanguage();
  const lanes = figure.kind === "lanes" ? figure.lanes : [{ label: null, steps: figure.steps }];
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50">
      <div className="p-5 sm:p-7">
        <p className="mb-5 font-semibold text-slate-900 dark:text-slate-100">{t(figure.title.en, figure.title.zh)}</p>
        <div className="space-y-6">
          {lanes.map((lane, i) => <div key={i}>
            {lane.label && <p className={`mb-3 text-sm font-semibold ${i === 0 ? "text-blue-700 dark:text-blue-300" : "text-purple-700 dark:text-purple-300"}`}>{t(lane.label.en, lane.label.zh)}</p>}
            <ol className={`grid gap-3 ${lane.steps.length === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"}`}>
              {lane.steps.map((item, j) => <li key={j} className="relative min-w-0">
                <div className={`h-full rounded-xl border bg-white p-4 dark:bg-slate-900 ${i === 0 ? "border-blue-200 dark:border-blue-800" : "border-purple-200 dark:border-purple-800"}`}>
                  <span aria-hidden="true" className={`mb-3 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${i === 0 ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200" : "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"}`}>{j + 1}</span>
                  <p className="text-sm font-semibold">{t(item.title.en, item.title.zh)}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">{t(item.detail.en, item.detail.zh)}</p>
                </div>
                {j < lane.steps.length - 1 && <>
                  <ArrowRight aria-hidden="true" size={18} className="absolute -right-[15px] top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-slate-50 text-slate-500 dark:bg-slate-800 dark:text-slate-400 sm:block" />
                  <ArrowDown aria-hidden="true" size={16} className="absolute -bottom-[14px] left-1/2 z-10 -translate-x-1/2 bg-slate-50 text-slate-500 dark:bg-slate-800 dark:text-slate-400 sm:hidden" />
                </>}
              </li>)}
            </ol>
          </div>)}
        </div>
      </div>
      <figcaption className="border-t border-slate-200 bg-white px-5 py-4 text-xs leading-6 text-slate-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400 sm:px-7">
        <strong className="text-slate-700 dark:text-slate-300">{t("Figure 1. ", "图1：")}</strong>{t(figure.caption.en, figure.caption.zh)}
        {figure.sources.map(id => <a key={id} href={`#source-${id}`} className="ml-2 text-blue-600 underline dark:text-blue-400">[{id}]</a>)}
      </figcaption>
    </figure>
  );
}

function ReadingCards({ visuals }: { visuals: ArticleVisuals }) {
  const { t } = useLanguage();
  return <aside className="my-8" aria-label={t("Three things to remember", "记住这三件事")}>
    <p className="mb-4 text-sm font-semibold text-slate-600 dark:text-slate-400">{t("Three things to remember", "读到这里，记住这三件事")}</p>
    <div className="grid gap-3 sm:grid-cols-3">
      {visuals.cards.map((card, i) => <div key={i} className="rounded-xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/40">
        <p className="mb-2 font-semibold text-blue-900 dark:text-blue-200">{t(card.title.en, card.title.zh)}</p>
        <p className="text-sm leading-6 text-blue-800 dark:text-blue-300">{t(card.detail.en, card.detail.zh)}</p>
      </div>)}
    </div>
  </aside>;
}

export default function ResearchArticle({ post }: { post: ResearchPost }) {
  const { t } = useLanguage();
  const visuals = articleVisuals[post.slug];
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
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
          <span>Jie Zhu</span>
          <span className="inline-flex items-center gap-2"><Calendar size={16} aria-hidden="true" /><time dateTime={post.date}>{post.date}</time></span>
          <span className="inline-flex items-center gap-2"><Clock size={16} aria-hidden="true" />{post.readTime}</span>
        </div>
      </header>
      <p className="text-lg leading-relaxed mb-10 text-slate-700 dark:text-slate-300">{t(post.excerpt, post.excerptZh)}</p>
      {visuals && <>
        <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-300">{t(visuals.scene.en, visuals.scene.zh)}</p>
        <aside className="mb-10 rounded-r-xl border-l-4 border-amber-400 bg-amber-50 p-5 dark:bg-amber-950/30">
          <p className="mb-2 flex items-center gap-2 font-semibold text-amber-900 dark:text-amber-200"><Lightbulb size={18} aria-hidden="true" />{t("The idea in one sentence", "用一句话抓住重点")}</p>
          <p className="text-sm leading-7 text-amber-900 dark:text-amber-200">{t(visuals.takeaway.en, visuals.takeaway.zh)}</p>
        </aside>
      </>}
      <div className="space-y-10">
        {post.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold mb-4">{t(section.heading.en, section.heading.zh)}</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-8">
              {section.paragraphs.map((paragraph, i) => <p key={i}>{t(paragraph.en, paragraph.zh)}</p>)}
            </div>
            {visuals && index === visuals.figure.afterSection && <Figure figure={visuals.figure} />}
            {visuals && index === post.sections.length - 2 && <ReadingCards visuals={visuals} />}
            {section.table && (
              <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                <table className="w-full min-w-[640px] text-sm text-left leading-6">
                  <caption className="caption-bottom border-t border-slate-200 bg-slate-50 px-4 py-3 text-left text-xs leading-6 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">{t("Table 1. Platform characteristics at a glance. This is a qualitative comparison, not a performance ranking.", "表1：平台特征对照。这是定性比较，不是实测性能排名。")}</caption>
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
