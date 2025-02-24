import { useContext } from 'react';
import { GlobalDataContext } from '@/context/GlobalDataContext';
import { Icon } from "@iconify/react";
import CountUp from 'react-countup';


export default function Counter() {
    const { globalData } = useContext(GlobalDataContext);
    let _data = globalData.component?.counters ?? {}

    let list_items = _data?.list_items ? JSON.parse(_data?.list_items) : []
    const backgroundStyle = {
        background: `linear-gradient(rgba(0, 12, 33, 0.9), rgba(31, 46, 78, 0.9)), url(${`${process.env.NEXT_PUBLIC_IMAGE_URL}${_data.image}`})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="container-fluid counter bg-secondary py-5" style={backgroundStyle}>
            <div className="container py-5">
                <div className="row g-5 d-flex flex-wrap">
                    {list_items.length > 0 && list_items.map((v, i) => {
                        return (
                            <div
                                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp animated flex-grow-1"
                                data-animation="fadeInUp"
                                data-delay="0.1s"
                                key={i}
                            >
                                <div className="counter-item text-center">
                                    <div className="counter-item-icon mx-auto">
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${v.logo}`}
                                            className="img-fluid"
                                            style={{ objectFit: "cover" }}
                                            alt="Image"
                                            crossOrigin="anonymous"
                                        />
                                        {/* {v?.icon !== "" ?
                                        (<Icon
                                            icon={v?.icon}
                                            width="20"
                                            height="20"
                                        />) :
                                        (
                                            <i className="fas fa-thumbs-up fa-2x" />
                                        )} */}
                                    </div>
                                    {/* <div className="counter-counting my-3">
                                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">
                                            <CountUp end={v?.number} duration={1} enableScrollSpy={true} />
                                        </span>
                                        <span className="h1 fw-bold text-white">+</span>
                                    </div> */}
                                    <h4 className="text-white mb-0">{v?.title}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}
