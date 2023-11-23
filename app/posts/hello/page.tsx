import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

const getPostContent = () => {
  const folder = 'posts/';
  const file = `${folder}The-Best-Air-Fryers-2023.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterContent = matter(content);
  return matterContent;
};

const HelloPage = () => {
  const content = getPostContent();
  console.log({ content });
  return (
    <div>
      <h2 className="">HELLO</h2>
      <Markdown>{content.content}</Markdown>
    </div>
  );
};

export default HelloPage;
