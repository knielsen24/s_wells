import logicLogo from "../assets/Logos/logic-logo.png";

function Contact() {

    const contactClassPtag = "m-1 mx-5"
    const contactColTag = "col my-2"

    return (
        <div className="col flex-lg-column">
            <h4 className="my-3 text-decoration-underline ">Contact</h4>

            <img className="py-2" src={logicLogo} alt="logic-logo" width="150px" />
            <p className="py-1 m-1">For more information please contact a Logic Commerial Real Estate representative</p>
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
                <div className={contactColTag} >
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
