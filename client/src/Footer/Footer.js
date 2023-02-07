import southWellsLogo from "../assets/Logos/3SW-logo-rectangle.png";
import knLogo from "../assets/Logos/Logo KN purple.png";

function Footer() {
    return (
        <div className="footer d-flex mt-auto align-items-center border-top border-1 bg-light text-dark bg-gradient ">
            <div className="container py-2">
                <div className="row gap-4 text-center justify-content-between">
                    <div className="col mx-3 my-auto">
                        <img
                            src={southWellsLogo}
                            alt="3sw-logo"
                            width="150"
                            id="logo-name"
                        />
                        {/* <a className="" href="/"></a> */}
                    </div>
                    {/* <div className="col mx-3 my-3">Login</div> */}
                    <div className="col d-flex mx-2 my-auto ">
                        <p className="text-center align-self-center my-auto px-2">
                            Designed & built by{" "}

                        </p>
                        <img
                                className="rounded-2 p-1 knLogo"
                                src={knLogo}
                                alt="Kevin Nielsen Logo"
                                width="35"
                                // id="logo-name"
                            ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
