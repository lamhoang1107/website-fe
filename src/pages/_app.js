import Layout from '../../components/Layout';
import { GlobalDataProvider } from '@/context/GlobalDataContext';

// lib
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/bootstrap.min.css";

// global
import "@/styles/globals.scss";
import "@/styles/header.scss";
import "@/styles/footer.scss";
import "@/styles/loading.scss";

// component
import "@/styles/formcarousel.scss";
import "@/styles/feature.scss";
import "@/styles/about.scss";
import "@/styles/counter.scss";
import "@/styles/service.scss";
import "@/styles/testimonial.scss";


export default function App({ Component, pageProps }) {
  return <>
    <GlobalDataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalDataProvider>
  </>;
}
