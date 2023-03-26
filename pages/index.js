import Head from "next/head";
import Link from "next/link";
function HomePage() {
  return (
    <main>
      <Head>
        <title>Blog App</title>
        <meta name="description" value="My blog" />
      </Head>
      <h1>Home Page</h1>

      <ul>
        <li>
            <Link href='/posts/first-post'>First Post</Link>
        </li>
      </ul>
    </main>
  );
}

export default HomePage;
