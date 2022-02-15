import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function FirstPost() {
  return (
      <>
        <Head>
          <title>First Post</title>
        </Head>
        <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`Script loaded correctly.`)
            }
        />
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </>
  );
}
