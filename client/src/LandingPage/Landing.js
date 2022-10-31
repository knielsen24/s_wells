import propertyImage from "../assets/1C-website-cover-v2.jpg"
import BrandsContainer from "./BrandsContainer";
import Carousel from "./Carousel";

function Landing() {
    return (
        <div className="container text-center mt-4">
            <div className="row w-auto align-items-center">
                <Carousel />
                {/* <img className="img-fluid rounded"
                src={propertyImage} /> */}
            </div>
            <BrandsContainer />
        </div>
    );
}

export default Landing;
