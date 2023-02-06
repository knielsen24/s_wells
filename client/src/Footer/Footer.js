import southWellsLogo from "../assets/Logos/3SW-logo-rectangle.png";

function Footer() {
    return (
        <footer className="mt-auto border-top border-1 bg-light text-dark bg-gradient ">
            <div className="container mt-auto py-2 footer-container">
                <div className="row align-items-center justify-content-between ">
                    <div className="col ">
                        <img
                            src={southWellsLogo}
                            alt="3sw-logo"
                            width="150"
                            id="logo-name"
                        />
                        {/* <a className="" href="/"></a> */}
                    </div>
                    <div className="col">{/* Login */}</div>
                    <div className="col">{/* Login */}</div>
                    <div className="col">Designed & built by Kevin Nielsen</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
