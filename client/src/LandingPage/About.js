import bulletPoint from "../assets/Icons/circle-icon.svg";
import downloadIcon from "../assets/Icons/download-icon.svg";

function About() {
    const pdfFlyerLink =
        "https://images1.loopnet.com/d2/rVJ3S-qEKfzX3K8ibdCWqPrDShOdU5D2IssAYGpIyGc/300%20S%20Wells%20Ave%20Flyer.pdf?_gl=1*19uiq4b*_ga*NDc2Mjk1NDc4LjE2Njc1MDI3MjA.*_ga_2DVXTE8M0Q*MTY2NzU5MzAwMy41LjEuMTY2NzU5MzI3Ny4xNC4wLjA.";
    const creListingLink =
        "https://looplink.logiccre.com/Listing/300-328-S-Wells-Ave-Reno-NV/20673499/";

    const pTagClass = "mb-3";

    return (
        <div className="col mt-2 justify-content-center">
            <h4 className="my-3 p-1 bg-light rounded border text-uppercase ">
                About
            </h4>
            <p className="mt-2">
                The property is strategically located in a dense and mature
                residential area servicing +/- 249,817 residents with an average
                household income of $109,381 within a 5-mile radius. For more
                info
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
                    downtown Reno
                </p>
                <p className={pTagClass}>
                    Zoned for retail, office, and medical use
                </p>
                <p className={pTagClass}>
                    Common area outdoor patio with attractive amenities
                </p>
                <p className={pTagClass}>
                    Easy access to I-80 via S. Wells Ave. or I-580 via Mill St
                </p>
                <div className="row mb-3 justify-content-center">
                    <div className="col">
                        <a target="_blank" href={pdfFlyerLink}>
                            300 South Wells Ave Flyer
                            {/* <img src={downloadIcon} /> */}
                        </a>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">
                    <div className="col">
                        <a target="_blank" href={creListingLink}>
                            Logic CRE Listing Page
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
