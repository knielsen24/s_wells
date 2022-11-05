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
                    <h5>Suite 6 - 2,498 SF</h5>
                </div>
                <div className="col">
                    <h5>Suite 9 - 3,950 SF</h5>
                </div>
            </div>
        </div>
    );
}

export default ForLease;
