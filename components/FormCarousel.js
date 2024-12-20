import { Carousel } from 'react-bootstrap';

export default function FormCarousel() {
    return (
        <>
            <>
                {/* Carousel Start */}
                <div className="header-carousel" id="header-carousel">
                    <Carousel  controls={false} interval={null}>
                        <Carousel.Item>
                            <img className="d-block w-100" src="/carousel-2.jpg" alt="First slide" />
                            <div className="carousel-caption">
                                <div className="container py-4">
                                    <div className="row g-5">
                                        {/* Form Start */}
                                        <div
                                            className="col-lg-6 fadeInLeft animated"
                                            data-animation="fadeInLeft"
                                            data-delay="1s"
                                            style={{ animationDelay: "1s" }}
                                        >
                                            <div className="bg-secondary rounded p-5">
                                                <h4 className="text-white mb-4">
                                                    CONTINUE CAR RESERVATION
                                                </h4>
                                                <form>
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                            >
                                                                <option selected="">Select Your Car type</option>
                                                                <option value={1}>VW Golf VII</option>
                                                                <option value={2}>Audi A1 S-Line</option>
                                                                <option value={3}>Toyota Camry</option>
                                                                <option value={4}>BMW 320 ModernLine</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                    <span className="fas fa-map-marker-alt" />{" "}
                                                                    <span className="ms-1">Pick Up</span>
                                                                </div>
                                                                <input
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="Enter a City or Airport"
                                                                    aria-label="Enter a City or Airport"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <a
                                                                href="#"
                                                                className="text-start text-white d-block mb-2"
                                                            >
                                                                Need a different drop-off location?
                                                            </a>
                                                            <div className="input-group">
                                                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                    <span className="fas fa-map-marker-alt" />
                                                                    <span className="ms-1">Drop off</span>
                                                                </div>
                                                                <input
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="Enter a City or Airport"
                                                                    aria-label="Enter a City or Airport"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                    <span className="fas fa-calendar-alt" />
                                                                    <span className="ms-1">Pick Up</span>
                                                                </div>
                                                                <input className="form-control" type="date" />
                                                                <select
                                                                    className="form-select ms-3"
                                                                    aria-label="Default select example"
                                                                >
                                                                    <option selected="">12:00AM</option>
                                                                    <option value={1}>1:00AM</option>
                                                                    <option value={2}>2:00AM</option>
                                                                    <option value={3}>3:00AM</option>
                                                                    <option value={4}>4:00AM</option>
                                                                    <option value={5}>5:00AM</option>
                                                                    <option value={6}>6:00AM</option>
                                                                    <option value={7}>7:00AM</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                    <span className="fas fa-calendar-alt" />
                                                                    <span className="ms-1">Drop off</span>
                                                                </div>
                                                                <input className="form-control" type="date" />
                                                                <select
                                                                    className="form-select ms-3"
                                                                    aria-label="Default select example"
                                                                >
                                                                    <option selected="">12:00AM</option>
                                                                    <option value={1}>1:00AM</option>
                                                                    <option value={2}>2:00AM</option>
                                                                    <option value={3}>3:00AM</option>
                                                                    <option value={4}>4:00AM</option>
                                                                    <option value={5}>5:00AM</option>
                                                                    <option value={6}>6:00AM</option>
                                                                    <option value={7}>7:00AM</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <button className="btn btn-light w-100 py-2">
                                                                Book Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* Caption Start */}
                                        <div
                                            className="col-lg-6 d-none d-lg-flex fadeInRight animated"
                                            data-animation="fadeInRight"
                                            data-delay="1s"
                                            style={{ animationDelay: "1s" }}
                                        >
                                            <div className="text-start">
                                                <h1 className="display-5 text-white">
                                                    Get 15% off your rental Plan your trip now
                                                </h1>
                                                <p>Treat yourself in USA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="/carousel-1.jpg"
                                className="img-fluid w-100"
                                alt="First slide"
                            />
                            <div className="carousel-caption">
                                <div className="container py-4">
                                    <div className="row g-5">
                                        <div
                                            className="col-lg-6 fadeInLeft animated"
                                            data-animation="fadeInLeft"
                                            data-delay="1s"
                                            style={{ animationDelay: "1s" }}
                                        >
                                            <div className="bg-secondary rounded p-5">
                                                <h4 className="text-white mb-4">
                                                    CONTINUE CAR RESERVATION
                                                </h4>
                                                <form>
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                            >
                                                                <option selected="">Select Your Car type</option>
                                                                <option value={1}>VW Golf VII</option>
                                                                <option value={2}>Audi A1 S-Line</option>
                                                                <option value={3}>Toyota Camry</option>
                                                                <option value={4}>BMW 320 ModernLine</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                    <span className="fas fa-map-marker-alt" />
                                                                    <span className="ms-1">Pick Up</span>
                                                                </div>
                                                                <input
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="Enter a City or Airport"
                                                                    aria-label="Enter a City or Airport"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <a
                                                                href="#"
                                                                className="text-start text-white d-block mb-2"
                                                            >
                                                                Need a different drop-off location?
                                                            </a>
                                                            <div className="input-group">
                                                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                    <span className="fas fa-map-marker-alt" />
                                                                    <span className="ms-1">Drop off</span>
                                                                </div>
                                                                <input
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="Enter a City or Airport"
                                                                    aria-label="Enter a City or Airport"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                    <span className="fas fa-calendar-alt" />
                                                                    <span className="ms-1">Pick Up</span>
                                                                </div>
                                                                <input className="form-control" type="date" />
                                                                <select
                                                                    className="form-select ms-3"
                                                                    aria-label="Default select example"
                                                                >
                                                                    <option selected="">12:00AM</option>
                                                                    <option value={1}>1:00AM</option>
                                                                    <option value={2}>2:00AM</option>
                                                                    <option value={3}>3:00AM</option>
                                                                    <option value={4}>4:00AM</option>
                                                                    <option value={5}>5:00AM</option>
                                                                    <option value={6}>6:00AM</option>
                                                                    <option value={7}>7:00AM</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                    <span className="fas fa-calendar-alt" />
                                                                    <span className="ms-1">Drop off</span>
                                                                </div>
                                                                <input className="form-control" type="date" />
                                                                <select
                                                                    className="form-select ms-3"
                                                                    aria-label="Default select example"
                                                                >
                                                                    <option selected="">12:00AM</option>
                                                                    <option value={1}>1:00AM</option>
                                                                    <option value={2}>2:00AM</option>
                                                                    <option value={3}>3:00AM</option>
                                                                    <option value={4}>4:00AM</option>
                                                                    <option value={5}>5:00AM</option>
                                                                    <option value={6}>6:00AM</option>
                                                                    <option value={7}>7:00AM</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <button className="btn btn-light w-100 py-2">
                                                                Book Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div
                                            className="col-lg-6 d-none d-lg-flex fadeInRight animated"
                                            data-animation="fadeInRight"
                                            data-delay="1s"
                                            style={{ animationDelay: "1s" }}
                                        >
                                            <div className="text-start">
                                                <h1 className="display-5 text-white">
                                                    Get 15% off your rental! Choose Your Model{" "}
                                                </h1>
                                                <p>Treat yourself in USA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                    </Carousel.Item>
                    </Carousel>
                </div>
                {/* Carousel End */}
            </>

        </>
    )
}
