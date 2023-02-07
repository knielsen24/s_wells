import southWellsLogo from "../assets/Logos/3SW-logo-rectangle.png";
import knLogo from "../assets/Logos/Logo KN purple.png";

function Footer() {
    return (
        <div className="footer d-flex mt-auto align-items-center border-top border-1 bg-light text-dark bg-gradient ">
            <div className="container text-center py-2">
                <div className="row gap-4 align-items-center justify-content-between">
                    <div className="col pb-1 mx-3 my-auto">
                        <img
                            src={southWellsLogo}
                            alt="3sw-logo"
                            width="150"
                            id="logo-name"
                        />
                        {/* <a className="" href="/"></a> */}
                    </div>
                    {/* <div className="col mx-3 my-3">Login</div> */}
                    <div className="col mx-3 my-auto ">
                        <div className="row justify-content-center">
                            <div className="col align-self-center text-end p-1">
                                {" "}
                                Designed & built by{" "}
                            </div>
                            <div className="col align-self-center text-start p-1">
                                {" "}
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
            </div>
        </div>
    );
}

export default Footer;
