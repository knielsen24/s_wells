import landingOne from "../assets/Building/sw-main-1-wide.png";
import landingTwo from "../assets/Building/sw-main-2-wide.png";
import landingThree from "../assets/Building/sw-main-3-wide.png";

function Carousel() {
    return (
        <div className="row m-auto p-0 justify-content-center h-">
            <div className="col m-0 p-0 carousel-column">
                <div
                    id="carouselExampleInterval"
                    className="carousel slide "
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div
                            className="carousel-item active"
                            data-bs-interval="10000"
                        >
                            <img
                                src={landingOne}
                                className="d-block w-100 carousel-cover"
                                alt="property-front"
                            />
                            <div className="carousel-caption p-2 d-none d-md-block bg-light bg-opacity-50 rounded text-dark">
                                <h5>Welcome to 300 South Wells</h5>
                                <p className="m-0">
                                    Some representative placeholder content for
                                    the first slide.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src={landingTwo}
                                className="d-block w-100 carousel-cover"
                                alt="property-street"
                            />
                            <div className="carousel-caption p-2 d-none d-md-block bg-light bg-opacity-50 rounded text-dark">
                                <h5>Lease a space</h5>
                                <p className="m-0">
                                    Click here to get more information on availibility
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src={landingThree}
                                className="d-block w-100 "
                                alt="property-courtyard"
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev ms-5"
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
                        className="carousel-control-next me-5"
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
    );
}

export default Carousel;
