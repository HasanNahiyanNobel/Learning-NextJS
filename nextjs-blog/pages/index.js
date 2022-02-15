import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>I am a final-year student of Computer Science and Engineering, with a deep interest in creative writing and graphic design. Since 2012, I have worked with several science organizations—where I designed software from scratch to automate the background tasks, launched 20+ national events, and trained more than two thousand students across the country.</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
  )
}
