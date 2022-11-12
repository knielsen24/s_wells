import "./App.css";
import Footer from "./Footer/Footer";
import Landing from "./LandingPage/Landing";
import Navbar from "./NavBar/Navbar";

function App() {
    return (
        <body
            className="container-fluid m-0 p-0 d-flex flex-column"
            data-bs-spy="scroll"
            data-bs-target="#navID"
            id="app-container"
        >
            <Navbar />
            <div className="container-md main-container row m-auto mt-2 p-0 justify-content-center">
                <Landing />
            </div>
            <Footer />
        </body>
    );
}

export default App;
