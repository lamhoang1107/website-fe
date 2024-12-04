import Header from "../../components/Header";
import Carousel from "../../components/FormCarousel";
import Feature from "../../components/Feature";
import About from "../../components/About";
import Counter from "../../components/Counter";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";

export default function Home() {
  console.log("Home")
  return (
    <>
    <Header/>
    <Carousel/>
    <Feature/>
    <About/>
    <Counter/>
    <Service/>
    <Testimonial/>
    </>
  );
}
