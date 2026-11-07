import type { Metadata } from "next";
import ResearchArticle from "../../components/ResearchArticle";
import { vllmNeuronPost as post } from "../_data/vllm-neuron-deployment";

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
