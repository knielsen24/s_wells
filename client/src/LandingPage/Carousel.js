function Carousel() {
    const landingOneURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668028243/Southwells/Landing%20%28Carousel%29/sw-main-1-wide_rker0b.jpg";
    const landingTwoURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668028244/Southwells/Landing%20%28Carousel%29/sw-main-2-wide_jw5lpk.jpg";
    const landingThreeURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668028240/Southwells/Landing%20%28Carousel%29/sw-main-3-wide_buumhd.jpg";
    const landingFourURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668028251/Southwells/Landing%20%28Carousel%29/sw-main-4-wide_fgmwke.jpg";
    const landingFiveURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668028245/Southwells/Landing%20%28Carousel%29/sw-main-5-wide_vwufap.jpg";

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
                            src={landingOneURL}
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
                            src={landingTwoURL}
                            className="d-block w-100 carousel-cover"
                            alt="property-street"
                            // loading="lazy"
                        />
                        <div className={captionClassOne}>
                            <h2 className="">Located in the Wells Avenue District near Downtown Reno</h2>
                            <div className="row justify-content-center">
                                <div className="col w-auto">
                                    <a
                                        className="nav-link fw-bold text-white"
                                        href="#for-lease"
                                        role="button"
                                    >
                                        Check for leasing availability
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img
                            src={landingThreeURL}
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
                            src={landingFourURL}
                            className="d-block w-100 "
                            alt="courtyard-1"
                            // loading="lazy"
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
                            src={landingFiveURL}
                            className="d-block w-100 "
                            alt="courtyard-2"
                            // loading="lazy"
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
