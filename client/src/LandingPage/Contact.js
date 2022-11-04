import logicLogo from "../assets/Logos/logic-logo.png";

function Contact() {
    return (
        <div className="col flex-lg-column">
            <h4 className="my-3 text-decoration-underline ">Contact</h4>
            <p>Logic Commerial Real Estate</p>
            <img className="" src={logicLogo} alt="logic-logo" width="150px" />
            {/* <div className="row justify-content-center">
                <div className="col"> </div>
            </div> */}
            <div className="row align-items-center">
                <div className="col border">
                    <p>Michael Keating</p>
                    <p>775-386-9727</p>
                    <p>mkeating@logicCRE.com</p>
                </div>
                <div className="col border">
                    <p>Greg Ruzzine</p>
                    <p>775-450-5779</p>
                    <p>gruzzine@logicCRE.com</p>
                </div>
                <div className="col border" >
                    <p>Mike Dorn</p>
                    <p>775-453-4436</p>
                    <p>mdorn@logicCRE.com</p>
                </div>
                <div className="col border">
                    <p>Sam Meredith</p>
                    <p>775-737-2939</p>
                    <p>smeredith@logicCRE.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
