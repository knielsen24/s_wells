function Carousel() {
    const landingOneURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668028243/Southwells/Landing%20%28Carousel%29/sw-main-1-wide_rker0b.jpg";
    const landingTwoURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668028244/Southwells/Landing%20%28Carousel%29/sw-main-2-wide_jw5lpk.jpg";
    const landingFourURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668028240/Southwells/Landing%20%28Carousel%29/sw-main-3-wide_buumhd.jpg";
    const landingThreeURL =
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
                        />
                        <div className={captionClassOne}>
                            <h2 className="text-capitalize">
                                300 South Wells Ave.
                            </h2>
                            <h5 className="m-0 text-capitalize">
                                Mixed Use Retro Industrial building
                            </h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img
                            src={landingTwoURL}
                            className="d-block w-100 carousel-cover"
                            alt="property-street"
                        />
                        <div className={captionClassOne}>
                            <h2 className="">
                                Located in the Wells Avenue District
                            </h2>
                            <div className="row justify-content-center">
                                <div className="col-1"></div>
                                <div className="col-10 w-auto">
                                    <a
                                        className="text-decoration-none"
                                        href="#for-lease"
                                        role="button"
                                    >
                                        <h5 className="banner-link fw-bold text-white">Checkout leasing availability</h5>
                                    </a>
                                </div>
                                <div className="col-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img
                            src={landingThreeURL}
                            className="d-block w-100 "
                            alt="property-courtyard"
                        />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img
                            src={landingFourURL}
                            className="d-block w-100 "
                            alt="courtyard-1"
                        />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img
                            src={landingFiveURL}
                            className="d-block w-100 "
                            alt="courtyard-2"
                        />
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
    );
}

export default Carousel;
