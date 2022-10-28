import handCraftCoffee from "../assets/handcraft-logo.jpg";
import dorindasLogo from "../assets/dorindas-logo.avif";
import theMillLogo from "../assets/the-mill-barre.png";
import atelierLogo from "../assets/atelier-logo.webp"

function Landing() {
    return (
        <div className="text-center">
            <div className="row mt-3">
                <div className="col-6"></div>
                <div className="col-5 bg-white bg-opacity-50 rounded">
                    <h5 className="mt-2">
                        Some of the finest businesses in Reno.
                    </h5>
                    <div className="row mt-3 align-items-center">
                        <div className="col">
                            <img
                                className="rounded-circle"
                                src={handCraftCoffee}
                                alt="hand craft coffee"
                                width="100px"
                            />
                            {/* <div>Hand Craft Coffee</div> */}
                        </div>
                        <div className="col">
                            <img
                                className="rounded"
                                src={dorindasLogo}
                                alt="dorinda's chocolates"
                                width="175px"
                            />
                            {/* <div>Dorinda's Chocolates</div> */}
                        </div>
                    </div>
                    <div className="row my-3 align-items-center">
                        <div className="col ">
                            <img
                                className=""
                                src={theMillLogo}
                                alt="the mill barre"
                                width="200px"
                            />
                            {/* <div>The Mill Barre + Pilates</div> */}
                        </div>
                        <div className="col ">
                            <img
                                className=""
                                src={atelierLogo}
                                alt="the mill barre"
                                width="200px"
                            />
                            {/* <div>The Mill Barre + Pilates</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
