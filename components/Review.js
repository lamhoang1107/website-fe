import { useContext } from 'react';
import Carousel from "react-multi-carousel";
import { GlobalDataContext } from '@/context/GlobalDataContext';
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function Review() {
    const { globalData } = useContext(GlobalDataContext);
    let _data = globalData.component?.reviews ?? {}

    let review_list = globalData.review ?? []


    return (
        <div className="container-fluid testimonial pb-5">
            <div className="container pb-5">
                <div
                    className="text-center mx-auto pb-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: 800 }}
                >
                    <h1 className="display-5 text-capitalize mb-3">
                        {_data?.title_part_1}<span className="text-primary"> {_data?.title_part_2}</span>
                    </h1>
                    <p className="mb-0">
                        {_data?.description}
                    </p>
                </div>

                <Carousel 
                    responsive={responsive} 
                    showDots={true}
                    renderDotsOutside={true}
                    centerMode={false}
                    draggable
                    sliderClass=""
                    slidesToSlide={1}
                    infinite={true}
                    arrows={false} 
                    >
                    {review_list.length > 0 && review_list.map((v, i) => {
                        return (
                                <div className="testimonial-item">
                                    <div className="testimonial-quote">
                                        <i className="fa fa-quote-right fa-2x" />
                                    </div>
                                    <div className="testimonial-inner p-4">
                                        <img src={v?.image ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${v.image}` : "/avartar.png"} className="img-fluid" alt="" />
                                        <div className="ms-4">
                                            <h4>{v?.name}</h4>
                                            <p>{v?.title}</p>
                                            <div className="d-flex text-primary">
                                                <i className={`fas fa-star " ${ (v.star < 1) ? "text-body" : ""}`} />
                                                <i className={`fas fa-star " ${ (v.star < 2) ? "text-body" : ""}`} />
                                                <i className={`fas fa-star " ${ (v.star < 3) ? "text-body" : ""}`} />
                                                <i className={`fas fa-star " ${ (v.star < 4) ? "text-body" : ""}`} />
                                                <i className={`fas fa-star " ${ (v.star < 5) ? "text-body" : ""}`} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top rounded-bottom p-4">
                                        <p className="mb-0">
                                            {v?.content}
                                        </p>
                                    </div>
                                </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>


    )
}
