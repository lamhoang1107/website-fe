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
import Review from "../../components/Review";



export default function CatchAllPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { globalData } = useContext(GlobalDataContext);
  let _findIndex = _.findIndex(globalData?.page, { route: (slug && slug[0] !== "") ? slug[0] : "home" });
  
  const showComponent = (v,i) => {
    let _component;
    if (v.status == 1 || v.status == "1")
    switch (v.id) {
      case "banner_form" :
        _component = <Carousel key={i}/>
        break;
      case "feature" :
        _component = <Feature key={i}/>
        break;
      case "about" :
        _component = <About key={i}/>
        break;
      case "counter" :
        _component = <Counter key={i}/>
        break;
      case "service" :
        _component = <Service key={i}/>
        break;
      case "review" :
        _component = <Review key={i}/>
        break;
    }
    return _component
  
  }
  return (
    globalData?.page ? 
    <>
      <Header/>
      {globalData?.page?.[_findIndex]?.items && globalData?.page[_findIndex].items.map((v,i) => {return showComponent(v,i)})}      
      <Footer/>
    </> : 
    <Loading/>
  );
}
