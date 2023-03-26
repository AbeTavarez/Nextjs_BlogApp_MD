import { readFile, readdir } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, "utf8");
  const {
    data: { date, title },
    content,
  } = matter(source);
  const body = marked(content);
  return { date, title, body };
}

export async function getSlugs() {
  const suffix = ".md";
  const files = await readdir("content/posts");
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}
