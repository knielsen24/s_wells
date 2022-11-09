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
    const liveKayaURL = "https://livekaya.com/";

    const terraphaseLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953762/Southwells/logos/terraphase_logo_henras.svg";
    const handCraftLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953762/Southwells/logos/HandCraft-Logo-RGB-Black_Social_Media_Art_1_usnf2q.jpg";
    const dorindasLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953761/Southwells/logos/dorindas-logo_hwxwzd.png";
    const theMillBarreLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953763/Southwells/logos/the-mill-barre_rg18nw.png";
    const atelierLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953760/Southwells/logos/atelier-logo_odbgpl.png";
    const entravisionLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953761/Southwells/logos/entravision-logo_xjgq5i.webp";
    const vanmarLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953763/Southwells/logos/vanmar-logo_ujr4w3.webp";
    const walgreensLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953763/Southwells/logos/walgreens-logo_zrburw.png";
    const rideConceptsLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953762/Southwells/logos/ride-concepts-logo_f0behc.png";
    const craigTeamLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668037134/Southwells/logos/craig-team-realty-logo-color_vdnfrs.png";
    const liveKayaLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668035851/Southwells/logos/LK_logo_Extended_BlueOnWhiteOrangeAccent_myfsbm.png";

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
                                    src={theMillBarreLogo}
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
                            <a target="_blank" href={dorindasURL}>
                                <img
                                    className=""
                                    src={dorindasLogo}
                                    alt="dorinda's chocolates logo"
                                    width="165"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" href={liveKayaURL}>
                                <img
                                    className=""
                                    src={liveKayaLogo}
                                    alt="live-kaya"
                                    width="195"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" href={craigTeamURL}>
                                <img
                                    className=""
                                    src={craigTeamLogo}
                                    alt="craig-team-realty-exp"
                                    width="175"
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
                                    src={handCraftLogo}
                                    alt="hand craft coffee logo"
                                    width="125px"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandsContainer;
