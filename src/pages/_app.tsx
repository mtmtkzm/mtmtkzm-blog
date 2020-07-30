import 'reset-css'
import '../styles/_variables.css'
import '../styles/global.css'

import Footer from '../components/footer'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />

    <Footer />
  </>
)
