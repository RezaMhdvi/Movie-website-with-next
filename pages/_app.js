import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import Layout from '../components/layout';
import '../styles/global.css'

//swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
