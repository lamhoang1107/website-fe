// pages/[...slug].js
import { useRouter } from 'next/router';

import { GlobalDataContext } from '@/context/GlobalDataContext';
import { useContext } from 'react';
import _ from 'lodash';

import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "../../components/FormCarousel";
import Feature from "../../components/Feature";
import About from "../../components/About";
import Counter from "../../components/Counter";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";



export default function CatchAllPage() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("🐈 ~ CatchAllPage ~ router.query:")

  const { globalData } = useContext(GlobalDataContext);
  console.log("🐈 ~ CatchAllPage ~ globalData:", globalData)
  let _findIndex = _.findIndex(globalData?.page, { route: (slug && slug[0] !== "") ? slug[0] : "home" });
  
  const showComponent = v => {
    let _component;
    if (v.status == 1 || v.status == "1")
    switch (v.id) {
      case "banner_form" :
        _component = <Carousel/>
        break;
      case "feature" :
        _component = <Feature/>
        break;
      case "about" :
        _component = <About/>
        break;
      case "counter" :
        _component = <Counter/>
        break;
      case "service" :
        _component = <Service/>
        break;
      
    }
    return _component
  
  }
  return (
    globalData?.page ? 
    <>
      <Header/>
      {globalData?.page?.[_findIndex]?.items && globalData?.page[_findIndex].items.map((v) => {return showComponent(v)})}      
      <Footer/>
    </> : 
    <Loading/>
  );
}
