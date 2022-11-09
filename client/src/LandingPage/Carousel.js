import landingOne from "../assets/Building/sw-main-1-wide.jpg";
import landingTwo from "../assets/Building/sw-main-2-wide.jpg";
import landingThree from "../assets/Building/sw-main-3-wide.jpg";
import landingFour from "../assets/Building/sw-main-4-wide.jpg";
import landingFive from "../assets/Building/sw-main-5-wide.jpg";
import landingSeven from "../assets/Building/sw-main-wide-7.jpg";

function Carousel() {
    const captionClassOne =
        "carousel-caption p-2 mx-0 d-none d-sm-block rounded text-white";
    const captionClassTwo =
        "carousel-caption p-2 mx-0 d-none d-sm-block rounded text-dark";

    return (
        <div className="col m-1 p-0 carousel-column ">
            <div
                id="carouselExampleInterval"
                className="carousel slide "
                data-bs-ride="carousel"
            >
                <div className="carousel-inner rounded">
                    <div
                        className="carousel-item active"
                        data-bs-interval="5000"
                    >
                        <img
                            src={landingOne}
                            className="d-block w-100 carousel-cover"
                            alt="property-front"
                            loading="lazy"
                        />
                        <div className={captionClassOne}>
                            <h2 className="text-capitalize">
                                300 South Wells Ave.
                            </h2>
                            <h5 className="m-0 text-capitalize">
                                Mixed Use Retro Industrial buidling
                            </h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img
                            src={landingTwo}
                            className="d-block w-100 carousel-cover"
                            alt="property-street"
                            loading="lazy"
                        />
                        <div className={captionClassOne}>
                            <h2 className="text-capitalize">Space available</h2>
                            <h5 className="m-0 text-capitalize">
                                Click here to get more information on
                                availability
                            </h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img
                            src={landingThree}
                            className="d-block w-100 "
                            alt="property-courtyard"
                            loading="lazy"
                        />
                        {/* <div className={captionClassTwo}>
                                    <h2>Communial Space</h2>
                                    <p className="m-0">
                                        The common areas are great for customers and employees
                                    </p>
                                </div> */}
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img
                            src={landingFour}
                            className="d-block w-100 "
                            alt="courtyard-1"
                            loading="lazy"
                        />
                        {/* <div className={captionClassOne}>
                                    <h2>The Courtyard</h2>
                                    <p className="m-0">
                                        The common areas are great for customers and employees
                                    </p>
                                </div> */}
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img
                            src={landingFive}
                            className="d-block w-100 "
                            alt="courtyard-2"
                            loading="lazy"
                        />
                        {/* <div className={captionClassOne}>
                                    <h2>The Courtyard</h2>
                                    <p className="m-0">
                                        The common areas are great for customers and employees
                                    </p>
                                </div> */}
                    </div>
                    {/* <div className="carousel-item" data-bs-interval="5000">
                        <img
                            src={landingSeven}
                            className="d-block w-100 "
                            alt="signage"
                            loading="lazy"
                        />
                    </div> */}
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
    );
}

export default Carousel;
