import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import matter from 'gray-matter';

const postsDirectory = path.join('writing');
const extensions = ['md', 'mdx'];

export interface IPost {
  id: string;
  title: string;
  date: string;
  source: string;
  published: boolean;
  description?: string;
}

export async function getAllPostIds() {
  const fileNames = await promisify(fs.readdir)(postsDirectory);

  return fileNames.map((f) =>
    f.replace(new RegExp(`(${extensions.map((e) => `\.${e}$`).join('|')})`), '')
  );
}

export async function getAllPostData(): Promise<IPost[]> {
  const ids = await getAllPostIds();
  const data = ids.map(async (id) => getPostDataFromFile(id));
  return Promise.all(data);
}

export async function getPostDataFromFile(id: string): Promise<IPost> {
  const p = firstMatchingExt(id, ['md', 'mdx']);
  const raw = await promisify(fs.readFile)(p);

  const { content, data } = matter(raw);

  return {
    id,
    title: data.title,
    description: data.title,
    date: data.date,
    source: content,
    published: !!data.published,
  };
}

const firstMatchingExt = (id: string, exts: string[]): string => {
  if (exts.length === 0) {
    throw new Error('Post not found');
  }

  const p = path.join(postsDirectory, `${id}.${exts[0]}`);
  return fs.existsSync(p) ? p : firstMatchingExt(id, exts.slice(1));
};
