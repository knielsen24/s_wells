import React from "react";

function Footer() {
    return (
        <div>
            {/* not sure if fixed bottom is the best solution */}
            <footer className="mt-auto border-top border-1 footer-bg text-white bg-gradient fixed-bottom">
                <div className="container text-center">
                    <div className="row justify-content-between">
                        <div className="col">Logo</div>
                        <div className="col">Login</div>
                        <div className="col">Contact Us</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
