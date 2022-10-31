import theMillLogo from "../assets/the-mill-barre.png";
import atelierLogo from "../assets/atelier-logo.webp";
import terraphaseLogo from "../assets/terraphase_logo.svg";
import entravisionLogo from "../assets/entravision-logo.webp";
import handCraftCoffee from "../assets/handcraft-logo.jpg";
import dorindasLogo from "../assets/dorindas-logo.avif";

function BrandsContainer() {
    return (
        <div>
            <div className="row mt-4 justify-content-center">
                {/* <div className="col-3"></div> */}
                <div className="col-10 bg-white bg-opacity-50 rounded">
                    <div className="row my-2 align-items-center">
                        <div className="col">
                            <img
                                className="rounded-circle"
                                src={handCraftCoffee}
                                alt="hand craft coffee logo"
                                width="125px"
                            />
                        </div>
                        <div className="col">
                            <img
                                className=""
                                src={dorindasLogo}
                                alt="dorinda's chocolates logo"
                                width="200px"
                            />
                        </div>
                        <div className="col ">
                            <img
                                className=""
                                src={atelierLogo}
                                alt="atelier logo"
                                width="200px"
                            />
                        </div>
                    </div>
                    <div className="row my-2 align-items-center">
                        <div className="col h-100">
                            <img
                                className=""
                                src={theMillLogo}
                                alt="the mill barre logo"
                                width="200px"
                            />
                        </div>
                        <div className="col ">
                            <img
                                className=""
                                src={terraphaseLogo}
                                alt="atelier logo"
                                width="200px"
                            />
                        </div>

                        <div className="col ">
                            <img
                                className=""
                                src={entravisionLogo}
                                alt="entravision tv"
                                width="200px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandsContainer;
