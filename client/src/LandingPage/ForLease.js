import React from "react";

function ForLease() {
    const pTagClass = "mb-3";

    return (
        <div className="col mt-2 justify-content-center">
            <h4 className="my-3 p-1 bg-light rounded border text-uppercase">
                For Lease
            </h4>
            <div className="row">
                <div className="col">
                    <p className="">Suite 9 - 3,950 SF</p>
                </div>
            </div>
            {/* <div className="row mt-3">
                <div className="col">
                    <a type="button" className="btn-primary" href="#contact">
                        Go to Contact information
                    </a>
                </div>
            </div> */}
        </div>
    );
}

export default ForLease;
