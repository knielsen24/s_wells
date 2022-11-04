import landingOne from "../assets/Building/sw-main-1-wide.jpg";
import landingTwo from "../assets/Building/sw-main-2-wide.jpg";
import landingThree from "../assets/Building/sw-main-3-wide.jpg";
import CarouselButtons from "./CarouselButtons";

function Carousel() {

    const captionClass = "carousel-caption float-start p-2 bg-light bg-opacity-75 d-none d-sm-block rounded text-dark"

    return (
        <div className="container-fluid m-auto p-0 justify-content-center ">
            <div className="row m-auto p-0 ">
                <div className="col m-0 p-0 carousel-column">
                    <div
                        id="carouselExampleInterval"
                        className="carousel slide "
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div
                                className="carousel-item active"
                                data-bs-interval="8000"
                            >
                                <img
                                    src={landingOne}
                                    className="d-block w-100 carousel-cover"
                                    alt="property-front"
                                />
                                <div className={captionClass}>
                                    <h5>Welcome to 300 South Wells</h5>
                                    <p className="m-0">
                                        Some representative placeholder content
                                        for the first slide.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="carousel-item"
                                data-bs-interval="5000"
                            >
                                <img
                                    src={landingTwo}
                                    className="d-block w-100 carousel-cover"
                                    alt="property-street"
                                />
                                <div className={captionClass}>
                                    <h5>Lease a space</h5>
                                    <p className="m-0">
                                        Click here to get more information on
                                        availibility
                                    </p>
                                </div>
                            </div>
                            <div
                                className="carousel-item"
                                data-bs-interval="5000"
                            >
                                <img
                                    src={landingThree}
                                    className="d-block w-100 "
                                    alt="property-courtyard"
                                />
                                <div className={captionClass}>
                                    <h5>Communial Space</h5>
                                    <p className="m-0">
                                        The common areas are great for customers and employees
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev ms-3"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next me-3"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="row m-auto p-0 mt-3 .d-block .d-sm-none">
                <CarouselButtons />
            </div> */}
        </div>
    );
}

export default Carousel;
