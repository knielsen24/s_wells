import southWellsLogo from "../assets/Logos/3SW-logo.png";

function Footer() {
    return (
        <footer className="mt-auto container border-top border-1 footer-bg text-dark bg-gradient ">
            <div className="row align-items-center justify-content-between ">
                <div className="col ">
                    300 South Wells
                    <a className="" href="/">
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
        </footer>
    );
}

export default Footer;
