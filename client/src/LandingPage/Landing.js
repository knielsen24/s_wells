import handCraftCoffee from "../assets/handcraft-logo.jpg";
import dorindasLogo from "../assets/dorindas-logo.avif";
import theMillLogo from "../assets/the-mill-barre.png";
import atelierLogo from "../assets/atelier-logo.webp";
import terraphaseLogo from "../assets/terraphase_logo.svg"

function Landing() {
    return (
        <div className="text-center">
            <div className="row mt-2 justify-content-center">
                <div className="col-3"></div>
                <div className="col-7 bg-white bg-opacity-50 rounded">
                    {/* <h5 className="my-2">
                        Some of the finest businesses in Reno.
                    </h5> */}
                    <div className="row mt-2 align-items-center">
                        <div className="col">
                            <img
                                className="rounded-circle"
                                src={handCraftCoffee}
                                alt="hand craft coffee logo"
                                height="100px"
                            />
                            {/* <div>Hand Craft Coffee</div> */}
                        </div>
                        <div className="col">
                            <img
                                className=""
                                src={dorindasLogo}
                                alt="dorinda's chocolates logo"
                                height="100px"
                            />
                            {/* <div>Dorinda's Chocolates</div> */}
                        </div>
                    </div>
                    <div className="row my-2 align-items-center">
                        <div className="col ">
                            <img
                                className=""
                                src={theMillLogo}
                                alt="the mill barre logo"
                                width="200px"
                            />
                            {/* <div>The Mill Barre + Pilates</div> */}
                        </div>
                        <div className="col ">
                            <img
                                className=""
                                src={atelierLogo}
                                alt="atelier logo"
                                width="200px"
                            />
                            {/* <div>The Mill Barre + Pilates</div> */}
                        </div>
                        <div className="col ">
                            <img
                                className=""
                                src={terraphaseLogo}
                                alt="atelier logo"
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
