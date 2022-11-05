import React from "react";

function ForLease() {
    const pTagClass = "mb-3";

    return (
        <div className="col mt-2 justify-content-center">
            <h4 className="my-3 p-1 bg-light rounded border text-uppercase">
                For Lease
            </h4>
            <p className="mt-2">
                The property is strategically located in a dense and mature
                residential area servicing +/- 249,817 residents with an average
                household income of $109,381 within a 5-mile radius. For more
                info
            </p>
            <div className="col mt-2">
                <h5 className="text-decoration-underline">Available Spaces</h5>

                {/* <div className="row mb-3 justify-content-center">
                    <div className="col">
                        <a target="_blank" href={pdfFlyerLink}>
                            300 South Wells Ave Flyer

                        </a>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">
                    <div className="col">
                        <a target="_blank" href={creListingLink}>
                            Logic CRE Listing Page
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default ForLease;
