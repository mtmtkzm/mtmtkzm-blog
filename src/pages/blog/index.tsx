import Link from 'next/link'
import Header from '../../components/header'

import Styles from '../../styles/pages/blog-index.module.css'
import SharedStyles from '../../styles/shared.module.css'

import { getBlogLink, getDateStr, postIsPublished } from '../../lib/blog-helpers'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import SectionTitle from '../../components/SectionTitle'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      const isDraftPost = !preview && !postIsPublished(post)

      // remove draft posts in production
      return isDraftPost ? null : post
    })
    .filter(Boolean)

  return {
    props: {
      posts,
    },
    unstable_revalidate: 10,
  }
}

export default ({ posts = [] }) => {
  return (
    <>
      <Header titlePre="Blog"/>

      <div className={SharedStyles.BaseLayout}>
        <section className={Styles.Section_Blog}>
          <SectionTitle title="Blog"/>

          {posts.map(post => {
            const { Slug, Page, Date } = post

            const dateText = getDateStr(Date)
            const linkAs = getBlogLink(Slug)

            return (
              <div key={Slug} className={Styles.PostItem}>
                <Link href="/blog/[slug]" as={linkAs}>
                  <a>
                    <div className={Styles.PostItem_MetaDetail}>
                      <span>{dateText}</span>
                      <span>rider</span>
                    </div>

                    <h3>{Page}</h3>
                  </a>
                </Link>
              </div>
          )
          })}
        </section>
      </div>
    </>
  )
}
