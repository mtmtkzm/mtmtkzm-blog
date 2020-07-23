import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/_ijjk',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/ijjk',
  }
]

export default () => (
  <>
    <Header titlePre="Contact" />

    <div className={sharedStyles.layout}>
      <div>
        <p>
          1993年、京都府出身。浪人を経て名古屋市立大学 芸術工学部に入学しました。
        </p>
        <p>
          作ったものが世に出て人に見られることが楽しく、学祭・展示会の告知サイト、ちょっとした受託業務をこなすうちに、 株式会社LIGにフロントエンドエンジニアとして就職しました。
        </p>
      </div>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
