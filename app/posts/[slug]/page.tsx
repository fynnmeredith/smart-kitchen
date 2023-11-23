import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterContent = matter(content);
  return matterContent;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const postContent = getPostContent(slug);

  return (
    <div>
      <h2 className="">{slug.replace(/-/g, ' ')}</h2>
      <Markdown>{postContent.content}</Markdown>
    </div>
  );
};

export default PostPage;
