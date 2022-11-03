import "./App.css";
import Footer from "./Footer/Footer";
import Landing from "./LandingPage/Landing";
import Navbar from "./NavBar/Navbar";

function App() {
    return (
        <body
            className="container-fluid m-0 p-0 d-flex flex-column h-100"
            data-bs-spy="scroll"
            data-bs-target="#navID"
            id="app-container"
        >
            <Navbar />
            <div className="ms-auto main-container h-100">
                <div className="overflow-hidden">
                    <Landing />

                    <Footer />
                </div>
            </div>
        </body>
    );
}

export default App;
