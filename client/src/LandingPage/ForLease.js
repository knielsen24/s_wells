import downloadBlueIcon from "../assets/Icons/download-icon-blue.svg";
import downloadWhiteIcon from "../assets/Icons/download-icon-white.svg";
import { useState } from "react";

function ForLease() {
    const [iconColor, setIconColor] = useState(false);

    const pdfFlyerLink =
        "https://images1.loopnet.com/d2/rVJ3S-qEKfzX3K8ibdCWqPrDShOdU5D2IssAYGpIyGc/300%20S%20Wells%20Ave%20Flyer.pdf?_gl=1*19uiq4b*_ga*NDc2Mjk1NDc4LjE2Njc1MDI3MjA.*_ga_2DVXTE8M0Q*MTY2NzU5MzAwMy41LjEuMTY2NzU5MzI3Ny4xNC4wLjA.";
    const pTagClass = "mb-3";

    return (
        <div className="col mt-2 justify-content-center p-1">
            <h4 className="my-3 p-1 bg-light rounded border text-uppercase">
                For Lease
            </h4>
            <div className="row">
                <div className="col">
                    <p className="">Suite 9 - 3,950 SF</p>
                </div>
            </div>
            <div className="row mb-3 justify-content-center">
                <div className="col">
                    <a
                        className="btn btn-outline-primary btn-sm text-decoration-none shadow-sm"
                        target="_blank"
                        href={pdfFlyerLink}
                        onMouseEnter={() => setIconColor(true)}
                        onMouseLeave={() => setIconColor(false)}
                    >
                        <img
                            className="me-1 mb-1 text-primary"
                            src={
                                iconColor ? downloadWhiteIcon : downloadBlueIcon
                            }
                            width="15"
                        />
                        300 South Wells Ave Flyer
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ForLease;
