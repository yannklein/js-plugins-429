// const MarkdownIt = require('markdown-it');
import MarkdownIt from 'markdown-it';

const initMarkdown = () => {
  const editor = document.querySelector("#editor");
  const preview = document.querySelector("#preview");
  const md = new MarkdownIt();

  editor.addEventListener("keyup", (event) => {
    preview.innerHTML = md.render(event.currentTarget.value);
  });
};

export { initMarkdown };
