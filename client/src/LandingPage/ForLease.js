import downloadBlueIcon from "../assets/Icons/download-icon-blue.svg";
import downloadWhiteIcon from "../assets/Icons/download-icon-white.svg";
import { useState } from "react";

function ForLease() {
    const [iconColor, setIconColor] = useState(false);

    const pdfFlyerLink =
        "https://images1.loopnet.com/d2/jx7RyrfQIloED0qpF6nH3hHgAf1hA2gMHXuA9N_Ss7M/300%20S%20Wells%20ave%20Flyer.pdf?_gl=1*63o2qt*_ga*NDc2Mjk1NDc4LjE2Njc1MDI3MjA.*_ga_2DVXTE8M0Q*MTY2OTc2NzQzNi4xMS4xLjE2Njk3Njc0OTcuNTkuMC4w";
    const pTagClass = "mb-3";

    return (
        <div className="col mt-2 justify-content-center p-1">
            {/* <h4 className="my-3 p-1 bg-light rounded border text-uppercase">
                For Lease
            </h4> */}
            <h5 className="text-decoration-underline">Leasing availability</h5>
            <div className="row">
                <div className="col">
                    <p className="">
                        Checkout the flyer for more information
                    </p>
                </div>
            </div>
            <div className="row mb-3 justify-content-center">
                <div className="col">
                    <a
                        className="btn btn-primary btn-sm text-decoration-none text-uppercase shadow-sm"
                        target="_blank"
                        href={pdfFlyerLink}
                        // onMouseEnter={() => setIconColor(true)}
                        // onMouseLeave={() => setIconColor(false)}
                    >
                        <img
                            className="me-2 mb-1 text-primary"
                            src={downloadWhiteIcon}
                            width="15"
                        />
                        Download Flyer
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ForLease;
