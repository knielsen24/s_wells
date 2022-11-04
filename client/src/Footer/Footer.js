import southWellsLogo from "../assets/Logos/3SW-logo.png";

function Footer() {
    return (
        <footer className="mt-auto border-top border-1 footer-bg text-white bg-gradient ">
            <div className="container text-center">
                <div className="row align-items-center justify-content-between ">
                    <div className="col ">
                        <a className="" href="/">300 South Wells
                            {/* <img
                                src={southWellsLogo}
                                alt="3sw-logo"
                                width="100"
                                id="logo-name"
                            /> */}
                        </a>
                    </div>
                    <div className="col">{/* Login */}</div>
                    <div className="col">{/* Contact Us*/}</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
