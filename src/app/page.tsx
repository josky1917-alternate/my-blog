import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    date: "2026-03-30",
    excerpt: "这是我的第一篇博客文章，欢迎来到我的博客！",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          欢迎来到我的博客
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          分享技术、生活与思考
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          最新文章
        </h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <Link href={`/posts/${post.slug}`}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                  {post.title}
                </h3>
              </Link>
              <time className="text-sm text-gray-500 dark:text-gray-500 mb-3 block">
                {post.date}
              </time>
              <p className="text-gray-600 dark:text-gray-400">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
