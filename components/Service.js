import { useContext } from 'react';
import { GlobalDataContext } from '@/context/GlobalDataContext';
import { Icon } from "@iconify/react";

export default function Service() {
    const { globalData } = useContext(GlobalDataContext);
    let _data = globalData.component?.services ?? {}
    let service_items = _data?.service_items ? JSON.parse(_data?.service_items) : []
    return (
        <>
            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div
                        className="text-center mx-auto pb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 800 }}
                    >
                        <h1 className="display-5 text-capitalize mb-3">
                            {_data?.title_part_1} <span className="text-primary">{_data?.title_part_2}</span>
                        </h1>
                        <p className="mb-0">
                            {_data?.description}
                        </p>
                    </div>
                     <div className="row g-4 d-flex flex-wrap">
                        {service_items.length > 0 && service_items.map((v) => {
                            return ( <div className="col-md-6 col-lg-4 wow fadeInUp flex-grow-1" data-wow-delay="0.1s">
                                <div className='service-item-wraper'>

                                    <div className="service-item p-4">
                                        <div className="service-icon mb-4">                        
                                            {v?.icon !== "" ? 
                                            (<Icon
                                                icon={v?.icon}
                                                width="20"
                                                height="20"
                                            />):
                                            (
                                                <i className="fa fa-phone-alt fa-2x" />
                                            )}
                                                    
                                        </div>
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
            </div>
        </>

    )
}
