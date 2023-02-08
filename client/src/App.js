import "./App.css";
import Footer from "./Footer/Footer";
import Landing from "./LandingPage/Landing";
import Navbar from "./NavBar/Navbar";

function App() {
    return (
        <body
            className="container-fluid p-0 "
            data-bs-spy="scroll"
            data-bs-target="#navID"
            data-offset="100"
            id="app-container"
        >
            <div className="container-md row mx-auto justify-content-center">
                <Navbar />
            </div>
            <Landing />
            <Footer />
        </body>
    );
}

export default App;
