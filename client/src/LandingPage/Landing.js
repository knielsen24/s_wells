import propertyImage from "../assets/1C-website-cover-v2.jpg"
import BrandsContainer from "./BrandsContainer";

function Landing() {
    return (
        <div className="container text-center ">
            <div className="w-auto">
                <img className="img-fluid rounded"
                src={propertyImage}></img>
            </div>
            <BrandsContainer />
        </div>
    );
}

export default Landing;
