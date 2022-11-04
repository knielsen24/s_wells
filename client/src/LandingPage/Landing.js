import propertyImage from "../assets/1C-website-cover-v2.jpg";
import About from "./About";
import BrandsContainer from "./BrandsContainer";
import Carousel from "./Carousel";
import Contact from "./Contact";

function Landing() {
    return (
        <div className="container-fluid text-center " >
            <div className="row w-auto justify-content-center" >
                <Carousel />
                {/* <img className="img-fluid rounded"
                src={propertyImage} /> */}
                <div className="container bg-secondary"></div>
            </div>
            <div className="row w-auto justify-content-center" id="about">
                <About />
            </div>
            <div className="row w-auto justify-content-center" id="partners">
                <BrandsContainer />
            </div>
            <div className="row w-auto justify-content-center" id="contact">
                <Contact />
            </div>
        </div>
    );
}

export default Landing;
