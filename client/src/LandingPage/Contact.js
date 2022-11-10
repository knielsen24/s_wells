//  need to create seperate sub-sections for leasing / courtyard contact
import phoneIcon from "../assets/Icons/phone-icon.svg";
import emailIcon from "../assets/Icons/email-icon.svg";

function Contact() {
    const contactClassPtag = " m-1 mx-5";
    const contactColTag = "col my-2";

    const logicLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953762/Southwells/logos/logic-logo_u7tz6o.png";
    const logicURL = "https://logiccre.com/";

    return (
        <div className="col mt-3 flex-lg-column p-1">
            <h4 className="my-3 p-1 bg-light rounded border text-uppercase">
                Contact
            </h4>

            {/* <div className="row justify-content-center">
                <div className="col"> </div>
            </div> */}
            <div className="row py-1 align-items-center">
                <div className={contactColTag}>
                    <div>
                        <a target="_blank" href={logicURL}>
                            <img
                                className="py-2"
                                src={logicLogo}
                                alt="logic-logo"
                                width="100px"
                            />
                        </a>
                    </div>

                    <h5 className="py-1 m-1 text-decoration-underline text-uppercase">
                        leasing information
                    </h5>
                    <p className={contactClassPtag}>Michael Keating</p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1 mb-1"
                            src={phoneIcon}
                            alt="phone-icon"
                        />
                        775-386-9727
                    </p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1"
                            src={emailIcon}
                            alt="email-icon"
                        />
                        mkeating@logicCRE.com
                    </p>
                </div>
            </div>
            <div className={contactColTag}>
                <div>
                    {/* <a target="_blank" href={}>
                        <img
                            className="py-2"
                            src={}
                            alt="logic-logo"
                            width="100px"
                        />
                    </a> */}
                </div>
                <h5 className="py-1 m-1 text-decoration-underline text-uppercase">
                    Venue Information
                </h5>

                <p className={contactClassPtag}>Erick Nielsen</p>
                <p className={contactClassPtag}>
                    <img
                        className="me-1 mb-1"
                        src={phoneIcon}
                        alt="phone-icon"
                    />
                    805-320-3638
                </p>
                <p className={contactClassPtag}>
                    <img className="me-1" src={emailIcon} alt="email-icon" />
                    erick@nielsens.us
                </p>
            </div>
        </div>
    );
}

export default Contact;

{
    /* <div className={contactColTag}>
                    <p className={contactClassPtag}>Greg Ruzzine</p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1 mb-1"
                            src={phoneIcon}
                            alt="phone-icon"
                        />
                        775-450-5779
                    </p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1"
                            src={emailIcon}
                            alt="email-icon"
                        />
                        gruzzine@logicCRE.com
                    </p>
                </div>
                <div className={contactColTag}>
                    <p className={contactClassPtag}>Mike Dorn</p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1 mb-1"
                            src={phoneIcon}
                            alt="phone-icon"
                        />
                        775-453-4436
                    </p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1"
                            src={emailIcon}
                            alt="email-icon"
                        />
                        mdorn@logicCRE.com
                    </p>
                </div> */
}
{
    /* <div className={contactColTag}>
                    <p className={contactClassPtag}>Sam Meredith</p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1 mb-1"
                            src={phoneIcon}
                            alt="phone-icon"
                        />
                        775-737-2939
                    </p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1"
                            src={emailIcon}
                            alt="email-icon"
                        />
                        smeredith@logicCRE.com
                    </p>
                </div> */
}
