import { readFile, readdir } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

/**
 * Function takes a slug to read matching .md file and 
 * returns object with parsed contents 
*/
export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, "utf8");
  const {
    data: { date, title },
    content,
  } = matter(source);
  const body = marked(content);
  return { date, title, body };
}

/**
 * Function returns files name slugs
 */
export async function getSlugs() {
  const suffix = ".md";
  const files = await readdir("content/posts");
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}

/**
 * Function returns array of posts objects,
 * uses the getSlug() and getPost() functions.
*/
export async function getPosts() {
  const slugs = await getSlugs(); // get slugs from files;
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }
  return posts;
}
