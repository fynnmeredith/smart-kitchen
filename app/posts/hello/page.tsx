import Markdown from 'markdown-to-jsx';

const markdownStuff = '## heading';

const HelloPage = () => {
  return (
    <div>
      <h2 className="">HELLO</h2>
      <Markdown>{markdownStuff}</Markdown>
    </div>
  );
};

export default HelloPage;
