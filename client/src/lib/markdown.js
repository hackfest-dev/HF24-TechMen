import { remark } from 'remark';
import html from 'remark-html';

export async function markdownToHtml(markdown) {
  const processedContent = await remark()
   .use(html)
   .process(markdown);
  return processedContent.toString();
}