import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'About', page: '/about' },
  { label: 'Blog', page: '/blog' },
]

const ogImageUrl = 'https://mtmtkzm.com/ogp.png'
const twitterCardImageUrl = 'https://mtmtkzm.com/twitter-card.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} My Notion Blog</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta name="og:title" content="My Notion Blog" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@mtmtkzm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={twitterCardImageUrl} />
      </Head>

      <ul>
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
    </header>
  )
}
