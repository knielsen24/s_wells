import About from "./About";
import BrandsContainer from "./BrandsContainer";
import Carousel from "./Carousel";
import Contact from "./Contact";
import ForLease from "./ForLease";

function Landing() {
    return (
        <div className="col text-center ">
            <div className=" row p-0 w-auto justify-content-center">
                <Carousel />
            </div>
            <div
                className=" row p-0 w-auto justify-content-center"
                id="about"
            >
                <About />
            </div>
            <div
                className=" row p-0 w-auto justify-content-center"
                id="lease"
            >
                <ForLease />
            </div>
            <div
                className=" row p-0 w-auto justify-content-center"
                id="partners"
            >
                <BrandsContainer />
            </div>
            <div
                className=" row p-0 w-auto justify-content-center"
                id="contact"
            >
                <Contact />
            </div>
        </div>
    );
}

export default Landing;
