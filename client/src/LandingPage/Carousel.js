import landingOne from "../assets/Building/sw-main-1-wide.jpg";
import landingTwo from "../assets/Building/sw-main-2-wide.jpg";
import landingThree from "../assets/Building/sw-main-3-wide.jpg";
import landingFour from "../assets/Building/sw-main-4-wide.jpg";
import CarouselButtons from "./CarouselButtons";

function Carousel() {

    const captionClassOne = "carousel-caption p-2 mx-0 d-none d-sm-block rounded text-white"
    const captionClassTwo = "carousel-caption p-2 mx-0 d-none d-sm-block rounded text-dark"

    return (
        <div className="container-fluid m-auto p-0 justify-content-center ">
            <div className="row m-auto p-0 ">
                <div className="col m-0 p-0 carousel-column ">
                    <div
                        id="carouselExampleInterval"
                        className="carousel slide "
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div
                                className="carousel-item active"
                                data-bs-interval="5000"
                            >
                                <img
                                    src={landingOne}
                                    className="d-block w-100 carousel-cover"
                                    alt="property-front"
                                />
                                <div className={captionClassOne}>
                                    <h2>300 South Wells Ave.</h2>
                                    <h5 className="m-0">
                                        Mixed Use Retro Industrial buidling
                                    </h5>
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
                                <div className={captionClassOne}>
                                    <h2>Lease a space</h2>
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
                                {/* <div className={captionClassTwo}>
                                    <h2>Communial Space</h2>
                                    <p className="m-0">
                                        The common areas are great for customers and employees
                                    </p>
                                </div> */}
                            </div>
                            <div
                                className="carousel-item"
                                data-bs-interval="5000"
                            >
                                <img
                                    src={landingFour}
                                    className="d-block w-100 "
                                    alt="property-courtyard"
                                />
                                {/* <div className={captionClassOne}>
                                    <h2>The Courtyard</h2>
                                    <p className="m-0">
                                        The common areas are great for customers and employees
                                    </p>
                                </div> */}
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
