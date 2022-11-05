import About from "./About";
import BrandsContainer from "./BrandsContainer";
import Carousel from "./Carousel";
import Contact from "./Contact";

function Landing() {
    return (
        <div className="container-fluid text-center ">
            <div className="container-sm row m-auto w-auto justify-content-center">
                <Carousel />
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
