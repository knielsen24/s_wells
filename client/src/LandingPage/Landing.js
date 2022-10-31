import propertyImage from "../assets/1C-website-cover-v2.jpg"
import BrandsContainer from "./BrandsContainer";

function Landing() {
    return (
        <div className="text-center h-75">
            <div className="">
                <img className="rounded"
                src={propertyImage}></img>
            </div>
            <BrandsContainer />
        </div>
    );
}

export default Landing;
