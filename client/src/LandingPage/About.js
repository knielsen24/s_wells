import bulletPoint from "../assets/Icons/circle-icon.svg";

function About() {
    const creListingLink =
        "https://looplink.logiccre.com/Listing/300-328-S-Wells-Ave-Reno-NV/20673499/";
    const googleMaps = "https://goo.gl/maps/UgPqfKpSQzDPGErZA";

    const pTagClass = "mb-3";

    return (
        <div className="col mt-2 justify-content-center p-1">
            <h4 className="my-3 p-1 bg-light rounded border text-uppercase ">
                About
            </h4>
            <p className="mt-2">
                The property is strategically located in a dense and mature
                residential area servicing +/- 249,817 residents with an average
                household income of $109,381 within a 5-mile radius.
            </p>
            <div className="col mt-2">
                <h5 className="text-decoration-underline">
                    Property Highlights
                </h5>
                <p className={pTagClass}>
                    {/* <img classname="m-3" src={bulletPoint} width="10px" /> */}
                    Recently redeveloped multi-tenant mixed-use building
                </p>
                <p className={pTagClass}>
                    Close proximity to Renown Regional Medical Center and
                    Downtown Reno
                </p>
                <p className={pTagClass}>
                    Zoned for retail, office, and medical use
                </p>
                <p className={pTagClass}>
                    Common area outdoor courtyard with attractive amenities
                </p>
                <p className={pTagClass}>
                    Easy access to I-80 via S. Wells Ave. or I-580 via Mill St
                </p>

                {/* <div className="row mb-3 justify-content-center">
                    <div className="col">
                        <a
                            className="btn btn-outline-primary btn-sm text-decoration-none shadow-sm"
                            target="_blank"
                            href={googleMaps}
                        >
                            View on Google Maps
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default About;
