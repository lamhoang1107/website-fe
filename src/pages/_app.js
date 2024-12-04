import Layout from '../../components/Layout';
import { GlobalDataProvider } from '@/context/GlobalDataContext';

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/bootstrap.min.css";
import "@/styles/globals.scss";
import "@/styles/header.scss";
import "@/styles/formcarousel.scss";
import "@/styles/feature.scss";
import "@/styles/about.scss";
import "@/styles/counter.scss";
import "@/styles/service.scss";
import "@/styles/testimonial.scss";


export default function App({ Component, pageProps }) {
  console.log("App")
  return <>
    <GlobalDataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalDataProvider>
  </>;
}
