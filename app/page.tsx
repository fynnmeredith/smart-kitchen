import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';
import { PostMetadata } from '@/components/PostMetadata';

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    };
  });
  return posts;
};

export default function Home() {
  const posts = getPostMetadata();
  const postPreviews = posts.map((post) => {
    return (
      <div key={post.slug} className="flex flex-col m-5 bg-slate-100 p-4 rounded-sm">
        <Link href={`/posts/${post.slug}`} className="no-underline">
          <h3 className="no-underline text-blue-950">
            {post.title}: {post.subtitle}
          </h3>
        </Link>
        <div className="flex-grow ">
          <hr></hr>
          <p className="mt-2">{post.date}</p>
        </div>
      </div>
    );
  });

  return <div className="grid md:grid-cols-2 sm:grid-cols-1">{postPreviews}</div>;
}
