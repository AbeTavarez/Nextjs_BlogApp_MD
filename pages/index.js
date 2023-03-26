import Head from "next/head";
import Link from "next/link";

import { getPosts } from "../lib/posts";

// we need to call getStaticProps to pass props to a Page Component
export async function getStaticProps() {
  const posts = await getPosts();
  // always return an object called props, with the props in it.
  return {
    props: { posts },
  };
}

function HomePage(props) {
  const { posts } = props;
  return (
    <main>
      <Head>
        <title>Blog App</title>
        <meta name="description" value="My blog" />
      </Head>
      <h1>Home Page</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/post/${posts.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default HomePage;
