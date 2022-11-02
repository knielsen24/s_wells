import propertyImage from "../assets/1C-website-cover-v2.jpg"
import BrandsContainer from "./BrandsContainer";
import Carousel from "./Carousel";

function Landing() {
    return (
        <div className="container-fluid text-center">
            <div className="row w-auto ">
                <Carousel />
                {/* <img className="img-fluid rounded"
                src={propertyImage} /> */}
            </div>
            <BrandsContainer />
        </div>
    );
}

export default Landing;
