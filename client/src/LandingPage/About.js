import bulletPoint from "../assets/Icons/circle-icon.svg"

function About() {
    return (
        <div className="row justify-content-center">
            <h4 className="mt-3 ">About</h4>
            <p>
                The property is strategically located in a dense and mature
                residential area servicing +/- 249,817 residents with an average
                household income of $109,381 within a 5-mile radius. For more info 
            </p>
            <div className="col ">
                <p></p>
                <h5 className="">Property Highlights</h5>
                <p>
                    {/* <img classname="m-3" src={bulletPoint} width="10px" /> */}
                    Recently redeveloped multi-tenant mixed-use building Close
                </p>
                <p>
                    Close proximity to Renown Regional Medical Center and
                    downtown Reno
                </p>
                <p>Zoned for retail, office, and medical use</p>
                <p>Common area outdoor patio with attractive amenities</p>
                <p>
                    Easy access to I-80 via S. Wells Ave. or I-580 via Mill St
                </p>
            </div>
            {/* <div className="col-6"></div> */}
        </div>
    );
}

export default About;
