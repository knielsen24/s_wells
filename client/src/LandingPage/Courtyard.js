function Courtyard() {
    const courtyardOne =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668067047/Southwells/courtyard/sw-courtyard-1_lburt2.jpg";

    const pTagClass = "mb-3";

    return (
        <div className="col mt-2 justify-content-center">
            <h4 className="my-3 p-1 bg-light rounded border text-uppercase">
                Courtyard Venue
            </h4>
            <div className="row">
                <div className="col p-1">
                    <div className="card ">
                        <img
                            src={courtyardOne}
                            className="card-img-top"
                            alt="courtyard"
                        />
                        <div className="card-body ">
                            {/* <h5 className="card-title">
                                An intimate event venue perfect for your party
                            </h5> */}
                            <p className="card-text">
                                An intimate event venue perfect for your party
                            </p>
                            {/* <a href="#" className="btn btn-outline-primary">
                                More information
                            </a> */}
                        </div>
                    </div>
                    <p className=""></p>
                </div>
            </div>
            {/* <div className="row mt-3">
                <div className="col">
                    <a type="button" className="btn-primary" href="#contact">
                        Go to Contact information
                    </a>
                </div>
            </div> */}
        </div>
    );
}

export default Courtyard;
