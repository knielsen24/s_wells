import southWellsLogo from "../assets/Logos/3SW-logo-rectangle.png";

function Footer() {
    return (
        <div className="footer d-flex mt-auto align-items-center border-top border-1 bg-light text-dark bg-gradient ">
            <div className="container text-center py-2">
                <div className="row justify-content-between">
                    <div className="col align-self-center mx-3 my-3">
                        <img
                            src={southWellsLogo}
                            alt="3sw-logo"
                            width="150"
                            id="logo-name"
                        />
                        {/* <a className="" href="/"></a> */}
                    </div>
                    {/* <div className="col mx-3 my-3">Login</div> */}
                    <div className="col mx-3 my-3">Designed & built by Kevin Nielsen</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
