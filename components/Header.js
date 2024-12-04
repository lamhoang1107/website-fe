
import Link from "next/link";
import { useEffect,useState } from 'react';
import { useContext } from 'react';
import { GlobalDataContext } from '@/context/GlobalDataContext';
import { useRouter } from 'next/router';

export default function Header() {
    const { globalData } = useContext(GlobalDataContext);
    console.log("🐈 ~ Header ~ globalData:", globalData?.page["home"])
    const router = useRouter();

    // Access the current path
    const currentPath = router.pathname;
    console.log("🐈 ~ Header ~ currentPath:", currentPath)

    // Access dynamic route parameters or query string
    const query = router.query; // Example: if route is /post/[id]
    console.log("🐈 ~ Header ~ query:", query)

    return (
        <>
            <>
            {/* Topbar Start */}
            <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
                <div className="container">
                <div className="row gx-0 align-items-center" style={{ height: 45 }}>
                    <div className="col-lg-6 text-center text-lg-start mb-lg-0">
                    <div className="d-flex flex-wrap">
                        <a href="#" className="text-muted me-4">
                        <i className="fas fa-map-marker-alt text-primary me-2" />
                        Find A Location
                        </a>
                        <a href="tel:+01234567890" className="text-muted me-4">
                        <i className="fas fa-phone-alt text-primary me-2" />
                        +01234567890
                        </a>
                        <a href="mailto:example@gmail.com" className="text-muted me-0">
                        <i className="fas fa-envelope text-primary me-2" />
                        Example@gmail.com
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end">
                    <div className="d-flex align-items-center justify-content-end">
                        <a
                        href="#"
                        className="btn btn-light btn-sm-square rounded-circle me-3"
                        >
                        <i className="fab fa-facebook-f" />
                        </a>
                        <a
                        href="#"
                        className="btn btn-light btn-sm-square rounded-circle me-3"
                        >
                        <i className="fab fa-twitter" />
                        </a>
                        <a
                        href="#"
                        className="btn btn-light btn-sm-square rounded-circle me-3"
                        >
                        <i className="fab fa-instagram" />
                        </a>
                        <a
                        href="#"
                        className="btn btn-light btn-sm-square rounded-circle me-0"
                        >
                        <i className="fab fa-linkedin-in" />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* <p>{page_data}</p> */}
            {/* Topbar End */}
            </>

            <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
                <div className="container">
                    <div className="navbar navbar-expand-lg navbar-light">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="display-6 text-primary">
                        <i className="fas fa-car-alt me-3" />
                        Cental
                        </h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-auto py-0">
                                { globalData?.page["home"].status && <Link href="./" className={`nav-item nav-link ${globalData?.page["home"].route == currentPath ? "active": ""}`} >
                                    <span >{globalData?.page["home"].name}</span>
                                </Link> }
                                { globalData?.page["about"].status && <Link href="./about" className={`nav-item nav-link ${globalData?.page["about"].route == currentPath ? "active": ""}`} >
                                    <span >{globalData?.page["about"].name}</span>
                                </Link> }
                                <Link href="./service" className={`nav-item nav-link ${globalData?.page["service"].route == currentPath ? "active": ""}`} >
                                    <span >{globalData?.page["service"].name}</span>
                                </Link>
                                <Link href="./blog" className={`nav-item nav-link ${globalData?.page["blog"].route == currentPath ? "active": ""}`} >
                                    <span >{globalData?.page["blog"].name}</span>
                                </Link>

                                <div className="nav-item dropdown">
                                    <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{globalData?.page["pages"].name}</div>
                                    <div className="dropdown-menu m-0">
                                        <Link href="./feature" className="dropdown-item" >
                                            <span>Our Feature</span>
                                        </Link>
                                        <Link href="./cars" className="dropdown-item" >
                                            <span>Our Cars</span>
                                        </Link>
                                        <Link href="./team" className="dropdown-item" >
                                            <span>Our Team</span>
                                        </Link>
                                        <Link href="./testimonial" className="dropdown-item" >
                                            <span>Testimonial</span>
                                        </Link>
                                        <Link href="./404" className="dropdown-item" >
                                            <span>404 Page</span>
                                        </Link>
                                    </div>
                                </div>

                                <Link href="./contact"  className={`nav-item nav-link ${globalData?.page["contact"].route == currentPath ? "active": ""}`}  >
                                    <span>{globalData?.page["contact"].name}</span>
                                </Link>
                            </div>
                            <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}