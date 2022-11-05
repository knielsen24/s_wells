import theMillLogo from "../assets/Logos/the-mill-barre.png";
import atelierLogo from "../assets/Logos/atelier-logo.webp";
import terraphaseLogo from "../assets/Logos/terraphase_logo.svg";
import entravisionLogo from "../assets/Logos/entravision-logo.webp";
import handCraftCoffee from "../assets/Logos/handcraft-logo.jpg";
import dorindasLogo from "../assets/Logos/dorindas-logo.avif";
import vanmarLogo from "../assets/Logos/vanmar-logo.webp"
import walgreensLogo from "../assets/Logos/walgreens-logo.png"
import rideConceptsLogo from "../assets/Logos/ride-concepts-logo.png"
import craigTeamLogo from "../assets/Logos/craig-team-realty-logo.png"

function BrandsContainer() {

    const brandsColClass = "col mx-5 my-3"

    return (
        <div className="col mt-3">
            <h4 className="my-3 p-1 bg-light rounded border text-uppercase">Partners</h4>
            <div className="row justify-content-center">
                {/* <div className="col-3"></div> */}
                <div className="col">
                    <div className="row mb-2 align-items-center">
                        <div className={brandsColClass}>
                            <img
                                className=""
                                src={theMillLogo}
                                alt="the mill barre logo"
                                width="190"
                            />
                        </div>
                        <div className={brandsColClass}>
                            <img
                                className=""
                                src={terraphaseLogo}
                                alt="atelier logo"
                                width="190"
                            />
                        </div>

                        <div className={brandsColClass}>
                            <img
                                className=""
                                src={entravisionLogo}
                                alt="entravision tv"
                                width="190"
                            />
                        </div>
                        <div className={brandsColClass}>
                            <img
                                className=""
                                src={vanmarLogo}
                                alt="vanmar-lending"
                                width="190"
                            />
                        </div>
                        <div className={brandsColClass}>
                            <img
                                className=""
                                src={walgreensLogo}
                                alt="walgreens"
                                width="190"
                            />
                        </div>
                        <div className={brandsColClass}>
                            <img
                                className=""
                                src={rideConceptsLogo}
                                alt="ride-concepts"
                                width="190"
                            />
                        </div>
                        <div className={brandsColClass}>
                            <img
                                className="bg-dark"
                                src={craigTeamLogo}
                                alt="craig-team-realty-exp"
                                width="190"
                            />
                        </div>
                        <div className={brandsColClass}>
                            <img
                                className=""
                                src={dorindasLogo}
                                alt="dorinda's chocolates logo"
                                width="190"
                            />
                        </div>
                        <div className={brandsColClass}>
                            <img
                                className=""
                                src={atelierLogo}
                                alt="atelier logo"
                                width="190"
                            />
                        </div>
                        <div className="col mx-4">
                            <img
                                className="rounded-circle"
                                src={handCraftCoffee}
                                alt="hand craft coffee logo"
                                width="125px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandsContainer;
