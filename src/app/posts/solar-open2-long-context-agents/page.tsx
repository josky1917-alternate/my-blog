import type { Metadata } from "next";
import ResearchArticle from "../../components/ResearchArticle";
import { summerPosts } from "../_data/summer-2026";

const post = summerPosts[1];
export const metadata: Metadata = {
  title: `${post.title} | Jie Zhu`,
  description: post.excerpt,
  openGraph: {
    type: "article",
    title: post.title,
    description: post.excerpt,
    publishedTime: post.date,
    authors: ["Jie Zhu"],
  },
};

export default function Page() {
  return <ResearchArticle post={post} />;
}
