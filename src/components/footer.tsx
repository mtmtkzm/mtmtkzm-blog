import Styles from '../styles/Footer.module.css'
import SharedStyles from '../styles/shared.module.css'
import SectionTitle from './SectionTitle'

export default () => (
  <>
    <footer className={Styles.Footer}>
      <div className={SharedStyles.BaseLayout}>
        <SectionTitle title="Say Hello." />

        <ul>
          <li>
            <a href="//twitter.com/mtmtkzm" target="_blank">
              Twitter
            </a>
          </li>

          <li>
            <a href="//github.com/mtmtkzm" target="_blank">
              GitHub
            </a>
          </li>

          <li>
            <a href="//wantedly.com/users/17812476" target="_blank">
              Wantedly
            </a>
          </li>

          <li>
            <p className={Styles.Footer_LinkMail}>
              mtmtkzm00@gmail.com
            </p>
          </li>
        </ul>
      </div>
    </footer>
  </>
)
