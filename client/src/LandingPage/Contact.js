import logicLogo from "../assets/Logos/logic-logo.png";

function Contact() {
    const contactClassPtag = "m-1 mx-5";
    const contactColTag = "col my-2";
    const logicURL = "https://logiccre.com/";

    return (
        <div className="col flex-lg-column">
            <h4 className="my-3 p-1 bg-light rounded border text-uppercase">Contact</h4>
            <div>
                <a target="_blank" href={logicURL}>
                    <img
                        className="py-2"
                        src={logicLogo}
                        alt="logic-logo"
                        width="125px"
                    />
                </a>
            </div>

            <p className="py-1 m-1">
                For more information regarding leasing a space, please contact a
                commerial real estate representative
            </p>
            {/* <div className="row justify-content-center">
                <div className="col"> </div>
            </div> */}
            <div className="row py-1 align-items-center">
                <div className={contactColTag}>
                    <p className={contactClassPtag}>Michael Keating</p>
                    <p className={contactClassPtag}>775-386-9727</p>
                    <p className={contactClassPtag}>mkeating@logicCRE.com</p>
                </div>
                <div className={contactColTag}>
                    <p className={contactClassPtag}>Greg Ruzzine</p>
                    <p className={contactClassPtag}>775-450-5779</p>
                    <p className={contactClassPtag}>gruzzine@logicCRE.com</p>
                </div>
                <div className={contactColTag}>
                    <p className={contactClassPtag}>Mike Dorn</p>
                    <p className={contactClassPtag}>775-453-4436</p>
                    <p className={contactClassPtag}>mdorn@logicCRE.com</p>
                </div>
                <div className={contactColTag}>
                    <p className={contactClassPtag}>Sam Meredith</p>
                    <p className={contactClassPtag}>775-737-2939</p>
                    <p className={contactClassPtag}>smeredith@logicCRE.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;