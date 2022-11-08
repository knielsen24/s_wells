import theMillLogo from "../assets/Logos/the-mill-barre.png";
import atelierLogo from "../assets/Logos/atelier-logo.png";
import terraphaseLogo from "../assets/Logos/terraphase_logo.svg";
import entravisionLogo from "../assets/Logos/entravision-logo.webp";
import handCraftCoffee from "../assets/Logos/handcraft-logo.jpg";
import dorindasLogo from "../assets/Logos/dorindas-logo.avif";
import vanmarLogo from "../assets/Logos/vanmar-logo.webp";
import walgreensLogo from "../assets/Logos/walgreens-logo.png";
import rideConceptsLogo from "../assets/Logos/ride-concepts-logo.png";
import craigTeamLogo from "../assets/Logos/craig-team-realty-logo.png";

function BrandsContainer() {
    const handCraftURL = "https://www.handcraftcoffeecompany.com/";
    const dorindasURL = "https://dorindaschocolates.com/";
    const theMillBarreURL = "https://themillpilates.com/";
    const atelierURL = "https://www.atelierbeautybar.com/";
    const terraphaseURL = "https://terraphase.com/";
    const entravisionURL = "https://entravision.com/";
    const vanmarLendingURL = "https://www.vanmarlending.com/";
    const walgreensURL = "https://www.walgreens.com/";
    const rideConceptsURL = "https://rideconcepts.com/";
    const craigTeamURL = "https://www.craigteamrealty.com/";

    const brandsColClass = "col mx-5 my-3";

    return (
        <div className="col mt-3">
            <h4 className="my-3 p-1 bg-light rounded border text-uppercase">
                Partners
            </h4>
            <div className="row justify-content-center">
                {/* <div className="col-3"></div> */}
                <div className="col">
                    <div className="row mb-2 align-items-center">
                        <div className={brandsColClass}>
                            <a target="_blank" href={theMillBarreURL}>
                                <img
                                    className=""
                                    src={theMillLogo}
                                    alt="the mill barre logo"
                                    width="190"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" href={terraphaseURL}>
                                <img
                                    className=""
                                    src={terraphaseLogo}
                                    alt="atelier logo"
                                    width="190"
                                />
                            </a>
                        </div>

                        <div className={brandsColClass}>
                            <a target="_blank" href={entravisionURL}>
                                <img
                                    className=""
                                    src={entravisionLogo}
                                    alt="entravision tv"
                                    width="190"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" href={vanmarLendingURL}>
                                <img
                                    className=""
                                    src={vanmarLogo}
                                    alt="vanmar-lending"
                                    width="190"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" href={walgreensURL}>
                                <img
                                    className=""
                                    src={walgreensLogo}
                                    alt="walgreens"
                                    width="190"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" href={rideConceptsURL}>
                                <img
                                    className=""
                                    src={rideConceptsLogo}
                                    alt="ride-concepts"
                                    width="190"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" href={craigTeamURL}>
                                <img
                                    className="bg-dark"
                                    src={craigTeamLogo}
                                    alt="craig-team-realty-exp"
                                    width="190"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" href={dorindasURL}>
                                <img
                                    className=""
                                    src={dorindasLogo}
                                    alt="dorinda's chocolates logo"
                                    width="190"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" href={atelierURL}>
                                <img
                                    className=""
                                    src={atelierLogo}
                                    alt="atelier logo"
                                    width="225"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                        <a target="_blank" href={handCraftURL}>

                            <img
                                className="rounded-circle"
                                src={handCraftCoffee}
                                alt="hand craft coffee logo"
                                width="125px"
                            /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandsContainer;
