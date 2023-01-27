import '@/styles/globals.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Showcase from './component/Showcase'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }) {
  const router = useRouter()
  return <><Header/> {router.pathname === '/' && <Showcase/>} <Component {...pageProps} />
<Footer/></>}
