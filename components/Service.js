import { useState, useContext, useEffect, useRef } from "react";
import { GlobalDataContext } from '@/context/GlobalDataContext';
import { Icon } from "@iconify/react";

const ServicesList = () => {
    const { globalData } = useContext(GlobalDataContext);
    let _data = globalData.component?.services ?? {};
    let service_items = _data?.service_items ? JSON.parse(_data?.service_items) : [];

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [itemsPerRow, setItemsPerRow] = useState(3);

    useEffect(() => {
        const updateItemsPerRow = () => {
            if (window.innerWidth >= 992) setItemsPerRow(3);
            else if (window.innerWidth >= 768) setItemsPerRow(2);
            else setItemsPerRow(1);
        };

        updateItemsPerRow();
        window.addEventListener("resize", updateItemsPerRow);
        return () => window.removeEventListener("resize", updateItemsPerRow);
    }, []);

    const toggleExpand = async (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
        let target_id = `#extra-content-${Math.floor(index / itemsPerRow)}-${index}`
        setTimeout(() => {
            let target = document.querySelector(target_id);
            if (target) {
                  target.scrollIntoView({ behavior: "smooth" ,block: 'start' });
            } else {
                //retry after 500ms
                setTimeout(() => {
                    let target = document.querySelector(target_id);
                    if (target) {
                          target.scrollIntoView({ behavior: "smooth" ,block: 'start' });
                    }
                }, 500);
            }
        },500);
    };

    const chunkArray = (arr, size) => {
        return arr.reduce((acc, _, i) =>
            (i % size ? acc[acc.length - 1].push(arr[i]) : acc.push([arr[i]]), acc), []
        );
    };

    const rows = chunkArray(service_items, itemsPerRow);

    return (
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
                    <p className="mb-0">{_data?.description}</p>
                </div>

                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="row g-4 d-flex flex-wrap">
                        {row.map((v, i) => {
                            const itemIndex = rowIndex * itemsPerRow + i;
                            return (
                                <div
                                    key={itemIndex}
                                    className="col-md-6 col-lg-4 wow fadeInUp flex-grow-1"
                                    data-wow-delay="0.1s"
                                    onClick={() => toggleExpand(itemIndex)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className={`service-item-wraper ${(expandedIndex === itemIndex && service_items[expandedIndex]?.html?.length > 0) ? "expanded" : ""}`}>
                                        <div className="service-item p-4">
                                            <div className="service-icon mb-4">
                                                {v?.icon ? (
                                                    <Icon icon={v.icon} width="20" height="20" />
                                                ) : (
                                                    <i className="fa fa-phone-alt fa-2x" />
                                                )}
                                            </div>
                                            <h5 className="mb-3">{v?.title}</h5>
                                            <p className="mb-0">{v?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        {service_items[expandedIndex]?.html?.length > 0 && (
                        <div 
                            id={`extra-content-${rowIndex}-${expandedIndex}`}
                            className={`extra-content-${expandedIndex} col-12 extra-content p-3 ${expandedIndex !== null && Math.floor(expandedIndex / itemsPerRow) === rowIndex ? "show" : ""}`}
                        >
                            <div className="ck-content">
                                <p className="ck-content-html" dangerouslySetInnerHTML={{ __html: service_items[expandedIndex]?.html }} />
                            </div>
                        </div>)}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesList;
