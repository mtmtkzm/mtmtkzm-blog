import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import Styles from '../styles/Header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'HOME', page: '/' },
  { label: 'BLOG', page: '/blog' },
]

const ogImageUrl = 'https://mtmtkzm.com/ogp.png'
const twitterCardImageUrl = 'https://mtmtkzm.com/twitter-card.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} MTMTKZM</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta name="og:title" content="MTMTKZM" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@mtmtkzm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={twitterCardImageUrl} />
        <link
          data-n-head="true"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:400,800"
        />
        <link
          data-n-head="true"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inconsolata:400,700"
        />
      </Head>

      <div className={Styles.Header}>
        <Link href="/">
          <h1 className={Styles.Header_Title}>
            <a>
              <span className={Styles.Header_Primary}>MTMTKZM</span>

              <span className={Styles.Header_Secondary}>
                Rider - Kazuma Matsumoto
              </span>
            </a>
          </h1>
        </Link>

        <ul className={Styles.Header_Navigation}>
          {navItems.map(({ label, page, link }) => (
            <li key={label}>
              {page ? (
                <Link href={page}>
                  <a className={pathname === page ? 'active' : undefined}>
                    {label}
                  </a>
                </Link>
              ) : (
                <ExtLink href={link}>{label}</ExtLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
