import propertyImage from "../assets/1C-website-cover-v2.jpg";

function Carousel() {
    return (
        <div className="row m-auto p-0 justify-content-center">
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
                                src={propertyImage}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src={propertyImage}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={propertyImage}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
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
                        className="carousel-control-next"
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
