import Header from '../components/header'
import ExtLink from '../components/ext-link'

import SharedStyles from '../styles/shared.module.css'
import Styles from '../styles/pages/about.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import SectionTitle from '../components/SectionTitle'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/mtmtkzm',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/mtmtkzm',
  },
]

const skills = [
  'JavaScript',
  'TypeScript',
  'Vue',
  'Nuxt',
  'jQuery',
  'SCSS',
  'Post CSS',
  'Node',
  'Express',
  'WordPress',
  'Laravel',
  'Sketch',
  'Figma',
  'UI Design',
  'English',
]

export default () => (
  <>
    <Header titlePre="Contact"/>

    <div className={SharedStyles.BaseLayout}>
      <section className={Styles.Section_About}>
        <SectionTitle title="Hello,"/>

        <div className={SharedStyles.ArticleBody}>
          <img src="/rider.png" alt="Rider - Kazuma Matsumoto"/>

          <p>
            初めまして。ライダーです。<br/>いわゆる中型バイクに乗れます。
          </p>

          <p>
            1993年、京都府出身。浪人を経て名古屋市立大学 芸術工学部に入学しました。<br/>
            作ったものが世に出て人に見られることが楽しく、学祭・展示会の告知サイト、ちょっとした受託業務をこなすうちに、 株式会社LIGにフロントエンドエンジニアとして就職しました。
            いまの主な業務はWebサイト・Webサービスを制作することです。
          </p>

          <h3>得意なこと</h3>
          <p>
            Webサイト・サービス開発が得意です。が、Web開発にとらわれず、物事を器用貧乏にこなすことができます。
          </p>
          <p>
            他には、イベント運営や企画などが好きです。<br/>いまは、Vue.js 日本ユーザグループ
            コアスタッフとして、イベント運営に関わっていたり、過去には、OthloTech（学生コミュニティ）を創設しイベントを企画・運営していました。
          </p>
          <p>
            また、デジタルハリウッド大学 STUDIO上野 by LIG の講師としてJavaScript 入門講座を担当しています。
          </p>

          <h3>スキルセット</h3>

          <ul className={Styles.Skills}>
            {skills.map(skill => <li>{skill}</li>)}
          </ul>
        </div>
      </section>

      <div>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32}/>
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
