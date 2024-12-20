
import Link from "next/link";
import { useContext, useState } from 'react';
import { GlobalDataContext } from '@/context/GlobalDataContext';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { Icon } from "@iconify/react";


export default function Footer() {
    const { globalData } = useContext(GlobalDataContext);
    let _data = globalData.component?.footers ?? {}
    console.log("🐈 ~ Footer ~ _data:", _data)
    let hours_items = _data?.hours_items ? JSON.parse(_data?.hours_items) : []


    const showComponent = v => {
        let _component;
        if (v.status == 1 || v.status == "1") {
            switch (v.route) {
                case "home":
                case "about":
                case "service":
                case "blog":
                case "contact":
                    let link = `./${v.route == "home" ? "" : v.route}`
                    _component = (
                        <a href={link}>
                            <i className="fas fa-angle-right me-2" /> {v.name}
                        </a>
                    )
                    break;
            }
        }
        return _component
    }

    const [isToggled, setIsToggled] = useState(false);
    const toggle = () => {
        setIsToggled(prevState => !prevState);
    };
    return (
        <>
            {/* Footer Start */}
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5 flex">
                        {(_data?.about_status == 1 || _data?.about_status == "1") && <div className="col-md-6 col-lg-6 col-xl-3 flex-grow-1">
                            <div className="footer-item d-flex flex-column">
                                <div className="footer-item">
                                    <h4 className="text-white mb-4">{_data?.title_about}</h4>
                                    <p className="mb-3">
                                        {_data?.description_about}
                                    </p>
                                </div>
                                {(_data?.sub_btn_status == 1 || _data?.sub_btn_status == "1") && <div className="position-relative">
                                    <input
                                        className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                                        type="text"
                                        placeholder={_data?.sub_btn_placeholder}
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                                    >
                                        {_data?.sub_btn_title}
                                    </button>
                                </div>}
                            </div>
                        </div>}
                        {(_data?.link_status == 1 || _data?.link_status == "1") && <div className="col-md-6 col-lg-6 col-xl-3 flex-grow-1">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">{_data?.title_links}</h4>
                                {globalData?.page && globalData?.page.map((v) => {return showComponent(v)})}
                            </div>
                        </div>}
                        {(_data?.hours_status == 1 || _data?.hours_status == "1") && <div className="col-md-6 col-lg-6 col-xl-3 flex-grow-1">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">{_data?.title_hours}</h4>
                                {hours_items?.length > 0 && hours_items.map((v) => {
                                    return (
                                        <div className="mb-3">
                                            <h6 className="text-muted mb-0">{v?.top}</h6>
                                            <p className="text-white mb-0">{v?.bottom}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>}
                        {(_data.contact_status == 1 || _data.contact_status == "1") && <div className="col-md-6 col-lg-6 col-xl-3 flex-grow-1">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">{_data.contact_title}</h4>
                                {_data?.contact_address && <a href={_data?.contact_address_link} target="_blank" class="contact-item">
                                    <i className="fa fa-map-marker-alt me-2" /> {_data.contact_address}
                                </a>}
                                {_data?.contact_email && <a href={"mailto:"+_data?.contact_email} class="contact-item">
                                    <i className="fas fa-envelope me-2" /> {_data?.contact_email}
                                </a>}
                                {_data?.contact_phone && <a href={"tel:"+ _data?.contact_phone} class="contact-item">
                                    <i className="fas fa-phone me-2" /> {_data?.contact_phone}
                                </a>}
                                <div className="d-flex">
                                    {_data?.contact_facebook !== "" && <a
                                        className="btn btn-secondary btn-md-square rounded-circle me-3"
                                        target="_blank"
                                        href={_data?.contact_facebook}
                                    >
                                        <i className="fab fa-facebook-f text-white" />
                                    </a>}
                                    {_data?.contact_twitter !== "" && <a
                                        className="btn btn-secondary btn-md-square rounded-circle me-3"
                                        target="_blank"
                                        href={_data?.contact_twitter}
                                    >
                                        <i className="fab fa-x-twitter text-white" />
                                    </a>}
                                    {_data?.contact_instagram !== "" && <a
                                        className="btn btn-secondary btn-md-square rounded-circle me-3"
                                        target="_blank"
                                        href={_data?.contact_instagram}
                                    >
                                        <i className="fab fa-instagram text-white" />
                                    </a>}
                                   {_data?.contact_linkedin !== "" && <a
                                        className="btn btn-secondary btn-md-square rounded-circle me-0"
                                        target="_blank"
                                        href={_data?.contact_linkedin}
                                    >
                                        <i className="fab fa-linkedin-in text-white" />
                                    </a>}
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </>

    )
}
