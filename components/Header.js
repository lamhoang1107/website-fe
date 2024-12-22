
import Link from "next/link";
import { useContext,useState } from 'react';
import { GlobalDataContext } from '@/context/GlobalDataContext';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { Icon } from "@iconify/react";


export default function Header() {
    const { globalData } = useContext(GlobalDataContext);
    let _data = globalData.component?.headers ?? {}
    
    const router = useRouter();
    const { slug } = router.query; // This will contain the dynamic part of the URL

    const showComponent = (v,i) => {
        let _component;
        if (v.status == 1 || v.status == "1") {
            switch (v.route) {
                case "home":
                case "about":
                case "service":
                case "blog":
                case "contact":
                    let link = `./${v.route == "home" ? "" :v.route }`
                    _component = <Link key={i} href={link} className={`nav-item nav-link ${slug?.[0] ? (slug[0] == v.route ? "active" : "") : (v.route == "home" ? "active" : "")}`} >
                        <span >{v.name}</span>
                    </Link>
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
            <>
            {/* Topbar Start */}
            {(_data.topbar_status == 1 || _data.topbar_status == "1") && <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
                <div className="container">
                <div className="row gx-0 align-items-center" style={{ height: 45 }}>
                    <div className="col-lg-6 text-center text-lg-start mb-lg-0">
                    <div className="d-flex flex-wrap">
                        {_data.topbar_address !== "" && (
                            <a href="#" className="text-muted me-4">
                            <i className="fas fa-map-marker-alt text-primary me-2" />
                            {_data.topbar_address}
                            </a>
                        )}
                        {_data.topbar_phone !== "" && (
                            <a href={`tel:${_data.topbar_phone}`} className="text-muted me-4">
                            <i className="fas fa-phone-alt text-primary me-2" />
                            {_data.topbar_phone}
                            </a>
                        )}
                        {_data.topbar_email !== "" && (
                            <a href={`mailto:${_data.topbar_email}`} className="text-muted me-0">
                            <i className="fas fa-envelope text-primary me-2" />
                            {_data.topbar_email}
                        </a>
                        )}
                    </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end">
                    <div className="d-flex align-items-center justify-content-end">
                        {_data.topbar_facebook !== "" && (
                        <a
                            href={_data.topbar_facebook}
                            className="btn btn-light btn-sm-square rounded-circle me-3"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        )}
                        {_data.topbar_twitter !== "" && (
                        <a
                            href={_data.topbar_twitter}
                            className="btn btn-light btn-sm-square rounded-circle me-3"
                        >
                            <i className="fab fa-x-twitter" />
                        </a>
                        )}
                        {_data.topbar_instagram !== "" && (
                        <a
                            href={_data.topbar_instagram}
                            className="btn btn-light btn-sm-square rounded-circle me-3"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        )}
                        {_data.topbar_linkedin !== "" && (
                        <a
                            href={_data.topbar_linkedin}
                            className="btn btn-light btn-sm-square rounded-circle me-0"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        )}
                    </div>
                    </div>
                </div>
                </div>
            </div>}
            </>

            <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
                <div className="container">
                    <div className="navbar navbar-expand-lg navbar-light">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="display-6 text-primary">
                        {_data?.icon !== "" ? 
                            (<Icon
                                icon={_data?.icon}
                                width="40"
                                height="40"
                                className="me-3"
                            />):
                            (
                                <i className="fas fa-car-alt me-3" />
                        )}
                        {_data.title}
                        </h1>
                    </a>
                    <button className="navbar-toggler" type="button" onClick={toggle} data-bs-toggle="collapse" data-bs-target="#navbarCollapse" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isToggled == true ? "show" : ""}`} id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            {globalData?.page && globalData?.page.map((v,i) => {return showComponent(v,i)})}
                        </div>
                        {(_data.btn_status == 1 || _data.btn_status == "1") && <a href="#header-carousel" className="btn btn-primary rounded-pill py-2 px-4">{_data.btn_title ?? "Get Started"}</a>}
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
