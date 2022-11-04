import southWellsLogo from "../assets/Logos/3SW-logo-v2.png";

function Footer() {
    return (
        <footer className="mt-auto border-top border-1 bg-light text-dark bg-gradient ">
            <div className="container">
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
            </div>
        </footer>
    );
}

export default Footer;
