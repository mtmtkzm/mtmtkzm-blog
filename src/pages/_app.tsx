import 'reset-css'
import '../styles/_variables.css'
import '../styles/global.css'

import Footer from '../components/Footer'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />

    <Footer />
  </>
)
