import { useContext } from 'react';
import { GlobalDataContext } from '@/context/GlobalDataContext';
import { Icon } from "@iconify/react";

export default function Feature() {
    const { globalData } = useContext(GlobalDataContext);
    let _data = globalData.component?.features ?? {}

    let list_items = _data?.list_items ? JSON.parse(_data?.list_items) : []
    const middleIndex = Math.ceil(list_items.length / 2);
    const firstHalf = list_items.slice(0, middleIndex);
    const secondHalf = list_items.slice(middleIndex);
    
    return (
        <>
            <div className="container-fluid feature py-5">
                <div className="container py-5">
                    <div
                        className="text-center mx-auto pb-5 fadeInUp animated"
                        style={{ maxWidth: 800, animationDelay: "0.1s" }}
                        data-animation="fadeInUp"
                        data-delay="0.1s"

                    >
                        <h1 className="display-5 text-capitalize mb-3">
                            {_data?.title_part_1} <span className="text-primary">{_data?.title_part_2}</span>
                        </h1>
                        <p className="mb-0">
                            {_data?.description}
                        </p>
                    </div>
                    <div className="row g-4 align-items-center">
                        <div className="col-xl-4">
                            <div className="row gy-4 gx-0">
                                {firstHalf.length > 0 && firstHalf.map((v,i) => {
                                    return (<div key={i} className="col-12 animated fadeInUp" data-animation="fadeInUp" data-delay="0.1s" style={{ animationDelay: "0.3s" }}>
                                        <div className="feature-item">
                                            <div className="feature-icon">
                                                <span>
                                                    {v?.icon !== "" ?
                                                        (<Icon
                                                            icon={v?.icon}
                                                            width="20"
                                                            height="20"
                                                        />) :
                                                        (
                                                            <span className="fa fa-road fa-2x" />
                                                        )}
                                                </span>
                                            </div>
                                            <div className="ms-4">
                                                <h5 className="mb-3">{v?.title}</h5>
                                                <p className="mb-0">
                                                    {v?.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>)
                                })}

                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-4 animated fadeInUp" data-animation="fadeInUp" data-delay="0.2s" style={{ animationDelay: "0.2s" }}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${_data.image}`}
                                className="img-fluid w-100"
                                style={{ objectFit: "cover" }}
                                alt="Img"
                                crossOrigin="anonymous"
                            />
                        </div>
                        <div className="col-xl-4">
                            <div className="row gy-4 gx-0">
                                {secondHalf.length > 0 && secondHalf.map((v,i) => {
                                    return (<div key={i} className="col-12 animated fadeInUp" data-animation="fadeInUp" data-delay="0.1s" style={{ animationDelay: "0.3s" }}>
                                        <div className="feature-item justify-content-end">
                                            <div className="text-end me-4">
                                                <h5 className="mb-3">{v?.title}</h5>
                                                <p className="mb-0">
                                                    {v?.description}
                                                </p>
                                            </div>
                                            <div className="feature-icon">
                                                <span>
                                                    {v?.icon !== "" ?
                                                        (<Icon
                                                            icon={v?.icon}
                                                            width="20"
                                                            height="20"
                                                        />) :
                                                        (
                                                            <span className="fa fa-tag fa-2x" />
                                                        )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
