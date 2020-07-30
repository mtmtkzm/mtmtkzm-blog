import Link from 'next/link'
import Header from '../components/header'
import Styles from '../styles/pages/index.module.css'
import { ArticleBody, BaseLayout } from '../styles/shared.module.css'
import SectionTitle from '../components/SectionTitle'

export default () => (
  <>
    <Header titlePre="Home" />

    <div className={`${BaseLayout}`}>
      <section className={Styles.Section_Hello}>
        <SectionTitle title="Hello," />

        <div className={`${Styles.Hello_Text} ${ArticleBody}`}>
          <p>
            初めまして、ライダーです。<br />
            株式会社LIGでフロントエンドエンジニアとして、受託でWebサイトやWebサービスの開発をしています。
          </p>

          <p>
            仕事（会社）では、かっこいいものより便利なものを作ることに携わりたいと思っています。
          </p>

          <p className={Styles.ProfileLink}>
            <Link href="/about">More Profile ></Link>
          </p>
        </div>
      </section>

      <section className={Styles.Section_Career}>
        <SectionTitle title="Career" />

        <div className={Styles.Career}>
          <span className={Styles.Career_Year}>2020</span>
          <ul>
            <li>入社 <a href="//zebranding.com" target="_blank">株式会社 ZeBrand</a></li>
            <li>退職 株式会社 LIG</li>
          </ul>

          <span className={Styles.Career_Year}>2019</span>
          <ul>
            <li>就任 LIG フロントエンジニアリーダー</li>
          </ul>

          <span className={Styles.Career_Year}>2018</span>
          <ul>
            <li>参画 Vue.js JP コアスタッフ</li>
            <li>講師 デジハリ STUDIO上野 by LIG</li>
            <li>留学 LIG Philippines. inc</li>
          </ul>

          <span className={Styles.Career_Year}>2017</span>
          <ul>
            <li>入社 <a href="//liginc.co.jp" target="_blank">株式会社 LIG</a></li>
            <li>卒業 名古屋市立大学 芸術工学部</li>
          </ul>

          <span className={Styles.Career_Year}>2016</span>
          <ul>
            <li>創設 OthloTech（学生コミュニティ）</li>
          </ul>

          <span className={Styles.Career_Year}>2015</span>
          <ul>
            <li>入社 株式会社LIG アルバイト</li>
          </ul>

          <span className={Styles.Career_Year}>2013</span>
          <ul>
            <li>入学 名古屋市立大学 芸術工学部</li>
          </ul>
        </div>

      </section>
    </div>
  </>
)
