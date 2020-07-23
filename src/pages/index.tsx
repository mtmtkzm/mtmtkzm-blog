import Link from 'next/link'
import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />

    <div className={sharedStyles.layout}>
      <p>
        初めまして、ライダーです。<br />
        株式会社LIGでフロントエンドエンジニアとして、受託でWebサイトやWebサービスの開発をしています。
      </p>
      <p>
        仕事（会社）では、かっこいいものより便利なものを作ることに携わりたいと思っています。
      </p>
      <Link href="/about">More Profile ＞</Link>
    </div>
  </>
)
